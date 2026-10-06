import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { game, controller, html } from './game-harness.mjs';
import { cameraVector, legPose, terrainHeight } from '../island3d-src.mjs';

const messages = ['messages', 'server-messages'].flatMap(file => JSON.parse(readFileSync(new URL('../i18n/' + file + '.json', import.meta.url), 'utf8')));
const catalog = new Map(messages.map(row => [row[0], row]));
const languageCodes = ['pl', 'en', 'nl', 'de', 'fr', 'es'];
const progress = { version: 10, P: { x: 1500, y: 1100 }, wood: 77, stone: 31, food: 8, shells: 12, fish: 5, cookedFish: 3, totalCaught: 19, xpv: 1250, coins: 937, health: 71, energy: 86, spear: true, rod: true, raft: true, treasure: true, secondFound: true, returned: true, baseLevel: 2, basePos: { x: 1550, y: 1150 }, campfire: true, questsDone: { fish: true, supplies: false }, world: { resources: [{ t: 'tree', x: 900, y: 900, hp: 1, phase: 1.2 }], enemies: [{ x: 2500, y: 950, sx: 2500, sy: 950, hp: 2, phase: 3, hit: 0 }], seed: 42, face: 'left' } };

test('every bound interface string and inline translation has all six versions', () => {
  assert.equal(catalog.size, messages.length, 'Duplicate source keys');
  for (const row of messages) assert(row.length === 6 && row.every(text => typeof text === 'string' && text.trim()), row[0]);
  const g = game();
  for (const element of g.document.querySelectorAll('[data-i18n],[data-i18n-placeholder],[data-i18n-aria-label],[data-i18n-title]')) {
    for (const attribute of element.attributes) if (attribute.name.startsWith('data-i18n')) assert(catalog.has(attribute.value), attribute.value);
  }
  for (const match of html.matchAll(/tr\('([^'\\]*(?:\\.[^'\\]*)*)'\)/g)) assert(catalog.has(match[1].replace(/\\'/g, "'")), match[1]);
  g.close();
});

test('Dutch in Belgium is selected automatically and a saved choice wins on reload', () => {
  const dutch = game({ preferred: ['nl-BE', 'fr-BE'] });
  assert.equal(dutch.document.documentElement.lang, 'nl');
  assert.equal(dutch.element('languageStart').value, 'nl');
  assert(dutch.document.title.includes('Jouw eiland'));
  dutch.run("setLanguage('es')");
  const reload = game({ preferred: ['nl-BE'], storage: dutch.stored() });
  assert.equal(reload.document.documentElement.lang, 'es');
  assert.equal(reload.element('languageStart').value, 'es');
  const unsupported = game({ preferred: ['xx-ZZ'], storage: { myIslandLanguageV1: 'not-a-language' } });
  assert.equal(unsupported.document.documentElement.lang, 'pl');
  for (const g of [dutch, reload, unsupported]) g.close();
});

test('language selection remains usable if local storage is blocked', () => {
  const g = game({ preferred: ['nl-NL'], storageBlocked: true });
  assert.equal(g.document.documentElement.lang, 'nl');
  assert.doesNotThrow(() => g.run("setLanguage('fr')"));
  assert.equal(g.document.documentElement.lang, 'fr');
  g.close();
});

for (const [index, code] of languageCodes.entries()) test(code + ': all screens translate without changing existing progress', () => {
  const g = game({ storage: { myIsland09: JSON.stringify(progress) } });
  g.run('startGame()');
  const before = g.run('JSON.stringify(soloSnapshot())');
  const stored = g.stored();
  g.run("toggle('languagePanel',1);setLanguage('" + code + "')");
  assert.equal(g.document.documentElement.lang, code);
  assert.equal(g.element('languageButton').textContent, '🌐 ' + code.toUpperCase());
  assert.equal(g.element('languageStart').value, code);
  assert.equal(g.element('msg').textContent, catalog.get('Witaj na żywej wyspie! Leon czeka przy obozowisku.')[index]);
  assert.equal(g.document.querySelector('[data-language="' + code + '"]').getAttribute('aria-pressed'), 'true');
  assert.equal(g.run('JSON.stringify(soloSnapshot())'), before);
  assert.deepEqual(g.stored(), { ...stored, myIslandLanguageV1: code });
  assert.equal(g.requests.length, 0);
  for (const id of ['bag', 'craft', 'basePanel', 'shop', 'nelaPanel', 'roomPanel', 'controllerPanel', 'accountPanel']) {
    g.run("toggle('" + id + "',1)");
    assert.equal(g.element(id).style.display, 'block');
    for (const element of g.element(id).querySelectorAll('[data-i18n]')) assert.equal(element.textContent, catalog.get(element.dataset.i18n)[index]);
  }
  assert.equal(g.element('baseIntro').textContent, catalog.get('Twoje miejsce odpoczynku.')[index]);
  assert.equal(g.element('restButton').textContent, catalog.get('Odpocznij')[index]);
  assert.equal(g.element('accountLabel').textContent, catalog.get('Grasz bez konta')[index]);
  assert.equal(g.element('treasureQuest').textContent, catalog.get('Skarb odnaleziony i oddany Neli. Gratulacje!')[index]);
  assert.equal(g.element('fishQuest').textContent, catalog.get('Dostawa ukończona ✓')[index]);
  assert.equal(g.run('JSON.stringify(soloSnapshot())'), before);
  g.close();
});

test('changing language preserves anonymous form inputs and shows recovery and login errors in Dutch', () => {
  const g = game();
  g.run("toggle('accountPanel',1);showAccountForm('recover')");
  const inputs = { cloudEmail: 'fixture@example.invalid', cloudPassword: 'Local test password only', cloudPasswordRepeat: 'Local test password only', cloudRecoveryInput: 'TEST-CODE-DO-NOT-USE', roomName: 'Nederlands', roomJoinCode: 'ABCDEFGH' };
  for (const [id, value] of Object.entries(inputs)) g.element(id).value = value;
  g.run("cloud.authError='Nieprawidłowy e-mail lub kod odzyskiwania.';setLanguage('nl')");
  for (const [id, value] of Object.entries(inputs)) assert.equal(g.element(id).value, value);
  assert.equal(g.element('cloudPasswordLabel').textContent, 'Nieuw wachtwoord');
  assert.equal(g.element('cloudAuthError').textContent, 'Onjuist e-mailadres of herstelcode.');
  g.run("setLanguage('en')");
  assert.equal(g.element('cloudAuthError').textContent, 'Incorrect email or recovery code.');
  assert.equal(g.requests.length, 0);
  for (const mode of ['login', 'register', 'recover']) {
    g.run("showAccountForm('" + mode + "');setLanguage('nl')");
    assert(g.element('cloudFormTitle').textContent.length > 0);
    assert.equal(g.element('cloudRepeatField').style.display, mode === 'login' ? 'none' : 'grid');
    assert.equal(g.element('cloudRecoveryField').style.display, mode === 'recover' ? 'grid' : 'none');
  }
  g.close();
});

test('account and pending-save data stay identical when changing language', () => {
  const g = game();
  g.run('startGame()');
  g.run(`cloud.session={id:'test-only',token:'fixture-token',label:'fixture@example.invalid',authMode:'email'};cloud.cache={state:soloSnapshot(),revision:7,dirty:true,pending:{revision:7,writeId:'unchanged'},updatedAt:1600000000000};cloud.ready=true;cloud.updatedAt=1600000000000;cloud.conflict={state:soloSnapshot(),revision:8};cloud.error='Na innym urządzeniu jest nowszy postęp. Twój bieżący zapis został zachowany na tym urządzeniu.'`);
  const before = g.run('JSON.stringify({session:cloud.session,cache:cloud.cache,conflict:cloud.conflict,state:soloSnapshot()})');
  for (const code of languageCodes) {
    g.run("setLanguage('" + code + "')");
    assert.equal(g.element('accountLabel').textContent, 'fixture@example.invalid');
    assert.equal(g.run('JSON.stringify({session:cloud.session,cache:cloud.cache,conflict:cloud.conflict,state:soloSnapshot()})'), before);
  }
  assert.equal(g.requests.length, 0);
  g.close();
});

test('four-player room retains player names, inventory and the guest island', () => {
  const g = game({ storage: { myIsland09: JSON.stringify(progress) } });
  g.run(`startGame();net.solo=captureSolo();net.room='ABCDEFGH';net.connected=true;net.you='p0';net.players=['Gracz','Nederlands','Żółw','Nela'].map((name,i)=>({id:'p'+i,slot:i,name,x:1500+i*50,y:1100,fromX:1500+i*50,fromY:1100,health:80+i,received:performance.now()}));updateRoomUI()`);
  const before = g.run('JSON.stringify({state:soloSnapshot(),solo:net.solo,players:net.players,room:net.room})');
  g.run("setLanguage('nl')");
  const names = [...g.element('roomMembers').querySelectorAll('li > span:nth-child(2)')].map(e => e.textContent);
  assert.deepEqual(names, ['Gracz (jij)', 'Nederlands', 'Żółw', 'Nela']);
  assert.equal(g.element('roomCount').textContent, '4/4');
  assert.equal(g.element('roomCode').value, 'ABCDEFGH');
  assert.equal(g.run('JSON.stringify({state:soloSnapshot(),solo:net.solo,players:net.players,room:net.room})'), before);
  g.run("say('Zebrano dla drużyny: 2 drewna.')");
  assert.equal(g.element('msg').textContent, 'Verzameld voor het team: 2 hout.');
  g.run("say('Wspólna baza L3 gotowa!')");
  assert.equal(g.element('msg').textContent, 'Gezamenlijke basis L3 klaar!');
  assert.equal(g.requests.length, 0);
  g.close();
});

test('translated gameplay keeps gathering, crafting and old-save migration intact', () => {
  const g = game({ preferred: ['nl-BE'] });
  g.run('startGame();P={...O.find(o=>o.t==="tree"&&distance(o,leon)>120)};interact();interact()');
  assert.equal(g.run('wood'), 2);
  assert.equal(g.run('O.length'), 302);
  g.run('wood=30;stone=12;shells=9;craftSpear();craftRod();craftRaft()');
  assert.equal(g.run('!!(spear&&rod&&raft)'), true);
  assert.equal(g.run('shells'), 1);
  const old = game({ preferred: ['nl-NL'], storage: { myIsland09: JSON.stringify({ wood: 32, stone: 9, food: 8, fish: 3, shells: 2, coins: 450, xpv: 1200, health: 60, energy: 70, baseLevel: 2, rod: 1, raft: 1 }) } });
  old.run('startGame();save()');
  assert.equal(old.run('food'), 5);
  assert.equal(old.run('totalCaught'), 3);
  assert.equal(old.run('coins'), 450);
  const reloaded = game({ storage: old.stored() });
  reloaded.run('startGame()');
  assert.equal(reloaded.run('food'), 5);
  assert.equal(reloaded.run('gameState().version'), 10);
  for (const item of [g, old, reloaded]) item.close();
});

test('3D labels follow language while view, ground contact and camera controls remain compatible', () => {
  const g = game({ storage: { myIsland09: JSON.stringify(progress) } });
  let yaw = Math.PI;
  const graphics = { enabled: false, frame() {}, resize() {}, vector: (x, y) => cameraVector(x, y, yaw), orbit: dx => { yaw += dx; }, setEnabled(value) { this.enabled = value; } };
  g.window.MyIsland3D = { create: () => graphics };
  g.run('boot3D();startGame()');
  const before = g.run('JSON.stringify(soloSnapshot())');
  g.run("setLanguage('nl')");
  assert.equal(g.run('sceneState().labels.leon'), 'LEON · HANDEL');
  assert.equal(g.run('sceneState().labels.nela'), 'NELA · OPDRACHTEN');
  assert.equal(graphics.enabled, true);
  g.run('switchView();switchView()');
  assert.equal(g.run('JSON.stringify(soloSnapshot())'), before);
  const device = controller();
  g.setPads([device]);g.frame();g.frame();
  const position = g.run('JSON.stringify(P)'), oldYaw = yaw;
  device.axes[2] = 1;g.frame();
  assert.notEqual(yaw, oldYaw);
  assert.equal(g.run('JSON.stringify(P)'), position);
  device.axes = [0, 0, 0, 0];g.run('padProfile.x=2;padProfile.y=3');g.frame();
  const genericYaw = yaw;device.axes[2] = 1;g.frame();
  assert.equal(yaw, genericYaw);
  assert.notEqual(g.run('JSON.stringify(P)'), position);
  assert.equal(g.run('wood'), 77);
  for (const angle of [0, Math.PI / 2, Math.PI, 5.1]) {
    const vector = cameraVector(.4, -.6, angle);
    assert(Math.abs(Math.hypot(vector.x, vector.y) - Math.hypot(.4, -.6)) < 1e-12);
  }
  const pose = legPose(-.78, .22);
  assert(Math.abs(-.43 * Math.cos(pose.hip) - .43 * Math.cos(pose.hip + pose.knee) + .78) < 1e-10);
  assert(terrainHeight(1500 / 80, 1100 / 80) > 0);
  g.close();
});

test('language modal pauses movement and gamepad remapping still works after a change', () => {
  const g = game();
  const device = controller();g.setPads([device]);g.run('startGame()');g.frame();g.frame();
  g.run("toggle('languagePanel',1);setLanguage('nl')");
  const position = g.run('JSON.stringify(P)');device.axes[0] = 1;g.frame();
  assert.equal(g.run('JSON.stringify(P)'), position);
  device.axes[0] = 0;g.run("toggle('controllerPanel',1)");g.frame();g.frame();
  g.run("bindPad('craft')");
  assert(g.element('bindPrompt').textContent.includes('BOUW'));
  device.buttons[10] = { pressed: true, value: 1 };g.frame();
  assert.equal(g.run('padProfile.buttons.craft'), 10);
  const profile = g.window.localStorage.getItem('myIslandPadV1');
  g.run("setLanguage('de')");
  assert.equal(g.window.localStorage.getItem('myIslandPadV1'), profile);
  g.close();
});

test('requests keep account protocol 12 and room protocol 11', async () => {
  const g = game({ preferred: ['nl-BE'] });
  g.respond(async () => ({ ok: true, json: async () => ({}) }));
  await g.run("accountRequest({op:'test-only'})");
  await g.run("roomRequest({op:'test-only'})");
  assert.deepEqual(g.requests.map(request => request.payload.version), [12, 11]);
  assert(g.requests.every(request => request.url.startsWith('https://my-island-online.arekpoczta734.chatgpt.site/api/')));
  g.close();
});
