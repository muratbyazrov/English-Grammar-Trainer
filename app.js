(function () {
  const STORAGE_KEY = "english-grammar-trainer.progress.v2";
  const AUTO_NEXT_DELAY_MS = 450;

  const allLevels = (window.GRAMMAR_QUESTIONS && typeof window.GRAMMAR_QUESTIONS === "object" && !Array.isArray(window.GRAMMAR_QUESTIONS))
    ? window.GRAMMAR_QUESTIONS
    : {};
  const levelNames = Object.keys(allLevels).sort();

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
    wordTranslation: document.getElementById("word-translation"),
    speakWordBtn: document.getElementById("speak-word-btn"),
    answerInput: document.getElementById("answer-input"),
    checkBtn: document.getElementById("check-btn"),
    prevBtn: document.getElementById("prev-btn"),
    nextBtn: document.getElementById("next-btn"),
    startFrom: document.getElementById("start-from"),
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
    wordTranslationRequestId: 0,
    selectedWordForSpeech: "",
    speechVoices: [],
  };

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
        level: currentLevel(),
        sessionSize: refs.sessionSize.value,
        startFrom: refs.startFrom.value,
        sessionIds: state.session.map((q) => q.id),
        idx: state.idx,
        correct: state.correct,
        wrong: state.wrong,
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

      state.session = session;
      state.idx = idx;
      state.correct = correct;
      state.wrong = wrong;
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
      return basePrompt.replace(/\.{3,}/g, resolvedAnswer);
    }
    return basePrompt;
  }

  function renderQuestionText(prompt) {
    const text = displayPrompt(prompt);
    const parts = text.split(/(\s+)/);
    const fragment = document.createDocumentFragment();

    parts.forEach((part) => {
      if (!part) return;
      if (/^\s+$/.test(part)) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const match = part.match(/^([^A-Za-z']*)([A-Za-z]+(?:'[A-Za-z]+)?)([^A-Za-z']*)$/);
      if (!match) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const [, prefix, word, suffix] = match;
      if (prefix) fragment.appendChild(document.createTextNode(prefix));

      const span = document.createElement("span");
      span.className = "question-word";
      span.textContent = word;
      span.dataset.word = word.toLowerCase();
      fragment.appendChild(span);

      if (suffix) fragment.appendChild(document.createTextNode(suffix));
    });

    refs.questionText.textContent = "";
    refs.questionText.appendChild(fragment);
  }

  function setQuestionTranslation(text) {
    refs.questionTranslation.textContent = text;
  }

  function setWordTranslation(text) {
    refs.wordTranslation.textContent = text;
  }

  function setSelectedWordForSpeech(word) {
    const normalized = String(word || "").trim();
    state.selectedWordForSpeech = normalized;
    refs.speakWordBtn.disabled = !normalized;
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

  function speakSelectedWord() {
    const word = state.selectedWordForSpeech;
    if (!word) return;

    if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") {
      setWordTranslation("Озвучка недоступна в этом браузере.");
      return;
    }

    const utterance = new window.SpeechSynthesisUtterance(word);
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

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  function extractTopTranslations(payload, limit = 3) {
    if (!payload) return [];

    const results = [];
    const seen = new Set();
    const add = (value) => {
      const cleaned = String(value || "").trim();
      if (!cleaned) return;
      const key = cleaned.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      results.push(cleaned);
    };

    if (payload && Array.isArray(payload.sentences)) {
      payload.sentences.forEach((s) => add(s && s.trans));
    }

    if (payload && Array.isArray(payload.dict)) {
      payload.dict.forEach((entry) => {
        if (!entry || !Array.isArray(entry.terms)) return;
        entry.terms.forEach((term) => add(term));
      });
    }

    if (Array.isArray(payload) && Array.isArray(payload[0])) {
      payload[0].forEach((chunk) => add(Array.isArray(chunk) ? chunk[0] : ""));
    }

    return results.slice(0, limit);
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

  async function getWordTranslations(word) {
    const cacheKey = `word:${word.toLowerCase()}`;
    const cached = state.translationCache.get(cacheKey);
    if (cached) {
      return cached;
    }

    const payload = await fetchTranslationPayload(word);
    const translated = extractTopTranslations(payload, 3);
    if (translated.length) {
      state.translationCache.set(cacheKey, translated);
    }
    return translated;
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
    if (!resolvedPrompt) {
      setQuestionTranslation("");
      return;
    }

    if (question && typeof question.translation === "string" && question.translation.trim()) {
      setQuestionTranslation(`(${question.translation.trim()})`);
      return;
    }

    const reqId = state.sentenceTranslationRequestId + 1;
    state.sentenceTranslationRequestId = reqId;
    setQuestionTranslation("(Перевожу предложение...)");

    try {
      const translated = await getSentenceTranslation(resolvedPrompt);
      if (reqId !== state.sentenceTranslationRequestId) return;
      if (!translated) {
        setQuestionTranslation("(Не нашел перевод предложения.)");
        return;
      }
      setQuestionTranslation(`(${translated})`);
    } catch (_error) {
      if (reqId !== state.sentenceTranslationRequestId) return;
      setQuestionTranslation("(Не удалось получить перевод предложения. Проверь интернет.)");
    }
  }

  async function handleQuestionWordClick(wordEl) {
    const word = String(wordEl.dataset.word || "").trim();
    if (!word) return;
    setSelectedWordForSpeech(word);

    const reqId = state.wordTranslationRequestId + 1;
    state.wordTranslationRequestId = reqId;
    setWordTranslation(`Переводим "${word}"...`);

    try {
      const translated = await getWordTranslations(word);
      if (reqId !== state.wordTranslationRequestId) return;
      if (!translated.length) {
        setWordTranslation(`Не нашел перевод для "${word}".`);
        return;
      }
      const formatted = translated.map((item, i) => `${i + 1}) ${item}`).join("; ");
      setWordTranslation(`"${word}" → ${formatted}`);
    } catch (_error) {
      if (reqId !== state.wordTranslationRequestId) return;
      setWordTranslation(`Не удалось получить перевод для "${word}". Проверь интернет.`);
    }
  }

  function hideSessionComplete() {
    refs.sessionComplete.hidden = true;
  }

  function render() {
    hideSessionComplete();
    state.sentenceTranslationRequestId += 1;
    state.wordTranslationRequestId += 1;

    const q = currentQuestion();
    if (!q) {
      refs.questionText.textContent = "Вопросы не найдены.";
      setQuestionTranslation("");
      setWordTranslation("");
      setSelectedWordForSpeech("");
      return;
    }

    refs.position.textContent = `${state.idx + 1} / ${state.session.length}`;
    refs.correctCount.textContent = String(state.correct);
    refs.wrongCount.textContent = String(state.wrong);
    refs.questionId.textContent = String(q.id);
    renderQuestionText(q.prompt);
    setQuestionTranslation("");
    setWordTranslation("Нажми на слово в вопросе, чтобы увидеть перевод слова.");
    setSelectedWordForSpeech("");
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
      clearAutoNextTimer();
      state.autoNextTimer = window.setTimeout(() => {
        state.autoNextTimer = null;
        nextQuestion();
        saveProgress();
      }, AUTO_NEXT_DELAY_MS);
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
    if (state.idx <= 0) return;
    clearAutoNextTimer();
    state.idx -= 1;
    render();
    saveProgress();
  });

  refs.nextBtn.addEventListener("click", () => {
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

  refs.questionText.addEventListener("click", (event) => {
    const wordEl = event.target.closest(".question-word");
    if (!wordEl || !refs.questionText.contains(wordEl)) {
      return;
    }
    void handleQuestionWordClick(wordEl);
    refs.answerInput.focus();
  });

  refs.speakWordBtn.addEventListener("click", () => {
    speakSelectedWord();
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
    state.session = pickSession();
    saveProgress();
  }
  render();
})();
