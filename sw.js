const CACHE_NAME = 'habit-tracker-v1';
const ASSETS_TO_CACHE = [
  './index.html',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.handle(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});