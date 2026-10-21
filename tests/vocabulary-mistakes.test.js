const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

const foodGroup = 'collection:Oxford 3000/topic:Еда';
const travelGroup = 'collection:Oxford 3000/topic:Поездки';
const oxford = 'collection:Oxford 3000';
const vocabulary = [
  { topic: 'Работа', words: [{ id: 1, word: 'deploy', translation: 'развернуть' }] },
  {
    id: 'food', collection: 'Oxford 3000', topic: 'Еда', subtopic: 'Продукты',
    words: Array.from({ length: 25 }, (_, index) => ({
      id: `food-${index}`, word: `foodword${index}`, translation: `продукт ${index}`,
      level: index < 10 ? 'A1' : 'A2', partOfSpeech: 'сущ.',
    })),
  },
  {
    id: 'cafe', collection: 'Oxford 3000', topic: 'Еда', subtopic: 'Кафе',
    words: [{ id: 'tea', word: 'tea', translation: 'чай', level: 'A2', partOfSpeech: 'сущ.' }],
  },
  {
    id: 'travel', collection: 'Oxford 3000', topic: 'Поездки', subtopic: 'Транспорт',
    words: [{ id: 'bus', word: 'bus', translation: 'автобус', level: 'A1', partOfSpeech: 'сущ.' }],
  },
];

function find(parent, property, value) {
  for (const child of parent.children) {
    if (child.dataset[property] === value) return child;
    const result = find(child, property, value);
    if (result) return result;
  }
  return null;
}

function choice(app, property, value) {
  const element = find(app.el('vocab-topic-grid'), property, value);
  assert.ok(element, `Missing ${property}: ${value}`);
  return element;
}

function start(topic = 'cafe') {
  const app = createApp({ vocabulary });
  app.click('tab-vocab');
  app.change('auto-speak-correct-vocab', false);
  app.change('vocab-topic', topic);
  return app;
}

function mistakes(app) {
  return new Map(app.snapshot().vocabulary.mistakes);
}

function enter(app) {
  app.el('answer-input').dispatchEvent({ type: 'keydown', key: 'Enter', preventDefault() {} });
}

function review(app, topic = foodGroup) {
  app.click('vocab-topic-trigger');
  choice(app, 'reviewTopicValue', topic).click();
}

function progressSegments(app, topic) {
  const button = choice(app, 'topicValue', topic);
  // Compact section actions keep their progress beside the button.
  const entry = findEntry(app.el('vocab-topic-grid'), button);
  return ['correct', 'wrong'].map(outcome =>
    entry.querySelector(`.vocab-topic-progress-fill--${outcome}`).style.width);
}

function findEntry(parent, button) {
  if (parent.children.includes(button)) return parent;
  for (const child of parent.children) {
    const found = findEntry(child, button);
    if (found) return found;
  }
  return null;
}

for (const collection of ['Oxford 3000', 'Английский для IT']) {
  test(`${collection}: results train only current theme mistakes, including subsequent review attempts`, () => {
    const topic = collection === 'Oxford 3000'
      ? { ...vocabulary[1], words: vocabulary[1].words.slice(0, 2) }
      : { topic: 'Работа', words: [{ id: 1, word: 'deploy', translation: 'развернуть' }, { id: 2, word: 'release', translation: 'выпустить' }] };
    const app = createApp({ vocabulary: [topic] });
    app.click('tab-vocab');
    app.change('auto-speak-correct-vocab', false);
    app.change('vocab-topic', topic.id || topic.topic);
    const [correctId, wrongId] = app.snapshot().vocabulary.order;
    app.answer(topic.words.find(word => word.id === correctId).word);
    app.click('next-btn');
    app.answer('wrong');
    app.click('next-btn');
    assert.equal(app.el('session-complete').hidden, false);
    assert.equal(app.el('next-session-btn').textContent, 'Тренировать ошибки →');
    assert.equal(app.el('next-session-btn').disabled, false);
    app.click('next-session-btn');
    assert.equal(app.el('session-complete').hidden, true);
    assert.equal(app.snapshot().vocabulary.reviewMistakes, true);
    assert.deepEqual(app.snapshot().vocabulary.order, [wrongId]);
    assert.equal(app.snapshot().vocabulary.correct, 0);
    app.click('next-btn');
    assert.equal(app.el('next-session-btn').textContent, 'Тренировать ошибки →');
    app.click('next-session-btn');
    app.answer(topic.words.find(word => word.id === wrongId).word);
    app.advance(500);
    assert.equal(app.el('session-complete').hidden, false);
    assert.equal(app.el('next-session-btn').disabled, true);
    assert.equal(mistakes(app).size, 0);
  });
}

