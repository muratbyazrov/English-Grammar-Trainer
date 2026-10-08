const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '../..');
const storageKey = 'english-grammar-trainer.progress.v2';

class Element {
  constructor(tag = 'div') {
    this.tag = tag;
    this.children = [];
    this.listeners = {};
    this.style = {};
    this.dataset = {};
    this.attributes = {};
    this.value = '';
    this.checked = false;
    this.hidden = false;
    this.className = '';
    this.classList = {
      contains: name => this.className.split(' ').includes(name),
      add: (...names) => { this.className = [...new Set([...this.className.split(' '), ...names])].join(' '); },
      remove: (...names) => { this.className = this.className.split(' ').filter(name => !names.includes(name)).join(' '); },
      toggle: (name, enabled) => {
        if (enabled ?? !this.classList.contains(name)) this.classList.add(name);
        else this.classList.remove(name);
      },
    };
  }
  get options() { return this.children; }
  set textContent(value) { this.text = String(value); this.children = []; }
  get textContent() { return this.text || this.children.map(child => child.textContent).join(''); }
  set innerHTML(value) { this.textContent = value; if (this.tag === 'select') this.value = ''; }
  appendChild(child) {
    this.children.push(child);
    if (this.tag === 'select' && this.children.length === 1) this.value = child.value;
    return child;
  }
  setAttribute(name, value) { this.attributes[name] = value; }
  addEventListener(type, fn, options = {}) { (this.listeners[type] ||= []).push({ fn, once: options.once }); }
  dispatchEvent(event) {
    for (const listener of [...(this.listeners[event.type] || [])]) {
      if (listener.once) this.listeners[event.type] = this.listeners[event.type].filter(item => item !== listener);
      listener.fn(event);
    }
  }
  click() { if (!this.disabled) this.dispatchEvent({ type: 'click', target: this }); }
  focus() {}
  querySelector(selector) {
    return this.children.find(child => child.classList.contains(selector.slice(1)))
      || this.children.map(child => child.querySelector(selector)).find(Boolean) || null;
  }
}

function createApp({ saved, speech = true, recognition = false } = {}) {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const elements = new Map();
  for (const match of html.matchAll(/<(\w+)\b([^>]*\bid="([^"]+)"[^>]*)>/g)) {
    const element = new Element(match[1]);
    element.checked = /\bchecked\b/.test(match[2]);
    element.hidden = /\bhidden\b/.test(match[2]);
    elements.set(match[3], element);
  }
  for (const match of html.matchAll(/<select\b[^>]*id="([^"]+)"[^>]*>([\s\S]*?)<\/select>/g)) {
    const select = elements.get(match[1]);
    for (const optionMatch of match[2].matchAll(/<option\b([^>]*)value="([^"]+)"([^>]*)>(.*?)<\/option>/g)) {
      const option = new Element('option');
      option.value = optionMatch[2]; option.textContent = optionMatch[4];
      select.appendChild(option);
      if (/\bselected\b/.test(optionMatch[1] + optionMatch[3])) select.value = option.value;
    }
  }
  const document = {
    getElementById: id => elements.get(id) || null,
    querySelector: () => new Element(),
    createElement: tag => new Element(tag),
    createTextNode: text => Object.assign(new Element(), { textContent: text }),
  };
  let now = 0, sequence = 0;
  const timers = new Map();
  const storage = new Map(saved === undefined ? [] : [[storageKey, JSON.stringify(saved)]]);
  const spoken = [], recognizers = [];
  const window = {
    location: { protocol: 'http:' },
    addEventListener() {},
    setTimeout(fn, delay) { const id = ++sequence; timers.set(id, { fn, at: now + delay }); return id; },
    clearTimeout(id) { timers.delete(id); },
    localStorage: { getItem: key => storage.get(key) || null, setItem: (key, value) => storage.set(key, value) },
  };
  if (speech) {
    window.SpeechSynthesisUtterance = class extends Element { constructor(text) { super(); this.text = text; } };
    window.speechSynthesis = { getVoices: () => [], addEventListener() {}, cancel() {}, speak: utterance => spoken.push(utterance) };
  }
  if (recognition) {
    window.SpeechRecognition = class {
      constructor() { recognizers.push(this); }
      start() { this.active = true; this.onstart?.(); }
      abort() { this.active = false; this.onend?.(); }
      stop() { this.active = false; this.onend?.(); }
    };
  }
  const context = vm.createContext({ window, document, Event, console, fetch: async () => ({ ok: true, json: async () => ({ sentences: [{ trans: 'Перевод' }] }) }) });
  const scripts = [...html.matchAll(/<script src="\.\/([^"?]+)(?:\?[^"]*)?"><\/script>/g)].map(match => match[1]);
  for (const file of scripts) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
  return {
    window, spoken, recognizers, elements,
    el: id => elements.get(id),
    click: id => elements.get(id).click(),
    change(id, value) {
      const element = elements.get(id);
      if (typeof value === 'boolean') element.checked = value;
      else element.value = value;
      element.dispatchEvent({ type: 'change', target: element });
    },
    answer(text) { elements.get('answer-input').value = text; elements.get('check-btn').click(); },
    snapshot: () => JSON.parse(storage.get(storageKey)),
    advance(ms) {
      const end = now + ms;
      let count = 0;
      while (true) {
        const entry = [...timers].filter(([, timer]) => timer.at <= end).sort((a, b) => a[1].at - b[1].at)[0];
        if (!entry) break;
        if (++count > 100) throw new Error('Timer loop');
        timers.delete(entry[0]); now = entry[1].at; entry[1].fn();
      }
      now = end;
    },
  };
}
module.exports = { createApp };
