const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { createApp } = require('./helpers/app');

const context = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(__dirname, '../questions.js'), 'utf8'), context);
const questions = context.window.GRAMMAR_QUESTIONS['A1-A2'];

function openQuestion(id, topic = 'all') {
  const data = createApp().window.TrainerData;
  const range = data.GRAMMAR_TOPICS['A1-A2'].find(candidate => candidate.id === topic);
  const session = range ? questions.filter(question => question.id >= range.from && question.id <= range.to) : questions;
  const idx = session.findIndex(question => question.id === id);
  assert.notEqual(idx, -1);
  return createApp({ saved: {
    mode: 'grammar', level: 'A1-A2', grammarTopic: topic, idx,
    autoSpeakCorrect: true,
  } });
}

test('grammar data has unique IDs, consistent keys and one blank per fill-in exercise', () => {
  assert.equal(new Set(questions.map(question => question.id)).size, questions.length);
  for (const question of questions) {
    assert.equal(question.answer, question.options[question.correctOption], `Question ${question.id}`);
    assert.equal(new Set(Object.values(question.options)).size, 3, `Duplicate options in ${question.id}`);
    const blanks = question.prompt.match(/\.{3,}/g) || [];
    assert.equal(blanks.length, question.prompt === 'Choose the correct answer:' ? 0 : 1, `Question ${question.id}`);
  }
});

test('renumbered exercises belong to their intended grammar topics and have correct keys', () => {
  const app = openQuestion(2210, 'adjective-prepositions');
  assert.match(app.el('question-text').textContent, /foreign languages/);
  app.answer('in');
  assert.equal(app.el('correct-count').textContent, '1');

  const tags = openQuestion(2211, 'tag-questions-present');
  tags.answer("isn't it");
  assert.equal(tags.el('correct-count').textContent, '1');
});

test('sentence punctuation survives filling and speech, while normal ellipses are not blanks', () => {
  for (const [id, expected] of [
    [933, 'The sentence was corrected. You deserve a candy.'],
    [467, 'Sorry to interrupt. Are they doing business now?'],
    [970, 'Tell me more about this product. Is it produced in France?'],
    [1207, "I'm in trouble. Help me!"],
    [800, "It's so late. I have to hurry up."],
    [1864, 'OK. It was another joke.'],
    [1133, 'If he really wanted it, he would behave differently.'],
  ]) {
    const app = openQuestion(id);
    app.click('speak-word-btn');
    assert.equal(app.spoken.at(-1).textContent, expected);
  }
  assert.equal(openQuestion(933).el('question-text').textContent, 'The sentence ____. You deserve a candy.');
});

test('full-sentence exercises speak the chosen sentence', () => {
  const app = openQuestion(1025);
  app.click('speak-word-btn');
  assert.equal(app.spoken.at(-1).textContent, 'Did they replace that worker?');
});

test('omitted articles and prepositions accept either dash and are omitted from speech', () => {
  for (const id of [166, 2001, 2076, 2121]) {
    for (const answer of ['-', '–']) {
      const app = openQuestion(id);
      app.answer(answer);
      assert.equal(app.el('correct-count').textContent, '1', `Question ${id}, answer ${answer}`);
      assert.doesNotMatch(app.spoken.at(-1).textContent, /[–—]|\s-\s/);
      assert.doesNotMatch(app.spoken.at(-1).textContent, /\s{2,}/);
    }
  }
  const app = openQuestion(2076);
  app.answer('');
  assert.equal(app.el('correct-count').textContent, '0');
  assert.equal(app.el('wrong-count').textContent, '0');
  app.answer('the');
  assert.equal(app.el('wrong-count').textContent, '1');
});

test('reviewed alternative forms after like are accepted without accepting the bare verb', () => {
  for (const [id, alternative, invalid] of [
    [631, 'to swim', 'swim'],
    [637, 'learning', 'learn'],
    [2463, 'to tell', 'tell'],
    [2464, 'to play', 'play'],
  ]) {
    const app = openQuestion(id);
    app.answer(alternative);
    assert.equal(app.el('correct-count').textContent, '1');
    const wrong = openQuestion(id);
    wrong.answer(invalid);
    assert.equal(wrong.el('wrong-count').textContent, '1');
  }
});

test('corrected short answers and modal tags reject the former wrong key', () => {
  for (const [id, correct, oldWrong] of [
    [1543, "weren't", "didn't"],
    [2441, "shouldn't he", "mustn't he"],
    [1635, 'to go', 'to gob'],
  ]) {
    const app = openQuestion(id);
    app.answer(correct);
    assert.equal(app.el('correct-count').textContent, '1');
    const wrong = openQuestion(id);
    wrong.answer(oldWrong);
    assert.equal(wrong.el('wrong-count').textContent, '1');
  }
});
