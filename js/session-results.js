window.Trainer = window.Trainer || {};

// Presentation and dismissal only. Scoring and starting approaches belong to their modes.
window.Trainer.createSessionResults = function ({ refs }) {
  function hide() {
    refs.sessionComplete.hidden = true;
  }

  function show({ mode, total, correct, wrong, percent, reviewing = false, remaining = 0 }) {
    refs.position.textContent = `${total} / ${total}`;
    refs.correctCount.textContent = String(correct);
    refs.wrongCount.textContent = String(wrong);
    refs.scCorrect.textContent = String(correct);
    refs.scWrong.textContent = String(wrong);
    refs.scPct.textContent = percent + '%';
    refs.scNextTopic.hidden = mode !== 'vocabulary';
    refs.scTitle.textContent = reviewing ? 'Повторение завершено!' : 'Тема завершена!';
    refs.scReviewSummary.hidden = !reviewing;
    refs.scReviewSummary.textContent = remaining
      ? `В разделе осталось слов с ошибками: ${remaining}. Для каждого достаточно одного правильного ответа без подсказки.`
      : 'Все ошибки в этом разделе отработаны.';
    refs.nextSessionBtn.textContent = mode === 'vocabulary' ? 'Тренировать ошибки →' : 'Начать заново →';
    refs.nextSessionBtn.disabled = mode === 'vocabulary' && remaining === 0;

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
