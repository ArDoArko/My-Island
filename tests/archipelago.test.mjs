import test from 'node:test';
import assert from 'node:assert/strict';
import { ISLANDS, ISLAND_BY_ID, getIslandAt, nearbyIslands, getVoyage } from '../archipelago-layout.mjs';

test('six unique islands with non-overlapping coastlines', () => {
  assert.equal(ISLANDS.length, 6);
  assert.equal(new Set(ISLANDS.map(i => i.id)).size, 6);
  for (const island of ISLANDS) {
    assert.equal(ISLAND_BY_ID[island.id], island);
    assert.equal(getIslandAt(island.x, island.z)?.id, island.id);
    assert.ok(island.radius > 0);
    assert.ok(island.landmarks.length);
    for (const other of ISLANDS) if (island !== other) {
      assert.ok(Math.hypot(island.x-other.x,island.z-other.z) > island.radius+other.radius,
        `${island.id} overlaps ${other.id}`);
    }
  }
});
test('safe island lookup and nearby streaming candidates', () => {
  assert.equal(getIslandAt(Infinity, 0), null);
  assert.equal(getIslandAt(99999, 99999), null);
  assert.deepEqual(nearbyIslands(0, 0, 0).map(i => i.id), ['home']);
  assert.deepEqual(nearbyIslands(0, 0, -1), []);
});
test('dock-to-dock routes validate destinations', () => {
  assert.equal(getVoyage('home', 'home'), null);
  assert.equal(getVoyage('home', 'missing'), null);
  const trip = getVoyage('home', 'jungle');
  assert.equal(trip.from, 'home');
  assert.equal(trip.to, 'jungle');
  assert.ok(trip.distance > 0);
});
