window.Trainer = window.Trainer || {};
window.Trainer.createTheoryMode = function ({
  cancelPendingActivity,
  hideSessionComplete,
  refs
}) {
  const { THEORY_TOPICS, THEORY_BRIEF_TOPICS } = window.TrainerData;
  let theoryView = 'short';
  const futurePresentation = window.Trainer.createFuturePresentation();

  function normalizeTheoryView(view) {
    return ['short', 'detailed', 'visual'].includes(view) ? view : 'short';
  }

  function currentTheoryView() {
    return theoryView;
  }

  function setTheoryView(view) {
    theoryView = normalizeTheoryView(view);
    renderTheory();
  }

  function syncTheoryViewControls() {
    refs.theoryViewVisual.hidden = refs.theoryTopic.value !== 'tenses-future';
    if (refs.theoryViewVisual.hidden && theoryView === 'visual') theoryView = 'short';
    [['short', refs.theoryViewShort], ['detailed', refs.theoryViewDetailed], ['visual', refs.theoryViewVisual]].forEach(([view, button]) => {
      button.setAttribute('aria-pressed', theoryView === view ? 'true' : 'false');
      button.classList.toggle('theory-view-button--active', theoryView === view);
    });
  }

  function theoryTopicIcon(topic) {
    const icons = {
      'tenses-guide': '🧭',
      'tenses-present': '☀️',
      'tenses-past': '🕰️',
      'tenses-future': '🚀',
      'due-to': '🔗',
      'whether-if': '🔀',
      'manage-to': '🎯',
      'aware-of': '💡',
      'worth': '⭐',
      'subject-questions': '❓',
      'passive-voice-table': '🔄',
      'get-v-ed': '⚡',
      'modals-code-review': '🧩'
    };
    return icons[topic.id] || '📚';
  }

  function syncTheoryTopicTrigger() {
    const topic = THEORY_TOPICS.find((item) => item.id === refs.theoryTopic.value);
    if (!topic) return;
    refs.theoryTopicTriggerIcon.textContent = theoryTopicIcon(topic);
    refs.theoryTopicTriggerText.textContent = topic.title;
    refs.theoryTopicTrigger.title = topic.title;
  }

  function showTheoryTopicPicker() {
    ensureTheoryTopicOptions();
    refs.theoryTopicGrid.innerHTML = '';
    THEORY_TOPICS.forEach((topic) => {
      const isSelected = topic.id === refs.theoryTopic.value;
      const card = document.createElement('button');
      card.type = 'button';
      card.className = `vocab-topic-card${isSelected ? ' vocab-topic-card--selected' : ''}`;
      card.dataset.topicValue = topic.id;
      card.setAttribute('role', 'option');
      card.setAttribute('aria-selected', isSelected ? 'true' : 'false');

      const icon = document.createElement('span');
      icon.className = 'vocab-topic-card-icon';
      icon.setAttribute('aria-hidden', 'true');
      icon.textContent = theoryTopicIcon(topic);

      const copy = document.createElement('span');
      copy.className = 'vocab-topic-card-copy';
      const title = document.createElement('strong');
      title.textContent = topic.title;
      const description = document.createElement('span');
      description.textContent = topic.subtitle || topic.sections.map((section) => section.title).join(' · ');
      copy.appendChild(title);
      copy.appendChild(description);

      const check = document.createElement('span');
      check.className = 'vocab-topic-card-check';
      check.setAttribute('aria-hidden', 'true');
      check.textContent = '✓';
      card.appendChild(icon);
      card.appendChild(copy);
      card.appendChild(check);
      card.addEventListener('click', () => {
        if (refs.theoryTopic.value !== topic.id) {
          refs.theoryTopic.value = topic.id;
          refs.theoryTopic.dispatchEvent(new Event('change', { bubbles: true }));
        }
        hideTheoryTopicPicker();
      });
      refs.theoryTopicGrid.appendChild(card);
    });
    refs.theoryTopicModalSubtitle.textContent = `${THEORY_TOPICS.length} тем · правила, схемы и примеры`;
    refs.theoryTopicOverlay.hidden = false;
    refs.theoryTopicTrigger.setAttribute('aria-expanded', 'true');
    const selectedCard = refs.theoryTopicGrid.querySelector('.vocab-topic-card--selected');
    (selectedCard || refs.theoryTopicClose).focus();
  }

  function hideTheoryTopicPicker() {
    refs.theoryTopicOverlay.hidden = true;
    refs.theoryTopicTrigger.setAttribute('aria-expanded', 'false');
    refs.theoryTopicTrigger.focus();
  }

  function ensureTheoryTopicOptions() {
    if (refs.theoryTopic.options.length === 0) {
      THEORY_TOPICS.forEach((topic) => {
        const opt = document.createElement('option');
        opt.value = topic.id;
        opt.textContent = topic.title;
        refs.theoryTopic.appendChild(opt);
      });
    }
    syncTheoryTopicTrigger();
  }

  function restoreTheoryProgress(saved) {
    ensureTheoryTopicOptions();
    if (!saved || typeof saved !== "object") return false;
    theoryView = normalizeTheoryView(saved.view);

    const topicValue = String(saved.topic || "");
    const hasTopic = Array.from(refs.theoryTopic.options).some((opt) => opt.value === topicValue);
    if (hasTopic) {
      refs.theoryTopic.value = topicValue;
      syncTheoryTopicTrigger();
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

  function appendTheoryTable(parent, data) {
    const wrapper = document.createElement('div');
    wrapper.className = 'theory-table-scroll';
    wrapper.tabIndex = 0;
    wrapper.setAttribute('role', 'region');
    wrapper.setAttribute('aria-label', 'Таблица сравнения форм');
    const table = document.createElement('table');
    table.className = 'theory-table';
    const head = document.createElement('thead');
    const headerRow = document.createElement('tr');
    data.headers.forEach((text) => {
      const cell = document.createElement('th');
      cell.setAttribute('scope', 'col');
      cell.textContent = text;
      headerRow.appendChild(cell);
    });
    head.appendChild(headerRow);
    table.appendChild(head);
    const body = document.createElement('tbody');
    data.rows.forEach((values) => {
      const row = document.createElement('tr');
      values.forEach((text) => {
        const cell = document.createElement('td');
        cell.textContent = text;
        row.appendChild(cell);
      });
      body.appendChild(row);
    });
    table.appendChild(body);
    wrapper.appendChild(table);
    parent.appendChild(wrapper);
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
    'will', 'will be', 'going to', 'am / is / are'
  ]);

  const THEORY_SUBJECT_TOKENS = new Set([
    'i', 'he', 'she', 'it', 'we', 'you', 'they',
    's', 'subject', 'what', 'who', 'which'
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

  function renderBriefTheory(topic) {
    const brief = THEORY_BRIEF_TOPICS[topic.id];
    if (!brief) return false;
    const grid = document.createElement('div');
    grid.className = 'theory-brief-grid';
    brief.cards.forEach((card) => {
      const block = document.createElement('section');
      block.className = 'theory-brief-card';
      const heading = document.createElement('h3');
      heading.textContent = card.title;
      block.appendChild(heading);
      const rule = document.createElement('p');
      rule.className = 'theory-brief-rule';
      rule.textContent = card.rule;
      block.appendChild(rule);
      if (card.formula) {
        const formula = document.createElement('p');
        formula.className = 'theory-brief-formula';
        formula.textContent = card.formula;
        block.appendChild(formula);
      }
      appendTheoryExamples(block, card.examples);
      grid.appendChild(block);
    });
    refs.theoryBody.appendChild(grid);
    if (brief.note) {
      const note = document.createElement('p');
      note.className = 'theory-brief-note';
      note.textContent = brief.note;
      refs.theoryBody.appendChild(note);
    }
    return true;
  }

  function renderTheory() {
    hideSessionComplete();
    cancelPendingActivity();
    ensureTheoryTopicOptions();
    syncTheoryViewControls();

    const topic = THEORY_TOPICS.find((item) => item.id === refs.theoryTopic.value) || THEORY_TOPICS[0];
    if (!topic) {
      refs.theoryTitle.textContent = 'Теория не найдена';
      refs.theoryBody.textContent = '';
      return;
    }

    refs.theoryTopic.value = topic.id;
    syncTheoryTopicTrigger();
    refs.theoryTitle.textContent = topic.title;
    refs.theoryBody.innerHTML = '';
    refs.theoryPanel.classList.toggle('theory-panel--visual', theoryView === 'visual');

    if (theoryView === 'visual') {
      refs.theoryTitle.textContent = 'Будущее время';
      futurePresentation.render(refs.theoryBody);
      return;
    }

    if (topic.subtitle) {
      const subtitle = document.createElement('p');
      subtitle.className = 'theory-subtitle';
      subtitle.textContent = topic.subtitle;
      refs.theoryBody.appendChild(subtitle);
    }

    if (theoryView === 'short' && renderBriefTheory(topic)) return;

    topic.sections.forEach((section) => {
      const block = document.createElement('section');
      block.className = 'theory-section';

      const heading = document.createElement('h3');
      heading.textContent = section.title;
      block.appendChild(heading);

      if (section.table) appendTheoryTable(block, section.table);
      if (section.items) appendTheoryList(block, section.items);
      if (section.schemes) appendTheorySchemes(block, section.schemes);
      if (section.examples) appendTheoryExamples(block, section.examples);

      refs.theoryBody.appendChild(block);
    });
  }

  return {
    ensureTheoryTopicOptions,
    showTheoryTopicPicker,
    hideTheoryTopicPicker,
    currentTheoryView,
    setTheoryView,
    renderTheory,
    restoreTheoryProgress
  };
};
