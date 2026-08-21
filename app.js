(function () {
  const STORAGE_KEY = "english-grammar-trainer.progress.v2";
  const AUTO_NEXT_DELAY_MS = 450;
  const DEFAULT_ANSWER_PLACEHOLDER = "Например: helps";
  const EMPTY_ENTER_SPEAK_PLACEHOLDER = "Нажмите Enter еще раз, чтобы озвучить";

  const allLevels = (window.GRAMMAR_QUESTIONS && typeof window.GRAMMAR_QUESTIONS === "object" && !Array.isArray(window.GRAMMAR_QUESTIONS))
    ? window.GRAMMAR_QUESTIONS
    : {};
  const levelNames = Object.keys(allLevels).sort();
  let currentMode = 'grammar';
  const vocabTopics = (window.VOCABULARY_DATA && Array.isArray(window.VOCABULARY_DATA)) ? window.VOCABULARY_DATA : [];
  const ALL_GRAMMAR_TOPICS_VALUE = "all";
  const GRAMMAR_TOPICS = {
    "A1-A2": [
      { id: "present-simple-positive", title: "Present Simple: утверждения", from: 1, to: 20 },
      { id: "present-simple-negative", title: "Present Simple: отрицания", from: 21, to: 40 },
      { id: "present-simple-yes-no", title: "Present Simple: общие вопросы", from: 41, to: 70 },
      { id: "present-simple-special", title: "Present Simple: специальные вопросы", from: 71, to: 90 },
      { id: "to-be-present", title: "To be: am/is/are", from: 91, to: 170 },
      { id: "past-simple-irregular", title: "Past Simple: неправильные глаголы", from: 171, to: 307 },
      { id: "to-be-past", title: "To be: was/were", from: 308, to: 390 },
      { id: "future-simple", title: "Future Simple: will/won't", from: 391, to: 420 },
      { id: "present-continuous", title: "Present Continuous", from: 421, to: 510 },
      { id: "present-simple-vs-continuous", title: "Present Simple vs Continuous", from: 511, to: 570 },
      { id: "so-such", title: "So / such", from: 571, to: 607 },
      { id: "verb-patterns-like-want", title: "Verb patterns: want / would like / like", from: 608, to: 680 },
      { id: "have-have-got", title: "Have / have got", from: 681, to: 730 },
      { id: "modals-can-must", title: "Modal verbs: can / must", from: 731, to: 809 },
      { id: "have-to-could-may", title: "Have to / could / may", from: 810, to: 910 },
      { id: "passive-present", title: "Passive Voice: Present Simple", from: 911, to: 1011 },
      { id: "passive-past", title: "Passive Voice: Past Simple", from: 1012, to: 1061 },
      { id: "passive-future", title: "Passive Voice: Future Simple", from: 1062, to: 1111 },
      { id: "time-clauses", title: "Time clauses: when / after / before", from: 1112, to: 1162 },
      { id: "conditionals", title: "Conditionals: if-clauses", from: 1163, to: 1213 },
      { id: "imperatives-there-be", title: "Imperatives + there is/are", from: 1214, to: 1263 },
      { id: "there-will-be-going-to", title: "There will be / going to", from: 1264, to: 1414 },
      { id: "make-do-short-answers", title: "Make / do + short answers", from: 1415, to: 1666 },
      { id: "pronouns-possessives", title: "Pronouns and possessives", from: 1667, to: 1716 },
      { id: "quantifiers", title: "Quantifiers: many / much / few / little", from: 1717, to: 1878 },
      { id: "adjectives-adverbs", title: "Adjectives and adverbs", from: 1879, to: 1928 },
      { id: "comparatives", title: "Comparatives", from: 1929, to: 1978 },
      { id: "superlatives", title: "Superlatives", from: 1979, to: 2026 },
      { id: "object-possessive-pronouns", title: "Object and possessive pronouns", from: 2027, to: 2076 },
      { id: "articles-time-prepositions", title: "Articles + time prepositions", from: 2077, to: 2176 },
      { id: "adjective-prepositions", title: "Prepositions after adjectives and verbs", from: 2177, to: 2228 },
      { id: "tag-questions-present", title: "Tag questions: present", from: 2229, to: 2329 },
      { id: "tag-questions-past", title: "Tag questions: past", from: 2330, to: 2379 },
      { id: "tag-questions-have-modals", title: "Tag questions: have got / modals", from: 2380, to: 2450 },
      { id: "infinitive-gerund", title: "Infinitive and gerund", from: 2451, to: 2499 },
    ],
  };
  const QUESTION_TRANSLATION_OVERRIDES = {
    "A1-A2:232": "Я отправил ей любовную записку.",
  };

  function fixBrokenWordSpacing(value) {
    return String(value || "")
      .replace(/\bandI\b/g, "and I")
      .replace(/\bshea\b/gi, "she a")
      .replace(/\btimesa month\b/gi, "times a month");
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
    grammarTopic: document.getElementById("grammar-topic"),
    newSession: document.getElementById("new-session"),
    position: document.getElementById("position"),
    courseProgress: document.getElementById("course-progress"),
    coursePosition: document.getElementById("course-position"),
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
    vocabNewSession: document.getElementById('vocab-new-session'),
    autoSpeakCorrectVocab: document.getElementById('auto-speak-correct-vocab'),
    vocabTabGroup: document.getElementById('vocab-tab-group'),
    vocabModeBtnSentences: document.getElementById('vocab-mode-btn-sentences'),
    vocabModeBtnWords: document.getElementById('vocab-mode-btn-words'),
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
    emptyVocabEnterPromptIdx: -1,
  };

  const vocabState = { session: [], idx: 0, correct: 0, wrong: 0, checkedCurrent: false, wrongCounted: false };

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

  function isAnswerMatch(userNorm, targetNorm) {
    if (userNorm === targetNorm) return true;

    const comparable = (s) => String(s || "").replace(/[-\s]+/g, " ").trim();
    const comparableUser = comparable(userNorm);
    const comparableTarget = comparable(targetNorm);
    if (comparableUser === comparableTarget) return true;

    // Скобки в ответе — необязательная часть. "to fire" принимается для "to fire (an alert)".
    const withoutParens = normalize(targetNorm.replace(/\s*\(.*$/, ""));
    if (withoutParens && (userNorm === withoutParens || comparableUser === comparable(withoutParens))) return true;

    // Если ответ содержит альтернативы через "/", принимаем любую из них.
    const alternatives = targetNorm
      .split("/")
      .map((part) => part.trim())
      .filter(Boolean);
    if (alternatives.length > 1) {
      return alternatives.some((part) => userNorm === part || comparableUser === comparable(part));
    }

    const isMultiWordTarget = comparableTarget.split(" ").filter(Boolean).length > 1;
    const isSingleWordUser = comparableUser.split(" ").filter(Boolean).length === 1;
    if (isMultiWordTarget && isSingleWordUser) return false;

    return false;
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

  function grammarTopicsForLevel(level) {
    const topics = GRAMMAR_TOPICS[level] || [];
    const questions = orderedQuestionsForLevel(level);
    if (!questions.length) return [];

    return topics
      .map((topic) => {
        const count = questions.filter((q) => q.id >= topic.from && q.id <= topic.to).length;
        return { ...topic, count };
      })
      .filter((topic) => topic.count > 0);
  }

  function currentGrammarTopic() {
    return refs.grammarTopic.value || ALL_GRAMMAR_TOPICS_VALUE;
  }

  function selectedGrammarTopicForLevel(level = currentLevel()) {
    const topicId = currentGrammarTopic();
    if (topicId === ALL_GRAMMAR_TOPICS_VALUE) return null;
    return grammarTopicsForLevel(level).find((topic) => topic.id === topicId) || null;
  }

  function questionsForCurrentGrammarTopic(level = currentLevel()) {
    const questions = orderedQuestionsForLevel(level);
    const topic = selectedGrammarTopicForLevel(level);
    if (!topic) return questions;
    return questions.filter((q) => q.id >= topic.from && q.id <= topic.to);
  }

  function ensureGrammarTopicOptions(level = currentLevel(), preferredValue = refs.grammarTopic.value) {
    const previous = preferredValue || ALL_GRAMMAR_TOPICS_VALUE;
    refs.grammarTopic.innerHTML = "";

    const allOpt = document.createElement("option");
    allOpt.value = ALL_GRAMMAR_TOPICS_VALUE;
    allOpt.textContent = "Все темы";
    refs.grammarTopic.appendChild(allOpt);

    grammarTopicsForLevel(level).forEach((topic) => {
      const opt = document.createElement("option");
      opt.value = topic.id;
      opt.textContent = `${topic.title} (${topic.count})`;
      refs.grammarTopic.appendChild(opt);
    });

    const hasPrevious = Array.from(refs.grammarTopic.options).some((opt) => opt.value === previous);
    refs.grammarTopic.value = hasPrevious ? previous : ALL_GRAMMAR_TOPICS_VALUE;
  }

  function coursePositionForQuestion(question, level = currentLevel()) {
    const questions = questionsForCurrentGrammarTopic(level);
    if (!question || !questions.length) {
      return { current: 0, total: questions.length };
    }

    const index = questions.findIndex((item) => item.id === question.id);
    return {
      current: index >= 0 ? index + 1 : 0,
      total: questions.length,
    };
  }

  function pickSession() {
    return questionsForCurrentGrammarTopic();
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
        autoSpeakCorrect: state.autoSpeakCorrect,
        idx: state.idx,
        correct: state.correct,
        wrong: state.wrong,
        vocabulary: {
          topic: refs.vocabTopic.value,
          exerciseMode: _vocabExerciseMode,
          autoSpeakCorrect: refs.autoSpeakCorrectVocab.checked,
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
    return words.slice();
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

  function restoreVocabProgress(saved) {
    ensureVocabTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.vocabTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.vocabTopic.value = topicValue;
    }

    refs.autoSpeakCorrectVocab.checked = saved.autoSpeakCorrect !== false;
    if (saved.exerciseMode === 'words' || saved.exerciseMode === 'sentences') {
      setVocabExerciseMode(saved.exerciseMode);
    }

    vocabState.session = pickVocabSession();
    vocabState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, vocabState.session.length - 1)));
    vocabState.correct = Math.max(0, asNumber(saved.correct, 0));
    vocabState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    return Boolean(vocabState.session.length);
  }

  let _vocabExerciseMode = 'sentences';

  function vocabExerciseMode() {
    return _vocabExerciseMode;
  }

  function setVocabExerciseMode(mode) {
    _vocabExerciseMode = mode;
    refs.vocabModeBtnSentences.classList.toggle('vocab-mode-btn--active', mode === 'sentences');
    refs.vocabModeBtnWords.classList.toggle('vocab-mode-btn--active', mode === 'words');
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
    refs.courseProgress.hidden = true;
    refs.correctCount.textContent = String(vocabState.correct);
    refs.wrongCount.textContent = String(vocabState.wrong);

    if (vocabExerciseMode() === 'words') {
      refs.vocabModeLabel.textContent = 'Переведите на английский';
      renderQuestionText(w.translation);
      setSelectedSentenceForSpeech(w.infinitive || w.word);
      refs.questionTranslation.classList.remove('vocab-hint');
      setQuestionTranslation('');
    } else {
      refs.vocabModeLabel.textContent = 'Введите пропущенное слово';
      renderQuestionText(w.gapExample || w.example);
      setSelectedSentenceForSpeech(w.example || w.gapExample || '');
      refs.questionTranslation.classList.add('vocab-hint');
      void showVocabSentenceTranslation(w);
    }

    refs.answerInput.value = '';
    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
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

    const wordTarget = w.infinitive || w.word;
    const target = vocabExerciseMode() === 'words' ? normalize(wordTarget) : normalize(w.answer);
    if (isAnswerMatch(user, target)) {
      if (!vocabState.wrongCounted) {
        vocabState.correct += 1;
        refs.correctCount.textContent = String(vocabState.correct);
      }
      vocabState.checkedCurrent = true;
      playCorrectSound();
      flashCorrect();
      setFeedback('Верно!', true);
      saveProgress();
      queueVocabNextAfterCorrect(w);
    } else {
      if (!vocabState.wrongCounted) {
        vocabState.wrong += 1;
        vocabState.wrongCounted = true;
        refs.wrongCount.textContent = String(vocabState.wrong);
      }
      playWrongSound();
      const correctAnswer = vocabExerciseMode() === 'words' ? (w.infinitive || w.word) : w.answer;
      setFeedback('Почти. Правильный ответ: ' + correctAnswer, false);
      refs.answerInput.value = '';
      refs.answerInput.focus();
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
    const textToSpeak = vocabExerciseMode() === 'words' ? (w.infinitive || w.word) : w.example;
    if (state.autoSpeakCorrect && textToSpeak) {
      const started = speakEnglishText(textToSpeak, {
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
    refs.vocabTabGroup.classList.toggle('vocab-active', mode === 'vocabulary');
    refs.vocabModeBtnSentences.disabled = mode !== 'vocabulary';
    refs.vocabModeBtnWords.disabled = mode !== 'vocabulary';
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
    const coursePosition = coursePositionForQuestion(q);
    refs.courseProgress.hidden = false;
    refs.coursePosition.textContent = selectedGrammarTopicForLevel()
      ? `${q.id} · ${coursePosition.current} из ${coursePosition.total} в теме`
      : `${q.id} из ${coursePosition.total}`;
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
    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
    refs.answerInput.focus();
    refs.hint.textContent = "";
    setFeedback("", null);
    state.checkedCurrent = false;
    state.wrongCounted = false;
    void showQuestionTranslation(q);
  }

  function showSessionComplete() {
    const stats = currentMode === 'vocabulary' ? vocabState : state;
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

    if (isAnswerMatch(user, target)) {
      if (!state.wrongCounted) {
        state.correct += 1;
        refs.correctCount.textContent = String(state.correct);
      }
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
      refs.answerInput.value = '';
      refs.answerInput.focus();
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

  refs.answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      if (currentMode === 'vocabulary' && !normalize(refs.answerInput.value)) {
        const shouldSpeak =
          vocabState.idx === state.emptyVocabEnterPromptIdx &&
          refs.answerInput.placeholder === EMPTY_ENTER_SPEAK_PLACEHOLDER;

        if (shouldSpeak) {
          event.preventDefault();
          speakSelectedSentence();
          return;
        }

        state.emptyVocabEnterPromptIdx = vocabState.idx;
        refs.answerInput.placeholder = EMPTY_ENTER_SPEAK_PLACEHOLDER;
        event.preventDefault();
        return;
      } else {
        state.emptyVocabEnterPromptIdx = -1;
        refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
      }
      refs.checkBtn.click();
    }
  });

  refs.answerInput.addEventListener("input", () => {
    state.emptyVocabEnterPromptIdx = -1;
    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
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

  refs.nextSessionBtn.addEventListener("click", () => {
    hideSessionComplete();
    clearAutoNextTimer();
    if (currentMode === 'vocabulary') {
      vocabState.session = pickVocabSession();
      vocabState.idx = 0;
      vocabState.correct = 0;
      vocabState.wrong = 0;
      renderVocab();
      saveProgress();
      return;
    }
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

  refs.vocabModeBtnSentences.addEventListener('click', () => {
    setVocabExerciseMode('sentences');
    if (currentMode !== 'vocabulary') switchMode('vocabulary');
    clearAutoNextTimer();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    renderVocab();
    saveProgress();
  });

  refs.vocabModeBtnWords.addEventListener('click', () => {
    setVocabExerciseMode('words');
    if (currentMode !== 'vocabulary') switchMode('vocabulary');
    clearAutoNextTimer();
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
    ensureGrammarTopicOptions(currentLevel());
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  refs.grammarTopic.addEventListener("change", () => {
    clearAutoNextTimer();
    state.session = pickSession();
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    render();
    saveProgress();
  });

  setVocabExerciseMode(_vocabExerciseMode);
  ensureGrammarTopicOptions(levelNames[0]);
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
    switchMode('grammar');
  }
})();
