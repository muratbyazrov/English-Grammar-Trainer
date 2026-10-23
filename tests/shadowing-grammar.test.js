const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function descendants(element) {
  return element.children.flatMap(child => [child, ...descendants(child)]);
}

function topicCard(app, value) {
  return descendants(app.el('shadowing-topic-grid')).find(child => child.dataset.topicValue === value);
}

function collectionButton(app, value) {
  return descendants(app.el('shadowing-topic-grid')).find(child => child.dataset.collectionValue === value);
}

function openGrammar(app) {
  app.click('tab-shadowing');
  app.click('shadowing-topic-trigger');
  collectionButton(app, 'grammar').click();
}

test('IT and grammar switch mirrors vocabulary collections and browsing preserves the active approach', () => {
  const app = createApp();
  app.click('tab-shadowing');
  app.click('next-btn');
  const before = app.snapshot().shadowing;
  app.click('shadowing-topic-trigger');
  assert.equal(collectionButton(app, 'it').textContent, 'IT');
  assert.equal(collectionButton(app, 'grammar').textContent, 'Из грамматики');
  assert.equal(collectionButton(app, 'it').attributes['aria-pressed'], 'true');
  assert.ok(topicCard(app, 'work-discussions'));
  assert.equal(topicCard(app, 'grammar'), undefined);
  openGrammar(app);
  assert.equal(collectionButton(app, 'grammar').attributes['aria-pressed'], 'true');
  assert.equal(collectionButton(app, 'it').attributes['aria-pressed'], 'false');
  assert.equal(topicCard(app, 'work-discussions'), undefined);
  const grid = app.el('shadowing-topic-grid');
  const sections = descendants(grid).filter(child => child.className === 'vocab-catalog-section');
  assert.deepEqual(sections.map(section => section.children[0].textContent), [
    '☀️ Present — настоящее время', '🕰️ Past — прошедшее время', '🚀 Future — будущее время',
    '🔄 Passive Voice', '🧩 Модальные глаголы', '🔀 Условия и придаточные',
    '❓ Вопросы и короткие ответы',
    '⚙️ Глагольные конструкции', '🧱 Местоимения, артикли и количество', '📐 Описание и сравнение',
    '📝 Структуры предложения',
  ]);
  const cards = descendants(grid).filter(child => child.dataset.topicValue);
  const ranges = app.window.TrainerData.GRAMMAR_TOPICS['A1-A2'];
  assert.equal(cards.length, 40);
  assert.deepEqual(cards.map(card => card.dataset.topicValue).sort(), Array.from(ranges, topic => `grammar:A1-A2:${topic.id}`).sort());
  assert.match(app.el('shadowing-topic-modal-subtitle').textContent, /2467 фраз/);
  assert.deepEqual(app.snapshot().shadowing, before);
  collectionButton(app, 'it').click();
  assert.ok(topicCard(app, 'work-discussions'));
  assert.equal(topicCard(app, 'grammar:A1-A2:future-simple'), undefined);
  assert.equal(collectionButton(app, 'it').attributes['aria-pressed'], 'true');
  app.click('shadowing-topic-close');
  assert.deepEqual(app.snapshot().shadowing, before);
});

test('grammar selection starts an independent shadowing approach with complete sentences and the same topic boundaries', () => {
  const app = createApp();
  openGrammar(app);
  topicCard(app, 'grammar:A1-A2:future-simple').click();
  assert.equal(app.el('shadowing-topic-overlay').hidden, true);
  assert.equal(app.el('position').textContent, '1 / 40');
  assert.equal(app.el('question-text').textContent, 'He will order to do it.');
  assert.equal(app.snapshot().shadowing.idx, 0);
  assert.equal(app.snapshot().shadowing.correct, 0);
  assert.equal(app.snapshot().grammarTopic, 'all');
  app.click('shadowing-topic-trigger');
  assert.equal(collectionButton(app, 'grammar').attributes['aria-pressed'], 'true');
  assert.ok(topicCard(app, 'grammar:A1-A2:future-simple').className.includes('--selected'));
  assert.ok(topicCard(app, 'grammar:A1-A2:present-continuous'));
  assert.ok(topicCard(app, 'grammar:A1-A2:demonstrative-pronouns'));
  assert.ok(topicCard(app, 'grammar:A1-A2:have-have-got'));
  assert.ok(topicCard(app, 'grammar:A1-A2:there-will-be-going-to'));
  assert.ok(topicCard(app, 'grammar:A1-A2:make-do-short-answers'));
  assert.ok(topicCard(app, 'grammar:A1-A2:infinitive-gerund'));
  app.click('shadowing-topic-close');

  const ranges = app.window.TrainerData.GRAMMAR_TOPICS['A1-A2'];
  let total = 0;
  for (const range of ranges) {
    const questions = app.window.GRAMMAR_QUESTIONS['A1-A2'].filter(q => q.id >= range.from && q.id <= range.to);
    app.change('shadowing-topic', `grammar:A1-A2:${range.id}`);
    assert.equal(app.el('position').textContent, `1 / ${questions.length}`);
    for (let index = 0; index < questions.length; index++) {
      assert.doesNotMatch(app.el('question-text').textContent, /\.{3,}|____|Choose the correct answer:|\s-\s/);
      if (index < questions.length - 1) app.click('next-btn');
    }
    total += questions.length;
  }
  assert.equal(total, 2467);
});

