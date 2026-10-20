window.Trainer = window.Trainer || {};

window.Trainer.createSessionScoring = function () {
  function start(state, session) {
    state.session = session;
    state.idx = 0;
    state.correct = 0;
    state.wrong = 0;
    state.outcomes = {};
    state.checkedCurrent = false;
    state.wrongCounted = false;
  }

  function record(state, outcome) {
    const item = state.session[state.idx];
    if (!item || state.outcomes[item.id]) return;
    state.outcomes[item.id] = outcome;
    state[outcome] += 1;
  }

  function restore(state, saved) {
    const validIds = new Set(state.session.map((item) => String(item.id)));
    state.outcomes = Object.fromEntries(Object.entries(saved || {}).filter(([id, outcome]) =>
      validIds.has(id) && (outcome === 'correct' || outcome === 'wrong')
    ));
  }

  function wasWrong(state) {
    const item = state.session[state.idx];
    return Boolean(item && state.outcomes[item.id] === 'wrong');
  }

  function finish(state) {
    // Include unanswered tasks, while retaining counters from older saved sessions.
    const missed = Math.max(0, state.session.length - state.correct - state.wrong);
    state.wrong += missed;
    state.session.forEach((item) => {
      if (!state.outcomes[item.id]) state.outcomes[item.id] = 'wrong';
    });
    const graded = state.correct + state.wrong;
    const rounded = graded > 0 ? Math.round(state.correct / graded * 100) : 0;
    const percent = Math.min(state.wrong > 0 ? 99 : 100, Math.max(0, rounded));
    return { correct: state.correct, wrong: state.wrong, percent };
  }

  return { start, record, restore, wasWrong, finish };
};

window.Trainer.createProgressStore = function (window) {
  // Keep the existing key and schema so installed copies retain progress.
  const key = 'english-grammar-trainer.progress.v2';

  function load() {
    try {
      const value = JSON.parse(window.localStorage.getItem(key));
      return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
    } catch (_) {
      return null;
    }
  }

  function save(snapshot) {
    try {
      window.localStorage.setItem(key, JSON.stringify(snapshot));
      return true;
    } catch (_) {
      // Storage may be unavailable or full; training can continue in memory.
      return false;
    }
  }

  return { load, save };
};
