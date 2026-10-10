export const targets = [
  ['campaign-client.mjs','campaign.bundle.js','MyIslandCampaign'],
  ['island-play.mjs','island-play.bundle.js','MyIslandPlay'],
  ['expeditions.mjs','expeditions.bundle.js','MyIslandExpeditions'],
  ['character.mjs','character.bundle.js','MyIslandCharacter'],
  ['wildlife.mjs','wildlife.bundle.js','MyIslandWildlife'],
  ['island3d-src.mjs','island3d.bundle.js','MyIsland3D'],
  ['i18n-src.mjs','i18n.bundle.js','MyIslandI18n']
];
export function options([entry,outfile,globalName]) {
  return {entryPoints:[entry],outfile,bundle:true,minify:true,format:'iife',globalName,
    target:['es2020'],legalComments:'inline'};
}