test('review from results preserves the active Oxford level after cancelling picker filter changes', () => {
  const app = start();
  app.answer('wrong');
  app.click('vocab-topic-trigger');
  choice(app, 'levelValue', 'A1').click();
  choice(app, 'levelMode', 'exact').click();
  app.click('vocab-topic-close');
  app.click('next-btn');
  app.click('next-session-btn');
  assert.equal(app.snapshot().vocabulary.oxfordLevel, 'all');
  assert.deepEqual(app.snapshot().vocabulary.order, ['tea']);
  assert.equal(app.el('check-btn').disabled, false);
});

test('Oxford bars split correct and pending mistakes against the filtered total, including aggregate sections', () => {
  const saved = start('food').snapshot();
  saved.vocabulary.visitedWordIds = Array.from({ length: 10 }, (_, i) => `food-${i}`);
  saved.vocabulary.mistakes = Array.from({ length: 5 }, (_, i) => [`food-${i + 5}`, 0]);
  const app = createApp({ vocabulary, saved });
  app.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(app, 'food'), ['20%', '20%']);
  assert.deepEqual(progressSegments(app, foodGroup), [`${5 / 26 * 100}%`, `${5 / 26 * 100}%`]);
  assert.deepEqual(progressSegments(app, oxford), [`${5 / 27 * 100}%`, `${5 / 27 * 100}%`]);
  assert.match(choice(app, 'topicValue', 'food').attributes['aria-label'], /Без ошибок: 5\. Нужно закрепить: 5\. Не пройдено: 15/);
  choice(app, 'levelValue', 'A1').click();
  choice(app, 'levelMode', 'exact').click();
  assert.deepEqual(progressSegments(app, 'food'), ['50%', '50%']);
  assert.deepEqual(progressSegments(app, foodGroup), ['50%', '50%']);
  assert.match(choice(app, 'topicValue', 'food').textContent, /Пройдено 10 из 10/);
});

test('all 33 city words fit in one approach and reach full progress across reload', () => {
  let app = createApp();
  app.click('tab-vocab');
  app.change('auto-speak-correct-vocab', false);
  app.change('vocab-topic', 'oxford-extra-02');
  const order = app.snapshot().vocabulary.order;
  const words = new Map(app.window.VOCABULARY_DATA.flatMap(topic => topic.words).map(word => [word.id, word]));
  assert.equal(order.length, 33);
  assert.equal(new Set(order).size, 33);
  for (const [i, id] of order.entries()) {
    app.answer(words.get(id).word);
    app.advance(500);
    if (i === 19) {
      assert.equal(app.el('session-complete').hidden, true);
      app = createApp({ saved: app.snapshot() });
      assert.deepEqual(app.snapshot().vocabulary.order, order);
      assert.equal(app.snapshot().vocabulary.idx, 20);
      assert.equal(app.snapshot().vocabulary.correct, 20);
    }
  }
  assert.equal(app.el('sc-title').textContent, 'Тема завершена!');
  assert.equal(app.el('sc-correct').textContent, '33');
  assert.equal(app.el('sc-pct').textContent, '100%');
  assert.equal(app.el('next-session-btn').disabled, true);
  app.click('vocab-topic-trigger');
  assert.match(choice(app, 'topicValue', 'oxford-extra-02').textContent, /Пройдено 33 из 33 · 100%/);
  assert.deepEqual(progressSegments(app, 'oxford-extra-02'), ['100%', '0%']);
  assert.doesNotMatch(app.el('vocab-topic-grid').textContent, /до 20 слов/);
  app.click('vocab-topic-close');
  app.click('vocab-new-session');
  assert.deepEqual([...app.snapshot().vocabulary.order].sort(), [...order].sort());
});

