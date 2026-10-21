window.Trainer = window.Trainer || {};
// The picker owns temporary filters and DOM; training changes only after selection.
window.Trainer.createVocabularyPicker = function ({
  refs,
  vocabState,
  vocabTopics,
  saveProgress,
  mistakeWords,
  vocabProgressForWords,
  resetVisitedWords,
  onReviewTopic
}) {
  const catalog = window.Trainer.createVocabularyCatalog(vocabTopics);
  const oxfordLevels = ['all', 'A1', 'A2', 'B1', 'B2'];
  let pickerNode = catalog.root;
  let pickerLevel = 'all';
  let pickerLevelMode = 'minimum';
  let pendingProgressReset = null;
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
    resetVisitedWords(pendingProgressReset.words);
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

  function currentVocabTopicTitle(topicValue = refs.vocabTopic.value) {
    const node = catalog.nodes.get(topicValue);
    return node && node !== catalog.root ? catalog.path(node).join(' → ') + levelSuffix(node) : 'Все слова';
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
    button.addEventListener('click', () => onReviewTopic(node, pickerLevel, pickerLevelMode));
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
      ? `Oxford 3000 · ${pickerNode.words.length} карточек · ${pickerLevel === 'all' ? 'все уровни' : oxfordSelectionLabel(pickerLevel, pickerLevelMode)}: ${formatVocabWordCount(wordsForNode(pickerNode, pickerLevel, pickerLevelMode).length)}`
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

  return {
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
  };
};
