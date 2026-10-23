window.Trainer = window.Trainer || {};
window.Trainer.createShadowingMode = function ({
  SHADOWING_MAX_LISTEN_MS,
  SHADOWING_SILENCE_MS,
  SHADOWING_SUCCESS_PAUSE_MS,
  activity,
  allLevels,
  asNumber,
  cancelPendingActivity,
  fillPromptWithAnswer,
  flashCorrect,
  getSentenceTranslation,
  hideSessionComplete,
  playCorrectSound,
  playWrongSound,
  refs,
  saveProgress,
  sessionScoring,
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
  const { SHADOWING_TOPICS, SHADOWING_TRANSLATIONS, GRAMMAR_TOPICS, GRAMMAR_TOPIC_GROUPS, QUESTION_TRANSLATION_OVERRIDES } = window.TrainerData;
  // Reuse grammar ranges, answers and stable question IDs without copying its database.
  const grammarLevel = 'A1-A2';
  const ranges = GRAMMAR_TOPICS[grammarLevel] || [];
  const lastTopicIndex = ranges.findIndex((topic) => topic.id === 'future-simple');
  const grammarTopics = ranges.slice(0, lastTopicIndex + 1).map((topic) => ({
    id: `grammar:${grammarLevel}:${topic.id}`,
    title: topic.title,
    grammar: true,
    group: GRAMMAR_TOPIC_GROUPS.find((group) => group.pattern.test(`${topic.id} ${topic.title}`)),
    items: (allLevels[grammarLevel] || [])
      .filter((question) => question.id >= topic.from && question.id <= topic.to)
      .slice().sort((a, b) => a.id - b.id)
      .map((question) => ({
        id: `grammar:${grammarLevel}:${question.id}`,
        topicId: `grammar:${grammarLevel}:${topic.id}`,
        topicTitle: topic.title,
        groupTitle: topic.title,
        text: fillPromptWithAnswer(question.prompt, question.answer),
        translation: QUESTION_TRANSLATION_OVERRIDES[`${grammarLevel}:${question.id}`] || question.translation || '',
      })),
  })).filter((topic) => topic.items.length);
  const shadowingTopics = [...SHADOWING_TOPICS, ...grammarTopics];
  let pickerCategory = 'it';
  let translationRequestId = 0;

  function phraseCountForTopic(topic) {
    return topic.items ? topic.items.length : topic.groups.reduce((total, group) => total + group.items.length, 0);
  }

  function shadowingItemsForTopic(topicValue) {
    const topic = shadowingTopics.find((candidate) => candidate.id === topicValue) || shadowingTopics[0];
    if (!topic) return [];
    if (topic.items) return topic.items.slice();
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
    if (topic.grammar) return topic.group ? topic.group.icon : '📚';
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
    const topic = shadowingTopics.find((candidate) => candidate.id === refs.shadowingTopic.value) || shadowingTopics[0];
    if (!topic) return;
    refs.shadowingTopicTriggerIcon.textContent = shadowingTopicIcon(topic);
    refs.shadowingTopicTriggerText.textContent = topic.title;
    refs.shadowingTopicTrigger.title = topic.grammar ? `Из грамматики · ${grammarLevel} → ${topic.title}` : `IT → ${topic.title}`;
  }

  function renderShadowingTopicCards(focusFirst = false) {
    const selectedValue = refs.shadowingTopic.value;
    refs.shadowingTopicGrid.innerHTML = '';

    const collections = document.createElement('div');
    collections.className = 'vocab-catalog-collections';
    collections.style.gridColumn = '1 / -1';
    collections.setAttribute('role', 'group');
    collections.setAttribute('aria-label', 'Набор фраз Shadowing');
    for (const [value, title] of [['it', 'IT'], ['grammar', 'Из грамматики']]) {
      const button = document.createElement('button');
      const active = pickerCategory === value;
      button.type = 'button';
      button.className = `vocab-collection-button${active ? ' vocab-collection-button--active' : ''}`;
      button.dataset.collectionValue = value;
      button.textContent = title;
      button.disabled = value === 'grammar' && !grammarTopics.length;
      button.setAttribute('aria-pressed', String(active));
      button.addEventListener('click', () => {
        pickerCategory = value;
        renderShadowingTopicCards(true);
      });
      collections.appendChild(button);
    }
    refs.shadowingTopicGrid.appendChild(collections);

    function appendCard(container, topic) {
      const cardButton = document.createElement('button');
      const isSelected = topic.id === selectedValue;
      const phraseCount = phraseCountForTopic(topic);
      cardButton.type = 'button';
      cardButton.className = `vocab-topic-card${isSelected ? ' vocab-topic-card--selected' : ''}`;
      cardButton.dataset.topicValue = topic.id;
      cardButton.setAttribute('aria-pressed', String(isSelected));

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

      container.appendChild(cardButton);
    }

    const grammarPhraseCount = grammarTopics.reduce((sum, topic) => sum + topic.items.length, 0);
    if (pickerCategory === 'grammar') {
      refs.shadowingTopicModalSubtitle.textContent = `Из грамматики · ${grammarLevel} · до Future Simple включительно · ${formatShadowingPhraseCount(grammarPhraseCount)}`;
      const content = document.createElement('div');
      content.className = 'vocab-catalog-topics';
      content.style.gridColumn = '1 / -1';
      GRAMMAR_TOPIC_GROUPS.forEach((group) => {
        const topics = grammarTopics.filter((topic) => topic.group === group);
        if (!topics.length) return;
        const section = document.createElement('section');
        section.className = 'vocab-catalog-section';
        const header = document.createElement('div');
        header.className = 'vocab-catalog-section-header';
        const title = document.createElement('h3');
        title.textContent = `${group.icon} ${group.title}`;
        header.appendChild(title);
        section.appendChild(header);
        const cards = document.createElement('div');
        cards.className = 'vocab-catalog-subtopics';
        topics.forEach((topic) => appendCard(cards, topic));
        section.appendChild(cards);
        content.appendChild(section);
      });
      refs.shadowingTopicGrid.appendChild(content);
    } else {
      const phraseCount = SHADOWING_TOPICS.reduce((sum, topic) => sum + phraseCountForTopic(topic), 0);
      refs.shadowingTopicModalSubtitle.textContent = `IT · ${formatShadowingPhraseCount(phraseCount)}`;
      const content = document.createElement('div');
      content.className = 'vocab-catalog-topics';
      content.style.gridColumn = '1 / -1';
      SHADOWING_TOPICS.forEach((topic) => appendCard(content, topic));
      refs.shadowingTopicGrid.appendChild(content);
    }
    if (focusFirst) refs.shadowingTopicGrid.querySelector('.vocab-collection-button--active').focus();
  }

  function showShadowingTopicPicker() {
    ensureShadowingTopicOptions();
    pickerCategory = grammarTopics.some((topic) => topic.id === refs.shadowingTopic.value) ? 'grammar' : 'it';
    renderShadowingTopicCards();
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
      shadowingTopics.forEach((topic) => {
        const opt = document.createElement('option');
        opt.value = topic.id;
        opt.textContent = topic.grammar ? `Из грамматики · ${grammarLevel} → ${topic.title}` : topic.title;
        refs.shadowingTopic.appendChild(opt);
      });
    }
    syncShadowingTopicTrigger();
  }

  function pickShadowingSession() {
    return shadowingItemsForTopic(refs.shadowingTopic.value);
  }

  function startShadowingSession() {
    stopShadowingAttempt();
    cancelPendingActivity();
    sessionScoring.start(shadowingState, pickShadowingSession());
    shadowingState.successfulRepetitions = 0;
    renderShadowing();
    saveProgress();
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
    sessionScoring.restore(shadowingState, saved.outcomes);
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

  async function showShadowingTranslation(item) {
    const requestId = ++translationRequestId;
    const vocabularyItem = vocabTopics
      .flatMap((topic) => topic.words || [])
      .find((word) => word.example === item.text);
    const translation = item.translation || SHADOWING_TRANSLATIONS[item.text]
      || (vocabularyItem && vocabularyItem.sentenceTranslation)
      || '';
    refs.shadowingInlineTranslation.textContent = translation || 'Перевод не найден.';
    if (translation || !item.id.startsWith('grammar:')) return;
    refs.shadowingInlineTranslation.textContent = 'Перевожу предложение...';
    try {
      const translated = await getSentenceTranslation(item.text);
      if (requestId !== translationRequestId || getCurrentMode() !== 'shadowing') return;
      refs.shadowingInlineTranslation.textContent = translated || 'Перевод не найден.';
    } catch (_) {
      if (requestId !== translationRequestId || getCurrentMode() !== 'shadowing') return;
      refs.shadowingInlineTranslation.textContent = 'Не удалось получить перевод предложения. Проверь интернет.';
    }
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
    shadowingState.wrongCounted = sessionScoring.wasWrong(shadowingState);
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
          sessionScoring.record(shadowingState, 'correct');
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
        sessionScoring.record(shadowingState, 'wrong');
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
    startShadowingSession,
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