test('a saved short Oxford round resumes unchanged and continues with all remaining words', () => {
  const topic = {
    ...vocabulary[1],
    words: Array.from({ length: 33 }, (_, i) => ({
      id: `city-${i}`, word: `cityword${i}`, translation: `место ${i}`, level: 'A1',
    })),
  };
  let app = createApp({ vocabulary: [topic] });
  app.click('tab-vocab');
  app.change('auto-speak-correct-vocab', false);
  app.change('vocab-topic', topic.id);
  assert.equal(app.snapshot().vocabulary.order.length, 33);
  const legacySave = app.snapshot();
  legacySave.vocabulary.order = legacySave.vocabulary.order.slice(0, 20);
  app = createApp({ vocabulary: [topic], saved: legacySave });
  const firstRound = app.snapshot().vocabulary.order;
  assert.equal(firstRound.length, 20);
  for (const [i, id] of firstRound.entries()) {
    if (i === 0) app.answer('wrong');
    app.answer(topic.words.find(word => word.id === id).word);
    app.advance(500);
  }
  assert.equal(app.el('sc-title').textContent, 'Подход завершён!');
  assert.equal(app.el('sc-review-summary').hidden, false);
  assert.match(app.el('sc-review-summary').textContent, /непройденных слов: 13/);
  assert.equal(app.el('next-session-btn').textContent, 'Продолжить тему →');
  assert.equal(app.el('next-session-btn').disabled, false);

  app = createApp({ vocabulary: [topic], saved: app.snapshot() });
  assert.deepEqual(app.snapshot().vocabulary.order, firstRound);
  app.click('next-btn');
  app.click('next-session-btn');
  const secondRound = app.snapshot().vocabulary.order;
  assert.equal(secondRound.length, 13);
  assert.ok(secondRound.every(id => !firstRound.includes(id)));
  assert.equal(app.snapshot().vocabulary.reviewMistakes, false);
  for (const id of secondRound) {
    app.answer(topic.words.find(word => word.id === id).word);
    app.advance(500);
  }
  assert.equal(app.el('sc-title').textContent, 'Тема завершена!');
  assert.equal(app.el('next-session-btn').textContent, 'Тренировать ошибки →');
  app.click('vocab-topic-trigger');
  assert.match(choice(app, 'topicValue', topic.id).textContent, /Пройдено 33 из 33 · 100%/);
  assert.deepEqual(progressSegments(app, topic.id), [`${32 / 33 * 100}%`, `${1 / 33 * 100}%`]);
  app.click('vocab-topic-close');
  app.click('next-session-btn');
  assert.equal(app.snapshot().vocabulary.reviewMistakes, true);
  assert.deepEqual(app.snapshot().vocabulary.order, [firstRound[0]]);
});

test('an almost completed topic picks the last unseen word on restart and when a saved order is stale', () => {
  const saved = start('food').snapshot();
  saved.vocabulary.visitedWordIds = vocabulary[1].words.slice(0, 24).map(word => word.id);
  for (const staleOrder of [false, true]) {
    const snapshot = JSON.parse(JSON.stringify(saved));
    if (staleOrder) snapshot.vocabulary.order = ['deleted-word'];
    const app = createApp({ vocabulary, saved: snapshot });
    if (!staleOrder) app.click('vocab-new-session');
    assert.deepEqual(app.snapshot().vocabulary.order, ['food-24']);
    app.answer('foodword24');
    app.advance(500);
    app.click('vocab-topic-trigger');
    assert.match(choice(app, 'topicValue', 'food').textContent, /Пройдено 25 из 25 · 100%/);
    assert.deepEqual(progressSegments(app, 'food'), ['100%', '0%']);
  }
});

