window.Trainer = window.Trainer || {};
window.Trainer.createTheoryMode = function ({
  cancelPendingActivity,
  hideSessionComplete,
  refs
}) {
  const { THEORY_TOPICS } = window.TrainerData;

  function ensureTheoryTopicOptions() {
    if (refs.theoryTopic.options.length > 0) return;

    THEORY_TOPICS.forEach((topic) => {
      const opt = document.createElement('option');
      opt.value = topic.id;
      opt.textContent = topic.title;
      refs.theoryTopic.appendChild(opt);
    });
  }

  function restoreTheoryProgress(saved) {
    ensureTheoryTopicOptions();
    if (!saved || typeof saved !== "object") return false;

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.theoryTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.theoryTopic.value = topicValue;
      return true;
    }
    return false;
  }

  function appendTheoryList(parent, items) {
    const list = document.createElement('ul');
    list.className = 'theory-list';
    items.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    parent.appendChild(list);
  }

  function appendTheoryExamples(parent, examples) {
    const list = document.createElement('div');
    list.className = 'theory-examples';
    examples.forEach(([english, russian]) => {
      const row = document.createElement('div');
      row.className = 'theory-example';

      const phrase = document.createElement('div');
      phrase.className = 'theory-example-en';
      phrase.textContent = english;

      const translation = document.createElement('div');
      translation.className = 'theory-example-ru';
      translation.textContent = russian;

      row.appendChild(phrase);
      row.appendChild(translation);
      list.appendChild(row);
    });
    parent.appendChild(list);
  }

  const THEORY_AUX_TOKENS = new Set([
    'am', 'is', 'are', 'was', 'were', 'be', 'been', 'to be',
    'do', 'does', 'did', 'have', 'has', 'had',
    'will', 'will be', 'going to'
  ]);

  const THEORY_SUBJECT_TOKENS = new Set([
    'i', 'he', 'she', 'it', 'we', 'you', 'they',
    'subject', 'what', 'who', 'which'
  ]);

  const THEORY_LABEL_ROLES = { '+': 'pos', '-': 'neg', '−': 'neg', '?': 'ask' };

  function theoryTokenRole(token) {
    const value = String(token == null ? '' : token).trim().toLowerCase();
    if (!value) return '';
    if (/^v\s*[-(1-3]/.test(value)) return 'verb';
    if (/\bnot\b|n['’]t\b/.test(value)) return 'neg';
    if (THEORY_AUX_TOKENS.has(value)) return 'aux';
    const parts = value.split('/').map((part) => part.trim()).filter(Boolean);
    if (parts.length && parts.every((part) => THEORY_SUBJECT_TOKENS.has(part))) return 'subject';
    return '';
  }

  function theoryTokenText(token) {
    if (token && typeof token === 'object') return token.text || '';
    return token == null ? '' : String(token);
  }

  function buildTheorySchemeCells(schemeRows) {
    const rows = schemeRows.map((row) => ({
      label: row.label || '',
      tokens: (row.tokens || []).map((token) => {
        const text = theoryTokenText(token);
        const role = (token && typeof token === 'object' && token.role) || theoryTokenRole(text);
        return { text, role };
      })
    }));

    const columns = rows.reduce((max, row) => Math.max(max, row.tokens.length), 0);
    const cells = [];
    const open = new Map();

    rows.forEach((row, rowIndex) => {
      const offset = columns - row.tokens.length;
      const rowCells = [{
        column: 1,
        span: 1,
        text: row.label,
        kind: 'label',
        role: THEORY_LABEL_ROLES[row.label] || ''
      }];

      row.tokens.forEach((token, index) => {
        rowCells.push({
          column: index === 0 ? 2 : 2 + offset + index,
          span: index === 0 ? offset + 1 : 1,
          text: token.text,
          kind: 'token',
          role: token.role
        });
      });

      const filled = new Set();

      rowCells.forEach((cell) => {
        filled.add(cell.column);
        const previous = open.get(cell.column);
        const sameBlock = previous
          && previous.lastRow === rowIndex - 1
          && previous.span === cell.span
          && previous.text === cell.text
          && previous.role === cell.role
          && previous.kind === cell.kind;

        if (sameBlock) {
          previous.rows += 1;
          previous.lastRow = rowIndex;
          return;
        }

        const created = Object.assign({ row: rowIndex, rows: 1, lastRow: rowIndex }, cell);
        cells.push(created);
        open.set(cell.column, created);
      });

      open.forEach((cell, column) => {
        if (!filled.has(column)) open.delete(column);
      });
    });

    return { columns, rowCount: rows.length, cells };
  }

  function appendTheorySchemes(parent, schemes) {
    schemes.forEach((scheme) => {
      const details = document.createElement('details');
      details.className = 'theory-scheme';
      details.open = true;

      const summary = document.createElement('summary');
      summary.textContent = scheme.title || 'Показать схему';
      details.appendChild(summary);

      const rows = document.createElement('div');
      rows.className = 'theory-scheme-rows';

      const grid = buildTheorySchemeCells(scheme.rows || []);
      rows.style.gridTemplateColumns = '42px repeat(' + Math.max(grid.columns, 1) + ', minmax(0, 1fr))';

      grid.cells.forEach((cell) => {
        const cellEl = document.createElement('span');
        cellEl.className = cell.kind === 'label' ? 'theory-scheme-label' : 'theory-scheme-token';
        if (cell.role) {
          cellEl.classList.add((cell.kind === 'label' ? 'theory-scheme-label--' : 'theory-scheme-token--') + cell.role);
        }
        if (cell.rows > 1) cellEl.classList.add('theory-scheme-cell--merged');
        cellEl.style.gridColumn = cell.column + ' / span ' + cell.span;
        cellEl.style.gridRow = (cell.row + 1) + ' / span ' + cell.rows;
        cellEl.textContent = cell.text;
        rows.appendChild(cellEl);
      });

      details.appendChild(rows);
      parent.appendChild(details);
    });
  }

  function renderTheory() {
    hideSessionComplete();
    cancelPendingActivity();
    ensureTheoryTopicOptions();

    const topic = THEORY_TOPICS.find((item) => item.id === refs.theoryTopic.value) || THEORY_TOPICS[0];
    if (!topic) {
      refs.theoryTitle.textContent = 'Теория не найдена';
      refs.theoryBody.textContent = '';
      return;
    }

    refs.theoryTopic.value = topic.id;
    refs.theoryTitle.textContent = topic.title;
    refs.theoryBody.innerHTML = '';

    if (topic.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'theory-subtitle';
      subtitle.textContent = topic.subtitle;
      refs.theoryBody.appendChild(subtitle);
    }

    topic.sections.forEach((section) => {
      const block = document.createElement('section');
      block.className = 'theory-section';

      const heading = document.createElement('h3');
      heading.textContent = section.title;
      block.appendChild(heading);

      if (section.items) appendTheoryList(block, section.items);
      if (section.schemes) appendTheorySchemes(block, section.schemes);
      if (section.examples) appendTheoryExamples(block, section.examples);

      refs.theoryBody.appendChild(block);
    });
  }

  return {
    ensureTheoryTopicOptions,
    renderTheory,
    restoreTheoryProgress
  };
};
