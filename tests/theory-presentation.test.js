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
  app.click('tab-theory');
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
  for (const topic of ['tenses-past', 'tenses-future']) {
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