test('Oxford hint stays red through correction, then one clean answer turns it green and survives reload', () => {
  let app = start();
  app.click('speak-word-btn');
  app.answer('tea');
  app.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(app, 'cafe'), ['0%', '100%']);
  app.click('vocab-topic-close');
  app.click('vocab-new-session');
  app.answer('tea');
  app.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(app, 'cafe'), ['100%', '0%']);
  app.click('vocab-topic-close');
  app = createApp({ vocabulary, saved: app.snapshot() });
  app.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(app, 'cafe'), ['100%', '0%']);
  choice(app, 'resetTopicValue', 'cafe').click();
  app.click('vocab-progress-reset-confirm');
  assert.deepEqual(progressSegments(app, 'cafe'), ['0%', '0%']);
});

test('reset Oxford progress stays grey with retained mistakes; untouched IT progress is also grey', () => {
  const app = start();
  app.answer('wrong');
  app.click('vocab-topic-trigger');
  choice(app, 'resetTopicValue', 'cafe').click();
  app.click('vocab-progress-reset-confirm');
  assert.deepEqual(progressSegments(app, 'cafe'), ['0%', '0%']);
  assert.equal(mistakes(app).get('tea'), 0);
  choice(app, 'collectionValue', 'collection:Английский для IT').click();
  assert.deepEqual(progressSegments(app, 'Работа'), ['0%', '0%']);
});

test('Oxford Next skips words without awarding answers or topic progress, including after reload', () => {
  let app = start('food');
  const total = app.snapshot().vocabulary.order.length;
  app.click('next-btn');
  assert.equal(app.snapshot().vocabulary.correct, 0);
  assert.deepEqual(app.snapshot().vocabulary.outcomes, {});
  assert.deepEqual(app.snapshot().vocabulary.visitedWordIds, []);
  app = createApp({ vocabulary, saved: app.snapshot() });
  for (let i = 1; i < total; i++) app.click('next-btn');
  assert.equal(app.el('sc-correct').textContent, '0');
  assert.equal(app.el('sc-pct').textContent, '0%');
  assert.equal(app.snapshot().vocabulary.wrong, total);
  assert.equal(mistakes(app).size, total);
  assert.deepEqual(app.snapshot().vocabulary.visitedWordIds, []);
  app.click('vocab-topic-trigger');
  assert.match(choice(app, 'topicValue', 'food').textContent, /Пройдено 0 из 25/);
  const reloaded = createApp({ vocabulary, saved: app.snapshot() });
  assert.deepEqual(reloaded.snapshot().vocabulary.visitedWordIds, []);
});

test('skipping an Oxford mistake does not count as a clean answer', () => {
  const app = start();
  app.answer('wrong');
  review(app);
  app.click('next-btn');
  assert.equal(app.snapshot().vocabulary.correct, 0);
  assert.equal(mistakes(app).get('tea'), 0);
  assert.equal(app.el('sc-pct').textContent, '0%');
  assert.match(app.el('sc-review-summary').textContent, /достаточно одного правильного ответа без подсказки/);
});

test('navigation never marks unattempted words visited in Oxford or IT', () => {
  const app = start('food');
  app.click('next-btn');
  const saved = app.snapshot();
  delete saved.vocabulary.visitedWordIds;
  const restored = createApp({ vocabulary, saved });
  assert.deepEqual(restored.snapshot().vocabulary.visitedWordIds, []);
  restored.change('vocab-topic', 'Работа');
  restored.click('next-btn');
  assert.equal(restored.snapshot().vocabulary.visitedWordIds.length, 0);
  assert.equal(mistakes(restored).size, 1);
  assert.equal(restored.snapshot().vocabulary.correct, 0);
});

