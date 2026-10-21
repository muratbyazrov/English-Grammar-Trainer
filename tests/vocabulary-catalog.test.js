const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { createApp } = require('./helpers/app');

function findChoice(parent, property, value) {
  for (const child of parent.children) {
    if (child.dataset[property] === value) return child;
    const found = findChoice(child, property, value);
    if (found) return found;
  }
  return null;
}

function choose(app, value) {
  const card = findChoice(app.el('vocab-topic-grid'), 'topicValue', value);
  assert.ok(card, `Missing vocabulary choice: ${value}`);
  card.click();
}

function switchCollection(app, value) {
  const button = findChoice(app.el('vocab-topic-grid'), 'collectionValue', value);
  assert.ok(button, `Missing collection: ${value}`);
  button.click();
}

function selectLevel(app, level) {
  const button = findChoice(app.el('vocab-topic-grid'), 'levelValue', level);
  assert.ok(button, `Missing Oxford level: ${level}`);
  button.click();
}

function selectLevelMode(app, mode) {
  const button = findChoice(app.el('vocab-topic-grid'), 'levelMode', mode);
  assert.ok(button, `Missing Oxford level mode: ${mode}`);
  button.click();
}

function mixedLevelVocabulary() {
  const originalTopics = new Set(['oxford-cafe', 'oxford-city', 'oxford-food', 'oxford-home', 'oxford-routine', 'oxford-transport']);
  const data = JSON.parse(JSON.stringify(createApp().window.VOCABULARY_DATA))
    .filter(topic => topic.collection !== 'Oxford 3000' || originalTopics.has(topic.id));
  data.find(topic => topic.id === 'oxford-food').words.slice(0, 4).forEach(word => { word.level = 'A2'; });
  data.find(topic => topic.id === 'oxford-cafe').words.forEach(word => { word.level = 'B1'; });
  return data;
}

test('next theme advances directly, cancels pending word advancement and restores the new session', () => {
  const app = createApp();
  assert.equal(app.el('vocab-topic-navigation').hidden, true);
  app.click('tab-vocab');
  assert.equal(app.el('vocab-topic-navigation').hidden, false);
  app.change('vocab-topic', 'oxford-food');
  app.change('auto-speak-correct-vocab', false);
  const wordId = app.snapshot().vocabulary.order[0];
  app.answer(app.window.VOCABULARY_DATA.flatMap(t => t.words).find(w => w.id === wordId).word);
  assert.equal(app.snapshot().vocabulary.correct, 1);
  assert.match(app.el('vocab-next-topic').title, /Еда и продукты/);
  app.click('vocab-next-topic');
  const extraFood = app.window.VOCABULARY_DATA.find(topic => topic.subtopic === 'Еда и продукты');
  assert.equal(app.snapshot().vocabulary.topic, extraFood.id);
  assert.equal(app.snapshot().vocabulary.correct, 0);
  assert.equal(app.snapshot().vocabulary.idx, 0);
  app.advance(1000);
  assert.equal(app.snapshot().vocabulary.idx, 0);
  assert.equal(app.el('vocab-topic-overlay').hidden, true);
  const saved = app.snapshot();
  const reload = createApp({ saved });
  assert.deepEqual(reload.snapshot().vocabulary, saved.vocabulary);
  for (let i = 0; i < saved.vocabulary.order.length; i++) reload.click('next-btn');
  assert.equal(reload.el('session-complete').hidden, false);
  assert.equal(reload.el('sc-next-topic').hidden, false);
  assert.equal(reload.el('sc-next-topic').disabled, false);
  reload.click('sc-next-topic');
  assert.equal(reload.el('session-complete').hidden, true);
  assert.equal(reload.snapshot().vocabulary.topic, 'oxford-city');
  assert.equal(reload.snapshot().vocabulary.idx, 0);
  assert.equal(reload.snapshot().vocabulary.wrong, 0);
  reload.change('vocab-topic', 'oxford-routine');
  reload.click('vocab-next-topic');
  assert.notEqual(reload.snapshot().vocabulary.topic, 'oxford-routine');
  assert.equal(reload.window.VOCABULARY_DATA.find(topic => topic.id === reload.snapshot().vocabulary.topic).collection, 'Oxford 3000');
  reload.click('tab-grammar');
  assert.equal(reload.el('vocab-topic-navigation').hidden, true);
});

