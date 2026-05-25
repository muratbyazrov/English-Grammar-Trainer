(function () {
  const STORAGE_KEY = "english-grammar-trainer.progress.v2";
  const AUTO_NEXT_DELAY_MS = 450;

  const allLevels = (window.GRAMMAR_QUESTIONS && typeof window.GRAMMAR_QUESTIONS === "object" && !Array.isArray(window.GRAMMAR_QUESTIONS))
    ? window.GRAMMAR_QUESTIONS
    : {};
  const levelNames = Object.keys(allLevels).sort();
  let currentMode = 'grammar';
  const vocabTopics = (window.VOCABULARY_DATA && Array.isArray(window.VOCABULARY_DATA)) ? window.VOCABULARY_DATA : [];
  const QUESTION_TRANSLATION_OVERRIDES = {
    "A1-A2:232": "Я отправил ей любовную записку.",
  };

  function fixBrokenWordSpacing(value) {
    return String(value || "");
  }

  function sanitizeQuestion(question) {
    if (!question || typeof question !== "object") return question;

    const options = question.options && typeof question.options === "object"
      ? Object.fromEntries(
          Object.entries(question.options).map(([key, value]) => [key, fixBrokenWordSpacing(value)])
        )
      : question.options;

    return {
      ...question,
      prompt: fixBrokenWordSpacing(question.prompt),
      answer: fixBrokenWordSpacing(question.answer),
      options,
    };
  }

  Object.keys(allLevels).forEach((level) => {
    const questions = allLevels[level];
    if (!Array.isArray(questions)) return;
    allLevels[level] = questions.map(sanitizeQuestion);
  });

  const refs = {
    levelSelect: document.getElementById("level-select"),
    sessionSize: document.getElementById("session-size"),
    newSession: document.getElementById("new-session"),
    position: document.getElementById("position"),
    correctCount: document.getElementById("correct-count"),
    wrongCount: document.getElementById("wrong-count"),
    questionId: document.getElementById("question-id"),
    questionText: document.getElementById("question-text"),
    questionTranslation: document.getElementById("question-translation"),
    speakWordBtn: document.getElementById("speak-word-btn"),
    answerInput: document.getElementById("answer-input"),
    checkBtn: document.getElementById("check-btn"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    startFrom: document.getElementById("start-from"),
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
    tabVocab: document.getElementById('tab-vocab'),
    controlsGrammar: document.getElementById('controls-grammar'),
    controlsVocab: document.getElementById('controls-vocab'),
    vocabTopic: document.getElementById('vocab-topic'),
    vocabSessionSize: document.getElementById('vocab-session-size'),
    vocabNewSession: document.getElementById('vocab-new-session'),
    autoSpeakCorrectVocab: document.getElementById('auto-speak-correct-vocab'),
    optionsSection: document.getElementById('options-section'),
    questionMeta: document.getElementById('question-meta'),
    vocabModeLabel: document.getElementById('vocab-mode-label'),
  };

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

  const state = {
    session: [],
    idx: 0,
    correct: 0,
    wrong: 0,
    checkedCurrent: false,
    wrongCounted: false,
    autoNextTimer: null,
    translationCache: new Map(),
    sentenceTranslationRequestId: 0,
    selectedSentenceForSpeech: "",
    speechVoices: [],
    autoSpeakCorrect: true,
    speechPlaybackToken: 0,
  };

  const vocabState = { session: [], idx: 0, correct: 0, wrong: 0, checkedCurrent: false, wrongCounted: false };

  function asNumber(value, fallback) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  function normalize(text) {
    return String(text || "")
      .toLowerCase()
      .replace(/[’`]/g, "'")
      .replace(/\s+/g, " ")
      .replace(/^[\s.,!?;:\"“”'()\-]+|[\s.,!?;:\"“”'()\-]+$/g, "")
      .trim();
  }

  function currentLevel() {
    return refs.levelSelect.value;
  }

  function questionTranslationOverride(question, level = currentLevel()) {
    if (!question || typeof question.id !== "number") return "";
    return QUESTION_TRANSLATION_OVERRIDES[`${level}:${question.id}`] || "";
  }

  function orderedQuestionsForLevel(level) {
    const src = allLevels[level];
    if (!Array.isArray(src)) return [];
    return src.slice().sort((a, b) => a.id - b.id);
  }

  function questionByIdForLevel(level) {
    return new Map(orderedQuestionsForLevel(level).map((q) => [q.id, q]));
  }

  function pickSession() {
    const questions = orderedQuestionsForLevel(currentLevel());
    const sizeRaw = refs.sessionSize.value;
    const fromId = parseInt(refs.startFrom.value, 10);
    const startIndex = Number.isFinite(fromId) && fromId >= 1
      ? questions.findIndex((q) => q.id >= fromId)
      : 0;
    const pool = questions.slice(startIndex === -1 ? 0 : startIndex);

    if (sizeRaw === "all") {
      return pool;
    }

    const size = Number(sizeRaw);
    return pool.slice(0, Math.max(1, Math.min(size, pool.length)));
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
        sessionSize: refs.sessionSize.value,
        startFrom: refs.startFrom.value,
        autoSpeakCorrect: state.autoSpeakCorrect,
        sessionIds: state.session.map((q) => q.id),
        idx: state.idx,
        correct: state.correct,
        wrong: state.wrong,
        vocabulary: {
          topic: refs.vocabTopic.value,
          sessionSize: refs.vocabSessionSize.value,
          autoSpeakCorrect: refs.autoSpeakCorrectVocab.checked,
          sessionIds: vocabState.session.map((item) => item.id),
          idx: vocabState.idx,
          correct: vocabState.correct,
          wrong: vocabState.wrong,
        },
      };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (_error) {
      // Ignore storage errors (private mode, quota, etc.)
    }
  }

  function clearAutoNextTimer() {
    if (state.autoNextTimer) {
      window.clearTimeout(state.autoNextTimer);
      state.autoNextTimer = null;
    }
    stopSpeech();
  }

  function restoreProgress() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return false;
      }

      const parsed = JSON.parse(raw);
      if (!parsed || !Array.isArray(parsed.sessionIds)) {
        return false;
      }

      const level = parsed.level && allLevels[parsed.level] ? parsed.level : levelNames[0];
      if (level) refs.levelSelect.value = level;
      const byId = questionByIdForLevel(level);
      const session = parsed.sessionIds
        .map((id) => byId.get(id))
        .filter(Boolean)
        .sort((a, b) => a.id - b.id);

      if (!session.length) {
        return false;
      }

      const idx = Math.max(0, Math.min(asNumber(parsed.idx, 0), session.length - 1));
      const correct = Math.max(0, asNumber(parsed.correct, 0));
      const wrong = Math.max(0, asNumber(parsed.wrong, 0));
      const sizeValue = String(parsed.sessionSize || "");
      const hasSizeOption = Array.from(refs.sessionSize.options).some(
        (opt) => opt.value === sizeValue
      );

      if (hasSizeOption) {
        refs.sessionSize.value = sizeValue;
      }

      if (parsed.startFrom) {
        refs.startFrom.value = parsed.startFrom;
      }

      state.autoSpeakCorrect = parsed.autoSpeakCorrect !== false;
      refs.autoSpeakCorrect.checked = state.autoSpeakCorrect;

      state.session = session;
      state.idx = idx;
      state.correct = correct;
      state.wrong = wrong;
      restoreVocabProgress(parsed.vocabulary);
      if (parsed.mode === 'vocabulary') {
        currentMode = 'vocabulary';
      }
      return true;
    } catch (_error) {
      return false;
    }
  }

  function currentQuestion() {
    return state.session[state.idx] || null;
  }

  function displayPrompt(prompt) {
    return String(prompt || "").replace(/\.{3,}/g, "____");
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
    state.selectedSentenceForSpeech = normalized;
    refs.speakWordBtn.disabled = !normalized;
  }

  function buildEnglishUtterance(text) {
    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") {
      return null;
    }

    const normalized = String(text || "").trim();
    if (!normalized) return null;

    const utterance = new window.SpeechSynthesisUtterance(normalized);
    const voices = state.speechVoices.length ? state.speechVoices : window.speechSynthesis.getVoices();
    const preferredVoice = pickPreferredEnglishVoice(voices);
    if (preferredVoice) {
      utterance.voice = preferredVoice;
      utterance.lang = preferredVoice.lang || "en-US";
    } else {
      utterance.lang = "en-US";
    }
    utterance.rate = 0.9;
    utterance.pitch = 1;
    return utterance;
  }

  function stopSpeech() {
    state.speechPlaybackToken += 1;
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
  }

  function speakEnglishText(text, { onComplete } = {}) {
    const utterance = buildEnglishUtterance(text);
    if (!utterance) {
      return false;
    }

    const token = state.speechPlaybackToken + 1;
    state.speechPlaybackToken = token;

    const finish = () => {
      if (token !== state.speechPlaybackToken) return;
      if (typeof onComplete === "function") {
        onComplete();
      }
    };

    utterance.addEventListener("end", finish, { once: true });
    utterance.addEventListener("error", finish, { once: true });

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function refreshSpeechVoices() {
    if (!("speechSynthesis" in window)) {
      state.speechVoices = [];
      return;
    }
    state.speechVoices = window.speechSynthesis.getVoices() || [];
  }

  function pickPreferredEnglishVoice(voices) {
    if (!Array.isArray(voices) || !voices.length) return null;

    const preferredNamePattern = /(Google US English|Samantha|Alex|Daniel|Karen|Moira|Tessa|Serena|Jenny|Aria|Guy|Libby)/i;
    const lowQualityPattern = /(eSpeak|compact|festival|pico|robot)/i;

    const candidates = voices
      .filter((voice) => /^en[-_]/i.test(voice.lang || ""))
      .map((voice) => {
        let score = 0;
        if (/^en[-_]US/i.test(voice.lang || "")) score += 50;
        if (/^en[-_]GB/i.test(voice.lang || "")) score += 40;
        if (voice.localService) score += 8;
        if (preferredNamePattern.test(voice.name || "")) score += 25;
        if (/(Neural|Natural|Enhanced|Premium)/i.test(voice.name || "")) score += 12;
        if (lowQualityPattern.test(voice.name || "")) score -= 30;
        return { voice, score };
      })
      .sort((a, b) => b.score - a.score);

    return candidates.length ? candidates[0].voice : null;
  }

  function speakSelectedSentence() {
    const sentence = state.selectedSentenceForSpeech;
    if (!sentence) return;

    const started = speakEnglishText(sentence);
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
    const cached = state.translationCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const payload = await fetchTranslationPayload(sentence);
    const translated = extractSentenceTranslation(payload);
    if (translated) {
      state.translationCache.set(cacheKey, translated);
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

    const reqId = state.sentenceTranslationRequestId + 1;
    state.sentenceTranslationRequestId = reqId;
    setQuestionTranslation("Перевожу предложение...");

    try {
      const translated = await getSentenceTranslation(resolvedPrompt);
      if (reqId !== state.sentenceTranslationRequestId) return;
      if (!translated) {
        setQuestionTranslation("Не нашел перевод предложения.");
        return;
      }
      setQuestionTranslation(translated);
    } catch (_error) {
      if (reqId !== state.sentenceTranslationRequestId) return;
      setQuestionTranslation("Не удалось получить перевод предложения. Проверь интернет.");
    }
  }

  async function showVocabSentenceTranslation(item) {
    const sentence = item && item.example ? item.example : "";
    setSelectedSentenceForSpeech(sentence);
    if (!sentence) {
      setQuestionTranslation("");
      return;
    }

    const formatVocabTranslation = (translation) => {
      const sentenceTranslation = String(translation || "").trim();
      const wordTranslation = String((item && item.translation) || "").trim();
      if (!sentenceTranslation) return "";
      return wordTranslation ? `${sentenceTranslation} (${wordTranslation})` : sentenceTranslation;
    };

    if (item && typeof item.sentenceTranslation === "string" && item.sentenceTranslation.trim()) {
      setQuestionTranslation(formatVocabTranslation(item.sentenceTranslation));
      return;
    }

    const reqId = state.sentenceTranslationRequestId + 1;
    state.sentenceTranslationRequestId = reqId;
    setQuestionTranslation("Перевожу предложение...");

    try {
      const translated = await getSentenceTranslation(sentence);
      if (reqId !== state.sentenceTranslationRequestId || currentMode !== 'vocabulary') return;
      if (!translated) {
        setQuestionTranslation("Не нашел перевод предложения.");
        return;
      }
      setQuestionTranslation(formatVocabTranslation(translated));
    } catch (_error) {
      if (reqId !== state.sentenceTranslationRequestId || currentMode !== 'vocabulary') return;
      setQuestionTranslation("Не удалось получить перевод предложения. Проверь интернет.");
    }
  }

  function hideSessionComplete() {
    refs.sessionComplete.hidden = true;
  }

  function queueNextQuestionAfterCorrect(question) {
    clearAutoNextTimer();

    const resolvedPrompt = fillPromptWithAnswer(question && question.prompt, question && question.answer);
    if (state.autoSpeakCorrect && resolvedPrompt) {
      const started = speakEnglishText(resolvedPrompt, {
        onComplete: () => {
          nextQuestion();
          saveProgress();
        },
      });
      if (started) {
        return;
      }
    }

    state.autoNextTimer = window.setTimeout(() => {
      state.autoNextTimer = null;
      nextQuestion();
      saveProgress();
    }, AUTO_NEXT_DELAY_MS);
  }

  function pickVocabSession() {
    const topicValue = refs.vocabTopic.value;
    let words = [];
    if (topicValue === 'all') {
      vocabTopics.forEach(t => { words = words.concat(t.words || []); });
    } else {
      const topic = vocabTopics.find(t => t.topic === topicValue);
      words = topic ? (topic.words || []) : [];
    }
    const sizeRaw = refs.vocabSessionSize.value;
    if (sizeRaw === 'all') return words.slice();
    const size = Number(sizeRaw);
    return words.slice(0, Math.max(1, Math.min(size, words.length)));
  }

  function ensureVocabTopicOptions() {
    if (refs.vocabTopic.options.length > 0) return;

    const allOpt = document.createElement('option');
    allOpt.value = 'all';
    allOpt.textContent = 'Все темы';
    refs.vocabTopic.appendChild(allOpt);
    vocabTopics.forEach(t => {
      const opt = document.createElement('option');
      opt.value = t.topic;
      opt.textContent = t.topic;
      refs.vocabTopic.appendChild(opt);
    });
  }

  function vocabById() {
    const result = new Map();
    vocabTopics.forEach((topic) => {
      (topic.words || []).forEach((item) => {
        if (item && typeof item.id === "number") {
          result.set(item.id, item);
        }
      });
    });
    return result;
  }

  function restoreVocabProgress(saved) {
    ensureVocabTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.vocabTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.vocabTopic.value = topicValue;
    }

    const sizeValue = String(saved.sessionSize || "");
    const hasSize = Array.from(refs.vocabSessionSize.options).some((opt) => opt.value === sizeValue);
    if (hasSize) {
      refs.vocabSessionSize.value = sizeValue;
    }

    refs.autoSpeakCorrectVocab.checked = saved.autoSpeakCorrect !== false;

    const ids = Array.isArray(saved.sessionIds) ? saved.sessionIds : [];
    const byId = vocabById();
    const session = ids.map((id) => byId.get(id)).filter(Boolean);
    vocabState.session = session.length ? session : pickVocabSession();
    vocabState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, vocabState.session.length - 1)));
    vocabState.correct = Math.max(0, asNumber(saved.correct, 0));
    vocabState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    return Boolean(vocabState.session.length);
  }

  function renderVocab() {
    hideSessionComplete();
    stopSpeech();
    state.sentenceTranslationRequestId += 1;

    const w = vocabState.session[vocabState.idx];
    if (!w) {
      refs.questionText.textContent = 'Слова не найдены.';
      refs.questionTranslation.textContent = '';
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${vocabState.idx + 1} / ${vocabState.session.length}`;
    refs.correctCount.textContent = String(vocabState.correct);
    refs.wrongCount.textContent = String(vocabState.wrong);

    renderQuestionText(w.gapExample || w.example);
    setSelectedSentenceForSpeech(w.example || w.gapExample || '');

    refs.questionTranslation.classList.add('vocab-hint');
    void showVocabSentenceTranslation(w);

    refs.answerInput.value = '';
    refs.answerInput.focus();
    setFeedback('', null);
    vocabState.checkedCurrent = false;
    vocabState.wrongCounted = false;
  }

  function checkVocabAnswer() {
    const w = vocabState.session[vocabState.idx];
    if (!w || vocabState.checkedCurrent) return;

    const user = normalize(refs.answerInput.value);
    if (!user) {
      setFeedback('Сначала впиши ответ.', false);
      return;
    }

    if (user === normalize(w.answer)) {
      vocabState.correct += 1;
      vocabState.checkedCurrent = true;
      playCorrectSound();
      flashCorrect();
      setFeedback('Верно!', true);
      refs.correctCount.textContent = String(vocabState.correct);
      saveProgress();
      queueVocabNextAfterCorrect(w);
    } else {
      if (!vocabState.wrongCounted) {
        vocabState.wrong += 1;
        vocabState.wrongCounted = true;
        refs.wrongCount.textContent = String(vocabState.wrong);
      }
      playWrongSound();
      setFeedback('Почти. Правильный ответ: ' + w.answer, false);
      saveProgress();
    }
  }

  function nextVocabQuestion() {
    if (!vocabState.session.length) return;
    vocabState.idx += 1;
    if (vocabState.idx >= vocabState.session.length) {
      vocabState.idx = vocabState.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }
    renderVocab();
    saveProgress();
  }

  function queueVocabNextAfterCorrect(w) {
    clearAutoNextTimer();
    if (state.autoSpeakCorrect && w.example) {
      const started = speakEnglishText(w.example, {
        onComplete: () => {
          nextVocabQuestion();
          saveProgress();
        },
      });
      if (started) return;
    }
    state.autoNextTimer = window.setTimeout(() => {
      state.autoNextTimer = null;
      nextVocabQuestion();
      saveProgress();
    }, AUTO_NEXT_DELAY_MS);
  }

  function switchMode(mode) {
    currentMode = mode;
    refs.tabGrammar.classList.toggle('mode-tab--active', mode === 'grammar');
    refs.tabVocab.classList.toggle('mode-tab--active', mode === 'vocabulary');
    refs.controlsGrammar.hidden = mode !== 'grammar';
    refs.controlsVocab.hidden = mode !== 'vocabulary';
    refs.optionsSection.hidden = mode !== 'grammar';
    refs.questionMeta.hidden = mode !== 'grammar';
    refs.vocabModeLabel.hidden = mode !== 'vocabulary';

    if (mode === 'vocabulary') {
      ensureVocabTopicOptions();
      state.autoSpeakCorrect = refs.autoSpeakCorrectVocab.checked;
      if (!vocabState.session.length) {
        vocabState.session = pickVocabSession();
        vocabState.idx = 0;
        vocabState.correct = 0;
        vocabState.wrong = 0;
      }
      renderVocab();
    } else {
      refs.questionTranslation.classList.remove('vocab-hint');
      render();
    }
    saveProgress();
  }

  function render() {
    hideSessionComplete();
    stopSpeech();
    state.sentenceTranslationRequestId += 1;

    const q = currentQuestion();
    if (!q) {
      refs.questionText.textContent = "Вопросы не найдены.";
      setQuestionTranslation("");
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${state.idx + 1} / ${state.session.length}`;
    refs.correctCount.textContent = String(state.correct);
    refs.wrongCount.textContent = String(state.wrong);
    refs.questionId.textContent = String(q.id);
    renderQuestionText(q.prompt);
    setQuestionTranslation("");
    setSelectedSentenceForSpeech(fillPromptWithAnswer(q.prompt, q.answer));
    refs.optionA.textContent = `a) ${q.options.a}`;
    refs.optionB.textContent = `b) ${q.options.b}`;
    refs.optionC.textContent = `c) ${q.options.c}`;

    refs.answerInput.value = "";
    refs.answerInput.focus();
    refs.hint.textContent = "";
    setFeedback("", null);
    state.checkedCurrent = false;
    state.wrongCounted = false;
    void showQuestionTranslation(q);
  }

  function showSessionComplete() {
    const total = state.session.length;
    const correct = state.correct;
    const wrong = state.wrong;
    const pct = total > 0 ? Math.max(0, Math.round(((total - wrong) / total) * 100)) : 0;

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

  function nextQuestion() {
    if (!state.session.length) {
      return;
    }

    state.idx += 1;
    if (state.idx >= state.session.length) {
      state.idx = state.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }

    render();
  }

  refs.newSession.addEventListener("click", () => {
    clearAutoNextTimer();
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  refs.checkBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') { checkVocabAnswer(); return; }
    const q = currentQuestion();
    if (!q || state.checkedCurrent) {
      return;
    }

    const user = normalize(refs.answerInput.value);
    const target = normalize(q.answer);

    if (!user) {
      setFeedback("Сначала впиши ответ.", false);
      return;
    }

    if (user === target) {
      state.correct += 1;
      state.checkedCurrent = true;
      setFeedback("Верно!", true);
      playCorrectSound();
      flashCorrect();
      queueNextQuestionAfterCorrect(q);
    } else {
      if (!state.wrongCounted) {
        state.wrong += 1;
        state.wrongCounted = true;
        refs.wrongCount.textContent = String(state.wrong);
      }
      setFeedback(`Почти. Правильный ответ: ${q.answer}`, false);
      playWrongSound();
    }

    saveProgress();
  });


  refs.prevBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') {
      clearAutoNextTimer();
      vocabState.idx = Math.max(0, vocabState.idx - 1);
      renderVocab();
      saveProgress();
      return;
    }
    if (state.idx <= 0) return;
    clearAutoNextTimer();
    state.idx -= 1;
    render();
    saveProgress();
  });

  refs.nextBtn.addEventListener("click", () => {
    if (currentMode === 'vocabulary') { nextVocabQuestion(); return; }
    clearAutoNextTimer();
    nextQuestion();
    saveProgress();
  });

  refs.sessionSize.addEventListener("change", () => {
    clearAutoNextTimer();
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  refs.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      refs.checkBtn.click();
    }
  });

  refs.speakWordBtn.addEventListener("click", () => {
    speakSelectedSentence();
  });

  refs.autoSpeakCorrect.addEventListener("change", () => {
    state.autoSpeakCorrect = refs.autoSpeakCorrect.checked;
    saveProgress();
  });

  if ("speechSynthesis" in window) {
    refreshSpeechVoices();
    window.speechSynthesis.addEventListener("voiceschanged", refreshSpeechVoices);
  }

  refs.startFrom.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      refs.newSession.click();
    }
  });

  refs.nextSessionBtn.addEventListener("click", () => {
    const lastQ = state.session[state.session.length - 1];
    const nextId = lastQ ? lastQ.id + 1 : 1;
    refs.startFrom.value = String(nextId);
    refs.newSession.click();
  });

  refs.scCloseBtn.addEventListener("click", () => {
    hideSessionComplete();
  });

  refs.tabGrammar.addEventListener('click', () => switchMode('grammar'));
  refs.tabVocab.addEventListener('click', () => switchMode('vocabulary'));

  refs.vocabNewSession.addEventListener('click', () => {
    clearAutoNextTimer();
    ensureVocabTopicOptions();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.autoSpeakCorrectVocab.addEventListener('change', () => {
    state.autoSpeakCorrect = refs.autoSpeakCorrectVocab.checked;
    saveProgress();
  });

  refs.vocabTopic.addEventListener('change', () => {
    clearAutoNextTimer();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.vocabSessionSize.addEventListener('change', () => {
    clearAutoNextTimer();
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
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
    clearAutoNextTimer();
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  const restored = restoreProgress();
  if (!restored) {
    state.autoSpeakCorrect = refs.autoSpeakCorrect.checked;
    state.session = pickSession();
    ensureVocabTopicOptions();
    vocabState.session = pickVocabSession();
    saveProgress();
  }
  if (currentMode === 'vocabulary') {
    switchMode('vocabulary');
  } else {
    render();
  }
})();
