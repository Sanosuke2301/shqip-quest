# Shqip Quest — v0.2.3 Production Release

**Purpose:** Promote the tested Version 0.2 feature set to the existing GitHub Pages application at `https://sanosuke2301.github.io/shqip-quest/`.

**IMPORTANT:** This release is for the production repository `Sanosuke2301/shqip-quest` ONLY. Do not upload these production files into `shqip-quest-preview`.

## What changes

- Includes personal review, mastery tracking, the Family Pictures lesson, and Standard / Kosovo-Gheg pronunciation controls.
- Retains the v0.1 database **`shqip-quest-db`**, store `profiles`, active-profile key **`sq-active`**, existing learner profile IDs, XP, streaks and completed lessons.
- Uses cache prefix **`shqip-quest-`**, separate from the preview's **`sq-preview-`** cache and database.
- Includes build-specific URLs for `app.js`, `lessons.js`, and `styles.css` (`?build=0.2.3`), and precaches those exact URLs for offline use.
- Special one-time automatic service-worker activation allows the older v0.1 app (which has **no Update now button**) to upgrade. It will not force an open lesson to reload. Users should finish any lesson and close/reopen the app when online to load new files. Future releases should remove this automatic skipWaiting and use the v0.2 prompt.
- Pronunciation controls do not play speech yet. **No generated audio has been validated or bundled**. They explain that verified recordings will arrive later.

## Deployment from Windows without developer tools

1. **On EACH device with valuable progress**, open the currently installed v0.1 application and use Parent corner -> Export family backup. Store backups outside browser/app data. The live site is public, but profiles are local to each device and don't automatically sync.
2. Confirm GitHub release/tag `v0.1.0` exists as a rollback reference. If not, create it pointing to the last known-good v0.1 commit.
3. Download/extract this ZIP. **Upload its contents (not the enclosing folder)** to the root of the production `shqip-quest` repository. You need to replace: `index.html`, `app.js`, `lessons.js`, `styles.css`, `sw.js`, `manifest.webmanifest`, and `README.md`. Keep `assets/` and `.nojekyll` (identical to before). Optional: `TEST_REPORT.md`.
4. Use GitHub's web UI to edit or replace existing files, or GitHub Desktop to commit all changes together. A single commit is preferable to piecemeal updates. Do not delete/recreate the repository or change the GitHub Pages URL.
5. Check GitHub **Actions** for a successful Pages deployment.
6. On ONE TEST device, with internet active and NOT in the middle of a lesson, open the existing installed app. Close/reopen it after the deployment. A manual reload while online may be needed. The first migration does **not necessarily show an Update now button** because v0.1 has no such UI.
7. Confirm Parent corner displays `FAMILY OVERVIEW · VERSION 0.2.3`. Check XP, badges, previously completed lessons and the Family lesson. Close/reopen in airplane mode; verify lessons still load and progress saves.
8. Only after passing this real-device production smoke test, reconnect other devices so they can update. Their local learner progress should remain; verify it individually.

## Important notes

- **Do not clear site data, delete the app, uninstall, or clear the browser's storage.** Those operations can lose local progress.
- Preview and production share the `github.io` origin even though they are separate paths. The fixed builds isolate their IndexedDB names and Cache Storage prefixes.
- `manifest.webmanifest` and relative file paths are intentionally compatible with the `/shqip-quest/` GitHub Pages subpath.
- An offline installation cannot receive an update until it reconnects to the internet. It remains able to use v0.1 offline until then.
- Restoring a production app to older code does not automatically undo newer local database changes. Export backups first. If rolling back, verify stored progress rather than deleting any site data.

## Production smoke test

- [ ] Parent corner shows `VERSION 0.2.3`.
- [ ] Existing profiles and XP are retained.
- [ ] Existing lesson completions, badges and streaks are retained.
- [ ] Personal review opens and scores correctly.
- [ ] Family Pictures is unlocked after Greetings Challenge and all five questions work.
- [ ] Pronunciation buttons report pending audio validation (no fabricated speech).
- [ ] Close/reopen while offline, complete a lesson, then reopen with progress intact.
- [ ] Preview app still works, with separate profile data.

## Development notes

The local DB has not been renamed or reset. The new `mastery` object is optional on v0.1 profiles and added when they practice. The service worker prefetches all required assets before activating; missing files cause installation to fail rather than activating an incomplete offline app. The new production cache version is `shqip-quest-v0.2.3`. The preview cache is not deleted.