test('next theme respects the minimum Oxford level and disables when only one suitable subtopic exists', () => {
  const vocabulary = mixedLevelVocabulary();
  const app = createApp({ vocabulary });
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  selectLevel(app, 'A2');
  choose(app, 'oxford-food');
  assert.equal(app.el('vocab-next-topic').disabled, false);
  app.click('vocab-next-topic');
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-cafe');
  assert.equal(app.snapshot().vocabulary.order.length, 10);
  app.click('vocab-topic-trigger');
  selectLevel(app, 'B1');
  choose(app, 'oxford-cafe');
  assert.equal(app.el('vocab-next-topic').disabled, true);
  const before = app.snapshot().vocabulary;
  app.click('vocab-next-topic');
  assert.deepEqual(app.snapshot().vocabulary, before);
  for (let i = 0; i < before.order.length; i++) app.click('next-btn');
  assert.equal(app.el('session-complete').hidden, false);
  assert.equal(app.el('sc-next-topic').disabled, true);
  app.click('sc-next-topic');
  assert.equal(app.el('session-complete').hidden, false);
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-cafe');
  app.click('session-complete-close');
  app.click('vocab-topic-trigger');
  selectLevel(app, 'A1');
  choose(app, 'oxford-routine');
  app.click('vocab-next-topic');
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-cafe');
  assert.equal(app.snapshot().vocabulary.oxfordLevel, 'A1');
  assert.equal(app.snapshot().vocabulary.order.length, 10);
});

test('whole themes advance as themes, while IT stays in its own collection', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.change('vocab-topic', 'collection:Oxford 3000/topic:Еда и напитки');
  app.click('vocab-next-topic');
  assert.equal(app.snapshot().vocabulary.topic, 'collection:Oxford 3000/topic:Город и путешествия');
  const cityWords = app.window.VOCABULARY_DATA.filter(topic => topic.collection === 'Oxford 3000'
    && topic.topic === 'Город и путешествия').flatMap(topic => topic.words);
  assert.deepEqual([...app.snapshot().vocabulary.order].sort(), [...cityWords].map(word => word.id).sort());
  app.change('vocab-topic', 'collection:Oxford 3000');
  app.click('vocab-next-topic');
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-cafe');
  const itTopics = app.window.VOCABULARY_DATA.filter(t => !t.collection);
  app.change('vocab-topic', itTopics.at(-1).topic);
  app.click('vocab-next-topic');
  assert.equal(app.snapshot().vocabulary.topic, itTopics[0].topic);
});

test('Oxford defaults to all levels and offers every CEFR level', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  const collections = app.el('vocab-topic-grid').querySelector('.vocab-catalog-collections');
  assert.deepEqual(collections.children.map(button => button.textContent), ['Английский для IT', 'Oxford 3000']);
  switchCollection(app, 'collection:Oxford 3000');
  assert.equal(app.el('vocab-topic-grid').querySelector('.vocab-level-button--active').textContent, 'Все');
  for (const level of ['A2', 'B1', 'B2']) {
    const button = findChoice(app.el('vocab-topic-grid'), 'levelValue', level);
    assert.equal(button.disabled, false);
  }
  selectLevel(app, 'A1');
  choose(app, 'oxford-food');
  assert.equal(app.el('vocab-topic-trigger-text').textContent, 'Продукты · A1 и выше');
  assert.equal(app.el('vocab-example').hidden, true);
  assert.equal(app.el('vocab-example-text').textContent, '');
  const reload = createApp({ saved: app.snapshot() });
  assert.equal(reload.snapshot().vocabulary.oxfordLevel, 'A1');
  assert.equal(reload.el('vocab-topic-trigger-text').textContent, 'Продукты · A1 и выше');
  assert.equal(reload.el('vocab-example').hidden, true);
});

