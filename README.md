# Shqip Quest · Version 0.1

A working, offline-first Albanian learning PWA for family use. It includes Standard Albanian alongside common Kosovo/Gheg expressions.

## What is in this first prototype?

- A polished, mobile-friendly home screen and 4-stage learning path.
- 3 introductory greetings lessons and 1 review challenge (all playable).
- Word teaching cards, multiple-choice questions, and word-ordering exercises.
- Multiple learner profiles, each with independent lesson results, XP, day streaks and achievements.
- Parent summary, manual export and import of all profiles.
- Installable PWA with service-worker caching and offline launch.
- No logins, trackers, cloud server, internet-based lessons, or third-party JavaScript.

**Not included yet:** recorded audio, speech recognition, picture matching, 10 complete learning units, or cross-device automatic sync. Albanian content is prototype material; have Standard Albanian and Kosovo/Gheg speakers check wording and pronunciation before using as definitive teaching material.

## Simple GitHub Pages setup (no coding tools required)

1. Sign in at https://github.com and create a new repository named `shqip-quest`.
2. Choose **Public** if using standard GitHub Pages on a GitHub Free personal account. **Note:** the app source files are publicly viewable. Child profiles and progress are *not* included in the repository; they are created and saved on each device.
3. On the new repository page, choose **Add file → Upload files**.
4. Extract the ZIP and upload the files **inside** the `shqip_quest_v0_1` directory to the **top level** of your repository. Select `index.html`, `app.js`, `lessons.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, `README.md` and the `assets` folder. The hidden `.nojekyll` file is optional.
5. Choose **Commit changes**.
6. Go to **Settings → Pages → Build and deployment**. Set **Source** to **Deploy from a branch**, choose `main` and `/(root)` and click **Save**.
7. Your published URL will normally be: `https://YOUR-USERNAME.github.io/shqip-quest/`. GitHub will show the precise address in Pages settings.
8. Open that URL on each device while connected to the internet. Let it fully load and show **Offline mode ready** before testing without internet.
9. Create each child's profile. You can now switch the device to airplane mode, close the app and reopen the installed app.

**Important:** Do not upload the enclosing folder as a single folder; `index.html` must be at the publishing root. The relative file paths are intentionally compatible with GitHub Pages repository URLs.

## Install on your devices

- **Android / Chrome:** Open the published address in Chrome, then use the browser menu and select **Install app** or **Add to Home screen** (wording varies).
- **iPhone / iPad / Safari:** Open the published address in Safari, use **Share → Add to Home Screen**, enable **Open as Web App** if offered, then add it.
- **Windows / Chrome or Edge:** Open the address in a supported browser and use **Install app** in the address bar or browser menu if offered.

Install availability can differ between browsers and operating systems. Even where a browser does not show an install button, the website can still work offline after the service worker has cached it (provided the browser retains the data).

## Updating the app later

1. Make a backup from **Parent corner → Export family backup** before major updates.
2. Replace the updated files in your GitHub repository and commit.
3. **The developer must update the cache version in `sw.js` for every release.** For example, change `shqip-quest-v0.1.0` to `shqip-quest-v0.2.0`. This triggers a fresh app-shell cache.
4. Open the app once while connected so it can check for updates. On some devices, close and reopen the app again to activate the new version.
5. Turn airplane mode on and confirm the app still works.

Updating the source files should not erase learners' local progress, since IndexedDB is separate from the offline app cache. However, uninstalling the PWA, clearing site data, browser eviction, or changing the hosting URL can lose access to local progress. Export backups routinely.

## Files explained

- `index.html` — opening page and links to the other files.
- `styles.css` — everything visual: layout, colours and mobile interface.
- `app.js` — screens, lesson behaviour, profiles, XP, streaks, badges and backups.
- `lessons.js` — the Albanian vocabulary, translations, explanations and questions; easiest place to expand content.
- `sw.js` — service worker that caches files for offline use.
- `manifest.webmanifest` — app name, icon and installation settings.
- `assets/` — app icons, locally included so no online images are needed.

React, TypeScript, Vite, Node.js and a server-side database are **not** required to deploy or use this version.

## Testing checklist

- [ ] Create first profile and finish Lesson 1.
- [ ] Close and reopen: profile, XP and completed lesson remain.
- [ ] Create a second profile: its results are independent.
- [ ] Finish all three lessons to unlock the challenge.
- [ ] Check scores, mistakes, badges and XP changes.
- [ ] Export backup, then import it and verify profiles.
- [ ] Install from GitHub Pages, go offline, close and relaunch.
- [ ] Confirm no network request is required when offline.

## Privacy and limitations

This version has no sign-in and no data sent to a server. Profile nicknames are stored only in the browser's local database unless you export a backup. The Parent corner is **not password-protected**. GitHub Pages is public hosting for the app files, not private storage for the learners' records.

Streaks use each device's local calendar date and are designed for normal family use, not anti-cheat enforcement. A lesson or review completed on a day counts for that day's streak. There is no penalty for incorrect answers.

## Licensing and originality

This prototype uses original interface design and icons generated for this project and contains no Duolingo character art, images, or copied lessons. Language examples should be reviewed by fluent speakers before wider use.
