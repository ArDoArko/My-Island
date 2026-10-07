import { build } from 'esbuild';
await build({ entryPoints: ['island-play.mjs'], outfile: 'island-play.bundle.js', bundle: true, minify: true, format: 'iife', globalName: 'MyIslandPlay', target: ['es2020'], legalComments: 'inline' });
await build({ entryPoints: ['wildlife.mjs'], outfile: 'wildlife.bundle.js', bundle: true, minify: true, format: 'iife', globalName: 'MyIslandWildlife', target: ['es2020'], legalComments: 'inline' });
await build({ entryPoints: ['island3d-src.mjs'], outfile: 'island3d.bundle.js', bundle: true, minify: true, format: 'iife', globalName: 'MyIsland3D', target: ['es2020'], legalComments: 'inline' });
await build({ entryPoints: ['i18n-src.mjs'], outfile: 'i18n.bundle.js', bundle: true, minify: true, format: 'iife', globalName: 'MyIslandI18n', target: ['es2020'], legalComments: 'inline' });
