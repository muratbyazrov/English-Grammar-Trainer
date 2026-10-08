window.Trainer = window.Trainer || {};

// All delayed UI work belongs to the current activity (mode/question).
window.Trainer.createActivity = function (clock) {
  const pending = new Map();

  function cancel(name) {
    const task = pending.get(name);
    if (!task) return;
    pending.delete(name);
    clock.clearTimeout(task.id);
  }

  function schedule(name, callback, delay) {
    cancel(name);
    const task = {};
    pending.set(name, task);
    task.id = clock.setTimeout(() => {
      // Also reject callbacks already queued when cancellation happened.
      if (pending.get(name) !== task) return;
      pending.delete(name);
      callback();
    }, delay);
  }

  function cancelAll() {
    for (const name of pending.keys()) cancel(name);
  }

  return { schedule, cancel, cancelAll };
};
