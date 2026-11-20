const test = require('node:test');
const assert = require('node:assert/strict');
const { createApp } = require('./helpers/app');

function descendants(node) {
  return [node, ...node.children.flatMap(descendants)];
}

function find(app, className) {
  return descendants(app.el('theory-body')).find(node => node.classList.contains(className));
}

test('next theory topic follows picker order, wraps and restores the selected topic and view', () => {
  const app = createApp();
  assert.equal(app.el('theory-next-topic').hidden, true);
  app.click('tab-theory');
  assert.equal(app.el('theory-next-topic').hidden, false);
  app.click('theory-view-detailed');
  const topics = app.window.TrainerData.THEORY_TOPICS;
  for (const topic of [...topics.slice(1), topics[0]]) {
    app.click('theory-next-topic');
    assert.equal(app.el('theory-topic').value, topic.id);
    assert.equal(app.el('theory-topic-trigger-text').textContent, topic.title);
    assert.equal(app.el('theory-title').textContent, topic.title);
    assert.equal(app.snapshot().theory.topic, topic.id);
    assert.equal(app.snapshot().theory.view, 'detailed');
  }
  app.change('theory-topic', topics.at(-1).id);
  const restored = createApp({ saved: app.snapshot() });
  restored.click('theory-next-topic');
  assert.equal(restored.snapshot().theory.topic, topics[0].id);
  assert.equal(restored.snapshot().theory.view, 'detailed');
});

test('theory switches between short and detailed views and restores either choice', () => {
  const app = createApp();
  app.click('tab-theory');
  for (const topic of ['tenses-past', 'tenses-future', 'parts-of-speech']) {
    app.change('theory-topic', topic);
    for (const view of ['detailed', 'short']) {
      app.click(`theory-view-${view}`);
      assert.equal(app.snapshot().theory.view, view);
      assert.equal(app.el(`theory-view-${view}`).attributes['aria-pressed'], 'true');
      assert.ok(find(app, view === 'short' ? 'theory-brief-grid' : 'theory-section'));
      const restored = createApp({ saved: app.snapshot() });
      assert.equal(restored.snapshot().theory.topic, topic);
      assert.equal(restored.snapshot().theory.view, view);
      assert.ok(find(restored, view === 'short' ? 'theory-brief-grid' : 'theory-section'));
    }
  }
});

test('legacy visual theory saves restore the topic in short view', () => {
  for (const topic of ['tenses-past', 'tenses-future', 'tenses-present']) {
    const app = createApp({ saved: { mode: 'theory', theory: { topic, view: 'visual' } } });
    assert.equal(app.el('theory-view-visual'), undefined);
    assert.equal(app.el('theory-topic').value, topic);
    assert.equal(app.snapshot().theory.view, 'short');
    assert.equal(app.el('theory-view-short').attributes['aria-pressed'], 'true');
    assert.ok(find(app, 'theory-brief-grid'));
    app.click('theory-next-topic');
    assert.equal(app.snapshot().theory.view, 'short');
  }
});

test('grammar theory covers every training topic and restores its separate tab', () => {
  const app = createApp();
  const { GRAMMAR_TOPICS, GRAMMAR_THEORY_TOPICS } = app.window.TrainerData;
  assert.equal(GRAMMAR_THEORY_TOPICS.length, Object.values(GRAMMAR_TOPICS).flat().length);
  app.click('tab-theory');
  app.change('theory-topic', 'worth');
  app.click('theory-topic-trigger');
  assert.equal(app.el('theory-topic-grid').children.length, app.window.TrainerData.THEORY_TOPICS.length);
  app.click('theory-category-grammar');
  assert.equal(app.el('theory-topic-overlay').hidden, false);
  assert.equal(app.el('theory-topic-grid').children.length, GRAMMAR_THEORY_TOPICS.length);
  app.el('theory-topic-grid').children.find(card => card.dataset.topicValue === 'grammar-quantifiers').click();
  assert.equal(app.el('theory-topic-overlay').hidden, true);
  assert.equal(app.el('theory-title').textContent, 'Quantifiers: many / much / few / little');
  assert.equal(app.el('theory-view-switch').hidden, true);
  assert.equal(app.el('theory-topic').options.length, GRAMMAR_THEORY_TOPICS.length);
  for (const topic of GRAMMAR_THEORY_TOPICS) {
    assert.ok(topic.brief.cards.length > 0, topic.id);
    for (const card of topic.brief.cards) {
      assert.ok(card.title && card.rule && card.examples.length, topic.id);
      for (const [english, russian] of card.examples) assert.ok(english && russian, topic.id);
    }
    app.change('theory-topic', topic.id);
    assert.equal(app.el('theory-title').textContent, topic.title);
    assert.ok(find(app, 'theory-brief-grid'));
  }
  app.click('theory-next-topic');
  assert.equal(app.el('theory-topic').value, GRAMMAR_THEORY_TOPICS[0].id);
  app.change('theory-topic', 'grammar-quantifiers');
  const restored = createApp({ saved: app.snapshot() });
  assert.equal(restored.el('theory-category-grammar').attributes['aria-selected'], 'true');
  assert.equal(restored.el('theory-topic').value, 'grammar-quantifiers');
  app.click('theory-category-general');
  assert.equal(app.el('theory-topic').value, 'worth');
  assert.equal(app.el('theory-view-switch').hidden, false);
  app.click('theory-category-grammar');
  assert.equal(app.el('theory-topic').value, 'grammar-quantifiers');
});

