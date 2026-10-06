import { test } from 'node:test';
import assert from 'node:assert/strict';
import { game, controller } from './game-harness.mjs';
import { BOAR_RADIUS, obstacleRadius, wildlifeNavigation, moveBoar, releaseBoar } from '../wildlife.mjs';

test('boar goes around a stone without crossing it or speeding up', () => {
  const rock = { t: 'rock', x: 0, y: 0, phase: 1.4 }, enemy = { x: -135, y: 0 }, target = { x: 135, y: 0 };
  const nav = wildlifeNavigation([rock], () => true);
  let sideways = false;
  for (let i = 0; i < 160; i++) {
    const before = { ...enemy };
    moveBoar(enemy, target, 4, nav, i * 16);
    assert(nav.walkable(enemy), JSON.stringify(enemy));
    assert(Math.hypot(enemy.x - before.x, enemy.y - before.y) <= 4.000001);
    if (Math.abs(enemy.y) > obstacleRadius(rock) + BOAR_RADIUS) sideways = true;
  }
  assert(sideways, 'The enemy must actually detour around the obstacle');
  assert(Math.hypot(enemy.x - target.x, enemy.y - target.y) < 1);
});

test('clustered palms and rocks are avoided with full-body clearance', () => {
  const objects = [{ t: 'rock', x: 0, y: 0 }, { t: 'tree', x: 15, y: -70 }, { t: 'rock', x: 65, y: 60, phase: 1.3 }];
  const nav = wildlifeNavigation(objects, () => true), enemy = { x: -150, y: 0 }, target = { x: 190, y: 0 };
  for (let i = 0; i < 200; i++) { moveBoar(enemy, target, 4, nav, i * 16); assert(nav.walkable(enemy)); }
  assert(Math.hypot(enemy.x - target.x, enemy.y - target.y) < 1);
});

test('old enemy inside a rock is released without changing ownership, health or resources', () => {
  const objects = [{ t: 'rock', x: 2500, y: 900, phase: 1.3 }, { t: 'tree', x: 2545, y: 920 }];
  const before = JSON.stringify(objects), nav = wildlifeNavigation(objects, () => true);
  const enemy = { x: 2500, y: 900, sx: 2450, sy: 890, hp: 2, phase: 1.5 };
  assert(releaseBoar(enemy, nav)); assert(nav.walkable(enemy));
  assert.equal(enemy.hp, 2); assert.equal(enemy.sx, 2450); assert.equal(enemy.sy, 890);
  assert.equal(JSON.stringify(objects), before);
});

test('boar cannot take a shortcut through water or an impassable narrow gap', () => {
  const nav = wildlifeNavigation([{ t: 'rock', x: 0, y: 0 }], (x, y) => Math.abs(y) <= 100);
  const enemy = { x: -150, y: 0 }, target = { x: 150, y: 0 };
  for (let i = 0; i < 100; i++) { moveBoar(enemy, target, 8, nav, i * 16); assert(nav.walkable(enemy)); }
  assert(enemy.x < 0);
});

test('removed stone stops blocking the route and an enclosed target is approached safely', () => {
  const enemy = { x: -130, y: 0 }, target = { x: 0, y: 0 };
  const nav = wildlifeNavigation([{ t: 'rock', x: 0, y: 0 }], () => true);
  for (let i = 0; i < 30; i++) { moveBoar(enemy, target, 6, nav, i * 16); assert(nav.walkable(enemy)); }
  assert(Math.hypot(enemy.x, enemy.y) > BOAR_RADIUS);
  const cleared = wildlifeNavigation([], () => true);
  for (let i = 0; i < 30; i++) moveBoar(enemy, target, 6, cleared, 1000 + i * 16);
  assert(Math.hypot(enemy.x, enemy.y) < 1);
});

test('stowing and drawing preserve the entire save and work with keyboard and the pad backpack', () => {
  const g = game(); g.run('startGame();E.length=0;spear=1;wood=77;coins=800;update()');
  const before = g.run('JSON.stringify(soloSnapshot())');
  g.window.dispatchEvent(new g.window.KeyboardEvent('keydown', { key: 'h' }));
  assert.equal(g.run('hasEquippedSpear()'), false); assert.equal(g.run('sceneState().spearOwned'), true);
  assert.equal(g.run('JSON.stringify(soloSnapshot())'), before);
  const saved = g.stored(), reload = game({ storage: { ...saved, myIsland09: before } }); reload.run('startGame()');
  assert.equal(reload.run('hasEquippedSpear()'), false); assert.equal(reload.run('spear'), true);
  const pad = controller(); g.setPads([pad]); g.frame(); g.frame();
  pad.buttons[3] = { pressed: true, value: 1 }; g.frame();
  assert.equal(g.run('activePanel'), 'bag'); g.element('spearToggle').click();
  assert.equal(g.run('hasEquippedSpear()'), true);
  g.run("toggle('bag',0);toggleSpear();attack()");
  assert.equal(g.run('hasEquippedSpear()'), true);
  assert.equal(g.run('JSON.stringify(soloSnapshot())'), before);
  for (const item of [g, reload]) item.close();
});

test('NPC interaction says TALK only within range and opens Nela or Leon without attacking', () => {
  const g = game(); g.run("startGame();P={...nela};update()");
  assert.equal(g.document.querySelector('.act').textContent, 'POROZMAWIAJ');
  g.document.querySelector('.act').click(); assert.equal(g.run('activePanel'), 'nelaPanel');
  g.run("toggle('nelaPanel',0);P={...leon};update();interact()"); assert.equal(g.run('activePanel'), 'shop');
  g.run("toggle('shop',0);P={x:1800,y:1400};update()");
  assert.equal(g.document.querySelector('.act').textContent, 'DZIAŁAJ');
  g.close();
});

test('solo AI uses collision routing and cannot damage through a rock', () => {
  const g = game();
  g.run("startGame();P={x:2600,y:900};O.splice(0,O.length,{t:'rock',x:2500,y:900,phase:0});E.splice(0,E.length,{x:2390,y:900,sx:2390,sy:900,hp:3,hit:0,phase:0})");
  for (let i = 0; i < 250; i++) {
    g.run('time+=16;enemies(3)');
    assert(g.run('MyIslandWildlife.wildlifeNavigation(O,mainLand).walkable(E[0])'));
  }
  assert(g.run('E[0].x>2500'), 'Solo engine must make progress around the stone');
  g.run("spear=1;P={x:2445,y:900};E[0].x=2545;E[0].y=900;lastAttack=0;attack()");
  assert.equal(g.run('E[0].hp'), 3, 'A stone must shield an enemy from the spear');
  g.close();
});
