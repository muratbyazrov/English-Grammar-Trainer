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
    const words = shuffleItems(vocabWordsForTopicValue(refs.vocabTopic.value));
    return node && node.collection === 'Oxford 3000' ? words.slice(0, 20) : words;
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
    refs.vocabTopicTriggerText.textContent = node.title + levelSuffix(node);
    refs.vocabTopicTrigger.title = currentVocabTopicTitle(topicValue);
    refs.vocabTopicTrigger.setAttribute('aria-label', `Выбрать набор или тему: ${currentVocabTopicTitle(topicValue)}`);
  }

  function vocabularyChoice(node, label = node.title) {
    const cardButton = document.createElement('button');
    const isOxford = node.collection === 'Oxford 3000';
    const wordCount = wordsForNode(node, pickerLevel, pickerLevelMode).length;
    const isSelected = node.value === refs.vocabTopic.value && (!isOxford || (pickerLevel === vocabState.oxfordLevel && pickerLevelMode === vocabState.oxfordLevelMode));
    cardButton.type = 'button';
    cardButton.className = `vocab-topic-card${isSelected ? ' vocab-topic-card--selected' : ''}`;
    cardButton.dataset.topicValue = node.value;
    cardButton.setAttribute('aria-pressed', String(isSelected));
    const accessibleTitle = label === node.title ? label : `${label}: ${catalog.path(node).join(', ')}`;
    cardButton.setAttribute('aria-label', `${accessibleTitle}, ${formatVocabWordCount(wordCount)}, тренировать`);

    const icon = document.createElement('span');
    icon.className = 'vocab-topic-card-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = vocabTopicIcon(node.title);

    const copy = document.createElement('span');
    copy.className = 'vocab-topic-card-copy';
    const title = document.createElement('strong');
    title.textContent = label;
    const count = document.createElement('span');
    count.textContent = `${formatVocabWordCount(wordCount)} · Тренировать`;
    copy.appendChild(title);
    copy.appendChild(count);

    const check = document.createElement('span');
    check.className = 'vocab-topic-card-check';
    check.setAttribute('aria-hidden', 'true');
    check.textContent = '✓';
    cardButton.appendChild(icon);
    cardButton.appendChild(copy);
    cardButton.appendChild(check);
    cardButton.addEventListener('click', () => {
      const levelChanged = isOxford && (vocabState.oxfordLevel !== pickerLevel || vocabState.oxfordLevelMode !== pickerLevelMode);
      if (isOxford) {
        vocabState.oxfordLevel = pickerLevel;
        vocabState.oxfordLevelMode = pickerLevelMode;
      }
      if (refs.vocabTopic.value !== node.value || levelChanged) {
        refs.vocabTopic.value = node.value;
        refs.vocabTopic.dispatchEvent(new Event('change', { bubbles: true }));
      }
      hideVocabTopicPicker();
    });
    return cardButton;
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
    refs.vocabTopicGrid.innerHTML = '';
    refs.vocabTopicModalSubtitle.textContent = 'Выберите тему или подтему — тренировка начнётся сразу';

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
    const trainCollection = vocabularyChoice(pickerNode, 'Тренировать весь набор');
    trainCollection.className += ' vocab-catalog-train-all';
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
      const trainTopic = vocabularyChoice(topic, 'Вся тема');
      trainTopic.className += ' vocab-catalog-train-all';
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
    const selectedCard = refs.vocabTopicGrid.querySelector('.vocab-topic-card--selected');
    (selectedCard || refs.vocabTopicGrid.querySelector('.vocab-collection-button--active') || refs.vocabTopicClose).focus();
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
    sessionScoring.restore(vocabState, saved.outcomes);
    return Boolean(vocabState.session.length);
  }

  function renderVocab() {
    hideSessionComplete();
    cancelPendingActivity();
    syncNextVocabTopic();
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

    refs.vocabModeLabel.textContent = `Переведите на английский${w.level ? ` · ${w.level} · ${w.partOfSpeech}` : ''}`;
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

    const wordOptions = answerOptionsForVocabItem(w);
    const wordTarget = primaryAnswerText(wordOptions) || w.infinitive || w.word;
    const target = normalize(wordTarget);
    const match = getAnswerMatch(user, target, wordOptions);
    if (match.matched) {
      if (!vocabState.wrongCounted) {
        sessionScoring.record(vocabState, 'correct');
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
        sessionScoring.record(vocabState, 'wrong');
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
    nextVocabTopic,
    pickVocabSession,
    renderVocab,
    restoreVocabProgress,
    showVocabList,
    showVocabTopicPicker,
    syncVocabTopicTrigger
  };
};