test('Oxford minimum level includes every higher level in sessions and word lists', () => {
  const app = createApp();
  app.click('tab-vocab');
  for (const [minimum, count, allowed] of [
    ['A2', 2411, new Set(['A2', 'B1', 'B2'])],
    ['B1', 1539, new Set(['B1', 'B2'])],
    ['B2', 729, new Set(['B2'])],
  ]) {
    app.click('vocab-topic-trigger');
    switchCollection(app, 'collection:Oxford 3000');
    selectLevel(app, minimum);
    const wholeCollection = findChoice(app.el('vocab-topic-grid'), 'topicValue', 'collection:Oxford 3000');
    assert.match(wholeCollection.attributes['aria-label'], new RegExp(`\\b${count}\\b`));
    choose(app, 'collection:Oxford 3000');
    assert.equal(app.snapshot().vocabulary.order.length, count);
    const byId = new Map(app.window.VOCABULARY_DATA.flatMap(topic => topic.words).map(word => [word.id, word]));
    assert.ok(app.snapshot().vocabulary.order.every(id => allowed.has(byId.get(id).level)));
    app.click('vocab-show-list');
    assert.equal(app.el('vocab-list-body').children.length, count);
    assert.ok(app.el('vocab-list-body').children.every(row =>
      [...allowed].some(level => row.querySelector('.vocab-word-meta').textContent.includes(level))));
    app.click('vocab-list-close');
  }
});

test('Oxford exact level can be selected, saved and switched back to range mode', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  assert.equal(findChoice(app.el('vocab-topic-grid'), 'levelMode', 'exact'), null);
  selectLevel(app, 'A2');
  selectLevelMode(app, 'exact');
  assert.equal(findChoice(app.el('vocab-topic-grid'), 'levelValue', 'A2').textContent, 'A2');
  assert.match(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'collection:Oxford 3000').attributes['aria-label'], /872 слова/);
  choose(app, 'collection:Oxford 3000');
  assert.equal(app.snapshot().vocabulary.oxfordLevelMode, 'exact');
  assert.equal(app.el('vocab-topic-trigger-text').textContent, 'Oxford 3000 · A2');
  const byId = new Map(app.window.VOCABULARY_DATA.flatMap(topic => topic.words).map(word => [word.id, word]));
  assert.ok(app.snapshot().vocabulary.order.every(id => byId.get(id).level === 'A2'));
  app.click('vocab-show-list');
  assert.equal(app.el('vocab-list-body').children.length, 872);
  app.click('vocab-list-close');

  const reload = createApp({ saved: app.snapshot() });
  assert.equal(reload.snapshot().vocabulary.oxfordLevelMode, 'exact');
  assert.deepEqual(reload.snapshot().vocabulary.order, app.snapshot().vocabulary.order);
  reload.click('vocab-topic-trigger');
  assert.equal(findChoice(reload.el('vocab-topic-grid'), 'levelMode', 'exact').attributes['aria-pressed'], 'true');
  selectLevelMode(reload, 'minimum');
  assert.equal(reload.snapshot().vocabulary.oxfordLevelMode, 'exact');
  assert.equal(findChoice(reload.el('vocab-topic-grid'), 'levelValue', 'A2').textContent, 'A2');
  choose(reload, 'collection:Oxford 3000');
  assert.equal(reload.snapshot().vocabulary.oxfordLevelMode, 'minimum');
  assert.equal(reload.el('vocab-topic-trigger-text').textContent, 'Oxford 3000 · A2 и выше');
  reload.click('vocab-show-list');
  assert.equal(reload.el('vocab-list-body').children.length, 2411);

  const oldSnapshot = app.snapshot();
  delete oldSnapshot.vocabulary.oxfordLevelMode;
  const oldReload = createApp({ saved: oldSnapshot });
  assert.equal(oldReload.snapshot().vocabulary.oxfordLevelMode, 'minimum');
});

test('exact mode hides higher-level topics and keeps next-topic navigation within that level', () => {
  const app = createApp({ vocabulary: mixedLevelVocabulary() });
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  selectLevel(app, 'A2');
  selectLevelMode(app, 'exact');
  assert.equal(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'oxford-cafe'), null);
  choose(app, 'oxford-food');
  assert.equal(app.snapshot().vocabulary.order.length, 4);
  assert.equal(app.el('vocab-next-topic').disabled, true);
  app.click('vocab-topic-trigger');
  selectLevelMode(app, 'minimum');
  assert.ok(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'oxford-cafe'));
  choose(app, 'oxford-food');
  assert.equal(app.el('vocab-next-topic').disabled, false);
  app.click('vocab-next-topic');
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-cafe');
});

