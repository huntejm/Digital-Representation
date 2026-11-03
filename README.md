# Stormcode 3D — Unit 2 Mission Review

An original Fortnite-inspired 3D shooter for CS Academy AP CSP Second Edition Unit 2: Functions, Mouse Events, and Conditionals. Solo against training bots, with 38 original questions. No affiliation with Epic Games, CMU CS Academy, or College Board.

## Mission and question flow

The game starts directly in combat. There are **two missions with four bots each**:

| Progress | What happens |
|---|---|
| Mission 1, first two bot victories | One required question. Read the explanation, then resume combat. |
| Mission 1, next two victories | One mission-gate question. A correct answer unlocks Mission 2. |
| Mission 2, first two victories | One required question, then resume combat. |
| Mission 2, next two victories | One final mission-gate question. A correct answer completes the game. |

The mission-gate question also covers the last pair of bot victories, so no extra quiz is stacked immediately after a pair checkpoint. A successful run with correct gate answers has **four required question breaks** total. Wrong gate answers show the explanation and offer another question in the same paused review panel until answered correctly. An ordinary two-win checkpoint permits continuation after either answer and its explanation.

There are **no opening quizzes, timed quizzes, or separate six-correct-answer requirement**. Combat and the storm pause during all questions. Gold terminals (E nearby) and Q provide optional review/resupply. Optional questions never remove an upcoming required pair checkpoint. Optional panels can be closed using Back to combat.

Mission 2 starts with four fresh bots, a fresh storm, restored health, and a replenished baseline loadout. The HUD shows the active mission, four-bot objective, total victories, and how many victories remain before the next question. Gold markers point to optional supply terminals; these are not required destinations.

## Controls

| Action | Control |
|---|---|
| Move | W A S D |
| Aim | Captured mouse; automatic Cursor aim if capture is blocked; arrow keys also work |
| Fire | Left click or F; hold for repeated shots |
| Sprint / jump | Shift / Space |
| Reload | R |
| Switch blasters | 1: Pulse Carbine; 2: Scatter Blaster |
| Build cover | B, costs 20 materials |
| Nearby gold terminal | E |
| Optional review/resupply | Q |
| Pause/settings | Esc or on-screen Pause |

In Cursor aim, move the pointer over the arena to look; move near the left/right edges to keep turning. No button needs to be held to aim. Set aim mode and sensitivity (0.4–1.8×) in Pause. Bounded input deltas and camera smoothing reduce sudden movement spikes. Desktop/laptop keyboard required; phone touch controls are not included. Sound is off by default and can be enabled in Pause.

## Combat and rewards

Bots fire dodgeable energy projectiles after an eight-second initial grace period. Casual is the default; Standard bots move faster and deal more damage. Build destructible cover to block shots. Each bot victory gives 15 materials; collected energy cells add reserve ammo and shield. Bots defeated by storm damage count as victories.

Correct questions award +36 reserve ammo, +25 shield, +20 health, and +30 materials, with caps. Wrong answers give 10 recovery ammo. The storm shrinks from radius 68 to 16 meters over roughly 325 active seconds per mission; staying outside drains health/shield. Pause and question panels stop active time.

Finish a match using Esc → Finish & report, or complete both missions. The report lists every attempted question, student choice, correct answer, and explanation. Download it for Google Classroom submission. It is self-reported practice evidence, not a verified assessment score. The original question-only review remains at **review.html**.

## Free GitHub Pages hosting

1. Create a public GitHub repository or open your existing game repository.
2. Extract this ZIP and upload **all extracted files into the repository root**, replacing older files. Keep their names and relative paths unchanged. Uploading only index.html is insufficient.
3. Commit to `main`.
4. Open Settings → Pages → Deploy from a branch.
5. Choose `main` and `/(root)`, then Save.
6. Wait for deployment and share the URL GitHub displays. An existing Pages URL can remain unchanged.
7. Check access and performance on a school computer before class.

GitHub Pages supports public repositories on GitHub Free. No server, accounts, API keys, databases, or subscriptions are required by the game.
Official guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

For local play, serve the extracted folder with a web server; double-clicking index.html usually blocks JavaScript modules. With Python installed, run `python -m http.server 8000` from the folder and open http://localhost:8000 . Hosting on GitHub Pages avoids local setup.

## Questions, graphics, and privacy

Edit the `q(topic, prompt, code, answers, correct, explanation)` entries in questions.js. `correct` is the zero-based source answer index; the four answer choices shuffle in play. Python and AP pseudocode are displayed as text, not executed. Coverage includes functions, parameters/arguments, press/release events, input, variables/properties, hit tests, layering, conditionals, Boolean logic, AP procedure/assignment/selection vocabulary, and testing. No copied AP Classroom items, loops, list, or recursion questions.

Three.js 0.181.1 is bundled locally under MIT (THREE-LICENSE.txt). The game tries hardware WebGL 2 first and uses a lower-detail CPU 3D renderer if unavailable. The same gameplay and collisions apply; the compatibility renderer is slower and has simpler lighting. Browser validation used compatibility rendering because the test browser disables WebGL. Check hardware rendering on classroom devices.

No external assets, fonts, trackers, or runtime downloads. The game transmits no student answers. The hosting provider may keep ordinary access logs. Progress resets on refresh, restart, or close. The question bank and answer keys are readable in source. This is solo versus bots; no live student multiplayer or shared leaderboard. The ChatGPT preview is private; GitHub Pages provides the public classroom URL.

Validated: immediate combat launch; no opening/timed quizzes; required questions after each pair; mission-gate correctness and retry behavior; second mission spawning/reset; final victory; exactly four required breaks in a perfect run; optional questions independent of pair checkpoints; raycast shooting; destructible cover; aiming input limits. Browser checks confirm immediate launch and updated mission guidance.
