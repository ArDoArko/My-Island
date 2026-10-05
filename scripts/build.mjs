import { build } from 'esbuild';
await build({ entryPoints: ['island3d-src.mjs'], outfile: 'island3d.bundle.js', bundle: true, minify: true, format: 'iife', globalName: 'MyIsland3D', target: ['es2020'], legalComments: 'inline' });
