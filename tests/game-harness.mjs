import { readFileSync } from 'node:fs';
import { runInContext } from 'node:vm';
import { JSDOM } from 'jsdom';

export const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const translations = readFileSync(new URL('../i18n.bundle.js', import.meta.url), 'utf8');
const wildlife = readFileSync(new URL('../wildlife.bundle.js', import.meta.url), 'utf8');
const activities = readFileSync(new URL('../island-play.bundle.js', import.meta.url), 'utf8');
const chapters=readFileSync(new URL('../expeditions.bundle.js',import.meta.url),'utf8'),characters=readFileSync(new URL('../character.bundle.js',import.meta.url),'utf8');
const campaign=readFileSync(new URL('../campaign.bundle.js',import.meta.url),'utf8');
const gameScript = html.match(/<script>([\s\S]*?)<\/script>/)[1];

// This runs the real DOM and game script with local fixtures. It never contacts
// the live account service or creates a player account.
export function game({ storage = {}, preferred = ['pl-PL'], storageBlocked = false } = {}) {
  const dom = new JSDOM(html, {
    url: 'https://ardoarko.github.io/My-Island/',
    runScripts: 'outside-only',
    pretendToBeVisual: true
  });
  const window = dom.window, requests = [], timers = new Map();
  let now = 10000, timerID = 0, controllers = [], responder = null;
  Object.defineProperty(window.navigator, 'languages', { value: preferred });
  window.navigator.getGamepads = () => controllers;
  window.performance.now = () => now;
  window.requestAnimationFrame = () => 1;
  window.setTimeout = callback => { timers.set(++timerID, callback); return timerID; };
  window.clearTimeout = id => timers.delete(id);
  window.setInterval = () => 1;
  window.clearInterval = () => {};
  window.fetch = async (url, options = {}) => {
    const request = { url, ...options, payload: JSON.parse(options.body || '{}') };
    requests.push(request);
    if (responder) return responder(request);
    throw new Error('Test fixture: offline');
  };
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.HTMLElement.prototype.setPointerCapture = () => {};
  window.HTMLElement.prototype.getClientRects = function () {
    return this.closest('.panel')?.style.display === 'none' ? [] : [{ width: 40, height: 40 }];
  };
  const contexts = new WeakMap();
  window.HTMLCanvasElement.prototype.getContext = function () {
    if (!contexts.has(this)) {
      const data = { canvas: this, measureText: text => ({ width: String(text).length * 7 }) };
      for (const name of ['createLinearGradient', 'createRadialGradient']) data[name] = () => ({ addColorStop() {} });
      contexts.set(this, new Proxy(data, { get: (target, name) => target[name] ?? (() => {}) }));
    }
    return contexts.get(this);
  };
  for (const [key, value] of Object.entries(storage)) window.localStorage.setItem(key, value);
  if (storageBlocked) Object.defineProperty(window, 'localStorage', { get() { throw new Error('Storage blocked'); } });
  window.eval(translations);
  window.eval(wildlife);
  window.eval(activities);window.eval(chapters);window.eval(characters);window.eval(campaign);
  const context = dom.getInternalVMContext();
  runInContext(gameScript, context);
  for (const element of window.document.querySelectorAll('[onclick],[onchange],[onsubmit]')) {
    for (const attribute of ['onclick', 'onchange', 'onsubmit']) {
      if (element.hasAttribute(attribute)) element[attribute] = window.Function('event', element.getAttribute(attribute));
    }
  }
  return {
    window, document: window.document, requests,
    run: code => runInContext(code, context),
    element: id => window.document.getElementById(id),
    frame(ms = 16.667) { now += ms; runInContext('loop(' + now + ')', context); },
    setPads(value) { controllers = value; },
    respond(callback) { responder = callback; },
    stored() { return Object.fromEntries(Array.from({ length: window.localStorage.length }, (_, i) => { const key = window.localStorage.key(i); return [key, window.localStorage.getItem(key)]; })); },
    close() { dom.window.close(); }
  };
}

export function controller(mapping = 'standard') {
  return { index: 0, id: 'Local test controller', connected: true, mapping,
    axes: [0, 0, 0, 0], buttons: Array.from({ length: 18 }, () => ({ pressed: false, value: 0 })) };
}
