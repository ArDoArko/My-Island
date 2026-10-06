# My Island 0.15

## Build and publish

Run `npm ci` and `npm run verify` after editing the renderer or translations. Commit sources, catalogs, package lock and both generated bundles together. GitHub Pages serves `index.html`, `island3d.bundle.js` and `i18n.bundle.js` from the main branch root. The graphics bundle includes Three.js 0.180.0, so the game makes no runtime requests for a graphics library, models or textures. See `THIRD_PARTY_NOTICES.txt` for its MIT license. The translation bundle loads synchronously before the existing game script and contains every language; changing language needs no network request.

## Six languages

The start-screen selector and the in-game globe button support Polish, English, Dutch (Nederlands), German, French and Spanish. Dutch covers both the Netherlands and Belgium; there is no separate "Holland" language option. Native language names remain visible in the picker. A supported browser language is used initially; a saved selection takes priority. Locale `nl-BE` and `fr-BE` are used for Dutch and French time formatting.

Presentation strings live in `i18n/messages.json` and `i18n/server-messages.json` as rows in the order PL, EN, NL, DE, FR, ES. Server responses are translated in the client without changing the deployed account or room server. Resource costs, rewards, user-provided names, emails and room/recovery codes remain unchanged. NPC labels update in the 3D scene without recreating the world or renderer. Long button labels can wrap.

Language preference uses only `myIslandLanguageV1`, separate from the existing solo, account, controller, room and view storage keys. Switching applies immediately without reloading, leaves open form fields intact and does not create an account, send an account request or rewrite a save. The language panel pauses gameplay like the other menus. A device that blocks local storage can still change language for the current session.

`npm test` runs the real game script against a local DOM with mocked rendering and network, plus camera/ground-contact checks. It checks all six interfaces, Dutch browser detection, reload persistence, blocked storage, old-save migration, solo resources and world contents, anonymous account forms and errors, pending cloud-save conflicts, four-player names and shared inventory, gamepad remapping and camera controls, and unchanged account/room protocol versions. Test inputs are local fixtures and never reach the live server. Actual 3D rendering and anonymous forms must also be checked on public Pages after a completed deployment. Do not claim publication complete from a commit, successful build or queued run alone.

## First 3D stage

The new renderer displays the existing saved island in 3D: beaches, ground height, palms, water, human avatars, characters, buildings, gathering resources and four players. Movement uses the camera direction; drag the background, use Q/R, the camera buttons, or the right stick of a standard gamepad to look around. The generic joystick's configured movement axes stay dedicated to movement. Users can switch to 2D, which is also the fallback if 3D is unavailable. Controls and all inventory operations remain in the original game script.

The world-coordinate scale is 80 original units per 3D unit. The coastline is the same as the solo and room engines. Terrain height is deterministic and affects rendering only. No account, save format, room protocol, reward or ownership changes are made by the renderer. Avatar meshes are original procedural models with clothing, faces and leg animation; detailed character models and further animation are later work.

Account protocol remains version 12 and save format version 10. Existing account, room, controller and solo storage keys remain compatible. View preference uses a separate `myIslandViewV1` key. There are no account credentials in the rendering snapshot.

## Agreed stages

1. **0.14: first playable 3D island; 0.15: six languages.** Third-person view, ground contact, movement, resources and compatibility with saves and co-op. The language release preserves that first stage. Verify actual rendering and language selection on the published site before calling these releases complete.
2. **Character identity and animation.** More detailed humanoid models, clothes and hair choices, fishing/gathering animations, emotes.
3. **Co-op adventures.** Shared missions, puzzles and treasure expeditions designed for up to four players.
4. **Creative shared base.** More building pieces, decorations and collaborative construction.
5. **Exploration.** Boats, additional islands, caves and diving.
6. **Social play.** Raft races and an animal companion.

Keep each stage playable and test the existing accounts and progress before publishing it. Do not present planned features as shipped features.