test('new grammar shadowing topics use full answers and restore their own position', () => {
  const app = createApp();
  openGrammar(app);
  topicCard(app, 'grammar:A1-A2:present-continuous').click();
  assert.equal(app.el('position').textContent, '1 / 90');
  assert.equal(app.el('question-text').textContent, 'I am looking at this slide now.');
  app.change('shadowing-topic', 'grammar:A1-A2:present-simple-vs-continuous');
  for (let index = 0; index < 59; index++) app.click('next-btn');
  assert.equal(app.el('question-text').textContent, 'I have two flats now.');
  const reload = createApp({ saved: app.snapshot() });
  assert.equal(reload.el('position').textContent, '60 / 60');
  assert.equal(reload.el('question-text').textContent, 'I have two flats now.');
  reload.click('shadowing-topic-trigger');
  assert.ok(topicCard(reload, 'grammar:A1-A2:present-simple-vs-continuous').className.includes('--selected'));
  topicCard(reload, 'grammar:A1-A2:demonstrative-pronouns').click();
  assert.equal(reload.el('position').textContent, '1 / 10');
  assert.equal(reload.el('question-text').textContent, 'Could you show me this thing?');

  reload.change('shadowing-topic', 'grammar:A1-A2:passive-future');
  for (let index = 0; index < 29; index++) reload.click('next-btn');
  assert.equal(reload.el('question-text').textContent, 'Will the situation be controlled?');
  reload.change('shadowing-topic', 'grammar:A1-A2:there-will-be-going-to');
  assert.equal(reload.el('position').textContent, '1 / 140');
  assert.equal(reload.el('question-text').textContent, 'There will be an exhibition tomorrow.');
  reload.click('next-btn');
  const sentence = reload.el('question-text').textContent;
  const restored = createApp({ saved: reload.snapshot() });
  assert.equal(restored.el('position').textContent, '2 / 140');
  assert.equal(restored.el('question-text').textContent, sentence);
  assert.deepEqual(restored.snapshot().shadowing, reload.snapshot().shadowing);

  restored.click('shadowing-topic-trigger');
  topicCard(restored, 'grammar:A1-A2:infinitive-gerund').click();
  assert.equal(restored.el('position').textContent, '1 / 49');
  assert.equal(restored.el('question-text').textContent, 'She promises to do this project.');
  for (let index = 0; index < 48; index++) restored.click('next-btn');
  assert.equal(restored.el('question-text').textContent, 'I think he will choose to live in another country.');
  const lastTopicReload = createApp({ saved: restored.snapshot() });
  assert.equal(lastTopicReload.el('position').textContent, '49 / 49');
  assert.equal(lastTopicReload.el('question-text').textContent, restored.el('question-text').textContent);
  assert.deepEqual(lastTopicReload.snapshot().shadowing, restored.snapshot().shadowing);
});

test('grammar shadowing restores topic, sentence, score and repetition preferences', () => {
  const app = createApp({ recognition: true });
  app.click('tab-shadowing');
  app.change('shadowing-topic', 'grammar:A1-A2:present-simple-positive');
  app.change('shadowing-repetitions', '3');
  app.change('shadowing-rate', '0.75');
  app.click('shadowing-start');
  assert.equal(app.spoken.at(-1).text, 'It really helps you.');
  app.spoken.at(-1).dispatchEvent({ type: 'end' });
  app.recognizers[0].onresult({ resultIndex: 0, results: [{ 0: { transcript: 'a different sentence' }, isFinal: true }] });
  app.recognizers[0].stop();
  const saved = app.snapshot();
  assert.equal(saved.shadowing.outcomes['grammar:A1-A2:1'], 'wrong');
  const reload = createApp({ saved });
  assert.deepEqual(reload.snapshot().shadowing, saved.shadowing);
  assert.equal(reload.el('question-text').textContent, 'It really helps you.');
  assert.equal(reload.el('shadowing-topic-trigger-text').textContent, 'Present Simple: утверждения');
  reload.click('next-btn');
  const later = createApp({ saved: reload.snapshot() });
  assert.equal(later.el('position').textContent, '2 / 20');
  assert.equal(later.el('question-text').textContent, 'They know it very well.');
});