test('Oxford empty Enter prompts once, then records one hint mistake and prevents credit for copying', () => {
  const app = start();
  enter(app);
  assert.equal(mistakes(app).size, 0);
  assert.equal(app.spoken.length, 0);
  enter(app);
  assert.equal(mistakes(app).get('tea'), 0);
  assert.equal(app.snapshot().vocabulary.wrong, 1);
  assert.equal(app.spoken.length, 1);
  enter(app);
  assert.equal(mistakes(app).size, 1);
  assert.equal(app.snapshot().vocabulary.wrong, 1);
  app.answer('tea');
  assert.equal(mistakes(app).get('tea'), 0);
  assert.equal(app.snapshot().vocabulary.correct, 0);
  assert.ok(app.snapshot().vocabulary.visitedWordIds.includes('tea'));
});

test('speaker hints and wrong answers share one mistake; speech after a correct answer is free', () => {
  const app = start();
  app.click('speak-word-btn');
  app.answer('wrong');
  app.answer('wrong again');
  assert.deepEqual(app.snapshot().vocabulary.mistakes, [['tea', 0]]);
  assert.equal(app.snapshot().vocabulary.wrong, 1);
  app.answer('tea');
  assert.equal(mistakes(app).get('tea'), 0);
  app.click('vocab-new-session');
  app.answer('tea');
  assert.equal(mistakes(app).has('tea'), false);
  app.click('speak-word-btn');
  assert.equal(mistakes(app).has('tea'), false);
  const reload = createApp({ vocabulary, saved: app.snapshot() });
  reload.click('speak-word-btn');
  assert.equal(mistakes(reload).has('tea'), false);
  assert.equal(reload.snapshot().vocabulary.wrong, 0);
});

test('Oxford shows distinct-word counts on topics, sections and the whole collection', () => {
  const app = start('food');
  app.answer('wrong');
  app.answer('wrong again');
  app.click('next-btn');
  app.answer('wrong');
  app.change('vocab-topic', 'cafe');
  app.answer('wrong');
  app.change('vocab-topic', 'travel');
  app.answer('wrong');
  app.click('vocab-topic-trigger');
  assert.match(choice(app, 'topicValue', 'food').textContent, /Ошибок: 2/);
  assert.match(choice(app, 'topicValue', 'cafe').textContent, /Ошибок: 1/);
  assert.match(choice(app, 'reviewTopicValue', foodGroup).textContent, /Ошибки · 3/);
  assert.match(choice(app, 'reviewTopicValue', travelGroup).textContent, /Ошибки · 1/);
  assert.match(choice(app, 'reviewTopicValue', oxford).textContent, /Ошибки · 4/);
  assert.equal(mistakes(app).size, 4);
});

test('review uses all section mistakes and respects the Oxford level', () => {
  const saved = start().snapshot();
  saved.vocabulary.mistakes = vocabulary.flatMap(topic => topic.words)
    .filter(word => typeof word.id === 'string').map(word => [word.id, 0]);
  const app = createApp({ vocabulary, saved });
  review(app);
  assert.equal(app.snapshot().vocabulary.reviewMistakes, true);
  assert.equal(app.snapshot().vocabulary.order.length, 26);
  assert.ok(app.snapshot().vocabulary.order.every(id => id.startsWith('food-') || id === 'tea'));
  app.click('vocab-topic-trigger');
  choice(app, 'levelValue', 'A2').click();
  choice(app, 'levelMode', 'exact').click();
  assert.match(choice(app, 'reviewTopicValue', foodGroup).textContent, /Ошибки · 16/);
  assert.equal(find(app.el('vocab-topic-grid'), 'reviewTopicValue', travelGroup), null);
  choice(app, 'reviewTopicValue', foodGroup).click();
  assert.equal(app.snapshot().vocabulary.order.length, 16);
  const allowed = new Set(vocabulary.flatMap(topic => topic.words).filter(word => word.level === 'A2').map(word => word.id));
  assert.ok(app.snapshot().vocabulary.order.every(id => allowed.has(id)));
  app.click('vocab-show-list');
  assert.equal(app.el('vocab-list-title').textContent, 'Слова с ошибками');
  assert.equal(app.el('vocab-list-body').children.length, 16);
});