test('level filtering updates counts, hides empty sections and limits training and word lists', () => {
  const vocabulary = mixedLevelVocabulary();
  const app = createApp({ vocabulary });
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  const before = app.snapshot().vocabulary;
  selectLevel(app, 'A2');
  assert.deepEqual(app.snapshot().vocabulary, before);
  for (const value of ['oxford-home', 'collection:Oxford 3000/topic:Город и путешествия']) {
    assert.equal(findChoice(app.el('vocab-topic-grid'), 'topicValue', value), null);
  }
  assert.match(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'oxford-food').textContent, /4 слова/);
  assert.match(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'oxford-cafe').textContent, /10 слов/);
  for (const value of ['collection:Oxford 3000/topic:Еда и напитки', 'collection:Oxford 3000']) {
    const card = findChoice(app.el('vocab-topic-grid'), 'topicValue', value);
    assert.match(card.attributes['aria-label'], /14 слов/);
  }
  choose(app, 'collection:Oxford 3000/topic:Еда и напитки');
  const expected = [
    ...vocabulary.find(t => t.id === 'oxford-food').words.slice(0, 4),
    ...vocabulary.find(t => t.id === 'oxford-cafe').words,
  ].map(w => w.id).sort();
  assert.deepEqual([...app.snapshot().vocabulary.order].sort(), expected);
  app.change('auto-speak-correct-vocab', false);
  const current = vocabulary.flatMap(t => t.words).find(w => w.id === app.snapshot().vocabulary.order[0]);
  app.answer(current.word);
  app.advance(450);
  const saved = app.snapshot();
  const reload = createApp({ vocabulary, saved });
  assert.deepEqual(reload.snapshot().vocabulary, saved.vocabulary);
  assert.equal(reload.el('vocab-topic-trigger-text').textContent, 'Еда и напитки · A2 и выше');
  reload.click('vocab-show-list');
  assert.equal(reload.el('vocab-list-body').children.length, 14);
  assert.match(reload.el('vocab-list-subtitle').textContent, /A2 и выше/);
  reload.click('vocab-list-close');
  reload.click('vocab-topic-trigger');
  selectLevel(reload, 'B1');
  choose(reload, 'collection:Oxford 3000/topic:Еда и напитки');
  const unvisitedCafeIds = vocabulary.find(t => t.id === 'oxford-cafe').words
    .map(word => word.id).filter(id => id !== current.id).sort();
  assert.deepEqual([...reload.snapshot().vocabulary.order].sort(), unvisitedCafeIds);
  assert.equal(reload.snapshot().vocabulary.correct, 0);
  assert.equal(reload.snapshot().vocabulary.idx, 0);
  assert.ok(reload.snapshot().vocabulary.order.every(id => vocabulary.find(t => t.id === 'oxford-cafe').words.some(w => w.id === id)));
  reload.click('vocab-topic-trigger');
  selectLevel(reload, 'all');
  choose(reload, 'collection:Oxford 3000/topic:Еда и напитки');
  const unvisitedThemeIds = vocabulary.filter(topic => ['oxford-food', 'oxford-cafe'].includes(topic.id))
    .flatMap(topic => topic.words.map(word => word.id)).filter(id => id !== current.id).sort();
  assert.deepEqual([...reload.snapshot().vocabulary.order].sort(), unvisitedThemeIds);
  assert.equal(reload.el('vocab-topic-trigger-text').textContent, 'Еда и напитки');
});

test('Oxford preferences do not filter IT or change an existing IT session when browsing', () => {
  const vocabulary = mixedLevelVocabulary();
  const app = createApp({ vocabulary });
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  selectLevel(app, 'A2');
  choose(app, 'oxford-food');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Английский для IT');
  assert.equal(app.el('vocab-topic-grid').querySelector('.vocab-level-filter'), null);
  choose(app, 'Стендап и митинги');
  const expected = vocabulary.find(t => t.topic === 'Стендап и митинги').words.map(w => w.id).sort((a, b) => a - b);
  assert.deepEqual([...app.snapshot().vocabulary.order].sort((a, b) => a - b), expected);
  assert.equal(app.el('vocab-topic-trigger-text').textContent, 'Стендап и митинги');
  const saved = app.snapshot();
  const reload = createApp({ vocabulary, saved });
  assert.deepEqual(reload.snapshot().vocabulary, saved.vocabulary);
  reload.click('vocab-topic-trigger');
  assert.equal(reload.el('vocab-topic-grid').querySelector('.vocab-level-filter'), null);
  switchCollection(reload, 'collection:Oxford 3000');
  assert.equal(reload.el('vocab-topic-grid').querySelector('.vocab-level-button--active').textContent, 'A2');
  selectLevel(reload, 'B1');
  reload.click('vocab-topic-close');
  assert.deepEqual(reload.snapshot().vocabulary, saved.vocabulary);
  reload.click('vocab-show-list');
  assert.equal(reload.el('vocab-list-body').children.length, expected.length);
  assert.doesNotMatch(reload.el('vocab-list-subtitle').textContent, /A2|B1/);
});

