window.Trainer = window.Trainer || {};
window.Trainer.createShadowingMode = function ({
  SHADOWING_MAX_LISTEN_MS,
  SHADOWING_SILENCE_MS,
  SHADOWING_SUCCESS_PAUSE_MS,
  activity,
  asNumber,
  cancelPendingActivity,
  flashCorrect,
  hideSessionComplete,
  playCorrectSound,
  playWrongSound,
  refs,
  saveProgress,
  setFeedback,
  setQuestionTranslation,
  setSelectedSentenceForSpeech,
  shadowingState,
  showSessionComplete,
  speakEnglishText,
  stopSpeech,
  vocabTopics,
  getCurrentMode
}) {
  const { SHADOWING_TOPICS, SHADOWING_TRANSLATIONS } = window.TrainerData;

  function shadowingItemsForTopic(topicValue) {
    const topic = SHADOWING_TOPICS.find((candidate) => candidate.id === topicValue) || SHADOWING_TOPICS[0];
    if (!topic) return [];
    return topic.groups.flatMap((group, groupIndex) =>
      group.items.map((text, itemIndex) => ({
        id: `${topic.id}:${groupIndex}:${itemIndex}`,
        topicId: topic.id,
        topicTitle: topic.title,
        groupTitle: group.title,
        text,
      }))
    );
  }

  function shadowingTopicIcon(topic) {
    if (!topic) return '🎙️';
    if (topic.id === 'architecture-system-design') return '🏗️';
    if (topic.id === 'code-review-phrases') return '🔍';
    if (topic.id === 'work-discussions') return '💬';
    return '🎙️';
  }

  function formatShadowingPhraseCount(count) {
    const value = Math.max(0, Number(count) || 0);
    const lastTwo = value % 100;
    const last = value % 10;
    const label = lastTwo >= 11 && lastTwo <= 14
      ? 'фраз'
      : (last === 1 ? 'фраза' : (last >= 2 && last <= 4 ? 'фразы' : 'фраз'));
    return `${value} ${label}`;
  }

  function syncShadowingTopicTrigger() {
    const topic = SHADOWING_TOPICS.find((candidate) => candidate.id === refs.shadowingTopic.value) || SHADOWING_TOPICS[0];
    if (!topic) return;
    refs.shadowingTopicTriggerIcon.textContent = shadowingTopicIcon(topic);
    refs.shadowingTopicTriggerText.textContent = topic.title;
    refs.shadowingTopicTrigger.title = topic.title;
  }

  function renderShadowingTopicCards() {
    const selectedValue = refs.shadowingTopic.value;
    refs.shadowingTopicGrid.innerHTML = '';

    SHADOWING_TOPICS.forEach((topic) => {
      const cardButton = document.createElement('button');
      const isSelected = topic.id === selectedValue;
      const phraseCount = topic.groups.reduce((total, group) => total + group.items.length, 0);
      cardButton.type = 'button';
      cardButton.className = `vocab-topic-card${isSelected ? ' vocab-topic-card--selected' : ''}`;
      cardButton.dataset.topicValue = topic.id;
      cardButton.setAttribute('role', 'option');
      cardButton.setAttribute('aria-selected', String(isSelected));

      const icon = document.createElement('span');
      icon.className = 'vocab-topic-card-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = shadowingTopicIcon(topic);

      const copy = document.createElement('span');
      copy.className = 'vocab-topic-card-copy';

      const title = document.createElement('strong');
      title.textContent = topic.title;

      const count = document.createElement('span');
      count.textContent = formatShadowingPhraseCount(phraseCount);

      const check = document.createElement('span');
      check.className = 'vocab-topic-card-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';

      copy.appendChild(title);
      copy.appendChild(count);
      cardButton.appendChild(icon);
      cardButton.appendChild(copy);
      cardButton.appendChild(check);

      cardButton.addEventListener('click', () => {
        if (refs.shadowingTopic.value !== topic.id) {
          refs.shadowingTopic.value = topic.id;
          refs.shadowingTopic.dispatchEvent(new Event('change', { bubbles: true }));
        }
        hideShadowingTopicPicker();
      });

      refs.shadowingTopicGrid.appendChild(cardButton);
    });
  }

  function showShadowingTopicPicker() {
    ensureShadowingTopicOptions();
    renderShadowingTopicCards();
    const phraseCount = SHADOWING_TOPICS.reduce(
      (total, topic) => total + topic.groups.reduce((sum, group) => sum + group.items.length, 0),
      0
    );
    refs.shadowingTopicModalSubtitle.textContent = `${SHADOWING_TOPICS.length} темы · ${formatShadowingPhraseCount(phraseCount)}`;
    refs.shadowingTopicOverlay.hidden = false;
    refs.shadowingTopicTrigger.setAttribute('aria-expanded', 'true');
    const selectedCard = refs.shadowingTopicGrid.querySelector('.vocab-topic-card--selected');
    (selectedCard || refs.shadowingTopicClose).focus();
  }

  function hideShadowingTopicPicker() {
    refs.shadowingTopicOverlay.hidden = true;
    refs.shadowingTopicTrigger.setAttribute('aria-expanded', 'false');
    refs.shadowingTopicTrigger.focus();
  }

  function ensureShadowingTopicOptions() {
    if (refs.shadowingTopic.options.length === 0) {
      SHADOWING_TOPICS.forEach((topic) => {
        const opt = document.createElement('option');
        opt.value = topic.id;
        opt.textContent = topic.title;
        refs.shadowingTopic.appendChild(opt);
      });
    }
    syncShadowingTopicTrigger();
  }

  function pickShadowingSession() {
    return shadowingItemsForTopic(refs.shadowingTopic.value);
  }

  function restoreShadowingProgress(saved) {
    ensureShadowingTopicOptions();
    if (!saved || typeof saved !== 'object') return false;
    const topicValue = String(saved.topic || '');
    if (Array.from(refs.shadowingTopic.options).some((opt) => opt.value === topicValue)) {
      refs.shadowingTopic.value = topicValue;
    }
    syncShadowingTopicTrigger();
    const rate = String(saved.rate || '0.9');
    refs.shadowingRate.value = Array.from(refs.shadowingRate.options).some((opt) => opt.value === rate) ? rate : '0.9';
    const repetitions = String(saved.repetitions || '1');
    refs.shadowingRepetitions.value = Array.from(refs.shadowingRepetitions.options).some((opt) => opt.value === repetitions) ? repetitions : '1';
    shadowingState.session = pickShadowingSession();
    shadowingState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, shadowingState.session.length - 1)));
    shadowingState.correct = Math.max(0, asNumber(saved.correct, 0));
    shadowingState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    shadowingState.successfulRepetitions = Math.max(0, Math.min(asNumber(saved.successfulRepetitions, 0), currentShadowingRepetitions() - 1));
    return Boolean(shadowingState.session.length);
  }

  function currentShadowingItem() {
    return shadowingState.session[shadowingState.idx] || null;
  }

  function currentShadowingRepetitions() {
    return Math.max(1, Math.min(3, asNumber(refs.shadowingRepetitions.value, 1)));
  }

  function stopShadowingAttempt() {
    shadowingState.attemptToken += 1;
    const wasRecognizing = shadowingState.recognitionActive;
    shadowingState.recognitionActive = false;
    activity.cancel('shadowing-retry');
    clearShadowingRecognitionTimers();
    refs.shadowingMic.classList.remove('shadowing-mic--active');
    if (wasRecognizing && shadowingState.recognition) {
      try { shadowingState.recognition.abort(); } catch (_) {}
    }
  }

  function clearShadowingRecognitionTimers() {
    activity.cancel('shadowing-silence');
    activity.cancel('shadowing-max');
  }

  function updateShadowingRepetition() {
    const item = currentShadowingItem();
    const repetitions = currentShadowingRepetitions();
    if (!item || repetitions <= 1) {
      refs.shadowingRepetition.textContent = '';
      return;
    }
    const nextRepetition = Math.min(repetitions, shadowingState.successfulRepetitions + 1);
    refs.shadowingRepetition.textContent = `Серия: повтор ${nextRepetition} из ${repetitions}`;
  }

  function showShadowingTranslation(item) {
    const vocabularyItem = vocabTopics
      .flatMap((topic) => topic.words || [])
      .find((word) => word.example === item.text);
    refs.shadowingInlineTranslation.textContent = SHADOWING_TRANSLATIONS[item.text]
      || (vocabularyItem && vocabularyItem.sentenceTranslation)
      || 'Перевод не найден.';
  }

  function renderShadowing() {
    hideSessionComplete();
    cancelPendingActivity();
    stopShadowingAttempt();
    const item = currentShadowingItem();
    if (!item) {
      refs.questionText.textContent = 'Фразы не найдены.';
      setQuestionTranslation('');
      return;
    }
    refs.position.textContent = `${shadowingState.idx + 1} / ${shadowingState.session.length}`;
    refs.correctCount.textContent = String(shadowingState.correct);
    refs.wrongCount.textContent = String(shadowingState.wrong);
    refs.questionText.textContent = item.text;
    showShadowingTranslation(item);
    setSelectedSentenceForSpeech(item.text);
    refs.shadowingStatus.textContent = 'Нажмите кнопку, послушайте фразу и повторите её.';
    refs.shadowingTranscript.textContent = '';
    refs.shadowingStart.disabled = false;
    refs.shadowingStart.textContent = 'Старт';
    setFeedback('', null);
    shadowingState.wrongCounted = false;
    shadowingState.checkedCurrent = false;
    updateShadowingRepetition();
  }

  function scheduleShadowingRetry(delay, token) {
    activity.schedule('shadowing-retry', () => {
      if (token === shadowingState.attemptToken && getCurrentMode() === 'shadowing') {
        runShadowingAttempt(true);
      }
    }, delay);
  }

  function scheduleShadowingNext(token) {
    activity.schedule('shadowing-retry', () => {
      if (token === shadowingState.attemptToken && getCurrentMode() === 'shadowing') {
        nextShadowingQuestion();
      }
    }, SHADOWING_SUCCESS_PAUSE_MS);
  }

  function scheduleCurrentShadowingAttempt() {
    const expectedIdx = shadowingState.idx;
    activity.schedule('shadowing-retry', () => {
      if (getCurrentMode() === 'shadowing' && expectedIdx === shadowingState.idx) {
        runShadowingAttempt();
      }
    }, 100);
  }

  function createSpeechRecognition() {
    if (shadowingState.recognition) return shadowingState.recognition;
    const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!Recognition) return null;
    const recognition = new Recognition();
    recognition.lang = 'en-US';
    recognition.interimResults = true;
    recognition.continuous = true;
    recognition.maxAlternatives = 3;
    shadowingState.recognition = recognition;
    return recognition;
  }

  function transcriptWordTokens(text) {
    const normalized = expandTranscriptContractions(String(text || "").replace(/\bsev one\b/gi, "sev1"));
    return (normalized.match(/[A-Za-zА-Яа-я0-9']+/g) || [])
      .map((word) => ({ text: word, norm: normalizeTranscriptWord(word) }))
      .filter((word) => word.norm);
  }

  function expandTranscriptContractions(text) {
    return String(text || "")
      .replace(/\bI'm\b/gi, "I am")
      .replace(/\byou're\b/gi, "you are")
      .replace(/\bhe's\b/gi, "he is")
      .replace(/\bshe's\b/gi, "she is")
      .replace(/\bit's\b/gi, "it is")
      .replace(/\bwe're\b/gi, "we are")
      .replace(/\bthey're\b/gi, "they are")
      .replace(/\bI'll\b/gi, "I will")
      .replace(/\byou'll\b/gi, "you will")
      .replace(/\bhe'll\b/gi, "he will")
      .replace(/\bshe'll\b/gi, "she will")
      .replace(/\bit'll\b/gi, "it will")
      .replace(/\bwe'll\b/gi, "we will")
      .replace(/\bthey'll\b/gi, "they will")
      .replace(/\bI'd\b/gi, "I would")
      .replace(/\bI've\b/gi, "I have")
      .replace(/\byou've\b/gi, "you have")
      .replace(/\bwe've\b/gi, "we have")
      .replace(/\bthey've\b/gi, "they have")
      .replace(/\blet's\b/gi, "let us")
      .replace(/\bdon't\b/gi, "do not")
      .replace(/\bdoesn't\b/gi, "does not")
      .replace(/\bdidn't\b/gi, "did not")
      .replace(/\bcan't\b/gi, "can not")
      .replace(/\bwon't\b/gi, "will not")
      .replace(/\bhaven't\b/gi, "have not")
      .replace(/\bhasn't\b/gi, "has not")
      .replace(/\bhadn't\b/gi, "had not")
      .replace(/\bisn't\b/gi, "is not")
      .replace(/\baren't\b/gi, "are not")
      .replace(/\bwasn't\b/gi, "was not")
      .replace(/\bweren't\b/gi, "were not")
      .replace(/\bshouldn't\b/gi, "should not")
      .replace(/\bcouldn't\b/gi, "could not")
      .replace(/\bwouldn't\b/gi, "would not");
  }

  function normalizeTranscriptWord(word) {
    const latinLookalikes = {
      а: "a",
      е: "e",
      о: "o",
      р: "p",
      с: "c",
      х: "x",
      у: "y",
      к: "k",
      А: "a",
      Е: "e",
      О: "o",
      Р: "p",
      С: "c",
      Х: "x",
      У: "y",
      К: "k",
    };

    return String(word || "")
      .replace(/[аеорсхукАЕОРСХУК]/g, (char) => latinLookalikes[char] || char)
      .toLowerCase()
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/[^a-z0-9']+/g, "")
      .trim();
  }

  function compareTranscript(userText, targetText) {
    const userWords = transcriptWordTokens(userText);
    const targetWords = transcriptWordTokens(targetText);
    const rows = targetWords.length + 1;
    const cols = userWords.length + 1;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

    for (let i = 0; i < rows; i += 1) dp[i][0] = i;
    for (let j = 0; j < cols; j += 1) dp[0][j] = j;

    for (let i = 1; i < rows; i += 1) {
      for (let j = 1; j < cols; j += 1) {
        const cost = targetWords[i - 1].norm === userWords[j - 1].norm ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }

    const targetMarks = [];
    let i = targetWords.length;
    let j = userWords.length;

    while (i > 0 || j > 0) {
      if (
        i > 0 &&
        j > 0 &&
        dp[i][j] === dp[i - 1][j - 1] + (targetWords[i - 1].norm === userWords[j - 1].norm ? 0 : 1)
      ) {
        targetMarks.unshift({
          word: targetWords[i - 1].text,
          ok: targetWords[i - 1].norm === userWords[j - 1].norm,
          heard: userWords[j - 1].text,
        });
        i -= 1;
        j -= 1;
      } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
        targetMarks.unshift({ word: targetWords[i - 1].text, ok: false, heard: "" });
        i -= 1;
      } else {
        j -= 1;
      }
    }

    const matched = targetMarks.filter((mark) => mark.ok).length;
    const accuracy = targetWords.length ? matched / targetWords.length : 0;
    return { matched, total: targetWords.length, accuracy, targetMarks };
  }

  function evaluateShadowingTranscript(transcript, token) {
    if (token !== shadowingState.attemptToken) return;
    const item = currentShadowingItem();
    if (!item) return;
    const result = compareTranscript(transcript, item.text);
    const pct = Math.round(result.accuracy * 100);
    const passed = result.accuracy >= 0.78;
    const repetitions = currentShadowingRepetitions();
    refs.shadowingTranscript.textContent = `Приложение услышало: “${transcript}”`;

    if (passed) {
      shadowingState.successfulRepetitions += 1;
      playCorrectSound();
      flashCorrect();
      if (shadowingState.successfulRepetitions < repetitions) {
        refs.shadowingStatus.textContent = `Отлично, ${pct}%. Повторите эту фразу ещё раз.`;
        updateShadowingRepetition();
        scheduleShadowingRetry(SHADOWING_SUCCESS_PAUSE_MS, token);
      } else {
        if (!shadowingState.checkedCurrent) {
          shadowingState.correct += 1;
          shadowingState.checkedCurrent = true;
          refs.correctCount.textContent = String(shadowingState.correct);
        }
        refs.shadowingStatus.textContent = `Отлично, произношение распознано на ${pct}%.`;
        refs.shadowingRepetition.textContent = repetitions > 1 ? `Серия из ${repetitions} повторов завершена` : '';
        refs.shadowingStart.textContent = 'Старт';
        refs.shadowingStart.disabled = true;
        scheduleShadowingNext(token);
      }
    } else {
      if (!shadowingState.wrongCounted) {
        shadowingState.wrong += 1;
        shadowingState.wrongCounted = true;
        refs.wrongCount.textContent = String(shadowingState.wrong);
      }
      playWrongSound();
      refs.shadowingStatus.textContent = `Пока не совсем (${pct}%). Попробуйте ещё раз — фраза сейчас повторится.`;
      scheduleShadowingRetry(1100, token);
    }
    saveProgress();
  }

  function startShadowingRecognition(token) {
    const recognition = createSpeechRecognition();
    if (!recognition) {
      refs.shadowingStatus.textContent = 'Распознавание речи недоступно в этом браузере. Откройте приложение в Chrome или Edge.';
      refs.shadowingStart.disabled = false;
      refs.shadowingStart.textContent = 'Старт';
      return;
    }
    let finalTranscript = '';
    let latestTranscript = '';
    recognition.onstart = () => {
      if (token !== shadowingState.attemptToken) return;
      shadowingState.recognitionActive = true;
      refs.shadowingMic.classList.add('shadowing-mic--active');
      refs.shadowingStatus.textContent = 'Говорите… Я дождусь паузы после фразы.';
      refs.shadowingTranscript.textContent = '';
      clearShadowingRecognitionTimers();
      activity.schedule('shadowing-max', () => {
        if (token !== shadowingState.attemptToken || !shadowingState.recognitionActive) return;
        try { recognition.stop(); } catch (_) {}
      }, SHADOWING_MAX_LISTEN_MS);
    };
    recognition.onresult = (event) => {
      if (token !== shadowingState.attemptToken) return;
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const text = event.results[i][0].transcript.trim();
        if (event.results[i].isFinal) finalTranscript += `${finalTranscript ? ' ' : ''}${text}`;
        else interim += `${interim ? ' ' : ''}${text}`;
      }
      latestTranscript = [finalTranscript, interim].filter(Boolean).join(' ');
      refs.shadowingTranscript.textContent = latestTranscript;
      activity.schedule('shadowing-silence', () => {
        if (token !== shadowingState.attemptToken || !shadowingState.recognitionActive) return;
        try { recognition.stop(); } catch (_) {}
      }, SHADOWING_SILENCE_MS);
    };
    recognition.onerror = (event) => {
      if (token !== shadowingState.attemptToken) return;
      shadowingState.recognitionActive = false;
      clearShadowingRecognitionTimers();
      refs.shadowingMic.classList.remove('shadowing-mic--active');
      refs.shadowingStart.disabled = false;
      refs.shadowingStart.textContent = 'Старт';
      if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        refs.shadowingStatus.textContent = 'Нужен доступ к микрофону. Разрешите его в настройках браузера и попробуйте снова.';
      } else if (event.error === 'no-speech') {
        refs.shadowingStatus.textContent = 'Не удалось расслышать. Нажмите кнопку и попробуйте ещё раз.';
      } else {
        refs.shadowingStatus.textContent = 'Не удалось распознать речь. Попробуйте ещё раз.';
      }
    };
    recognition.onend = () => {
      if (token !== shadowingState.attemptToken) return;
      shadowingState.recognitionActive = false;
      clearShadowingRecognitionTimers();
      refs.shadowingMic.classList.remove('shadowing-mic--active');
      refs.shadowingStart.disabled = false;
      refs.shadowingStart.textContent = 'Старт';
      const transcript = finalTranscript.trim() || latestTranscript.trim();
      if (transcript) evaluateShadowingTranscript(transcript, token);
    };
    try {
      shadowingState.recognitionActive = true;
      recognition.start();
    } catch (_) {
      shadowingState.recognitionActive = false;
      clearShadowingRecognitionTimers();
      refs.shadowingStart.disabled = false;
      refs.shadowingStatus.textContent = 'Микрофон уже включается. Секунду…';
    }
  }

  function runShadowingAttempt(autoRetry = false) {
    const item = currentShadowingItem();
    if (!item) return;
    if (window.location.protocol === 'file:') {
      refs.shadowingStatus.textContent = 'Chrome не сохраняет доступ к микрофону для локального файла. Закройте эту вкладку и запустите приложение через start.command.';
      refs.shadowingStart.disabled = false;
      refs.shadowingStart.textContent = 'Старт';
      return;
    }
    stopShadowingAttempt();
    stopSpeech();
    const token = shadowingState.attemptToken;
    refs.shadowingStart.disabled = true;
    refs.shadowingStart.textContent = 'Старт';
    refs.shadowingStatus.textContent = autoRetry ? 'Слушайте ещё раз…' : 'Сначала послушайте фразу…';
    const started = speakEnglishText(item.text, {
      rate: refs.shadowingRate.value,
      onComplete: () => {
        if (token !== shadowingState.attemptToken) return;
        refs.shadowingStart.textContent = 'Старт';
        startShadowingRecognition(token);
      },
    });
    if (!started) {
      refs.shadowingStart.disabled = false;
      refs.shadowingStart.textContent = 'Старт';
      refs.shadowingStatus.textContent = 'Озвучка недоступна в этом браузере.';
    }
  }

  function stopShadowingSession() {
    stopShadowingAttempt();
    cancelPendingActivity();
    stopSpeech();
    refs.shadowingMic.classList.remove('shadowing-mic--active');
    refs.shadowingStart.disabled = false;
    refs.shadowingStart.textContent = 'Старт';
    refs.shadowingStatus.textContent = 'Остановлено. Нажмите «Старт», когда будете готовы.';
  }

  function nextShadowingQuestion() {
    stopShadowingAttempt();
    cancelPendingActivity();
    shadowingState.idx += 1;
    shadowingState.successfulRepetitions = 0;
    shadowingState.checkedCurrent = false;
    if (shadowingState.idx >= shadowingState.session.length) {
      shadowingState.idx = shadowingState.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }
    renderShadowing();
    scheduleCurrentShadowingAttempt();
    saveProgress();
  }

  function previousShadowingQuestion() {
    if (shadowingState.idx <= 0) return;
    stopShadowingAttempt();
    cancelPendingActivity();
    shadowingState.idx -= 1;
    shadowingState.successfulRepetitions = 0;
    shadowingState.checkedCurrent = false;
    renderShadowing();
    saveProgress();
  }

  return {
    ensureShadowingTopicOptions,
    hideShadowingTopicPicker,
    nextShadowingQuestion,
    pickShadowingSession,
    previousShadowingQuestion,
    renderShadowing,
    restoreShadowingProgress,
    runShadowingAttempt,
    showShadowingTopicPicker,
    stopShadowingAttempt,
    stopShadowingSession,
    syncShadowingTopicTrigger
  };
};