test('every grammar question topic opens the same reference as Theory without changing the exercise', () => {
  const app = createApp();
  const topics = app.window.TrainerData.GRAMMAR_TOPICS['A1-A2'];
  for (const topic of topics) {
    app.change('grammar-topic', topic.id);
    app.el('answer-input').value = 'unfinished answer';
    const saved = app.snapshot();
    const question = app.el('question-text').textContent;
    app.click('grammar-theory-open');
    assert.equal(app.el('grammar-theory-dialog').open, true);
    assert.equal(app.el('grammar-theory-title').textContent, topic.title);
    const popupText = app.el('grammar-theory-body').textContent;
    app.advance(10000);
    assert.equal(app.el('question-text').textContent, question);
    assert.equal(app.el('answer-input').value, 'unfinished answer');
    assert.deepEqual(app.snapshot(), saved);
    app.click('grammar-theory-continue');
    assert.equal(app.el('grammar-theory-dialog').open, false);
    assert.equal(app.el('answer-input').value, 'unfinished answer');
    app.click('tab-theory');
    app.click('theory-category-grammar');
    app.change('theory-topic', `grammar-${topic.id}`);
    assert.equal(app.el('theory-body').textContent, popupText);
    app.click('tab-grammar');
  }
});

test('reference follows the current question in all-topics training and preserves theory selection', () => {
  const app = createApp();
  app.click('tab-theory');
  app.change('theory-topic', 'worth');
  app.click('tab-grammar');
  app.change('grammar-topic', 'all');
  app.click('grammar-theory-open');
  assert.equal(app.el('grammar-theory-title').textContent, 'Present Simple: утверждения');
  app.click('grammar-theory-close');
  app.click('tab-theory');
  assert.equal(app.el('theory-topic').value, 'worth');
  const saved = app.snapshot();
  saved.mode = 'grammar';
  saved.idx = 20;
  const restored = createApp({ saved });
  assert.equal(restored.el('grammar-topic').value, 'all');
  assert.equal(restored.el('question-id').textContent, '21');
  restored.click('grammar-theory-open');
  assert.equal(restored.el('grammar-theory-title').textContent, 'Present Simple: отрицания');
});

test('reference pauses and resumes auto-next and closes on Escape, cancel and backdrop', () => {
  const app = createApp({ speech: false });
  const question = app.window.GRAMMAR_QUESTIONS['A1-A2'].find(q => q.id === Number(app.el('question-id').textContent));
  app.answer(question.answer);
  const saved = app.snapshot();
  app.click('grammar-theory-open');
  app.advance(10000);
  assert.deepEqual(app.snapshot(), saved);
  app.window.dispatchEvent({ type: 'keydown', key: 'Escape', preventDefault() {} });
  assert.equal(app.el('grammar-theory-dialog').open, false);
  app.advance(1000);
  assert.equal(app.snapshot().idx, saved.idx + 1);
  const dialog = app.el('grammar-theory-dialog');
  app.click('grammar-theory-open');
  dialog.dispatchEvent({ type: 'cancel', preventDefault() {} });
  assert.equal(dialog.open, false);
  app.click('grammar-theory-open');
  dialog.getBoundingClientRect = () => ({ left: 100, right: 500, top: 100, bottom: 400 });
  dialog.dispatchEvent({ type: 'click', target: dialog, clientX: 150, clientY: 150 });
  assert.equal(dialog.open, true);
  dialog.dispatchEvent({ type: 'click', target: dialog, clientX: 50, clientY: 150 });
  assert.equal(dialog.open, false);
});
