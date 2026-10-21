window.Trainer = window.Trainer || {};
window.Trainer.createVocabularyMode = function ({
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
  sessionScoring,
  setFeedback,
  setQuestionTranslation,
  setSelectedSentenceForSpeech,
  showSessionComplete,
  shuffleItems,
  speakEnglishText,
  viewState,
  vocabState,
  vocabTopics
}) {
  const progressKeys = new Map();
  vocabTopics.forEach(topic => (topic.words || []).forEach(word => {
    // Legacy IT IDs are positional. Keep their progress stable when files gain words.
    progressKeys.set(word, typeof word.id === 'string'
      ? word.id : `legacy:${JSON.stringify([topic.id || topic.topic, word.word])}`);
  }));
  const validProgressKeys = new Set(progressKeys.values());

  const {
    catalog,
    currentVocabTopicTitle,
    formatVocabWordCount,
    ensureVocabTopicOptions,
    hideVocabTopicPicker,
    nextVocabTopic,
    normalizeOxfordLevel,
    showVocabTopicPicker,
    syncNextVocabTopic,
    syncVocabTopicTrigger,
    wordsForNode
  } = window.Trainer.createVocabularyPicker({
    refs,
    vocabState,
    vocabTopics,
    saveProgress,
    mistakeWords,
    vocabProgressForWords,
    resetVisitedWords: words => words.forEach(word => vocabState.visitedWordIds.delete(progressKeys.get(word))),
    onReviewTopic: startMistakeReview
  });

  function markVocabWordVisited(word) {
    const key = progressKeys.get(word);
    if (key) vocabState.visitedWordIds.add(key);
  }

  function mistakeWords(words) {
    return words.filter(word => vocabState.mistakeProgress.has(progressKeys.get(word)));
  }

  function recordVocabMistake(word) {
    const key = progressKeys.get(word);
    if (!key) return;
    vocabState.mistakeProgress.set(key, 0);
    markVocabWordVisited(word);
    sessionScoring.record(vocabState, 'wrong');
    vocabState.wrongCounted = true;
    refs.wrongCount.textContent = String(vocabState.wrong);
  }

  function recordVocabHint() {
    const word = vocabState.session[vocabState.idx];
    if (!word || vocabState.checkedCurrent || vocabState.outcomes[word.id] === 'correct') return;
    recordVocabMistake(word);
    setFeedback('Слово добавлено в ошибки. Введите ответ, чтобы продолжить.', null);
    saveProgress();
  }

  function remainingVocabMistakes() {
    return mistakeWords(vocabWordsForTopicValue(refs.vocabTopic.value)).length;
  }

  function unvisitedVocabWords(words) {
    return words.filter(word => !vocabState.visitedWordIds.has(progressKeys.get(word)));
  }

  function remainingVocabUnvisited() {
    return unvisitedVocabWords(vocabWordsForTopicValue(refs.vocabTopic.value)).length;
  }

  function collectUnansweredVocabMistakes() {
    vocabState.session.forEach(word => {
      if (!vocabState.outcomes[word.id]) {
        vocabState.mistakeProgress.set(progressKeys.get(word), 0);
      }
    });
  }

  function vocabProgressForWords(words) {
    const total = words.length;
    const visitedWords = words.filter(word => vocabState.visitedWordIds.has(progressKeys.get(word)));
    const visited = visitedWords.length;
    const wrong = mistakeWords(visitedWords).length;
    const correct = visited - wrong;
    // Show 100% only when every word has been visited.
    const percent = total ? Math.min(visited === total ? 100 : 99, Math.round(visited / total * 100)) : 0;
    return { visited, total, percent, correct, wrong };
  }

  function pickVocabSession() {
    const available = vocabWordsForTopicValue(refs.vocabTopic.value);
    if (vocabState.reviewMistakes) return shuffleItems(mistakeWords(available));
    const unvisited = unvisitedVocabWords(available);
    return shuffleItems(unvisited.length ? unvisited : available);
  }

  function startVocabSession() {
    cancelPendingActivity();
    ensureVocabTopicOptions();
    sessionScoring.start(vocabState, pickVocabSession());
    renderVocab();
    saveProgress();
  }

  function startMistakeReview(node, level = vocabState.oxfordLevel, levelMode = vocabState.oxfordLevelMode) {
    if (node.collection === 'Oxford 3000') {
      vocabState.oxfordLevel = level;
      vocabState.oxfordLevelMode = levelMode;
    }
    refs.vocabTopic.value = node.value;
    vocabState.reviewMistakes = true;
    startVocabSession();
    hideVocabTopicPicker();
  }

  function reviewCurrentVocabMistakes() {
    const node = catalog.nodes.get(refs.vocabTopic.value);
    if (!node || !remainingVocabMistakes()) return;
    startMistakeReview(node, vocabState.oxfordLevel, vocabState.oxfordLevelMode);
  }

  function vocabWordsForTopicValue(topicValue) {
    const node = catalog.nodes.get(topicValue);
    return wordsForNode(node);
  }

  function escapeRegExp(value) {
    return String(value || '').replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function vocabExampleCandidates(item) {
    const values = [
      item && item.answer,
      item && item.word,
      item && item.infinitive,
      ...((item && Array.isArray(item.answers)) ? item.answers.map((answer) => answer && answer.text) : []),
    ];

    return [...new Set(values
      .flatMap((value) => String(value || '').split('/'))
      .map((value) => value.trim().replace(/^to\s+/i, ''))
      .filter((value) => value.length > 1))]
      .sort((a, b) => b.length - a.length);
  }

  function vocabExampleTokenPattern(token) {
    const normalized = String(token || '').toLocaleLowerCase('en-US');
    const irregular = {
      leave: '(?:leave|leaves|leaving|left)',
      take: '(?:take|takes|taking|took|taken)',
    };
    if (irregular[normalized]) return irregular[normalized];
    if (normalized.endsWith('e') && normalized.length > 3) {
      return `${escapeRegExp(normalized.slice(0, -1))}(?:e|ed|es|ing)?`;
    }
    if (normalized.endsWith('s')) {
      return `${escapeRegExp(normalized)}(?:ed|es|ing)?`;
    }
    return `${escapeRegExp(normalized)}(?:s|ed|ing)?`;
  }

  function normalizeVocabExampleRanges(ranges) {
    return ranges
      .sort((a, b) => a.start - b.start || a.end - b.end)
      .reduce((result, range) => {
        const previous = result[result.length - 1];
        if (previous && range.start < previous.end) {
          previous.end = Math.max(previous.end, range.end);
        } else {
          result.push({ start: range.start, end: range.end });
        }
        return result;
      }, []);
  }

  function vocabExampleTokenRanges(example, candidate) {
    const ignoredWords = new Set(['the', 'to', 'and', 'for', 'from', 'with', 'this', 'that']);
    const tokens = [...new Set(String(candidate || '').match(/[A-Za-z0-9']+/g) || [])]
      .filter((token) => token.length > 1 && !ignoredWords.has(token.toLocaleLowerCase('en-US')))
      .sort((a, b) => b.length - a.length);

    const ranges = [];
    tokens.forEach((token) => {
      const pattern = new RegExp(`\\b${vocabExampleTokenPattern(token)}\\b`, 'gi');
      for (const match of example.matchAll(pattern)) {
        ranges.push({ start: match.index, end: match.index + match[0].length });
      }
    });
    return normalizeVocabExampleRanges(ranges);
  }

  function vocabExampleTargetRanges(item) {
    const example = String((item && item.example) || '').trim();
    if (!example) return [];

    for (const candidate of vocabExampleCandidates(item)) {
      const match = new RegExp(escapeRegExp(candidate), 'i').exec(example);
      if (match) return [{ start: match.index, end: match.index + match[0].length }];
    }

    for (const candidate of vocabExampleCandidates(item)) {
      const ranges = vocabExampleTokenRanges(example, candidate);
      if (ranges.length) return ranges;
    }
    return [];
  }

  function maskedVocabExample(item) {
    const example = String((item && item.example) || '').trim();
    if (!example) return '';
    const ranges = vocabExampleTargetRanges(item);
    if (!ranges.length) return example;

    let result = '';
    let cursor = 0;
    ranges.forEach((range) => {
      result += example.slice(cursor, range.start);
      result += example.slice(range.start, range.end)
        .split(/\s+/)
        .map(() => '_____')
        .join(' ');
      cursor = range.end;
    });
    return result + example.slice(cursor);
  }

  function renderRevealedVocabExample(item, result) {
    const example = String((item && item.example) || '').trim();
    const ranges = vocabExampleTargetRanges(item);
    refs.vocabExampleText.textContent = '';

    if (!ranges.length) {
      refs.vocabExampleText.textContent = example;
      return;
    }

    let cursor = 0;
    ranges.forEach((range) => {
      refs.vocabExampleText.appendChild(document.createTextNode(example.slice(cursor, range.start)));
      const answer = document.createElement('span');
      answer.className = `vocab-example-answer vocab-example-answer--${result}`;
      answer.textContent = example.slice(range.start, range.end);
      refs.vocabExampleText.appendChild(answer);
      cursor = range.end;
    });
    refs.vocabExampleText.appendChild(document.createTextNode(example.slice(cursor)));
  }

  function renderVocabExample(item, result = '') {
    const example = String((item && item.example) || '').trim();
    const revealAnswer = result === 'correct' || result === 'wrong';
    refs.vocabExample.hidden = !example;
    refs.vocabExample.classList.toggle('vocab-example--revealed', Boolean(example && revealAnswer));
    if (!example) {
      refs.vocabExampleText.textContent = '';
    } else if (revealAnswer) {
      renderRevealedVocabExample(item, result);
    } else {
      refs.vocabExampleText.textContent = maskedVocabExample(item);
    }
  }

  function appendVocabListItem(parent, item, index) {
    const row = document.createElement('article');
    row.className = 'vocab-list-item';

    const number = document.createElement('span');
    number.className = 'vocab-list-number';
    number.textContent = String(index + 1);

    const content = document.createElement('div');
    content.className = 'vocab-list-item-content';

    const word = document.createElement('div');
    word.className = 'vocab-list-word';
    word.textContent = String((item && (item.word || item.infinitive || item.answer)) || '').trim() || 'Без слова';
    if (item.level) {
      const meta = document.createElement('span');
      meta.className = 'vocab-word-meta';
      meta.textContent = ` ${item.level} · ${item.partOfSpeech || ''}`;
      word.appendChild(meta);
    }

    const translation = document.createElement('div');
    translation.className = 'vocab-list-translation';
    translation.textContent = String((item && item.translation) || '').trim();

    content.appendChild(word);
    if (translation.textContent) {
      content.appendChild(translation);
    }

    if (item && item.example) {
      const example = document.createElement('div');
      example.className = 'vocab-list-example';
      example.textContent = item.example;
      content.appendChild(example);
      if (item.sentenceTranslation) {
        const sentenceTranslation = document.createElement('div');
        sentenceTranslation.className = 'vocab-list-example-translation';
        sentenceTranslation.textContent = item.sentenceTranslation;
        content.appendChild(sentenceTranslation);
      }
    }

    row.appendChild(number);
    row.appendChild(content);
    parent.appendChild(row);
  }

  function showVocabList() {
    ensureVocabTopicOptions();
    const topicValue = refs.vocabTopic.value;
    const available = vocabWordsForTopicValue(topicValue);
    const words = vocabState.reviewMistakes ? mistakeWords(available) : available;

    refs.vocabListTitle.textContent = vocabState.reviewMistakes ? 'Слова с ошибками' : 'Список слов';
    refs.vocabListSubtitle.textContent = `${currentVocabTopicTitle(topicValue)} · ${formatVocabWordCount(words.length)}`;
    refs.vocabListBody.innerHTML = '';

    if (!words.length) {
      const empty = document.createElement('p');
      empty.className = 'vocab-list-empty';
      empty.textContent = vocabState.reviewMistakes ? 'Все ошибки в этом разделе отработаны.' : 'В этой теме пока нет слов.';
      refs.vocabListBody.appendChild(empty);
    } else {
      words.forEach((item, index) => appendVocabListItem(refs.vocabListBody, item, index));
    }

    refs.vocabListOverlay.hidden = false;
    refs.vocabListClose.focus();
  }

  function hideVocabList() {
    refs.vocabListOverlay.hidden = true;
  }

  function vocabSessionKeys() {
    return vocabState.session.map(word => progressKeys.get(word));
  }

  function restoreVocabSessionFromOrder(order, topicValue, stableKeys = false) {
    if (!Array.isArray(order) || !order.length) return [];

    const wordsById = new Map(
      vocabWordsForTopicValue(topicValue)
        .filter((item) => item && item.id != null)
        .map((item) => [stableKeys ? progressKeys.get(item) : String(item.id), item])
    );
    const restored = order
      .map((id) => wordsById.get(String(id)))
      .filter(Boolean);

    // Preserve saved rounds, including former short Oxford rounds and older dictionaries.
    return restored.length === order.length && new Set(order.map(String)).size === order.length ? restored : [];
  }

  function restoreVocabProgress(saved) {
    ensureVocabTopicOptions();
    if (!saved || typeof saved !== "object") return false;
    vocabState.oxfordLevelMode = saved.oxfordLevelMode === 'exact' ? 'exact' : 'minimum';
    vocabState.oxfordLevel = normalizeOxfordLevel(saved.oxfordLevel, vocabState.oxfordLevelMode);

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.vocabTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.vocabTopic.value = topicValue;
    }
    vocabState.reviewMistakes = hasTopic && saved.reviewMistakes === true;
    vocabState.mistakeProgress = new Map(
      Array.isArray(saved.mistakes)
        // A clean answer saved under the former two-approach rule is now enough.
        ? saved.mistakes.filter(entry => Array.isArray(entry) && validProgressKeys.has(entry[0]) && entry[1] !== 1)
          .map(([key]) => [key, 0])
        : []
    );
    syncVocabTopicTrigger();

    vocabState.autoSpeakCorrect = saved.autoSpeakCorrect !== false;
    refs.autoSpeakCorrectVocab.checked = vocabState.autoSpeakCorrect;

    if (Array.isArray(saved.visitedWordIds)) {
      vocabState.visitedWordIds = new Set(saved.visitedWordIds.filter(key => validProgressKeys.has(key)));
    }

    const stableReview = vocabState.reviewMistakes && Array.isArray(saved.reviewOrder);
    vocabState.session = restoreVocabSessionFromOrder(stableReview ? saved.reviewOrder : saved.order, refs.vocabTopic.value, stableReview);
    const newReview = vocabState.reviewMistakes && !vocabState.session.length;
    if (!vocabState.session.length) {
      vocabState.session = pickVocabSession();
    }
    vocabState.idx = newReview ? 0 : Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, vocabState.session.length - 1)));
    vocabState.correct = newReview ? 0 : Math.max(0, asNumber(saved.correct, 0));
    vocabState.wrong = newReview ? 0 : Math.max(0, asNumber(saved.wrong, 0));
    // IT numeric IDs can change after a dictionary rebuild. Match saved outcomes by stable review order.
    const outcomes = stableReview && Array.isArray(saved.order)
      ? Object.fromEntries(vocabState.session.map((word, index) => [word.id, saved.outcomes?.[saved.order[index]]]))
      : saved.outcomes;
    sessionScoring.restore(vocabState, newReview ? {} : outcomes);
    // Recover the last approach for old saves, including IT saves from before shared mistake tracking.
    vocabState.session.forEach(word => {
      if (vocabState.outcomes[word.id] === 'wrong' && (!Array.isArray(saved.mistakes) || typeof word.id === 'number')) {
        vocabState.mistakeProgress.set(progressKeys.get(word), 0);
      }
    });
    if (!Array.isArray(saved.visitedWordIds)) {
      // Navigation alone is not evidence of an attempted answer.
      vocabState.session.forEach(word => {
        if (vocabState.outcomes[word.id]) {
          markVocabWordVisited(word);
        }
      });
    }
    return Boolean(vocabState.session.length);
  }

  function renderVocab() {
    hideSessionComplete();
    cancelPendingActivity();
    syncNextVocabTopic();
    syncVocabTopicTrigger();
    viewState.sentenceTranslationRequestId += 1;

    const w = vocabState.session[vocabState.idx];
    refs.position.textContent = `${w ? vocabState.idx + 1 : 0} / ${vocabState.session.length}`;
    refs.correctCount.textContent = String(vocabState.correct);
    refs.wrongCount.textContent = String(vocabState.wrong);
    refs.vocabNewSession.disabled = vocabState.reviewMistakes && remainingVocabMistakes() === 0;
    refs.vocabNewSession.textContent = 'Начать заново';
    [refs.answerInput, refs.checkBtn, refs.nextBtn, refs.prevBtn].forEach(element => {
      element.disabled = !w;
    });
    refs.answerInput.value = '';
    vocabState.emptyEnterPromptIdx = -1;
    if (!w) {
      refs.vocabModeLabel.textContent = vocabState.reviewMistakes ? 'Повторение ошибок' : 'Словарь';
      refs.questionText.textContent = vocabState.reviewMistakes ? 'Все ошибки в этом разделе отработаны!' : 'Слова не найдены.';
      refs.questionTranslation.textContent = '';
      renderVocabExample(null);
      setSelectedSentenceForSpeech("");
      setFeedback('Выберите другую тему, чтобы продолжить.', null);
      return;
    }

    refs.vocabModeLabel.textContent = `${vocabState.reviewMistakes ? 'Повторение ошибок · ' : ''}Переведите на английский${w.level ? ` · ${w.level} · ${w.partOfSpeech}` : ''}`;
    refs.speakWordBtn.textContent = 'Озвучить ответ';
    renderQuestionText(w.translation);
    renderVocabExample(w);
    setSelectedSentenceForSpeech(primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word);
    refs.questionTranslation.classList.remove('vocab-hint');
    setQuestionTranslation('');

    refs.answerInput.placeholder = DEFAULT_ANSWER_PLACEHOLDER;
    refs.answerInput.focus();
    setFeedback('', null);
    vocabState.checkedCurrent = false;
    vocabState.wrongCounted = sessionScoring.wasWrong(vocabState);
  }

  function checkVocabAnswer() {
    const w = vocabState.session[vocabState.idx];
    if (!w || vocabState.checkedCurrent) return;

    const user = normalize(refs.answerInput.value);
    if (!user) {
      setFeedback('Сначала впиши ответ.', false);
      return;
    }

    markVocabWordVisited(w);

    const wordOptions = answerOptionsForVocabItem(w);
    const wordTarget = primaryAnswerText(wordOptions) || w.infinitive || w.word;
    const target = normalize(wordTarget);
    const match = getAnswerMatch(user, target, wordOptions);
    if (match.matched) {
      let mistakeMessage = '';
      const key = progressKeys.get(w);
      if (!vocabState.wrongCounted && !vocabState.outcomes[w.id] && vocabState.mistakeProgress.has(key)) {
        vocabState.mistakeProgress.delete(key);
        mistakeMessage = ' Слово выучено и убрано из ошибок.';
      }
      if (!vocabState.wrongCounted) {
        sessionScoring.record(vocabState, 'correct');
        refs.correctCount.textContent = String(vocabState.correct);
      }
      vocabState.checkedCurrent = true;
      renderVocabExample(w, 'correct');
      playCorrectSound();
      flashCorrect();
      setFeedback((match.isAlternative ? `Верно! (а можно еще: ${match.primaryAnswer})` : 'Верно!') + mistakeMessage, true);
      refs.vocabNewSession.disabled = vocabState.reviewMistakes && remainingVocabMistakes() === 0;
      saveProgress();
      queueVocabNextAfterCorrect(w);
    } else {
      recordVocabMistake(w);
      playWrongSound();
      const correctAnswer = primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word;
      setFeedback('Почти. Правильный ответ: ' + correctAnswer, false);
      renderVocabExample(w, 'wrong');
      refs.answerInput.value = '';
      refs.answerInput.focus();
      saveProgress();
    }
  }

  function nextVocabQuestion() {
    cancelPendingActivity();
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
    cancelPendingActivity();
    const textToSpeak = primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word;
    if (vocabState.autoSpeakCorrect && textToSpeak) {
      const started = speakEnglishText(textToSpeak, {
        onComplete: () => {
          nextVocabQuestion();
          saveProgress();
        },
      });
      if (started) return;
    }
    activity.schedule('auto-next', () => {
      nextVocabQuestion();
      saveProgress();
    }, AUTO_NEXT_DELAY_MS);
  }

  refs.vocabTopic.addEventListener('change', () => {
    vocabState.reviewMistakes = false;
    startVocabSession();
  });

  return {
    checkVocabAnswer,
    collectUnansweredVocabMistakes,
    ensureVocabTopicOptions,
    hideVocabList,
    hideVocabTopicPicker,
    nextVocabQuestion,
    nextVocabTopic,
    pickVocabSession,
    startVocabSession,
    recordVocabHint,
    remainingVocabMistakes,
    remainingVocabUnvisited,
    reviewCurrentVocabMistakes,
    renderVocab,
    restoreVocabProgress,
    showVocabList,
    showVocabTopicPicker,
    vocabSessionKeys
  };
};
