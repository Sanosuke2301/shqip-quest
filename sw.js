/* Increment the version whenever you publish app changes. */
const CACHE_NAME = 'shqip-quest-v0.1.0';
const APP_SHELL = [
  './', './index.html', './styles.css', './app.js', './lessons.js',
  './manifest.webmanifest', './assets/icon-192.png', './assets/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key.startsWith('shqip-quest-') && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const target = new URL(event.request.url);
  if (target.origin !== self.location.origin) return;
  // Cache-first for the app shell: reliable offline startup.
  // Publishing a newer sw.js activates a new versioned cache on next visit.
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match('./index.html')))
  );
});