test('all Oxford subtopics are immediately selectable, including after reopening or reloading', () => {
  const app = createApp();
  app.click('tab-vocab');
  const before = app.snapshot().vocabulary;
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  const oxfordTopics = app.window.VOCABULARY_DATA.filter(t => t.collection === 'Oxford 3000');
  for (const topic of oxfordTopics) {
    assert.ok(findChoice(app.el('vocab-topic-grid'), 'topicValue', topic.id));
  }
  assert.equal(app.el('vocab-topic-grid').querySelector('.vocab-catalog-back'), null);
  assert.match(app.el('vocab-topic-grid').querySelector('.vocab-catalog-note').textContent, /Oxford 3000 · 3313 карточек/);
  assert.deepEqual(app.snapshot().vocabulary, before);
  choose(app, 'oxford-food');
  assert.equal(app.el('vocab-topic-overlay').hidden, true);
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-food');
  assert.equal(app.snapshot().vocabulary.order.length, 10);
  assert.equal(app.el('vocab-topic-trigger-text').textContent, 'Продукты');
  assert.match(app.el('vocab-topic-trigger').title, /Oxford 3000 → Еда и напитки → Продукты/);
  assert.match(app.el('vocab-mode-label').textContent, /A1/);
  app.click('vocab-topic-trigger');
  choose(app, 'oxford-transport');
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-transport');
  const reload = createApp({ saved: app.snapshot() });
  reload.click('vocab-topic-trigger');
  choose(reload, 'oxford-home');
  assert.equal(reload.snapshot().vocabulary.topic, 'oxford-home');
});

test('collection switches show topics without changing the current session; closing is non-destructive', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.change('vocab-topic', 'oxford-food');
  const before = app.snapshot().vocabulary;
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Английский для IT');
  assert.ok(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'Стендап и митинги'));
  assert.equal(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'oxford-food'), null);
  assert.deepEqual(app.snapshot().vocabulary, before);
  app.click('vocab-topic-close');
  assert.deepEqual(app.snapshot().vocabulary, before);
  app.click('vocab-topic-trigger');
  assert.ok(findChoice(app.el('vocab-topic-grid'), 'topicValue', 'oxford-food'));
  switchCollection(app, 'collection:Английский для IT');
  choose(app, 'Стендап и митинги');
  assert.equal(app.snapshot().vocabulary.order.length, 30);
  app.click('vocab-topic-trigger');
  assert.equal(app.el('vocab-topic-grid').querySelector('.vocab-collection-button--active').textContent, 'Английский для IT');
  switchCollection(app, 'collection:Oxford 3000');
  choose(app, 'oxford-city');
  assert.equal(app.snapshot().vocabulary.topic, 'oxford-city');
});

test('a whole Oxford collection trains all unique words, lists all words and resumes the same round', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  choose(app, 'collection:Oxford 3000');
  const order = app.snapshot().vocabulary.order;
  assert.equal(order.length, 3313);
  assert.equal(new Set(order).size, 3313);
  assert.ok(order.every(id => id.startsWith('oxford:')));
  app.change('auto-speak-correct-vocab', false);
  const words = app.window.VOCABULARY_DATA.flatMap(t => t.words);
  app.answer(words.find(w => w.id === order[0]).word);
  assert.equal(app.snapshot().vocabulary.correct, 1);
  app.advance(450);
  const saved = app.snapshot();
  const reload = createApp({ saved });
  assert.deepEqual(reload.snapshot().vocabulary.order, order);
  assert.equal(reload.snapshot().vocabulary.idx, 1);
  assert.equal(reload.snapshot().vocabulary.correct, 1);
  reload.click('vocab-show-list');
  assert.equal(reload.el('vocab-list-body').children.length, 3313);
  assert.ok(reload.el('vocab-list-body').children.some(row => row.querySelector('.vocab-list-example-translation')));
  assert.ok(reload.el('vocab-list-body').children.some(row => !row.querySelector('.vocab-list-example')));
});

