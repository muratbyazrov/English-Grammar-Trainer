window.Trainer = window.Trainer || {};
window.Trainer.createGrammarMode = function ({
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
}) {
  const { ALL_GRAMMAR_TOPICS_VALUE, GRAMMAR_TOPICS, GRAMMAR_TOPIC_GROUPS, QUESTION_TRANSLATION_OVERRIDES } = window.TrainerData;

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

  function grammarTopicGroupFor(topic) {
    const searchable = `${topic.id} ${topic.title}`;
    return GRAMMAR_TOPIC_GROUPS.find((group) => group.pattern.test(searchable))
      || GRAMMAR_TOPIC_GROUPS[GRAMMAR_TOPIC_GROUPS.length - 1];
  }

  function groupedGrammarTopics(level = currentLevel()) {
    const grouped = new Map(GRAMMAR_TOPIC_GROUPS.map((group) => [group.id, { ...group, topics: [] }]));
    grammarTopicsForLevel(level).forEach((topic) => {
      const group = grammarTopicGroupFor(topic);
      grouped.get(group.id).topics.push(topic);
    });
    return GRAMMAR_TOPIC_GROUPS
      .map((group) => grouped.get(group.id))
      .filter((group) => group.topics.length > 0);
  }

  function formatGrammarCount(count, forms) {
    const value = Math.max(0, Number(count) || 0);
    const lastTwo = value % 100;
    const last = value % 10;
    const form = lastTwo >= 11 && lastTwo <= 14
      ? forms[2]
      : (last === 1 ? forms[0] : (last >= 2 && last <= 4 ? forms[1] : forms[2]));
    return `${value} ${form}`;
  }

  function currentGrammarTopicDetails(level = currentLevel()) {
    const value = currentGrammarTopic();
    if (value === ALL_GRAMMAR_TOPICS_VALUE) {
      return {
        id: ALL_GRAMMAR_TOPICS_VALUE,
        title: 'Все темы',
        count: orderedQuestionsForLevel(level).length,
        icon: '🧭',
      };
    }
    const topic = grammarTopicsForLevel(level).find((candidate) => candidate.id === value);
    if (!topic) return null;
    return { ...topic, icon: grammarTopicGroupFor(topic).icon };
  }

  function syncGrammarTopicTrigger() {
    const topic = currentGrammarTopicDetails();
    if (!topic) return;
    refs.grammarTopicTriggerIcon.textContent = topic.icon;
    refs.grammarTopicTriggerText.textContent = topic.title;
    refs.grammarTopicTrigger.title = topic.title;
  }

  function appendGrammarTopicCard(parent, topic, icon, selectedValue) {
    const cardButton = document.createElement('button');
    const isSelected = topic.id === selectedValue;
    cardButton.type = 'button';
    cardButton.className = `vocab-topic-card grammar-topic-card${isSelected ? ' vocab-topic-card--selected' : ''}`;
    cardButton.dataset.topicValue = topic.id;
    cardButton.setAttribute('role', 'option');
    cardButton.setAttribute('aria-selected', String(isSelected));

    const cardIcon = document.createElement('span');
    cardIcon.className = 'vocab-topic-card-icon grammar-topic-card-icon';
    cardIcon.setAttribute('aria-hidden', 'true');
    cardIcon.textContent = icon;

    const copy = document.createElement('span');
    copy.className = 'vocab-topic-card-copy';
    const title = document.createElement('strong');
    title.textContent = topic.title;
    const count = document.createElement('span');
    count.textContent = formatGrammarCount(topic.count, ['вопрос', 'вопроса', 'вопросов']);
    copy.appendChild(title);
    copy.appendChild(count);

    const check = document.createElement('span');
    check.className = 'vocab-topic-card-check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';

    cardButton.appendChild(cardIcon);
    cardButton.appendChild(copy);
    cardButton.appendChild(check);
    cardButton.addEventListener('click', () => {
      if (refs.grammarTopic.value !== topic.id) {
        refs.grammarTopic.value = topic.id;
        refs.grammarTopic.dispatchEvent(new Event('change', { bubbles: true }));
      }
      hideGrammarTopicPicker();
    });
    parent.appendChild(cardButton);
  }

  function renderGrammarTopicGroups(level = currentLevel()) {
    const selectedValue = currentGrammarTopic();
    const allTopic = {
      id: ALL_GRAMMAR_TOPICS_VALUE,
      title: 'Все темы',
      count: orderedQuestionsForLevel(level).length,
    };
    refs.grammarTopicGroups.innerHTML = '';

    const allContainer = document.createElement('div');
    allContainer.className = 'grammar-topic-all';
    appendGrammarTopicCard(allContainer, allTopic, '🧭', selectedValue);
    refs.grammarTopicGroups.appendChild(allContainer);

    groupedGrammarTopics(level).forEach((group) => {
      const section = document.createElement('section');
      section.className = 'grammar-topic-group';
      section.setAttribute('role', 'group');

      const header = document.createElement('header');
      header.className = 'grammar-topic-group-header';
      const icon = document.createElement('span');
      icon.className = 'grammar-topic-group-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = group.icon;
      const headingCopy = document.createElement('div');
      const title = document.createElement('h3');
      title.textContent = group.title;
      const summary = document.createElement('p');
      const questionCount = group.topics.reduce((total, topic) => total + topic.count, 0);
      summary.textContent = `${formatGrammarCount(group.topics.length, ['тема', 'темы', 'тем'])} · ${formatGrammarCount(questionCount, ['вопрос', 'вопроса', 'вопросов'])}`;
      headingCopy.appendChild(title);
      headingCopy.appendChild(summary);
      header.appendChild(icon);
      header.appendChild(headingCopy);

      const cards = document.createElement('div');
      cards.className = 'grammar-topic-card-grid';
      group.topics.forEach((topic) => appendGrammarTopicCard(cards, topic, group.icon, selectedValue));

      section.appendChild(header);
      section.appendChild(cards);
      refs.grammarTopicGroups.appendChild(section);
    });
  }

  function showGrammarTopicPicker() {
    ensureGrammarTopicOptions(currentLevel());
    renderGrammarTopicGroups(currentLevel());
    const topics = grammarTopicsForLevel(currentLevel());
    refs.grammarTopicModalSubtitle.textContent = `${currentLevel()} · ${formatGrammarCount(topics.length, ['тема', 'темы', 'тем'])} · ${formatGrammarCount(orderedQuestionsForLevel(currentLevel()).length, ['вопрос', 'вопроса', 'вопросов'])}`;
    refs.grammarTopicOverlay.hidden = false;
    refs.grammarTopicTrigger.setAttribute('aria-expanded', 'true');
    const selectedCard = refs.grammarTopicGroups.querySelector('.vocab-topic-card--selected');
    (selectedCard || refs.grammarTopicClose).focus();
  }

  function hideGrammarTopicPicker() {
    refs.grammarTopicOverlay.hidden = true;
    refs.grammarTopicTrigger.setAttribute('aria-expanded', 'false');
    refs.grammarTopicTrigger.focus();
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
    syncGrammarTopicTrigger();
  }

  function pickSession() {
    return questionsForCurrentGrammarTopic();
  }

  function fixBrokenWordSpacing(value) {
    return String(value || "")
      .replace(/\b([A-Za-z']*[a-z])I('ve)?\b/g, "$1 I$2")
      .replace(/\b(and|when|that|as|if|Yesterday|night|but|you)I\b/gi, "$1 I")
      .replace(/\b(should|must|haven't|shouldn't|mustn't)I\b/gi, "$1 I")
      .replace(/\bcan'the\b/gi, "can't he")
      .replace(/\bisn'tit\b/gi, "isn't it")
      .replace(/\bshouldn'twe\b/gi, "shouldn't we")
      .replace(/\bgot[аa]\b/gi, "got a")
      .replace(/\bfinda\b/gi, "find a")
      .replace(/\bwasa\b/gi, "was a")
      .replace(/\bisa\b/gi, "is a")
      .replace(/\bshea\b/gi, "she a")
      .replace(/\btimesa\b/gi, "times a")
      .replace(/\bfora\b/gi, "for a")
      .replace(/\bsucha\b/gi, "such a")
      .replace(/\blikea\b/gi, "like a")
      .replace(/\bina\b/gi, "in a")
      .replace(/\bmakinga\b/gi, "making a")
      .replace(/\btraininga\b/gi, "training a")
      .replace(/\bHavea\b/g, "Have a")
      .replace(/\bhavea\b/g, "have a")
      .replace(/\bgeta\b/gi, "get a")
      .replace(/\btheInternet\b/g, "the Internet")
      .replace(/\btodo\b/gi, "to do")
      .replace(/\bbust\b/gi, "busy")
      .replace(/\bknowning\b/gi, "knowing");
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

  function currentQuestion() {
    return grammarState.session[grammarState.idx] || null;
  }

  function queueNextQuestionAfterCorrect(question) {
    cancelPendingActivity();

    const resolvedPrompt = fillPromptWithAnswer(question && question.prompt, question && question.answer);
    if (grammarState.autoSpeakCorrect && resolvedPrompt) {
      const started = speakEnglishText(resolvedPrompt, {
        onComplete: () => {
          nextGrammarQuestion();
          saveProgress();
        },
      });
      if (started) {
        return;
      }
    }

    activity.schedule('auto-next', () => {
      nextGrammarQuestion();
      saveProgress();
    }, AUTO_NEXT_DELAY_MS);
  }

  function renderGrammar() {
    hideSessionComplete();
    cancelPendingActivity();
    viewState.sentenceTranslationRequestId += 1;

    const q = currentQuestion();
    if (!q) {
      refs.questionText.textContent = "Вопросы не найдены.";
      setQuestionTranslation("");
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${grammarState.idx + 1} / ${grammarState.session.length}`;
    refs.correctCount.textContent = String(grammarState.correct);
    refs.wrongCount.textContent = String(grammarState.wrong);
    refs.questionId.textContent = String(q.id);
    refs.speakWordBtn.textContent = 'Озвучить предложение';
    renderQuestionText(q.prompt);
    setQuestionTranslation("");
    setSelectedSentenceForSpeech(fillPromptWithAnswer(q.prompt, q.answer));
    refs.optionA.textContent = `a) ${q.options.a}`;
    refs.optionB.textContent = `b) ${q.options.b}`;
    refs.optionC.textContent = `c) ${q.options.c}`;

    refs.answerInput.value = "";
    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
    refs.answerInput.focus();
    setFeedback("", null);
    grammarState.checkedCurrent = false;
    grammarState.wrongCounted = false;
    void showQuestionTranslation(q);
  }

  function nextGrammarQuestion() {
    if (!grammarState.session.length) {
      return;
    }

    grammarState.idx += 1;
    if (grammarState.idx >= grammarState.session.length) {
      grammarState.idx = grammarState.session.length - 1;
      showSessionComplete();
      saveProgress();
      return;
    }

    renderGrammar();
  }

  function checkGrammarAnswer() {
    const q = currentQuestion();
    if (!q || grammarState.checkedCurrent) {
      return;
    }

    const user = normalize(refs.answerInput.value);
    const target = normalize(q.answer);

    if (!user) {
      setFeedback("Сначала впиши ответ.", false);
      return;
    }

    if (isAnswerMatch(user, target)) {
      if (!grammarState.wrongCounted) {
        grammarState.correct += 1;
        refs.correctCount.textContent = String(grammarState.correct);
      }
      grammarState.checkedCurrent = true;
      setFeedback("Верно!", true);
      playCorrectSound();
      flashCorrect();
      queueNextQuestionAfterCorrect(q);
    } else {
      if (!grammarState.wrongCounted) {
        grammarState.wrong += 1;
        grammarState.wrongCounted = true;
        refs.wrongCount.textContent = String(grammarState.wrong);
      }
      setFeedback(`Почти. Правильный ответ: ${q.answer}`, false);
      playWrongSound();
      refs.answerInput.value = '';
      refs.answerInput.focus();
    }

    saveProgress();
  }

  Object.keys(allLevels).forEach((level) => {
    const questions = allLevels[level];
    if (!Array.isArray(questions)) return;
    allLevels[level] = questions.map(sanitizeQuestion);
  });

  return {
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
  };
};
