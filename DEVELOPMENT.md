# My Island 0.14

## Build and publish

Run `npm ci` and `npm run build` after editing `island3d-src.mjs`. Commit the source, package lock and generated `island3d.bundle.js` together. GitHub Pages serves `index.html` and the bundle from the main branch root. The bundle includes Three.js 0.180.0, so the game makes no runtime requests for a graphics library, models or textures. See `THIRD_PARTY_NOTICES.txt` for its MIT license.

## First 3D stage

The new renderer displays the existing saved island in 3D: beaches, ground height, palms, water, human avatars, characters, buildings, gathering resources and four players. Movement uses the camera direction; drag the background, use Q/R, the camera buttons, or the right stick of a standard gamepad to look around. The generic joystick's configured movement axes stay dedicated to movement. Users can switch to 2D, which is also the fallback if 3D is unavailable. Controls and all inventory operations remain in the original game script.

The world-coordinate scale is 80 original units per 3D unit. The coastline is the same as the solo and room engines. Terrain height is deterministic and affects rendering only. No account, save format, room protocol, reward or ownership changes are made by the renderer. Avatar meshes are original procedural models with clothing, faces and leg animation; detailed character models and further animation are later work.

Account protocol remains version 12 and save format version 10. Existing account, room, controller and solo storage keys remain compatible. View preference uses a separate `myIslandViewV1` key. There are no account credentials in the rendering snapshot.

## Agreed stages

1. **0.14: first playable 3D island.** Third-person view, ground contact, movement, resources and compatibility with saves and co-op. Verify actual rendering on the published site before calling this stage complete.
2. **Character identity and animation.** More detailed humanoid models, clothes and hair choices, fishing/gathering animations, emotes.
3. **Co-op adventures.** Shared missions, puzzles and treasure expeditions designed for up to four players.
4. **Creative shared base.** More building pieces, decorations and collaborative construction.
5. **Exploration.** Boats, additional islands, caves and diving.
6. **Social play.** Raft races and an animal companion.

Keep each stage playable and test the existing accounts and progress before publishing it. Do not present planned features as shipped features.