test('theme selection includes both subtopics and excludes other themes', () => {
  const app = createApp();
  app.click('tab-vocab');
  app.click('vocab-topic-trigger');
  switchCollection(app, 'collection:Oxford 3000');
  choose(app, 'collection:Oxford 3000/topic:Еда и напитки');
  const expected = app.window.VOCABULARY_DATA.filter(t => t.collection === 'Oxford 3000' && t.topic === 'Еда и напитки').flatMap(t => t.words.map(w => w.id));
  assert.deepEqual([...app.snapshot().vocabulary.order].sort(), [...expected].sort());
});

test('adding Oxford words preserves an existing all-words round and legacy topic selection', () => {
  const original = createApp();
  const legacyTopics = original.window.VOCABULARY_DATA.filter(t => !t.collection);
  const legacyOrder = [...legacyTopics.flatMap(t => t.words.map(w => w.id))];
  const saved = original.snapshot();
  saved.mode = 'vocabulary';
  Object.assign(saved.vocabulary, { topic: 'all', order: legacyOrder, idx: 5, correct: 3, wrong: 2, outcomes: {} });
  const reload = createApp({ saved });
  assert.deepEqual(reload.snapshot().vocabulary.order, legacyOrder);
  assert.equal(reload.snapshot().vocabulary.idx, 5);
  assert.equal(reload.snapshot().vocabulary.correct, 3);
  assert.equal(reload.snapshot().vocabulary.wrong, 2);
  saved.vocabulary.topic = legacyTopics[0].topic;
  saved.vocabulary.order = [...legacyTopics[0].words.map(w => w.id)];
  const topicReload = createApp({ saved });
  assert.deepEqual(topicReload.snapshot().vocabulary.order, saved.vocabulary.order);
  assert.equal(topicReload.snapshot().vocabulary.topic, legacyTopics[0].topic);
});

test('Oxford cards have stable unique IDs, optional examples and complete learning metadata', () => {
  const app = createApp();
  const topics = app.window.VOCABULARY_DATA.filter(t => t.collection === 'Oxford 3000');
  const words = topics.flatMap(t => t.words);
  assert.equal(topics.length, 44);
  assert.equal(words.length, 3313);
  assert.deepEqual([...new Set(words.map(w => w.level))].sort(), ['A1', 'A2', 'B1', 'B2']);
  const all = app.window.VOCABULARY_DATA.flatMap(t => t.words);
  assert.equal(new Set(all.map(w => String(w.id))).size, all.length);
  for (const topic of topics) {
    assert.ok(topic.id && topic.subtopic && topic.source);
    for (const word of topic.words) {
      assert.ok(word.id.startsWith('oxford:'));
      assert.match(word.level, /^(A1|A2|B1|B2)$/);
      assert.ok(word.translation && word.partOfSpeech);
      if (word.example) {
        assert.ok(word.sentenceTranslation);
        assert.match(word.example.toLowerCase(), new RegExp(`\\b${word.answer}\\b`));
      } else {
        assert.ok(!word.sentenceTranslation);
      }
      if (word.answers) assert.ok(word.answers.some(answer => answer.text));
    }
  }
});

test('Oxford import covers every official word-level entry and preserves the first 60 cards', () => {
  const root = path.resolve(__dirname, '..');
  const official = fs.readFileSync(path.join(root, 'scripts/oxford/sources/official.tsv'), 'utf8')
    .trim().split(/\r?\n/).slice(1).map(line => line.split('\t'));
  const seed = JSON.parse(fs.readFileSync(path.join(root, 'scripts/oxford/seed.json'), 'utf8'));
  const imported = createApp().window.VOCABULARY_DATA
    .filter(topic => topic.collection === 'Oxford 3000').flatMap(topic => topic.words);
  const counts = entries => {
    const result = new Map();
    for (const [word, level] of entries) {
      const key = `${word === 'a / an' ? 'a, an' : word}\0${level}`;
      result.set(key, (result.get(key) || 0) + 1);
    }
    return [...result].sort(([a], [b]) => a.localeCompare(b));
  };
  assert.deepEqual(counts(imported.map(word => [word.word, word.level])),
    counts(official.map(fields => [fields[0], fields[4]])));
  for (const original of seed.flatMap(topic => topic.words)) {
    const current = imported.find(word => word.id === original.id);
    assert.ok(current, `Missing original card ${original.id}`);
    for (const field of ['word', 'translation', 'answer', 'level', 'partOfSpeech', 'example', 'sentenceTranslation']) {
      assert.equal(current[field] || '', original[field] || '', `${original.id}: ${field}`);
    }
  }
});