test('grammar shadowing loads translations and ignores a pending translation after changing topics', async () => {
  const app = createApp();
  app.click('tab-shadowing');
  app.change('shadowing-topic', 'grammar:A1-A2:present-simple-positive');
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(app.el('shadowing-inline-translation').textContent, 'Перевод');
  app.click('next-btn');
  app.change('shadowing-topic', 'work-discussions');
  const translation = app.el('shadowing-inline-translation').textContent;
  await new Promise(resolve => setImmediate(resolve));
  assert.equal(app.el('shadowing-inline-translation').textContent, translation);

  const questions = app.window.GRAMMAR_QUESTIONS['A1-A2'].filter(question => question.id >= 911 && question.id <= 980);
  const saved = app.snapshot();
  saved.shadowing.topic = 'grammar:A1-A2:passive-present';
  saved.shadowing.idx = questions.findIndex(question => question.id === 933);
  const restored = createApp({ saved });
  assert.equal(restored.el('question-text').textContent, 'The sentence was corrected. You deserve a candy.');
  assert.equal(restored.el('shadowing-inline-translation').textContent, 'Предложение было исправлено. Вы заслуживаете конфету.');
});

function finishCurrentTopic(app) {
  const total = Number(app.el('position').textContent.split('/')[1]);
  for (let index = 0; index < total; index++) app.click('next-btn');
  assert.equal(app.el('session-complete').hidden, false);
}

for (const [current, next] of [
  ['grammar:A1-A2:present-simple-positive', 'grammar:A1-A2:present-simple-negative'],
  ['grammar:A1-A2:to-be-present', 'grammar:A1-A2:past-simple-irregular'],
  ['grammar:A1-A2:infinitive-gerund', 'grammar:A1-A2:present-simple-positive'],
  ['work-discussions', 'code-review-phrases'],
]) {
  test(`shadowing results advance from ${current} to ${next} with fresh scores and saved preferences`, () => {
    const app = createApp();
    app.click('tab-shadowing');
    app.change('shadowing-topic', current);
    app.change('shadowing-rate', '0.75');
    app.change('shadowing-repetitions', '3');
    finishCurrentTopic(app);
    assert.ok(app.snapshot().shadowing.wrong > 0);
    assert.equal(app.el('sc-next-topic').hidden, false);
    assert.equal(app.el('sc-next-topic').disabled, false);
    assert.equal(app.el('next-session-btn').textContent, 'Начать заново →');
    const nextTitle = app.el('shadowing-topic').options.find(option => option.value === next).textContent;
    assert.ok(nextTitle.endsWith(app.el('sc-next-topic').title.slice('Далее: '.length)));
    app.click('sc-next-topic');
    assert.equal(app.el('session-complete').hidden, true);
    const saved = app.snapshot().shadowing;
    assert.equal(saved.topic, next);
    assert.equal(saved.idx, 0);
    assert.equal(saved.correct, 0);
    assert.equal(saved.wrong, 0);
    assert.deepEqual(saved.outcomes, {});
    assert.equal(saved.successfulRepetitions, 0);
    assert.equal(saved.rate, '0.75');
    assert.equal(saved.repetitions, '3');
    app.advance(30000);
    assert.equal(app.snapshot().shadowing.idx, 0);
    assert.deepEqual(createApp({ saved: app.snapshot() }).snapshot().shadowing, saved);
  });
}

test('IT next topic wraps within IT and shared results refresh the next button after vocabulary', () => {
  const app = createApp({ vocabulary: [{ topic: 'Тест', words: [{ id: 1, word: 'test', translation: 'тест' }] }] });
  app.click('tab-vocab');
  app.change('vocab-topic', 'Тест');
  finishCurrentTopic(app);
  assert.equal(app.el('sc-next-topic').disabled, true);

  const topics = app.window.TrainerData.SHADOWING_TOPICS;
  app.click('tab-shadowing');
  app.change('shadowing-topic', topics.at(-1).id);
  finishCurrentTopic(app);
  assert.equal(app.el('sc-next-topic').disabled, false);
  app.click('sc-next-topic');
  assert.equal(app.snapshot().shadowing.topic, topics[0].id);

  app.click('tab-vocab');
  finishCurrentTopic(app);
  assert.equal(app.el('sc-next-topic').disabled, true);
  assert.equal(app.el('sc-next-topic').attributes['aria-label'], 'Следующая тема недоступна');
});

test('shadowing results disable next topic when the grammar collection has only one available topic', () => {
  const app = createApp({ grammar: { 'A1-A2': [{
    id: 1, prompt: 'It... you.', answer: 'helps',
    options: { a: 'help', b: 'helps', c: 'helping' }, correctOption: 'b',
  }] } });
  app.click('tab-shadowing');
  app.change('shadowing-topic', 'grammar:A1-A2:present-simple-positive');
  finishCurrentTopic(app);
  assert.equal(app.el('sc-next-topic').hidden, false);
  assert.equal(app.el('sc-next-topic').disabled, true);
  const before = app.snapshot().shadowing;
  app.click('sc-next-topic');
  assert.deepEqual(app.snapshot().shadowing, before);
});
