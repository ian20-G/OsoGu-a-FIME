const CACHE_NAME = 'fime-guia-v7';
const RECURSOS = [
  './',
  'index.html',
  'css/styles.css',
  'js/data.js',
  'js/app.js',
  'icon.svg',
  'manifest.webmanifest',
  'img/mapa-fime.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(RECURSOS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        const clon = res.clone();
        caches.open(CACHE_NAME).then((c) => c.put(e.request, clon));
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});
