// MY ISLAND — archipelago world layout, phase 1.
// Data-only module: does not alter existing saves, terrain, or multiplayer protocol.
// Coordinates are world-space planning units; renderer integration follows separately.
export const ARCHIPELAGO_VERSION = 1;
export const ISLANDS = Object.freeze([
  { id: "home", name: "Main Island", x: 0, z: 0, radius: 480, biome: "mixed", dock: { x: 390, z: 100 }, landmarks: ["village", "player-base", "market", "harbour"] },
  { id: "jungle", name: "Jungle Island", x: 1150, z: -450, radius: 270, biome: "rainforest", dock: { x: 930, z: -380 }, landmarks: ["cave", "waterfall", "hidden-cache"] },
  { id: "fortress", name: "Fortress Island", x: 1900, z: 550, radius: 240, biome: "rocky", dock: { x: 1690, z: 490 }, landmarks: ["guarded-estate", "rescue-mission"] },
  { id: "highlands", name: "Highlands Island", x: -1050, z: -850, radius: 290, biome: "highlands", dock: { x: -840, z: -710 }, landmarks: ["mine", "mountain-trail"] },
  { id: "smugglers", name: "Smugglers Island", x: -1550, z: 250, radius: 230, biome: "mangrove", dock: { x: -1340, z: 220 }, landmarks: ["warehouse", "secret-passage"] },
  { id: "paradise", name: "Paradise Island", x: 700, z: 1350, radius: 250, biome: "beach", dock: { x: 600, z: 1120 }, landmarks: ["cabins", "reef"] }
]);
export const ISLAND_BY_ID = Object.freeze(Object.fromEntries(ISLANDS.map(island => [island.id, island])));
export function getIslandAt(x, z) {
  if (!Number.isFinite(x) || !Number.isFinite(z)) return null;
  return ISLANDS.find(island => Math.hypot(x - island.x, z - island.z) <= island.radius) ?? null;
}
export function nearbyIslands(x, z, range = 900) {
  if (![x, z, range].every(Number.isFinite) || range < 0) return [];
  return ISLANDS.filter(island => Math.hypot(x - island.x, z - island.z) <= range + island.radius);
}
export function getVoyage(fromId, toId) {
  const from = ISLAND_BY_ID[fromId], to = ISLAND_BY_ID[toId];
  if (!from || !to || from === to) return null;
  return { from: from.id, to: to.id, distance: Math.round(Math.hypot(to.dock.x - from.dock.x, to.dock.z - from.dock.z)) };
}
