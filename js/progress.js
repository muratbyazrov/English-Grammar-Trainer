window.Trainer = window.Trainer || {};

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
