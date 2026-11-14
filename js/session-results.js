window.Trainer = window.Trainer || {};

// Presentation and dismissal only. Scoring and starting approaches belong to their modes.
window.Trainer.createSessionResults = function ({ refs }) {
  function hide() {
    refs.sessionComplete.hidden = true;
  }

  function show({ mode, total, correct, wrong, percent, reviewing = false, remaining = 0, mistakeRepetitions = 1, unvisited = 0 }) {
    const continuing = mode === 'vocabulary' && !reviewing && unvisited > 0;
    const reviewInstruction = mistakeRepetitions === 1
      ? 'Для каждого достаточно одного правильного ответа без подсказки.'
      : `Правильных ответов подряд без подсказки для каждого слова: ${mistakeRepetitions}.`;
    refs.position.textContent = `${total} / ${total}`;
    refs.correctCount.textContent = String(correct);
    refs.wrongCount.textContent = String(wrong);
    refs.scCorrect.textContent = String(correct);
    refs.scWrong.textContent = String(wrong);
    refs.scPct.textContent = percent + '%';
    refs.scNextTopic.hidden = mode !== 'vocabulary' && mode !== 'shadowing';
    refs.scTitle.textContent = reviewing ? 'Повторение завершено!' : (continuing ? 'Подход завершён!' : 'Тема завершена!');
    refs.scReviewSummary.hidden = !reviewing && !continuing;
    refs.scReviewSummary.textContent = continuing
      ? `В выбранной теме осталось непройденных слов: ${unvisited}. Продолжите, чтобы пройти все слова.`
      : remaining
      ? `В разделе осталось слов с ошибками: ${remaining}. ${reviewInstruction}`
      : 'Все ошибки в этом разделе отработаны.';
    refs.nextSessionBtn.textContent = mode === 'vocabulary'
      ? (continuing ? 'Продолжить тему →' : 'Тренировать ошибки →') : 'Начать заново →';
    const hideNextSession = mode === 'vocabulary' && !continuing && remaining === 0;
    refs.nextSessionBtn.hidden = hideNextSession;
    refs.nextSessionBtn.disabled = hideNextSession;

    hide();
    void refs.sessionComplete.offsetWidth;
    refs.sessionComplete.hidden = false;
  }

  refs.scCloseBtn.addEventListener('click', hide);
  refs.sessionComplete.addEventListener('click', event => {
    if (event.target === refs.sessionComplete) hide();
  });

  return { show, hide };
};