test('one clean answer removes a mistake and completes its review; reload and revisiting preserve mastery', () => {
  let app = start();
  app.answer('wrong');
  review(app);
  app.answer('tea');
  assert.equal(mistakes(app).size, 0);
  app = createApp({ vocabulary, saved: app.snapshot() });
  app.answer('tea');
  assert.equal(mistakes(app).size, 0);
  app.click('prev-btn');
  app.answer('tea');
  assert.equal(mistakes(app).size, 0);
  assert.equal(mistakes(app).size, 0);
  app.advance(500);
  assert.equal(app.el('session-complete').hidden, false);
  assert.match(app.el('sc-review-summary').textContent, /Все ошибки.*отработаны/);
  assert.equal(app.el('next-session-btn').disabled, true);
  assert.equal(app.el('next-session-btn').textContent, 'Тренировать ошибки →');
  assert.equal(app.el('vocab-new-session').disabled, true);
  app.click('session-complete-close');
  app.click('vocab-topic-trigger');
  const emptyReview = choice(app, 'reviewTopicValue', foodGroup);
  assert.equal(emptyReview.disabled, true);
  assert.match(emptyReview.textContent, /Ошибки · 0/);
  choice(app, 'topicValue', 'cafe').click();
  assert.equal(app.snapshot().vocabulary.reviewMistakes, false);
  assert.equal(app.el('vocab-new-session').disabled, false);
});

for (const trigger of ['answer', 'hint']) {
  test(`a new ${trigger} adds a learned word back to mistakes; correction after revealing gets no credit`, () => {
    const app = start();
    app.answer('wrong');
    app.click('vocab-new-session');
    app.answer('tea');
    assert.equal(mistakes(app).has('tea'), false);
    app.click('vocab-new-session');
    if (trigger === 'hint') app.click('speak-word-btn');
    else app.answer('wrong');
    assert.equal(mistakes(app).get('tea'), 0);
    app.answer('tea');
    assert.equal(mistakes(app).get('tea'), 0);
    app.click('vocab-new-session');
    app.answer('tea');
    assert.equal(mistakes(app).has('tea'), false);
  });
}

test('one clean answer in ordinary Oxford training also removes a mistake', () => {
  const app = start();
  app.answer('wrong');
  app.click('vocab-new-session');
  app.answer('tea');
  assert.equal(mistakes(app).size, 0);
});

test('IT shares hint tracking, red progress and one-answer review without mixing Oxford mistakes', () => {
  let app = start('Работа');
  const key = 'legacy:["Работа","deploy"]';
  enter(app);
  assert.equal(mistakes(app).size, 0);
  enter(app);
  app.click('speak-word-btn');
  assert.deepEqual([...mistakes(app)], [[key, 0]]);
  assert.equal(app.snapshot().vocabulary.wrong, 1);
  app.answer('deploy');
  assert.equal(app.snapshot().vocabulary.correct, 0);
  app = createApp({ vocabulary, saved: app.snapshot() });
  app.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(app, 'Работа'), ['0%', '100%']);
  assert.match(choice(app, 'topicValue', 'Работа').textContent, /Ошибок: 1/);
  assert.match(choice(app, 'reviewTopicValue', 'collection:Английский для IT').textContent, /Ошибки · 1/);
  app.click('vocab-topic-close');
  review(app, 'Работа');
  assert.equal(app.snapshot().vocabulary.reviewMistakes, true);
  app.answer('deploy');
  assert.equal(mistakes(app).size, 0);
  app.click('speak-word-btn');
  assert.equal(mistakes(app).size, 0);
  app.advance(500);
  assert.equal(app.el('next-session-btn').disabled, true);
  app.click('session-complete-close');
  app.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(app, 'Работа'), ['100%', '0%']);
  assert.equal(choice(app, 'reviewTopicValue', 'Работа').disabled, true);
  choice(app, 'collectionValue', oxford).click();
  assert.match(choice(app, 'reviewTopicValue', oxford).textContent, /Ошибки · 0/);
  choice(app, 'topicValue', 'cafe').click();
  app.answer('wrong');
  app.click('vocab-topic-trigger');
  assert.match(choice(app, 'reviewTopicValue', oxford).textContent, /Ошибки · 1/);
  choice(app, 'collectionValue', 'collection:Английский для IT').click();
  assert.match(choice(app, 'reviewTopicValue', 'collection:Английский для IT').textContent, /Ошибки · 0/);
});

