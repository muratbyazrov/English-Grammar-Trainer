(function () {
  const AUTO_NEXT_DELAY_MS = 450;
  const SHADOWING_SUCCESS_PAUSE_MS = 2500;
  const SHADOWING_SILENCE_MS = 1000;
  const SHADOWING_MAX_LISTEN_MS = 20000;
  const DEFAULT_ANSWER_PLACEHOLDER = "Например: helps";
  const EMPTY_ENTER_SPEAK_PLACEHOLDER = "Нажмите Enter еще раз, чтобы озвучить";

  const allLevels = (window.GRAMMAR_QUESTIONS && typeof window.GRAMMAR_QUESTIONS === "object" && !Array.isArray(window.GRAMMAR_QUESTIONS))
    ? window.GRAMMAR_QUESTIONS
    : {};
  const levelNames = Object.keys(allLevels).sort();
  let currentMode = 'grammar';
  const vocabTopics = (window.VOCABULARY_DATA && Array.isArray(window.VOCABULARY_DATA)) ? window.VOCABULARY_DATA : [];

  const refs = {
    levelSelect: document.getElementById("level-select"),
    grammarTopic: document.getElementById("grammar-topic"),
    grammarTopicTrigger: document.getElementById("grammar-topic-trigger"),
    grammarTopicTriggerIcon: document.getElementById("grammar-topic-trigger-icon"),
    grammarTopicTriggerText: document.getElementById("grammar-topic-trigger-text"),
    grammarTopicOverlay: document.getElementById("grammar-topic-overlay"),
    grammarTopicModalSubtitle: document.getElementById("grammar-topic-modal-subtitle"),
    grammarTopicGroups: document.getElementById("grammar-topic-groups"),
    grammarTopicClose: document.getElementById("grammar-topic-close"),
    newSession: document.getElementById("new-session"),
    position: document.getElementById("position"),
    correctCount: document.getElementById("correct-count"),
    wrongCount: document.getElementById("wrong-count"),
    questionId: document.getElementById("question-id"),
    questionText: document.getElementById("question-text"),
    vocabExample: document.getElementById("vocab-example"),
    vocabExampleText: document.getElementById("vocab-example-text"),
    shadowingInlineTranslation: document.getElementById("shadowing-inline-translation"),
    questionTranslation: document.getElementById("question-translation"),
    questionTranslationRow: document.getElementById("question-translation-row"),
    speakWordBtn: document.getElementById("speak-word-btn"),
    answerInput: document.getElementById("answer-input"),
    checkBtn: document.getElementById("check-btn"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    autoSpeakCorrect: document.getElementById("auto-speak-correct"),
    feedback: document.getElementById("feedback"),
    hint: document.getElementById("hint"),
    optionA: document.getElementById("option-a"),
    optionB: document.getElementById("option-b"),
    optionC: document.getElementById("option-c"),
    sessionComplete: document.getElementById("session-complete"),
    scCorrect: document.getElementById("sc-correct"),
    scWrong: document.getElementById("sc-wrong"),
    scPct: document.getElementById("sc-pct"),
    scCloseBtn: document.getElementById("session-complete-close"),
    nextSessionBtn: document.getElementById("next-session-btn"),
    tabGrammar: document.getElementById('tab-grammar'),
    tabTheory: document.getElementById('tab-theory'),
    tabVocab: document.getElementById('tab-vocab'),
    tabListening: document.getElementById('tab-listening'),
    tabShadowing: document.getElementById('tab-shadowing'),
    controlsGrammar: document.getElementById('controls-grammar'),
    controlsTheory: document.getElementById('controls-theory'),
    controlsVocab: document.getElementById('controls-vocab'),
    controlsListening: document.getElementById('controls-listening'),
    controlsShadowing: document.getElementById('controls-shadowing'),
    theoryTopic: document.getElementById('theory-topic'),
    vocabTopic: document.getElementById('vocab-topic'),
    vocabTopicTrigger: document.getElementById('vocab-topic-trigger'),
    vocabTopicTriggerIcon: document.getElementById('vocab-topic-trigger-icon'),
    vocabTopicTriggerText: document.getElementById('vocab-topic-trigger-text'),
    vocabTopicOverlay: document.getElementById('vocab-topic-overlay'),
    vocabTopicModalSubtitle: document.getElementById('vocab-topic-modal-subtitle'),
    vocabTopicGrid: document.getElementById('vocab-topic-grid'),
    vocabTopicClose: document.getElementById('vocab-topic-close'),
    vocabShowList: document.getElementById('vocab-show-list'),
    vocabNewSession: document.getElementById('vocab-new-session'),
    autoSpeakCorrectVocab: document.getElementById('auto-speak-correct-vocab'),
    listeningTopic: document.getElementById('listening-topic'),
    listeningRate: document.getElementById('listening-rate'),
    listeningAutoNext: document.getElementById('listening-auto-next'),
    listeningNewSession: document.getElementById('listening-new-session'),
    listeningActions: document.getElementById('listening-actions'),
    listenBtn: document.getElementById('listen-btn'),
    listeningFirstWord: document.getElementById('listening-first-word'),
    listeningGaps: document.getElementById('listening-gaps'),
    listeningShowText: document.getElementById('listening-show-text'),
    shadowingTopic: document.getElementById('shadowing-topic'),
    shadowingTopicTrigger: document.getElementById('shadowing-topic-trigger'),
    shadowingTopicTriggerIcon: document.getElementById('shadowing-topic-trigger-icon'),
    shadowingTopicTriggerText: document.getElementById('shadowing-topic-trigger-text'),
    shadowingTopicOverlay: document.getElementById('shadowing-topic-overlay'),
    shadowingTopicModalSubtitle: document.getElementById('shadowing-topic-modal-subtitle'),
    shadowingTopicGrid: document.getElementById('shadowing-topic-grid'),
    shadowingTopicClose: document.getElementById('shadowing-topic-close'),
    shadowingRate: document.getElementById('shadowing-rate'),
    shadowingRepetitions: document.getElementById('shadowing-repetitions'),
    shadowingNewSession: document.getElementById('shadowing-new-session'),
    shadowingPanel: document.getElementById('shadowing-panel'),
    shadowingMic: document.getElementById('shadowing-mic'),
    shadowingStatus: document.getElementById('shadowing-status'),
    shadowingRepetition: document.getElementById('shadowing-repetition'),
    shadowingTranscript: document.getElementById('shadowing-heard'),
    shadowingStart: document.getElementById('shadowing-start'),
    shadowingStop: document.getElementById('shadowing-stop'),
    vocabTabGroup: document.getElementById('vocab-tab-group'),
    optionsSection: document.getElementById('options-section'),
    questionMeta: document.getElementById('question-meta'),
    answerLabel: document.getElementById('answer-label'),
    vocabModeLabel: document.getElementById('vocab-mode-label'),
    statsSection: document.getElementById('stats-section'),
    cardContent: document.getElementById('card-content'),
    theoryPanel: document.getElementById('theory-panel'),
    theoryTitle: document.getElementById('theory-title'),
    theoryBody: document.getElementById('theory-body'),
    vocabListOverlay: document.getElementById('vocab-list-overlay'),
    vocabListTitle: document.getElementById('vocab-list-title'),
    vocabListSubtitle: document.getElementById('vocab-list-subtitle'),
    vocabListBody: document.getElementById('vocab-list-body'),
    vocabListClose: document.getElementById('vocab-list-close'),
  };

  const { stopSpeech, speakEnglishText, refreshSpeechVoices } = window.Trainer.createSpeech(window);
  const activity = window.Trainer.createActivity(window);
  const progress = window.Trainer.createProgressStore(window);

  const card = document.querySelector(".card");

  function makeAudioCtx() {
    return new (window.AudioContext || window.webkitAudioContext)();
  }

  function playBell(ctx, freq, startTime, volume = 0.07) {
    [1, 2.76].forEach((ratio, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = "sine";
      osc.frequency.value = freq * ratio;
      const vol = volume / (i + 1);
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(vol, startTime + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.9);
      osc.start(startTime);
      osc.stop(startTime + 0.9);
    });
  }

  function playCorrectSound() {
    try {
      const ctx = makeAudioCtx();
      [[659.25, 0], [830.61, 0.14], [987.77, 0.28]].forEach(([freq, delay]) => {
        playBell(ctx, freq, ctx.currentTime + delay);
      });
    } catch (_) {}
  }

  function playWrongSound() {
    try {
      const ctx = makeAudioCtx();
      [[300, 0], [250, 0.2]].forEach(([freq, delay]) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, ctx.currentTime + delay);
        osc.frequency.linearRampToValueAtTime(freq * 0.82, ctx.currentTime + delay + 0.2);
        gain.gain.setValueAtTime(0, ctx.currentTime + delay);
        gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + delay + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.35);
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.35);
      });
    } catch (_) {}
  }

  function flashCorrect() {
    card.classList.remove("correct-flash");
    void card.offsetWidth; // reflow to restart animation
    card.classList.add("correct-flash");
    card.addEventListener("animationend", () => card.classList.remove("correct-flash"), { once: true });
  }

  const viewState = {
    translationCache: new Map(),
    sentenceTranslationRequestId: 0,
    selectedSentenceForSpeech: "",
  };

  const grammarState = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    checkedCurrent: false,
    wrongCounted: false,
    autoSpeakCorrect: true,
  };

  const vocabState = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    checkedCurrent: false,
    wrongCounted: false,
    autoSpeakCorrect: refs.autoSpeakCorrectVocab.checked,
    emptyEnterPromptIdx: -1,
  };
  const listeningState = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    checkedCurrent: false,
    wrongCounted: false,
    hintLevel: 0,
  };
  const shadowingState = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    wrongCounted: false,
    checkedCurrent: false,
    successfulRepetitions: 0,
    recognition: null,
    attemptToken: 0,
    isListening: false,
  };

  function asNumber(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[\u2018\u2019`]/g, "'")
      .replace(/\s+/g, " ")
      .replace(/^[\s.,!?;:"'\u201c\u201d\u2018\u2019()\-]+|[\s.,!?;:"'\u201c\u201d\u2018\u2019()\-]+$/g, "")
      .trim();
  }

  function expandEnglishContractions(text) {
    return String(text || "")
      .replace(/\bwon't\b/g, "will not")
      .replace(/\bshan't\b/g, "shall not")
      .replace(/\bcan't\b/g, "can not")
      .replace(/\bcannot\b/g, "can not")
      .replace(/\blet's\b/g, "let us")
      .replace(/\b([a-z]+)n't\b/g, "$1 not")
      .replace(/\b([a-z]+)'ll\b/g, "$1 will")
      .replace(/\b([a-z]+)'re\b/g, "$1 are")
      .replace(/\b([a-z]+)'ve\b/g, "$1 have")
      .replace(/\b([a-z]+)'m\b/g, "$1 am")
      .replace(/\b([a-z]+)'d\b/g, "$1 would")
      .replace(/\b([a-z]+)'s\b/g, "$1 is");
  }

  function answerOptionsFromText(target) {
    return String(target || "")
      .split("/")
      .map((part, index) => ({
        text: part.trim(),
        weight: index === 0 ? 1 : 0.8,
      }))
      .filter((item) => item.text);
  }

  function answerOptionsForVocabItem(item) {
    const infinitives = answerOptionsFromText((item && (item.infinitive || item.word)) || "")
      .map((option) => normalize(option.text))
      .filter((text) => /^to\s+/.test(text))
      .map((text) => text.replace(/^to\s+/, ""));
    const withOptionalTo = (option) => ({
      ...option,
      optionalTo: (infinitives.length > 0 && /^to\s+/.test(normalize(option.text)))
        || infinitives.includes(normalize(option.text).replace(/^to\s+/, "")),
    });

    if (item && Array.isArray(item.answers) && item.answers.length) {
      return item.answers
        .map((answer, index) => ({
          text: String((answer && answer.text) || "").trim(),
          weight: Number.isFinite(Number(answer && answer.weight))
            ? Number(answer.weight)
            : (index === 0 ? 1 : 0.8),
        }))
        .filter((answer) => answer.text)
        .map(withOptionalTo);
    }

    return answerOptionsFromText((item && (item.infinitive || item.word)) || "")
      .map(withOptionalTo);
  }

  function primaryAnswerText(options) {
    return (Array.isArray(options) && options[0] && options[0].text) || "";
  }

  function getAnswerMatch(userNorm, targetNorm, answerOptions) {
    const comparable = (s) => expandEnglishContractions(s).replace(/[-\s]+/g, " ").trim();
    const withoutArticles = (s) => comparable(s)
      .replace(/\b(a|an|the)\b/g, " ")
      .replace(/[()]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const isVocabAnswer = Array.isArray(answerOptions) && answerOptions.length > 0;
    const comparableUser = comparable(userNorm);
    const comparableTarget = comparable(targetNorm);
    const articleFreeUser = isVocabAnswer ? withoutArticles(userNorm) : "";

    const options = Array.isArray(answerOptions) && answerOptions.length
      ? answerOptions
      : answerOptionsFromText(targetNorm);
    const primaryAnswer = primaryAnswerText(options) || targetNorm;

    if (options.length > 0) {
      const matchedIndex = options.findIndex((option) => {
        const optionNorm = normalize(option.text);
        return userNorm === optionNorm
          || comparableUser === comparable(optionNorm)
          || (isVocabAnswer && option.optionalTo
            && withoutArticles(userNorm.replace(/^to\s+/, ""))
              === withoutArticles(optionNorm.replace(/^to\s+/, "")))
          || (isVocabAnswer && articleFreeUser && articleFreeUser === withoutArticles(optionNorm));
      });

      if (matchedIndex !== -1) {
        return {
          matched: true,
          isAlternative: matchedIndex > 0,
          primaryAnswer,
          weight: options[matchedIndex].weight,
        };
      }
    }

    if (userNorm === targetNorm || comparableUser === comparableTarget) {
      return { matched: true, isAlternative: false, primaryAnswer, weight: 1 };
    }

    if (isVocabAnswer && articleFreeUser && articleFreeUser === withoutArticles(targetNorm)) {
      return { matched: true, isAlternative: false, primaryAnswer, weight: 1 };
    }

    // Скобки в ответе обозначают необязательную часть.
    const withoutParens = normalize(targetNorm.replace(/\s*\(.*$/, ""));
    if (withoutParens && (userNorm === withoutParens || comparableUser === comparable(withoutParens))) {
      return { matched: true, isAlternative: false, primaryAnswer: withoutParens, weight: 1 };
    }

    const isMultiWordTarget = comparableTarget.split(" ").filter(Boolean).length > 1;
    const isSingleWordUser = comparableUser.split(" ").filter(Boolean).length === 1;
    if (isMultiWordTarget && isSingleWordUser) {
      return { matched: false, isAlternative: false, primaryAnswer, weight: 0 };
    }

    return { matched: false, isAlternative: false, primaryAnswer, weight: 0 };
  }

  function isAnswerMatch(userNorm, targetNorm) {
    return getAnswerMatch(userNorm, targetNorm).matched;
  }

  function shuffleItems(items) {
    const shuffled = items.slice();
    for (let i = shuffled.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  function setFeedback(text, ok) {
    refs.feedback.textContent = text;
    refs.feedback.classList.remove("ok", "bad");
    if (ok === true) {
      refs.feedback.classList.add("ok");
    }
    if (ok === false) {
      refs.feedback.classList.add("bad");
    }
  }

  function saveProgress() {
    try {
      const payload = {
        mode: currentMode,
        level: currentLevel(),
        grammarTopic: currentGrammarTopic(),
        autoSpeakCorrect: grammarState.autoSpeakCorrect,
        idx: grammarState.idx,
        correct: grammarState.correct,
        wrong: grammarState.wrong,
        vocabulary: {
          topic: refs.vocabTopic.value,
          autoSpeakCorrect: vocabState.autoSpeakCorrect,
          order: vocabState.session.map((item) => item && item.id).filter((id) => id != null),
          idx: vocabState.idx,
          correct: vocabState.correct,
          wrong: vocabState.wrong,
        },
        listening: {
          topic: refs.listeningTopic.value,
          rate: refs.listeningRate.value,
          autoNext: refs.listeningAutoNext.checked,
          order: listeningState.session.map((item) => item && item.id).filter((id) => id != null),
          idx: listeningState.idx,
          correct: listeningState.correct,
          wrong: listeningState.wrong,
        },
        shadowing: {
          topic: refs.shadowingTopic.value,
          rate: refs.shadowingRate.value,
          repetitions: refs.shadowingRepetitions.value,
          idx: shadowingState.idx,
          correct: shadowingState.correct,
          wrong: shadowingState.wrong,
          successfulRepetitions: shadowingState.successfulRepetitions,
        },
        theory: {
          topic: refs.theoryTopic.value,
        },
      };
      progress.save(payload);
    } catch (_error) {
      // Ignore storage errors (private mode, quota, etc.)
    }
  }

  function cancelPendingActivity() {
    activity.cancelAll();
    stopSpeech();
  }

  function restoreProgress() {
    try {
      const parsed = progress.load();
      if (!parsed || typeof parsed !== "object") {
        return false;
      }

      const level = parsed.level && allLevels[parsed.level] ? parsed.level : levelNames[0];
      if (level) refs.levelSelect.value = level;
      ensureGrammarTopicOptions(level, parsed.grammarTopic);
      const session = questionsForCurrentGrammarTopic(level);

      if (!session.length) {
        return false;
      }

      const idx = Math.max(0, Math.min(asNumber(parsed.idx, 0), session.length - 1));
      const correct = Math.max(0, asNumber(parsed.correct, 0));
      const wrong = Math.max(0, asNumber(parsed.wrong, 0));
      grammarState.autoSpeakCorrect = parsed.autoSpeakCorrect !== false;
      refs.autoSpeakCorrect.checked = grammarState.autoSpeakCorrect;

      grammarState.session = session;
      grammarState.idx = idx;
      grammarState.correct = correct;
      grammarState.wrong = wrong;
      restoreVocabProgress(parsed.vocabulary);
      restoreListeningProgress(parsed.listening);
      restoreShadowingProgress(parsed.shadowing);
      restoreTheoryProgress(parsed.theory);
      if (parsed.mode === 'vocabulary' || parsed.mode === 'theory' || parsed.mode === 'listening' || parsed.mode === 'shadowing') {
        currentMode = parsed.mode;
      }
      return true;
    } catch (_error) {
      return false;
    }
  }

  function displayPrompt(prompt) {
    return String(prompt || "").replace(/\.{3,}/g, (match, offset, source) => {
      const prevChar = offset > 0 ? source[offset - 1] : "";
      const nextChar = source[offset + match.length] || "";
      const needsSpaceBefore = /[A-Za-z0-9'"]/.test(prevChar);
      const needsSpaceAfter = /[A-Za-z0-9'"]/.test(nextChar);
      return `${needsSpaceBefore ? " " : ""}____${needsSpaceAfter ? " " : ""}`;
    });
  }

  function fillPromptWithAnswer(prompt, answer) {
    const basePrompt = String(prompt || "").trim();
    const resolvedAnswer = String(answer || "").trim();
    if (!basePrompt || !resolvedAnswer) return basePrompt;
    if (/\.{3,}/.test(basePrompt)) {
      return basePrompt.replace(/\.{3,}/g, (match, offset, source) => {
        const prevChar = offset > 0 ? source[offset - 1] : "";
        const nextChar = source[offset + match.length] || "";
        const needsSpaceBefore = /[A-Za-z0-9'"]/.test(prevChar);
        const needsSpaceAfter = /[A-Za-z0-9'"]/.test(nextChar);
        return `${needsSpaceBefore ? " " : ""}${resolvedAnswer}${needsSpaceAfter ? " " : ""}`;
      });
    }
    return basePrompt;
  }

  function renderQuestionText(prompt) {
    refs.questionText.textContent = displayPrompt(prompt);
  }

  function setQuestionTranslation(text) {
    refs.questionTranslation.textContent = text;
  }

  function setSelectedSentenceForSpeech(sentence) {
    const normalized = String(sentence || "").trim();
    viewState.selectedSentenceForSpeech = normalized;
    refs.speakWordBtn.disabled = !normalized;
  }

  function speakSelectedSentence() {
    const sentence = viewState.selectedSentenceForSpeech;
    if (!sentence) return;

    const started = speakEnglishText(sentence, {
      rate: currentMode === 'listening' ? refs.listeningRate.value : undefined,
    });
    if (!started) {
      setQuestionTranslation("Озвучка недоступна в этом браузере.");
    }
  }

  function extractSentenceTranslation(payload) {
    if (payload && Array.isArray(payload.sentences)) {
      return payload.sentences
        .map((item) => String((item && item.trans) || "").trim())
        .filter(Boolean)
        .join(" ")
        .trim();
    }

    if (Array.isArray(payload) && Array.isArray(payload[0])) {
      return payload[0]
        .map((chunk) => (Array.isArray(chunk) ? String(chunk[0] || "") : ""))
        .join("")
        .trim();
    }

    return "";
  }

  async function fetchTranslationPayload(text) {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ru&dt=t&dt=bd&dj=1&q=${encodeURIComponent(text)}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Translation request failed: ${response.status}`);
    }
    return response.json();
  }

  async function getSentenceTranslation(sentence) {
    const cacheKey = `sentence:${sentence}`;
    const cached = viewState.translationCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const payload = await fetchTranslationPayload(sentence);
    const translated = extractSentenceTranslation(payload);
    if (translated) {
      viewState.translationCache.set(cacheKey, translated);
    }
    return translated;
  }

  async function showQuestionTranslation(question) {
    const resolvedPrompt = fillPromptWithAnswer(question && question.prompt, question && question.answer);
    setSelectedSentenceForSpeech(resolvedPrompt);
    if (!resolvedPrompt) {
      setQuestionTranslation("");
      return;
    }

    const overrideTranslation = questionTranslationOverride(question);
    if (overrideTranslation) {
      setQuestionTranslation(overrideTranslation);
      return;
    }

    if (question && typeof question.translation === "string" && question.translation.trim()) {
      setQuestionTranslation(question.translation.trim());
      return;
    }

    const reqId = viewState.sentenceTranslationRequestId + 1;
    viewState.sentenceTranslationRequestId = reqId;
    setQuestionTranslation("Перевожу предложение...");

    try {
      const translated = await getSentenceTranslation(resolvedPrompt);
      if (reqId !== viewState.sentenceTranslationRequestId) return;
      if (!translated) {
        setQuestionTranslation("Не нашел перевод предложения.");
        return;
      }
      setQuestionTranslation(translated);
    } catch (_error) {
      if (reqId !== viewState.sentenceTranslationRequestId) return;
      setQuestionTranslation("Не удалось получить перевод предложения. Проверь интернет.");
    }
  }

  function hideSessionComplete() {
    refs.sessionComplete.hidden = true;
  }

  const {
    currentLevel,
    questionTranslationOverride,
    currentGrammarTopic,
    questionsForCurrentGrammarTopic,
    syncGrammarTopicTrigger,
    showGrammarTopicPicker,
    hideGrammarTopicPicker,
    ensureGrammarTopicOptions,
    pickSession,
    renderGrammar,
    nextGrammarQuestion,
    checkGrammarAnswer
  } = window.Trainer.createGrammarMode({
    AUTO_NEXT_DELAY_MS,
    DEFAULT_ANSWER_PLACEHOLDER,
    activity,
    allLevels,
    cancelPendingActivity,
    fillPromptWithAnswer,
    flashCorrect,
    grammarState,
    hideSessionComplete,
    isAnswerMatch,
    normalize,
    playCorrectSound,
    playWrongSound,
    refs,
    renderQuestionText,
    saveProgress,
    setFeedback,
    setQuestionTranslation,
    setSelectedSentenceForSpeech,
    showQuestionTranslation,
    showSessionComplete,
    speakEnglishText,
    viewState
  });

  const {
    checkVocabAnswer,
    ensureVocabTopicOptions,
    hideVocabList,
    hideVocabTopicPicker,
    nextVocabQuestion,
    pickVocabSession,
    renderVocab,
    restoreVocabProgress,
    showVocabList,
    showVocabTopicPicker,
    syncVocabTopicTrigger
  } = window.Trainer.createVocabularyMode({
    AUTO_NEXT_DELAY_MS,
    DEFAULT_ANSWER_PLACEHOLDER,
    activity,
    answerOptionsForVocabItem,
    asNumber,
    cancelPendingActivity,
    flashCorrect,
    getAnswerMatch,
    hideSessionComplete,
    normalize,
    playCorrectSound,
    playWrongSound,
    primaryAnswerText,
    refs,
    renderQuestionText,
    saveProgress,
    setFeedback,
    setQuestionTranslation,
    setSelectedSentenceForSpeech,
    showSessionComplete,
    shuffleItems,
    speakEnglishText,
    viewState,
    vocabState,
    vocabTopics
  });

  const {
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
  } = window.Trainer.createListeningMode({
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
  });

  const {
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
  } = window.Trainer.createShadowingMode({
    SHADOWING_MAX_LISTEN_MS,
    SHADOWING_SILENCE_MS,
    SHADOWING_SUCCESS_PAUSE_MS,
    activity,
    asNumber,
    cancelPendingActivity,
    compareListeningAnswer,
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
    getCurrentMode: () => currentMode
  });

  const {
    ensureTheoryTopicOptions,
    renderTheory,
    restoreTheoryProgress
  } = window.Trainer.createTheoryMode({
    cancelPendingActivity,
    hideSessionComplete,
    refs
  });

  function switchMode(mode) {
    cancelPendingActivity();
    stopShadowingAttempt();
    viewState.sentenceTranslationRequestId += 1;
    currentMode = mode;
    refs.tabGrammar.classList.toggle('mode-tab--active', mode === 'grammar');
    refs.tabTheory.classList.toggle('mode-tab--active', mode === 'theory');
    refs.tabVocab.classList.toggle('mode-tab--active', mode === 'vocabulary');
    refs.tabListening.classList.toggle('mode-tab--active', mode === 'listening');
    refs.tabShadowing.classList.toggle('mode-tab--active', mode === 'shadowing');
    refs.vocabTabGroup.classList.toggle('vocab-active', mode === 'vocabulary');
    refs.controlsGrammar.hidden = mode !== 'grammar';
    refs.controlsTheory.hidden = mode !== 'theory';
    refs.controlsVocab.hidden = mode !== 'vocabulary';
    refs.controlsListening.hidden = mode !== 'listening';
    refs.controlsShadowing.hidden = mode !== 'shadowing';
    refs.statsSection.hidden = mode === 'theory';
    refs.cardContent.hidden = mode === 'theory';
    refs.theoryPanel.hidden = mode !== 'theory';
    refs.optionsSection.hidden = mode !== 'grammar';
    refs.questionMeta.hidden = mode !== 'grammar';
    refs.vocabModeLabel.hidden = mode !== 'vocabulary' && mode !== 'listening';
    refs.vocabExample.hidden = mode !== 'vocabulary';
    refs.listeningActions.hidden = mode !== 'listening';
    refs.shadowingPanel.hidden = mode !== 'shadowing';
    refs.shadowingInlineTranslation.hidden = mode !== 'shadowing';
    refs.questionTranslationRow.hidden = mode === 'shadowing';
    refs.speakWordBtn.hidden = mode === 'listening' || mode === 'shadowing';
    refs.answerLabel.hidden = mode === 'shadowing';
    refs.answerInput.hidden = mode === 'shadowing';
    refs.checkBtn.hidden = mode === 'shadowing';

    if (mode === 'theory') {
      renderTheory();
    } else if (mode === 'vocabulary') {
      ensureVocabTopicOptions();
      if (!vocabState.session.length) {
        vocabState.session = pickVocabSession();
        vocabState.idx = 0;
        vocabState.correct = 0;
        vocabState.wrong = 0;
      }
      renderVocab();
    } else if (mode === 'listening') {
      ensureListeningTopicOptions();
      if (!listeningState.session.length) {
        listeningState.session = pickListeningSession();
        listeningState.idx = 0;
        listeningState.correct = 0;
        listeningState.wrong = 0;
      }
      refs.questionTranslation.classList.remove('vocab-hint');
      renderListening();
    } else if (mode === 'shadowing') {
      ensureShadowingTopicOptions();
      if (!shadowingState.session.length) shadowingState.session = pickShadowingSession();
      refs.questionTranslation.classList.remove('vocab-hint');
      renderShadowing();
    } else {
      refs.questionTranslation.classList.remove('vocab-hint');
      renderGrammar();
    }
    saveProgress();
  }

  function showSessionComplete() {
    const stats = currentMode === 'vocabulary'
      ? vocabState
      : (currentMode === 'listening' ? listeningState : (currentMode === 'shadowing' ? shadowingState : grammarState));
    const total = stats.session.length;
    const correct = stats.correct;
    const missed = Math.max(0, total - stats.correct - stats.wrong);
    if (missed > 0) {
      stats.wrong += missed;
    }
    const wrong = stats.wrong;
    const pct = total > 0 ? Math.min(100, Math.max(0, Math.round((correct / total) * 100))) : 0;

    // Обновляем стат-бар
    refs.position.textContent = `${total} / ${total}`;
    refs.correctCount.textContent = String(correct);
    refs.wrongCount.textContent = String(wrong);

    // Заполняем попап
    refs.scCorrect.textContent = String(correct);
    refs.scWrong.textContent = String(wrong);
    refs.scPct.textContent = pct + "%";

    // Показываем с перезапуском анимации
    hideSessionComplete();
    void refs.sessionComplete.offsetWidth;
    refs.sessionComplete.hidden = false;
  }

  refs.newSession.addEventListener("click", () => {
    cancelPendingActivity();
    grammarState.session = pickSession();
    grammarState.idx = 0;
    grammarState.correct = 0;
    grammarState.wrong = 0;
    renderGrammar();
    saveProgress();
  });

  refs.checkBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') { checkVocabAnswer(); return; }
    if (currentMode === 'listening') { checkListeningAnswer(); return; }
    if (currentMode === 'grammar') checkGrammarAnswer();
  });

  refs.prevBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') {
      cancelPendingActivity();
      vocabState.idx = Math.max(0, vocabState.idx - 1);
      renderVocab();
      saveProgress();
      return;
    }
    if (currentMode === 'listening') {
      previousListeningQuestion();
      return;
    }
    if (currentMode === 'shadowing') { previousShadowingQuestion(); return; }
    if (grammarState.idx <= 0) return;
    cancelPendingActivity();
    grammarState.idx -= 1;
    renderGrammar();
    saveProgress();
  });

  refs.nextBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') { nextVocabQuestion(); return; }
    if (currentMode === 'listening') { nextListeningQuestion(); return; }
    if (currentMode === 'shadowing') { nextShadowingQuestion(); return; }
    cancelPendingActivity();
    nextGrammarQuestion();
    saveProgress();
  });

  refs.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (currentMode === 'listening' && !normalize(refs.answerInput.value)) {
        event.preventDefault();
        refs.listenBtn.click();
        return;
      }
      if (currentMode === 'vocabulary' && !normalize(refs.answerInput.value)) {
        const shouldSpeak =
          vocabState.idx === vocabState.emptyEnterPromptIdx &&
          refs.answerInput.placeholder === EMPTY_ENTER_SPEAK_PLACEHOLDER;

        if (shouldSpeak) {
          event.preventDefault();
          speakSelectedSentence();
          return;
        }

        vocabState.emptyEnterPromptIdx = vocabState.idx;
        refs.answerInput.placeholder = EMPTY_ENTER_SPEAK_PLACEHOLDER;
        event.preventDefault();
        return;
      } else {
        vocabState.emptyEnterPromptIdx = -1;
        refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
      }
      refs.checkBtn.click();
    }
  });

  refs.answerInput.addEventListener("input", () => {
    vocabState.emptyEnterPromptIdx = -1;
    refs.answerInput.placeholder = currentMode === 'listening'
      ? "Напишите услышанную фразу"
      : DEFAULT_ANSWER_PLACEHOLDER;
  });

  refs.speakWordBtn.addEventListener("click", () => {
    speakSelectedSentence();
  });

  refs.autoSpeakCorrect.addEventListener("change", () => {
    grammarState.autoSpeakCorrect = refs.autoSpeakCorrect.checked;
    saveProgress();
  });

  if ("speechSynthesis" in window) {
    refreshSpeechVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshSpeechVoices);
  }

  refs.nextSessionBtn.addEventListener("click", () => {
    hideSessionComplete();
    cancelPendingActivity();
    if (currentMode === 'vocabulary') {
      vocabState.session = pickVocabSession();
      vocabState.idx = 0;
      vocabState.correct = 0;
      vocabState.wrong = 0;
      renderVocab();
      saveProgress();
      return;
    }
    if (currentMode === 'listening') {
      listeningState.session = pickListeningSession();
      listeningState.idx = 0;
      listeningState.correct = 0;
      listeningState.wrong = 0;
      renderListening();
      saveProgress();
      return;
    }
    if (currentMode === 'shadowing') {
      shadowingState.session = pickShadowingSession();
      shadowingState.idx = 0;
      shadowingState.correct = 0;
      shadowingState.wrong = 0;
      shadowingState.successfulRepetitions = 0;
      shadowingState.checkedCurrent = false;
      renderShadowing();
      saveProgress();
      return;
    }
    refs.newSession.click();
  });

  refs.scCloseBtn.addEventListener("click", () => {
    hideSessionComplete();
  });

  refs.tabGrammar.addEventListener('click', () => switchMode('grammar'));
  refs.tabTheory.addEventListener('click', () => switchMode('theory'));
  refs.tabVocab.addEventListener('click', () => switchMode('vocabulary'));
  refs.tabListening.addEventListener('click', () => switchMode('listening'));
  refs.tabShadowing.addEventListener('click', () => switchMode('shadowing'));

  refs.vocabNewSession.addEventListener('click', () => {
    cancelPendingActivity();
    ensureVocabTopicOptions();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.vocabShowList.addEventListener('click', () => {
    showVocabList();
  });

  refs.vocabTopicTrigger.addEventListener('click', () => {
    showVocabTopicPicker();
  });

  refs.grammarTopicTrigger.addEventListener('click', () => {
    showGrammarTopicPicker();
  });

  refs.grammarTopicClose.addEventListener('click', () => {
    hideGrammarTopicPicker();
  });

  refs.grammarTopicOverlay.addEventListener('click', (event) => {
    if (event.target === refs.grammarTopicOverlay) {
      hideGrammarTopicPicker();
    }
  });

  refs.vocabTopicClose.addEventListener('click', () => {
    hideVocabTopicPicker();
  });

  refs.vocabTopicOverlay.addEventListener('click', (event) => {
    if (event.target === refs.vocabTopicOverlay) {
      hideVocabTopicPicker();
    }
  });

  refs.shadowingTopicTrigger.addEventListener('click', () => {
    showShadowingTopicPicker();
  });

  refs.shadowingTopicClose.addEventListener('click', () => {
    hideShadowingTopicPicker();
  });

  refs.shadowingTopicOverlay.addEventListener('click', (event) => {
    if (event.target === refs.shadowingTopicOverlay) {
      hideShadowingTopicPicker();
    }
  });

  refs.vocabListClose.addEventListener('click', () => {
    hideVocabList();
  });

  refs.vocabListOverlay.addEventListener('click', (event) => {
    if (event.target === refs.vocabListOverlay) {
      hideVocabList();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      if (!refs.grammarTopicOverlay.hidden) {
        hideGrammarTopicPicker();
      } else if (!refs.vocabTopicOverlay.hidden) {
        hideVocabTopicPicker();
      } else if (!refs.shadowingTopicOverlay.hidden) {
        hideShadowingTopicPicker();
      } else if (!refs.vocabListOverlay.hidden) {
        hideVocabList();
      }
    }
  });

  refs.autoSpeakCorrectVocab.addEventListener('change', () => {
    vocabState.autoSpeakCorrect = refs.autoSpeakCorrectVocab.checked;
    saveProgress();
  });

  refs.vocabTopic.addEventListener('change', () => {
    cancelPendingActivity();
    syncVocabTopicTrigger();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.listenBtn.addEventListener('click', () => {
    speakCurrentListeningItem();
  });

  refs.listeningFirstWord.addEventListener('click', () => {
    showListeningHint(1);
  });

  refs.listeningGaps.addEventListener('click', () => {
    showListeningHint(2);
  });

  refs.listeningShowText.addEventListener('click', () => {
    showListeningHint(3);
  });

  refs.listeningNewSession.addEventListener('click', () => {
    cancelPendingActivity();
    ensureListeningTopicOptions();
    listeningState.session = pickListeningSession();
    listeningState.idx = 0;
    listeningState.correct = 0;
    listeningState.wrong = 0;
    renderListening();
    saveProgress();
  });

  refs.listeningTopic.addEventListener('change', () => {
    cancelPendingActivity();
    listeningState.session = pickListeningSession();
    listeningState.idx = 0;
    listeningState.correct = 0;
    listeningState.wrong = 0;
    renderListening();
    saveProgress();
  });

  refs.listeningRate.addEventListener('change', () => {
    saveProgress();
    speakCurrentListeningItem();
  });

  refs.listeningAutoNext.addEventListener('change', () => {
    saveProgress();
  });

  refs.shadowingStart.addEventListener('click', () => {
    if (shadowingState.checkedCurrent) nextShadowingQuestion();
    else runShadowingAttempt();
  });

  refs.shadowingStop.addEventListener('click', stopShadowingSession);

  refs.shadowingNewSession.addEventListener('click', () => {
    stopShadowingAttempt();
    cancelPendingActivity();
    shadowingState.session = pickShadowingSession();
    shadowingState.idx = 0;
    shadowingState.correct = 0;
    shadowingState.wrong = 0;
    shadowingState.successfulRepetitions = 0;
    shadowingState.checkedCurrent = false;
    renderShadowing();
    saveProgress();
  });

  refs.shadowingTopic.addEventListener('change', () => {
    syncShadowingTopicTrigger();
    refs.shadowingNewSession.click();
  });
  refs.shadowingRate.addEventListener('change', saveProgress);
  refs.shadowingRepetitions.addEventListener('change', () => {
    stopShadowingAttempt();
    cancelPendingActivity();
    shadowingState.successfulRepetitions = 0;
    shadowingState.checkedCurrent = false;
    renderShadowing();
    saveProgress();
  });

  refs.theoryTopic.addEventListener('change', () => {
    renderTheory();
    saveProgress();
  });

  if (!levelNames.length) {
    refs.questionText.textContent =
      "Не удалось загрузить вопросы. Проверь, что рядом есть файл questions.js.";
    refs.checkBtn.disabled = true;
    refs.nextBtn.disabled = true;
    return;
  }

  levelNames.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    refs.levelSelect.appendChild(opt);
  });

  refs.levelSelect.addEventListener("change", () => {
    cancelPendingActivity();
    ensureGrammarTopicOptions(currentLevel());
    grammarState.session = pickSession();
    grammarState.idx = 0;
    grammarState.correct = 0;
    grammarState.wrong = 0;
    renderGrammar();
    saveProgress();
  });

  refs.grammarTopic.addEventListener("change", () => {
    cancelPendingActivity();
    syncGrammarTopicTrigger();
    grammarState.session = pickSession();
    grammarState.idx = 0;
    grammarState.correct = 0;
    grammarState.wrong = 0;
    renderGrammar();
    saveProgress();
  });

  ensureTheoryTopicOptions();
  ensureGrammarTopicOptions(levelNames[0]);
  const restored = restoreProgress();
  if (!restored) {
    grammarState.autoSpeakCorrect = refs.autoSpeakCorrect.checked;
    grammarState.session = pickSession();
    ensureVocabTopicOptions();
    vocabState.session = pickVocabSession();
    ensureListeningTopicOptions();
    listeningState.session = pickListeningSession();
    ensureShadowingTopicOptions();
    shadowingState.session = pickShadowingSession();
    saveProgress();
  }
  if (currentMode === 'theory') {
    switchMode('theory');
  } else if (currentMode === 'vocabulary') {
    switchMode('vocabulary');
  } else if (currentMode === 'listening') {
    switchMode('listening');
  } else if (currentMode === 'shadowing') {
    switchMode('shadowing');
  } else {
    switchMode('grammar');
  }
})();
