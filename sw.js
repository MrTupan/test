const CACHE_NAME = 'workshop-vault-v3';
const ASSETS = [
  './',
  './index.html',
  './core.data',         // Everything is inside here now
  './logo.png',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});