test('IT review and outcomes survive numeric ID changes without confusing the same word in different themes', () => {
  const topics = [
    { topic: 'Работа', words: [{ id: 1, word: 'deploy', translation: 'развернуть' }, { id: 2, word: 'release', translation: 'выпустить' }] },
    { topic: 'Другое', words: [{ id: 3, word: 'deploy', translation: 'развернуть' }] },
  ];
  const app = createApp({ vocabulary: topics });
  app.click('tab-vocab');
  app.change('auto-speak-correct-vocab', false);
  app.change('vocab-topic', 'Другое');
  app.answer('wrong');
  app.change('vocab-topic', 'Работа');
  app.answer('wrong');
  app.click('next-btn');
  app.answer('wrong');
  review(app, 'Работа');
  const first = app.snapshot().vocabulary.order[0];
  app.answer(topics[0].words.find(word => word.id === first).word);
  app.click('next-btn');
  const saved = app.snapshot();
  assert.equal(saved.vocabulary.correct, 1);
  const expanded = JSON.parse(JSON.stringify(topics));
  expanded[0].words.forEach(word => { word.id += 100; });
  expanded[0].words.unshift({ id: 1, word: 'build', translation: 'собирать' });
  const reload = createApp({ vocabulary: expanded, saved });
  assert.deepEqual(reload.snapshot().vocabulary.order, saved.vocabulary.order.map(id => id + 100));
  assert.equal(reload.snapshot().vocabulary.outcomes[first + 100], 'correct');
  assert.equal(reload.snapshot().vocabulary.correct, 1);
  const remaining = reload.snapshot().vocabulary.order[1];
  reload.answer(expanded[0].words.find(word => word.id === remaining).word);
  assert.deepEqual([...mistakes(reload)], [['legacy:["Другое","deploy"]', 0]]);
  reload.click('vocab-topic-trigger');
  assert.equal(choice(reload, 'reviewTopicValue', 'Работа').disabled, true);
  assert.match(choice(reload, 'reviewTopicValue', 'Другое').textContent, /Ошибки · 1/);
});

test('IT mistakes migrate from the last saved approach, even if Oxford mistake storage already exists', () => {
  const app = start('Работа');
  app.answer('wrong');
  for (const mistakesField of [undefined, []]) {
    const saved = app.snapshot();
    saved.vocabulary.mistakes = mistakesField;
    const reload = createApp({ vocabulary, saved });
    assert.deepEqual([...mistakes(reload)], [['legacy:["Работа","deploy"]', 0]]);
  }
});

test('IT review includes all mistakes and ignores the Oxford level filter', () => {
  const topics = [{ topic: 'Большая тема', words: Array.from({ length: 25 }, (_, i) => ({
    id: i + 1, word: `term${i}`, translation: `термин ${i}`,
  })) }];
  const app = createApp({ vocabulary: topics });
  app.click('tab-vocab');
  app.change('vocab-topic', 'Большая тема');
  assert.equal(app.snapshot().vocabulary.order.length, 25);
  const saved = app.snapshot();
  saved.vocabulary.oxfordLevel = 'B2';
  saved.vocabulary.mistakes = topics[0].words.map(word => [`legacy:${JSON.stringify(['Большая тема', word.word])}`, 0]);
  const reload = createApp({ vocabulary: topics, saved });
  review(reload, 'Большая тема');
  assert.equal(reload.snapshot().vocabulary.order.length, 25);
  reload.click('vocab-show-list');
  assert.equal(reload.el('vocab-list-body').children.length, 25);
});

