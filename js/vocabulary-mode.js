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
  function pickVocabSession() {
    const topicValue = refs.vocabTopic.value;
    if (topicValue === 'all') {
      return shuffleItems(vocabTopics.flatMap(t => t.words || []));
    } else {
      const topic = vocabTopics.find(t => t.topic === topicValue);
      return shuffleItems(topic ? (topic.words || []) : []);
    }
  }

  function vocabWordsForTopicValue(topicValue) {
    if (topicValue === 'all') {
      return vocabTopics.flatMap(t => t.words || []);
    }
    const topic = vocabTopics.find(t => t.topic === topicValue);
    return topic ? (topic.words || []).slice() : [];
  }

  function currentVocabTopicTitle(topicValue = refs.vocabTopic.value) {
    return topicValue === 'all' ? 'Все темы' : topicValue;
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

  function vocabTopicIcon(topicValue) {
    const topic = String(topicValue || '').toLocaleLowerCase('ru-RU');
    if (topicValue === 'all') return '🧭';
    if (topic.includes('архитектур')) return '🏗️';
    if (topic.includes('database') || topic.includes('postgres')) return '🗄️';
    if (topic.includes('инцидент')) return '🚨';
    if (topic.includes('производительност') || topic.includes('масштабируемост')) return '⚡';
    if (topic.includes('бэкенд') || topic.includes('api')) return '🔌';
    if (topic.includes('стендап') || topic.includes('митинг')) return '💬';
    if (topic.includes('code review') && topic.includes('процесс')) return '✅';
    if (topic.includes('code review')) return '🔍';
    return '📘';
  }

  function formatVocabWordCount(count) {
    const value = Math.max(0, Number(count) || 0);
    const lastTwo = value % 100;
    const last = value % 10;
    const label = lastTwo >= 11 && lastTwo <= 14
      ? 'слов'
      : (last === 1 ? 'слово' : (last >= 2 && last <= 4 ? 'слова' : 'слов'));
    return `${value} ${label}`;
  }

  function syncVocabTopicTrigger() {
    const topicValue = refs.vocabTopic.value || 'all';
    refs.vocabTopicTriggerIcon.textContent = vocabTopicIcon(topicValue);
    refs.vocabTopicTriggerText.textContent = currentVocabTopicTitle(topicValue);
    refs.vocabTopicTrigger.title = currentVocabTopicTitle(topicValue);
  }

  function vocabTopicChoices() {
    const allWords = vocabTopics.flatMap((topic) => topic.words || []);
    return [
      {
        value: 'all',
        title: 'Все темы',
        icon: vocabTopicIcon('all'),
        count: allWords.length,
      },
      ...vocabTopics.map((topic) => ({
        value: topic.topic,
        title: topic.topic,
        icon: vocabTopicIcon(topic.topic),
        count: (topic.words || []).length,
      })),
    ];
  }

  function renderVocabTopicCards() {
    const selectedValue = refs.vocabTopic.value || 'all';
    refs.vocabTopicGrid.innerHTML = '';

    vocabTopicChoices().forEach((topic) => {
      const cardButton = document.createElement('button');
      const isSelected = topic.value === selectedValue;
      cardButton.type = 'button';
      cardButton.className = `vocab-topic-card${isSelected ? ' vocab-topic-card--selected' : ''}`;
      cardButton.dataset.topicValue = topic.value;
      cardButton.setAttribute('role', 'option');
      cardButton.setAttribute('aria-selected', String(isSelected));

      const icon = document.createElement('span');
      icon.className = 'vocab-topic-card-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = topic.icon;

      const copy = document.createElement('span');
      copy.className = 'vocab-topic-card-copy';

      const title = document.createElement('strong');
      title.textContent = topic.title;

      const count = document.createElement('span');
      count.textContent = formatVocabWordCount(topic.count);

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
        if (refs.vocabTopic.value !== topic.value) {
          refs.vocabTopic.value = topic.value;
          refs.vocabTopic.dispatchEvent(new Event('change', { bubbles: true }));
        }
        hideVocabTopicPicker();
      });

      refs.vocabTopicGrid.appendChild(cardButton);
    });
  }

  function showVocabTopicPicker() {
    ensureVocabTopicOptions();
    renderVocabTopicCards();
    const choices = vocabTopicChoices();
    refs.vocabTopicModalSubtitle.textContent = `${vocabTopics.length} тем · ${formatVocabWordCount(choices[0].count)}`;
    refs.vocabTopicOverlay.hidden = false;
    refs.vocabTopicTrigger.setAttribute('aria-expanded', 'true');
    const selectedCard = refs.vocabTopicGrid.querySelector('.vocab-topic-card--selected');
    (selectedCard || refs.vocabTopicClose).focus();
  }

  function hideVocabTopicPicker() {
    refs.vocabTopicOverlay.hidden = true;
    refs.vocabTopicTrigger.setAttribute('aria-expanded', 'false');
    refs.vocabTopicTrigger.focus();
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
    }

    row.appendChild(number);
    row.appendChild(content);
    parent.appendChild(row);
  }

  function showVocabList() {
    ensureVocabTopicOptions();
    const topicValue = refs.vocabTopic.value;
    const words = vocabWordsForTopicValue(topicValue);

    refs.vocabListTitle.textContent = 'Список слов';
    refs.vocabListSubtitle.textContent = `${currentVocabTopicTitle(topicValue)} · ${formatVocabWordCount(words.length)}`;
    refs.vocabListBody.innerHTML = '';

    if (!words.length) {
      const empty = document.createElement('p');
      empty.className = 'vocab-list-empty';
      empty.textContent = 'В этой теме пока нет слов.';
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

  function restoreVocabSessionFromOrder(order, topicValue) {
    if (!Array.isArray(order) || !order.length) return [];

    const wordsById = new Map(
      vocabWordsForTopicValue(topicValue)
        .filter((item) => item && item.id != null)
        .map((item) => [String(item.id), item])
    );
    const restored = order
      .map((id) => wordsById.get(String(id)))
      .filter(Boolean);

    return restored.length === wordsById.size ? restored : [];
  }

  function ensureVocabTopicOptions() {
    if (refs.vocabTopic.options.length === 0) {
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
    syncVocabTopicTrigger();
  }

  function restoreVocabProgress(saved) {
    ensureVocabTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.vocabTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.vocabTopic.value = topicValue;
    }
    syncVocabTopicTrigger();

    vocabState.autoSpeakCorrect = saved.autoSpeakCorrect !== false;
    refs.autoSpeakCorrectVocab.checked = vocabState.autoSpeakCorrect;

    vocabState.session = restoreVocabSessionFromOrder(saved.order, refs.vocabTopic.value);
    if (!vocabState.session.length) {
      vocabState.session = pickVocabSession();
    }
    vocabState.idx = Math.max(0, Math.min(asNumber(saved.idx, 0), Math.max(0, vocabState.session.length - 1)));
    vocabState.correct = Math.max(0, asNumber(saved.correct, 0));
    vocabState.wrong = Math.max(0, asNumber(saved.wrong, 0));
    return Boolean(vocabState.session.length);
  }

  function renderVocab() {
    hideSessionComplete();
    cancelPendingActivity();
    viewState.sentenceTranslationRequestId += 1;

    const w = vocabState.session[vocabState.idx];
    if (!w) {
      refs.questionText.textContent = 'Слова не найдены.';
      refs.questionTranslation.textContent = '';
      renderVocabExample(null);
      setSelectedSentenceForSpeech("");
      return;
    }

    refs.position.textContent = `${vocabState.idx + 1} / ${vocabState.session.length}`;
    refs.correctCount.textContent = String(vocabState.correct);
    refs.wrongCount.textContent = String(vocabState.wrong);

    refs.vocabModeLabel.textContent = 'Переведите на английский';
    refs.speakWordBtn.textContent = 'Озвучить ответ';
    renderQuestionText(w.translation);
    renderVocabExample(w);
    setSelectedSentenceForSpeech(primaryAnswerText(answerOptionsForVocabItem(w)) || w.infinitive || w.word);
    refs.questionTranslation.classList.remove('vocab-hint');
    setQuestionTranslation('');

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

    const wordOptions = answerOptionsForVocabItem(w);
    const wordTarget = primaryAnswerText(wordOptions) || w.infinitive || w.word;
    const target = normalize(wordTarget);
    const match = getAnswerMatch(user, target, wordOptions);
    if (match.matched) {
      if (!vocabState.wrongCounted) {
        vocabState.correct += 1;
        refs.correctCount.textContent = String(vocabState.correct);
      }
      vocabState.checkedCurrent = true;
      renderVocabExample(w, 'correct');
      playCorrectSound();
      flashCorrect();
      setFeedback(match.isAlternative ? `Верно! (а можно еще: ${match.primaryAnswer})` : 'Верно!', true);
      saveProgress();
      queueVocabNextAfterCorrect(w);
    } else {
      if (!vocabState.wrongCounted) {
        vocabState.wrong += 1;
        vocabState.wrongCounted = true;
        refs.wrongCount.textContent = String(vocabState.wrong);
      }
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

  return {
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
  };
};
