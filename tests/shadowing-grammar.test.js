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
  ]);
  const cards = descendants(grid).filter(child => child.dataset.topicValue);
  const ranges = app.window.TrainerData.GRAMMAR_TOPICS['A1-A2'].slice(0, 8);
  assert.deepEqual(cards.map(card => card.dataset.topicValue), Array.from(ranges, topic => `grammar:A1-A2:${topic.id}`));
  assert.match(app.el('shadowing-topic-modal-subtitle').textContent, /413 фраз/);
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
  assert.equal(topicCard(app, 'grammar:A1-A2:present-continuous'), undefined);
  app.click('shadowing-topic-close');

  const ranges = app.window.TrainerData.GRAMMAR_TOPICS['A1-A2'].slice(0, 8);
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
  assert.equal(total, 413);
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
});