test('old saves recover known Oxford mistakes; stale IDs and malformed entries are discarded', () => {
  const app = start();
  app.answer('wrong');
  const old = app.snapshot();
  delete old.vocabulary.mistakes;
  const migrated = createApp({ vocabulary, saved: old });
  assert.deepEqual(migrated.snapshot().vocabulary.mistakes, [['tea', 0]]);
  const saved = migrated.snapshot();
  saved.vocabulary.mistakes = [['tea', 1], ['missing', 0], [1, 0], null, {}, ['bus', 99]];
  const reload = createApp({ vocabulary, saved });
  assert.deepEqual(reload.snapshot().vocabulary.mistakes, [['bus', 0]]);
  assert.ok(reload.snapshot().vocabulary.mistakes.every(entry => entry.length === 2 && typeof entry[0] === 'string'));
  reload.click('vocab-topic-trigger');
  assert.deepEqual(progressSegments(reload, 'cafe'), ['100%', '0%']);
});

test('an Oxford review survives dataset reordering and added words without importing new words', () => {
  const app = start();
  app.answer('wrong');
  review(app);
  const saved = app.snapshot();
  const expanded = JSON.parse(JSON.stringify(vocabulary)).reverse();
  expanded.find(topic => topic.id === 'cafe').words.unshift({
    id: 'coffee', word: 'coffee', translation: 'кофе', level: 'A2', partOfSpeech: 'сущ.',
  });
  const reload = createApp({ vocabulary: expanded, saved });
  assert.deepEqual(reload.snapshot().vocabulary.order, ['tea']);
  assert.equal(mistakes(reload).get('tea'), 0);
  reload.answer('tea');
  assert.equal(mistakes(reload).size, 0);
});

test('an empty or stale saved review does not start a normal round and other modes stay usable', () => {
  const saved = start().snapshot();
  saved.vocabulary.reviewMistakes = true;
  saved.vocabulary.order = ['deleted-word'];
  saved.vocabulary.mistakes = [['deleted-word', 0]];
  const app = createApp({ vocabulary, saved });
  assert.deepEqual(app.snapshot().vocabulary.order, []);
  assert.match(app.el('question-text').textContent, /Все ошибки.*отработаны/);
  assert.equal(app.el('check-btn').disabled, true);
  app.click('tab-grammar');
  assert.equal(app.el('check-btn').disabled, false);
  app.click('tab-vocab');
  assert.deepEqual(app.snapshot().vocabulary.order, []);
});

test('resetting visited progress preserves mistakes; completed skipped Oxford words join mistakes', () => {
  const app = start();
  app.answer('wrong');
  app.click('vocab-topic-trigger');
  choice(app, 'resetTopicValue', 'cafe').click();
  app.click('vocab-progress-reset-confirm');
  assert.equal(mistakes(app).get('tea'), 0);
  assert.equal(app.snapshot().vocabulary.visitedWordIds.includes('tea'), false);
  app.click('vocab-topic-close');
  app.change('vocab-topic', 'travel');
  app.click('next-btn');
  assert.equal(mistakes(app).get('bus'), 0);
});

test('starting review cancels pending auto-next and selecting a regular topic exits review', () => {
  const app = start();
  app.answer('wrong');
  app.click('vocab-new-session');
  app.answer('tea');
  app.change('vocab-topic', 'travel');
  app.answer('wrong');
  review(app, travelGroup);
  assert.equal(app.snapshot().vocabulary.reviewMistakes, true);
  app.advance(1000);
  assert.equal(app.snapshot().vocabulary.idx, 0);
  assert.equal(app.snapshot().vocabulary.correct, 0);
  assert.equal(app.el('session-complete').hidden, true);
  app.click('vocab-topic-trigger');
  choice(app, 'topicValue', foodGroup).click();
  assert.equal(app.snapshot().vocabulary.reviewMistakes, false);
  assert.deepEqual([...app.snapshot().vocabulary.order].sort(), vocabulary[1].words.map(word => word.id).sort());
});
