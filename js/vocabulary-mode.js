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
  const catalog = window.Trainer.createVocabularyCatalog(vocabTopics);
  const oxfordLevels = ['all', 'A1', 'A2', 'B1', 'B2'];
  let pickerNode = catalog.root;
  let pickerLevel = 'all';
  let pickerLevelMode = 'minimum';
  let pendingProgressReset = null;
  const progressKeys = new Map();
  vocabTopics.forEach(topic => (topic.words || []).forEach(word => {
    // Legacy IT IDs are positional. Keep their progress stable when files gain words.
    progressKeys.set(word, typeof word.id === 'string'
      ? word.id : `legacy:${JSON.stringify([topic.id || topic.topic, word.word])}`);
  }));
  const validProgressKeys = new Set(progressKeys.values());

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

  function dismissProgressReset() {
    pendingProgressReset = null;
    refs.vocabProgressReset.hidden = true;
  }

  refs.vocabProgressResetCancel.addEventListener('click', () => {
    const trigger = pendingProgressReset && pendingProgressReset.trigger;
    dismissProgressReset();
    if (trigger) trigger.focus();
  });
  refs.vocabProgressResetConfirm.addEventListener('click', () => {
    if (!pendingProgressReset) return;
    pendingProgressReset.words.forEach(word => vocabState.visitedWordIds.delete(progressKeys.get(word)));
    saveProgress();
    renderVocabTopicCards();
    (refs.vocabTopicGrid.querySelector('.vocab-topic-choice--selected') || refs.vocabTopicClose).focus();
  });

  function oxfordLevelLabel(level) {
    return level === 'all' ? 'Все' : level;
  }

  function oxfordSelectionLabel(level, mode) {
    return mode === 'minimum' ? `${level} и выше` : level;
  }

  function normalizeOxfordLevel(level, mode = vocabState.oxfordLevelMode) {
    const oxford = catalog.nodes.get('collection:Oxford 3000');
    return oxfordLevels.includes(level) && oxford && wordsForNode(oxford, level, mode).length
      ? level : 'all';
  }

  function wordsForNode(node, level = vocabState.oxfordLevel, mode = vocabState.oxfordLevelMode) {
    if (!node) return [];
    if (node.collection === 'Oxford 3000' && level && level !== 'all') {
      const minimumLevel = oxfordLevels.indexOf(level);
      return node.words.filter(word => mode === 'exact'
        ? word.level === level
        : oxfordLevels.indexOf(word.level) >= minimumLevel);
    }
    return node.words.slice();
  }

  function levelSuffix(node) {
    return node && node.collection === 'Oxford 3000' && vocabState.oxfordLevel && vocabState.oxfordLevel !== 'all'
      ? ` · ${oxfordSelectionLabel(vocabState.oxfordLevel, vocabState.oxfordLevelMode)}` : '';
  }

  function nextVocabTopicNode() {
    const current = catalog.nodes.get(refs.vocabTopic.value) || catalog.root;
    let collection = current;
    while (collection.parent && collection.parent !== catalog.root) collection = collection.parent;
    if (collection === catalog.root) collection = catalog.root.children[0];
    if (!collection) return null;

    // Whole themes advance to whole themes; subtopics follow the order in the picker.
    const candidates = current.parent === collection && current.children.length
      ? collection.children
      : collection.children.flatMap(topic => topic.children.length ? topic.children : [topic]);
    const available = candidates.filter(node => wordsForNode(node).length);
    if (!available.length) return null;
    const index = available.indexOf(current);
    const next = available[(index + 1) % available.length];
    return next && next !== current ? next : null;
  }

  function syncNextVocabTopic() {
    const next = nextVocabTopicNode();
    [refs.vocabNextTopic, refs.scNextTopic].forEach(button => {
      button.disabled = !next;
      button.title = next
        ? `Далее: ${currentVocabTopicTitle(next.value)}`
        : 'В этом наборе с выбранным уровнем нет другой темы';
      button.setAttribute('aria-label', next
        ? `Следующая тема: ${currentVocabTopicTitle(next.value)}`
        : 'Следующая тема недоступна');
    });
  }

  function nextVocabTopic() {
    const next = nextVocabTopicNode();
    if (!next) return;
    refs.vocabTopic.value = next.value;
    refs.vocabTopic.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function pickVocabSession() {
    const node = catalog.nodes.get(refs.vocabTopic.value);
    const available = vocabWordsForTopicValue(refs.vocabTopic.value);
    if (vocabState.reviewMistakes) return shuffleItems(mistakeWords(available)).slice(0, 20);
    const words = shuffleItems(available);
    return node && node.collection === 'Oxford 3000' ? words.slice(0, 20) : words;
  }

  function startMistakeReview(node, level = pickerLevel, levelMode = pickerLevelMode) {
    if (node.collection === 'Oxford 3000') {
      vocabState.oxfordLevel = level;
      vocabState.oxfordLevelMode = levelMode;
    }
    cancelPendingActivity();
    refs.vocabTopic.value = node.value;
    vocabState.reviewMistakes = true;
    vocabState.session = pickVocabSession();
    vocabState.idx = 0;
    vocabState.correct = 0;
    vocabState.wrong = 0;
    vocabState.outcomes = {};
    syncVocabTopicTrigger();
    renderVocab();
    saveProgress();
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

  function currentVocabTopicTitle(topicValue = refs.vocabTopic.value) {
    const node = catalog.nodes.get(topicValue);
    return node && node !== catalog.root ? catalog.path(node).join(' → ') + levelSuffix(node) : 'Все слова';
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
    if (topic.includes('повседневн') || topic.includes('дом')) return '🏠';
    if (topic.includes('еда') || topic.includes('продукт') || topic.includes('кафе')) return '🍎';
    if (topic.includes('город') || topic.includes('транспорт') || topic.includes('путешеств')) return '🧳';
    if (topic.includes('oxford')) return '📗';
    if (topic.includes('английский для it')) return '💻';
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
    const node = catalog.nodes.get(topicValue) || catalog.root;
    refs.vocabTopicTriggerIcon.textContent = vocabTopicIcon(node.title);
    const title = `${vocabState.reviewMistakes ? 'Ошибки · ' : ''}${node.title}${levelSuffix(node)}`;
    refs.vocabTopicTriggerText.textContent = title;
    refs.vocabTopicTrigger.title = `${vocabState.reviewMistakes ? 'Повторение ошибок: ' : ''}${currentVocabTopicTitle(topicValue)}`;
    refs.vocabTopicTrigger.setAttribute('aria-label', `Выбрать набор или тему: ${refs.vocabTopicTrigger.title}`);
  }

  function vocabularyChoice(node, label = node.title, compact = false) {
    const entry = document.createElement('div');
    entry.className = `vocab-topic-entry${compact ? ' vocab-catalog-train-all' : ''}`;
    const cardButton = document.createElement('button');
    const isOxford = node.collection === 'Oxford 3000';
    const words = wordsForNode(node, pickerLevel, pickerLevelMode);
    const wordCount = words.length;
    const mistakes = mistakeWords(words).length;
    const progress = vocabProgressForWords(words);
    const isSelected = !vocabState.reviewMistakes && node.value === refs.vocabTopic.value && (!isOxford || (pickerLevel === vocabState.oxfordLevel && pickerLevelMode === vocabState.oxfordLevelMode));
    cardButton.type = 'button';
    const choiceClass = compact ? 'vocab-train-action' : 'vocab-topic-card';
    cardButton.className = `${choiceClass}${isSelected ? ` ${choiceClass}--selected vocab-topic-choice--selected` : ''}`;
    cardButton.dataset.topicValue = node.value;
    cardButton.setAttribute('aria-pressed', String(isSelected));
    const accessibleTitle = label === node.title ? label : `${label}: ${catalog.path(node).join(', ')}`;
    const resultDescription = `Без ошибок: ${progress.correct}. Нужно закрепить: ${progress.wrong}. Не пройдено: ${progress.total - progress.visited}.`;
    cardButton.setAttribute('aria-label', `${accessibleTitle}, ${formatVocabWordCount(wordCount)}, пройдено ${progress.visited} из ${progress.total}, ${progress.percent}%, ${resultDescription}, тренировать`);

    const icon = document.createElement('span');
    icon.className = 'vocab-topic-card-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = vocabTopicIcon(node.title);

    const copy = document.createElement('span');
    copy.className = 'vocab-topic-card-copy';
    const title = document.createElement('strong');
    title.textContent = label;
    const count = document.createElement('span');
    count.textContent = `${formatVocabWordCount(wordCount)} · Ошибок: ${mistakes}`;
    count.className = mistakes ? 'vocab-topic-mistake-count' : '';
    copy.appendChild(title);
    copy.appendChild(count);

    const progressBlock = document.createElement('span');
    progressBlock.className = 'vocab-topic-progress';
    progressBlock.title = resultDescription;
    const progressLabel = document.createElement('span');
    progressLabel.className = 'vocab-topic-progress-label';
    progressLabel.textContent = `Пройдено ${progress.visited} из ${progress.total} · ${progress.percent}%`;
    progressBlock.appendChild(progressLabel);
    const track = document.createElement('span');
    track.className = 'vocab-topic-progress-track';
    track.setAttribute('aria-hidden', 'true');
    for (const [outcome, count] of [['correct', progress.correct], ['wrong', progress.wrong]]) {
      const fill = document.createElement('span');
      fill.className = `vocab-topic-progress-fill vocab-topic-progress-fill--${outcome}`;
      fill.style.width = `${progress.total ? count / progress.total * 100 : 0}%`;
      track.appendChild(fill);
    }
    progressBlock.appendChild(track);

    const check = document.createElement('span');
    check.className = 'vocab-topic-card-check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';
    if (compact) {
      cardButton.textContent = `${label} →`;
    } else {
      cardButton.appendChild(icon);
      cardButton.appendChild(copy);
      cardButton.appendChild(check);
      cardButton.appendChild(progressBlock);
    }
    cardButton.addEventListener('click', () => {
      const levelChanged = isOxford && (vocabState.oxfordLevel !== pickerLevel || vocabState.oxfordLevelMode !== pickerLevelMode);
      if (isOxford) {
        vocabState.oxfordLevel = pickerLevel;
        vocabState.oxfordLevelMode = pickerLevelMode;
      }
      if (refs.vocabTopic.value !== node.value || levelChanged || vocabState.reviewMistakes) {
        refs.vocabTopic.value = node.value;
        refs.vocabTopic.dispatchEvent(new Event('change', { bubbles: true }));
      }
      hideVocabTopicPicker();
    });
    entry.appendChild(cardButton);
    const actions = compact ? entry : document.createElement('div');
    if (!compact) actions.className = 'vocab-topic-actions';
    if (compact) {
      entry.appendChild(progressBlock);
    }
    // Standalone themes need their own review action; grouped subtopics share their header's action.
    if (compact || node.parent?.parent === catalog.root) actions.appendChild(mistakeReviewChoice(node));
    if (progress.visited) {
      const reset = document.createElement('button');
      reset.type = 'button';
      reset.className = 'vocab-topic-reset-button';
      reset.dataset.resetTopicValue = node.value;
      reset.textContent = compact ? '↺' : 'Сбросить прогресс';
      reset.title = node.parent === catalog.root ? 'Сбросить прогресс набора' : 'Сбросить прогресс';
      reset.setAttribute('aria-label', `Сбросить прогресс: ${catalog.path(node).join(', ')}`);
      reset.addEventListener('click', () => {
        pendingProgressReset = { words, trigger: reset };
        const level = isOxford && pickerLevel !== 'all' ? ` · ${oxfordSelectionLabel(pickerLevel, pickerLevelMode)}` : '';
        refs.vocabProgressResetText.textContent = `Сбросить прогресс «${catalog.path(node).join(' → ')}${level}»? Отметки о прохождении будут удалены. Результаты текущего подхода сохранятся.`;
        refs.vocabProgressReset.hidden = false;
        refs.vocabProgressResetConfirm.focus();
      });
      actions.appendChild(reset);
    }
    if (!compact) entry.appendChild(actions);
    return entry;
  }

  function mistakeReviewChoice(node) {
    const words = mistakeWords(wordsForNode(node, pickerLevel, pickerLevelMode));
    const selected = vocabState.reviewMistakes && refs.vocabTopic.value === node.value
      && (node.collection !== 'Oxford 3000' || (pickerLevel === vocabState.oxfordLevel && pickerLevelMode === vocabState.oxfordLevelMode));
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `vocab-review-button${selected ? ' vocab-review-button--selected vocab-topic-choice--selected' : ''}`;
    button.dataset.reviewTopicValue = node.value;
    button.disabled = words.length === 0;
    button.setAttribute('aria-pressed', String(selected));
    button.setAttribute('aria-label', `Повторить ошибки: ${catalog.path(node).join(', ')}, ${formatVocabWordCount(words.length)}`);
    button.textContent = `↻ Ошибки · ${words.length}`;
    button.title = words.length ? 'Повторить ошибки: один правильный ответ без подсказки' : 'Ошибок пока нет';
    button.addEventListener('click', () => startMistakeReview(node));
    return button;
  }

  function renderOxfordLevelFilter() {
    const filter = document.createElement('div');
    filter.className = 'vocab-level-filter';
    filter.setAttribute('role', 'group');
    filter.setAttribute('aria-label', 'Уровень сложности Oxford');
    const label = document.createElement('span');
    label.className = 'vocab-level-label';
    label.textContent = 'Уровень:';
    filter.appendChild(label);
    oxfordLevels.forEach(level => {
      const button = document.createElement('button');
      const count = wordsForNode(pickerNode, level, pickerLevelMode).length;
      button.type = 'button';
      button.className = `vocab-level-button${level === pickerLevel ? ' vocab-level-button--active' : ''}`;
      button.dataset.levelValue = level;
      button.textContent = oxfordLevelLabel(level);
      button.disabled = count === 0;
      button.title = count ? formatVocabWordCount(count) : 'Слова выбранного уровня пока не добавлены';
      button.setAttribute('aria-pressed', String(level === pickerLevel));
      button.setAttribute('aria-label', `${button.textContent}: ${button.title}`);
      button.addEventListener('click', () => {
        pickerLevel = level;
        renderVocabTopicCards();
        refs.vocabTopicGrid.querySelector('.vocab-level-button--active').focus();
      });
      filter.appendChild(button);
    });
    refs.vocabTopicGrid.appendChild(filter);

    if (pickerLevel === 'all') return;
    const modeFilter = document.createElement('div');
    modeFilter.className = 'vocab-level-mode';
    modeFilter.setAttribute('role', 'group');
    modeFilter.setAttribute('aria-label', 'Диапазон уровней Oxford');
    for (const [mode, title] of [['exact', 'Только этот'], ['minimum', 'Этот и выше']]) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `vocab-level-mode-button${mode === pickerLevelMode ? ' vocab-level-mode-button--active' : ''}`;
      button.dataset.levelMode = mode;
      button.textContent = title;
      button.setAttribute('aria-pressed', String(mode === pickerLevelMode));
      button.addEventListener('click', () => {
        pickerLevelMode = mode;
        renderVocabTopicCards();
        refs.vocabTopicGrid.querySelector('.vocab-level-mode-button--active').focus();
      });
      modeFilter.appendChild(button);
    }
    refs.vocabTopicGrid.appendChild(modeFilter);
  }

  function renderVocabTopicCards() {
    dismissProgressReset();
    refs.vocabTopicGrid.innerHTML = '';
    refs.vocabTopicModalSubtitle.textContent = 'Зелёный — выучено, красный — нужно повторить, серый — не пройдено. Один правильный ответ без подсказки переводит слово в зелёную часть.';

    const collections = document.createElement('div');
    collections.className = 'vocab-catalog-collections';
    collections.setAttribute('role', 'group');
    collections.setAttribute('aria-label', 'Набор слов');
    catalog.root.children.forEach(collection => {
      const button = document.createElement('button');
      const active = collection === pickerNode;
      button.type = 'button';
      button.className = `vocab-collection-button${active ? ' vocab-collection-button--active' : ''}`;
      button.dataset.collectionValue = collection.value;
      button.textContent = collection.title;
      button.setAttribute('aria-pressed', String(active));
      button.addEventListener('click', () => {
        pickerNode = collection;
        renderVocabTopicCards();
        refs.vocabTopicGrid.querySelector('.vocab-collection-button--active').focus();
      });
      collections.appendChild(button);
    });
    refs.vocabTopicGrid.appendChild(collections);
    if (!pickerNode) return;
    if (pickerNode.collection === 'Oxford 3000') renderOxfordLevelFilter();

    const overview = document.createElement('div');
    overview.className = 'vocab-catalog-overview';
    const note = document.createElement('p');
    note.className = 'vocab-catalog-note';
    note.textContent = pickerNode.collection === 'Oxford 3000'
      ? `Oxford 3000 · ${pickerNode.words.length} карточек · ${pickerLevel === 'all' ? 'все уровни' : oxfordSelectionLabel(pickerLevel, pickerLevelMode)}: ${formatVocabWordCount(wordsForNode(pickerNode, pickerLevel, pickerLevelMode).length)} · до 20 слов за подход`
      : formatVocabWordCount(pickerNode.words.length);
    overview.appendChild(note);
    const trainCollection = vocabularyChoice(pickerNode, 'Тренировать весь набор', true);
    overview.appendChild(trainCollection);
    refs.vocabTopicGrid.appendChild(overview);

    const topics = document.createElement('div');
    topics.className = 'vocab-catalog-topics';
    pickerNode.children.forEach(topic => {
      if (!wordsForNode(topic, pickerLevel, pickerLevelMode).length) return;
      if (!topic.children.length) {
        topics.appendChild(vocabularyChoice(topic));
        return;
      }
      const section = document.createElement('section');
      section.className = 'vocab-catalog-section';
      const header = document.createElement('div');
      header.className = 'vocab-catalog-section-header';
      const heading = document.createElement('h3');
      heading.textContent = `${vocabTopicIcon(topic.title)} ${topic.title}`;
      header.appendChild(heading);
      const trainTopic = vocabularyChoice(topic, 'Вся тема', true);
      header.appendChild(trainTopic);
      section.appendChild(header);
      const subtopics = document.createElement('div');
      subtopics.className = 'vocab-catalog-subtopics';
      topic.children.forEach(subtopic => {
        if (wordsForNode(subtopic, pickerLevel, pickerLevelMode).length) subtopics.appendChild(vocabularyChoice(subtopic));
      });
      section.appendChild(subtopics);
      topics.appendChild(section);
    });
    refs.vocabTopicGrid.appendChild(topics);
  }

  function showVocabTopicPicker() {
    ensureVocabTopicOptions();
    pickerLevel = normalizeOxfordLevel(vocabState.oxfordLevel);
    pickerLevelMode = vocabState.oxfordLevelMode;
    let selected = catalog.nodes.get(refs.vocabTopic.value) || catalog.root;
    while (selected.parent && selected.parent !== catalog.root) selected = selected.parent;
    // Old all-words sessions remain valid; the picker starts with the first collection.
    pickerNode = selected === catalog.root ? catalog.root.children[0] : selected;
    renderVocabTopicCards();
    refs.vocabTopicOverlay.hidden = false;
    refs.vocabTopicTrigger.setAttribute('aria-expanded', 'true');
    const selectedCard = refs.vocabTopicGrid.querySelector('.vocab-topic-choice--selected');
    (selectedCard || refs.vocabTopicGrid.querySelector('.vocab-collection-button--active') || refs.vocabTopicClose).focus();
  }

  function hideVocabTopicPicker() {
    dismissProgressReset();
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

    // A saved session can be a short Oxford round or predate newly added words.
    return restored.length === order.length && new Set(order.map(String)).size === order.length ? restored : [];
  }

  function ensureVocabTopicOptions() {
    if (refs.vocabTopic.options.length === 0) {
      catalog.nodes.forEach(node => {
        const opt = document.createElement('option');
        opt.value = node.value;
        opt.textContent = currentVocabTopicTitle(node.value);
        refs.vocabTopic.appendChild(opt);
      });
    }
    syncVocabTopicTrigger();
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
    if (Array.isArray(saved.visitedWordIds)) {
      vocabState.visitedWordIds = new Set(saved.visitedWordIds.filter(key => validProgressKeys.has(key)));
    } else {
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

  return {
    checkVocabAnswer,
    collectUnansweredVocabMistakes,
    ensureVocabTopicOptions,
    hideVocabList,
    hideVocabTopicPicker,
    nextVocabQuestion,
    nextVocabTopic,
    pickVocabSession,
    recordVocabHint,
    remainingVocabMistakes,
    reviewCurrentVocabMistakes,
    renderVocab,
    restoreVocabProgress,
    showVocabList,
    showVocabTopicPicker,
    syncVocabTopicTrigger,
    vocabSessionKeys
  };
};
