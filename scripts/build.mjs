import { build } from 'esbuild';
import { targets, options } from './bundle-targets.mjs';
for(const target of targets)await build(options(target));
