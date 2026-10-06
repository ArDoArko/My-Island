import messages from './i18n/messages.json';
import serverMessages from './i18n/server-messages.json';

// Presentation preferences are separate from account, room and save data.
export const languages = [
  { code: 'pl', name: 'Polski', locale: 'pl-PL' },
  { code: 'en', name: 'English', locale: 'en-GB' },
  { code: 'nl', name: 'Nederlands', locale: 'nl-BE' },
  { code: 'de', name: 'Deutsch', locale: 'de-DE' },
  { code: 'fr', name: 'Français', locale: 'fr-BE' },
  { code: 'es', name: 'Español', locale: 'es-ES' }
];
export const storageKey = 'myIslandLanguageV1';
const catalogs = new Map(languages.map(({ code }) => [code, new Map()]));
const originalText = new Map();
for (const row of [...messages, ...serverMessages]) {
  if (row.length !== languages.length || row.some(text => typeof text !== 'string' || !text)) {
    throw new Error('Incomplete My Island translation');
  }
  languages.forEach(({ code }, index) => {
    catalogs.get(code).set(row[0], row[index]);
    if (!originalText.has(row[index])) originalText.set(row[index], row[0]);
  });
}

function initialLanguage() {
  try {
    const saved = localStorage.getItem(storageKey);
    if (catalogs.has(saved)) return saved;
  } catch {}
  const preferred = typeof navigator === 'undefined' ? [] : navigator.languages || [navigator.language];
  for (const value of preferred) {
    const code = String(value).toLowerCase().split('-')[0];
    if (catalogs.has(code)) return code;
  }
  return 'pl';
}
let language = initialLanguage();
export function current() { return language; }
export function locale() { return languages.find(item => item.code === language).locale; }
export function t(source) {
  const text = String(source ?? '');
  // Stored connection errors can already be translated when the language changes.
  const key = catalogs.get('pl').has(text) ? text : originalText.get(text) || text;
  return catalogs.get(language).get(key) ?? text;
}
export function apply(root = document) {
  root.documentElement.lang = language;
  root.title = t('My Island 0.15.1 — Twoja wyspa');
  for (const element of root.querySelectorAll('[data-i18n]')) {
    element.textContent = t(element.getAttribute('data-i18n'));
  }
  for (const attribute of ['aria-label', 'placeholder', 'title']) {
    for (const element of root.querySelectorAll('[data-i18n-' + attribute + ']')) {
      element.setAttribute(attribute, t(element.getAttribute('data-i18n-' + attribute)));
    }
  }
  const selector = root.getElementById('languageStart');
  if (selector) selector.value = language;
  const button = root.getElementById('languageButton');
  if (button) button.textContent = '🌐 ' + language.toUpperCase();
  for (const element of root.querySelectorAll('[data-language]')) {
    element.setAttribute('aria-pressed', String(element.getAttribute('data-language') === language));
  }
}
export function set(code, root = document) {
  if (!catalogs.has(code)) return false;
  language = code;
  try { localStorage.setItem(storageKey, code); } catch {}
  apply(root);
  return true;
}
