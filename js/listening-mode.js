window.Trainer = window.Trainer || {};
window.Trainer.createListeningMode = function ({
  activity,
  asNumber,
  cancelPendingActivity,
  flashCorrect,
  hideSessionComplete,
  listeningState,
  playCorrectSound,
  playWrongSound,
  refs,
  saveProgress,
  setFeedback,
  setQuestionTranslation,
  setSelectedSentenceForSpeech,
  showSessionComplete,
  shuffleItems,
  speakEnglishText,
  viewState
}) {
  const { LISTENING_TOPICS } = window.TrainerData;

  function allListeningItemsForTopicValue(topicValue) {
    const topics = topicValue === 'all'
      ? LISTENING_TOPICS
      : LISTENING_TOPICS.filter((topic) => topic.id === topicValue);

    return topics.flatMap((topic) =>
      (topic.items || []).map((text, index) => ({
        id: `${topic.id}:${index}`,
        topicId: topic.id,
        topicTitle: topic.title,
        text,
      }))
    );
  }

  function pickListeningSession() {
    return shuffleItems(allListeningItemsForTopicValue(refs.listeningTopic.value || 'all'));
  }

  function restoreListeningSessionFromOrder(order, topicValue) {
    if (!Array.isArray(order) || !order.length) return [];

    const itemsById = new Map(
      allListeningItemsForTopicValue(topicValue || 'all').map((item) => [String(item.id), item])
    );
    const restored = order
      .map((id) => itemsById.get(String(id)))
      .filter(Boolean);

    return restored.length === itemsById.size ? restored : [];
  }

  function ensureListeningTopicOptions() {
    if (refs.listeningTopic.options.length > 0) return;

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'Все темы';
    refs.listeningTopic.appendChild(allOpt);

    LISTENING_TOPICS.forEach((topic) => {
      const opt = document.createElement('option');
      opt.value = topic.id;
      opt.textContent = topic.title;
      refs.listeningTopic.appendChild(opt);
    });
  }

  function restoreListeningProgress(saved) {
    ensureListeningTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.listeningTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.listeningTopic.value = topicValue;
    }

    const rate = String(saved.rate || "0.85");
    const hasRate = Array.from(refs.listeningRate.options).some((opt) => opt.value === rate);
    refs.listeningRate.value = hasRate ? rate : "0.85";
    refs.listeningAutoNext.checked = saved.autoNext === true;

    listeningState.session = restoreListeningSessionFromOrder(saved.order, refs.listeningTopic.value);
    if (!listeningState.session.length) {
      listeningState.session = pickListeningSession();
    }
    listeningState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, listeningState.session.length - 1)));
    listeningState.correct = Math.max(0, asNumber(saved.correct, 0));
    listeningState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    return Boolean(listeningState.session.length);
  }

  function currentListeningItem() {
    return listeningState.session[listeningState.idx] || null;
  }

  function listeningWords(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/sev one/g, "sev1")
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/[^a-z0-9']+/g, " ")
      .trim()
      .split(/\s+/)
      .filter(Boolean);
  }

  function listeningWordTokens(text) {
    const normalized = expandListeningContractions(String(text || "").replace(/\bsev one\b/gi, "sev1"));
    return (normalized.match(/[A-Za-zА-Яа-я0-9']+/g) || [])
      .map((word) => ({ text: word, norm: normalizeListeningWord(word) }))
      .filter((word) => word.norm);
  }

  function expandListeningContractions(text) {
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

  function normalizeListeningWord(word) {
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

  function compareListeningAnswer(userText, targetText) {
    const userWords = listeningWordTokens(userText);
    const targetWords = listeningWordTokens(targetText);
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

  function renderListeningDiff(result) {
    const parts = result.targetMarks.map((mark) => {
      const cls = mark.ok ? "listening-word listening-word--ok" : "listening-word listening-word--miss";
      return `<span class="${cls}">${mark.word}</span>`;
    });
    refs.hint.innerHTML = `<span class="listening-diff">${parts.join(" ")}</span>`;
  }

  function maskedListeningText(text, revealEvery = 3) {
    return String(text || "")
      .split(/\s+/)
      .map((word, index) => {
        const clean = word.replace(/^[^A-Za-z0-9']+|[^A-Za-z0-9']+$/g, "");
        if (!clean) return word;
        if (index % revealEvery === 0 || clean.length <= 2) return word;
        return word.replace(/[A-Za-z0-9']/g, "_");
      })
      .join(" ");
  }

  function speakCurrentListeningItem() {
    const item = currentListeningItem();
    if (!item) return;
    const started = speakEnglishText(item.text, { rate: refs.listeningRate.value });
    if (!started) {
      setFeedback("Озвучка недоступна в этом браузере.", false);
    }
  }

  function renderListening() {
    hideSessionComplete();
    cancelPendingActivity();
    viewState.sentenceTranslationRequestId += 1;

    const item = currentListeningItem();
    if (!item) {
      refs.questionText.textContent = "Фразы не найдены.";
      setQuestionTranslation("");
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${listeningState.idx + 1} / ${listeningState.session.length}`;
    refs.correctCount.textContent = String(listeningState.correct);
    refs.wrongCount.textContent = String(listeningState.wrong);
    refs.vocabModeLabel.textContent = "Слушайте и запишите фразу";
    refs.speakWordBtn.textContent = "Повторить фразу";
    refs.questionText.textContent = "Нажмите «Слушать» и напишите, что услышали.";
    setQuestionTranslation(`${item.topicTitle} · ${Math.round(Number(refs.listeningRate.value) * 100)}% speed`);
    setSelectedSentenceForSpeech(item.text);

    refs.answerInput.value = "";
    refs.answerInput.placeholder = "Напишите услышанную фразу";
    refs.answerInput.focus();
    refs.hint.textContent = "";
    setFeedback("", null);
    listeningState.checkedCurrent = false;
    listeningState.wrongCounted = false;
    listeningState.hintLevel = 0;

    activity.schedule('listening-playback', speakCurrentListeningItem, 120);
  }

  function checkListeningAnswer() {
    const item = currentListeningItem();
    if (!item) return;

    const user = refs.answerInput.value.trim();
    if (!user) {
      refs.listenBtn.click();
      return;
    }

    const result = compareListeningAnswer(user, item.text);
    const pct = Math.round(result.accuracy * 100);
    const passed = result.accuracy >= 0.82;
    const wasChecked = listeningState.checkedCurrent;

    if (passed) {
      if (!wasChecked && !listeningState.wrongCounted) {
        listeningState.correct += 1;
        refs.correctCount.textContent = String(listeningState.correct);
      }
      listeningState.checkedCurrent = true;
      playCorrectSound();
      flashCorrect();
      setFeedback(`Хорошо! Понял ${pct}% слов.`, true);
      renderListeningDiff(result);
      if (!wasChecked && refs.listeningAutoNext.checked) {
        activity.schedule('auto-next', () => {
          nextListeningQuestion();
          saveProgress();
        }, 1200);
      }
    } else {
      if (!wasChecked && !listeningState.wrongCounted) {
        listeningState.wrong += 1;
        listeningState.wrongCounted = true;
        refs.wrongCount.textContent = String(listeningState.wrong);
      }
      playWrongSound();
      setFeedback("Красным подсвечены места, где текст отличается от ответа.", false);
      renderListeningDiff(result);
    }

    saveProgress();
  }

  function nextListeningQuestion() {
    if (!listeningState.session.length) return;
    cancelPendingActivity();
    listeningState.idx += 1;
    if (listeningState.idx >= listeningState.session.length) {
      listeningState.idx = listeningState.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }
    renderListening();
    saveProgress();
  }

  function previousListeningQuestion() {
    if (listeningState.idx <= 0) return;
    cancelPendingActivity();
    listeningState.idx -= 1;
    renderListening();
    saveProgress();
  }

  function showListeningHint(level) {
    const item = currentListeningItem();
    if (!item) return;
    listeningState.hintLevel = level;

    if (listeningState.hintLevel === 1) {
      const firstWord = listeningWords(item.text)[0] || "";
      refs.hint.textContent = firstWord ? `Первое слово: ${firstWord}` : "";
    } else if (listeningState.hintLevel === 2) {
      refs.hint.textContent = maskedListeningText(item.text);
    } else {
      refs.hint.textContent = item.text;
    }
  }

  return {
    checkListeningAnswer,
    compareListeningAnswer,
    ensureListeningTopicOptions,
    nextListeningQuestion,
    pickListeningSession,
    previousListeningQuestion,
    renderListening,
    restoreListeningProgress,
    showListeningHint,
    speakCurrentListeningItem
  };
};
