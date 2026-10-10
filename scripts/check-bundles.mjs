import { build } from 'esbuild';
import { readFile } from 'node:fs/promises';
import { targets, options } from './bundle-targets.mjs';
let stale=false;
for(const target of targets){
  const result=await build({...options(target),write:false});
  const expected=result.outputFiles[0].contents;
  const actual=await readFile(target[1]).catch(()=>null);
  if(!actual||!Buffer.from(expected).equals(actual)){
    console.error(`Stale browser bundle: ${target[1]}. Run npm run build and commit the generated bundles together with source changes.`);
    stale=true;
  }
}
if(stale)process.exitCode=1;
else console.log(`All ${targets.length} browser bundles match their source.`);
