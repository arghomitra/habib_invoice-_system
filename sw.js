const CACHE_NAME = 'nimo-cache-v1';
const FILES_TO_CACHE = [
  '/habib_invoice-_system/',
  '/habib_invoice-_system/index.html',
  '/habib_invoice-_system/manifest.json',
  '/habib_invoice-_system/sw.js',
  '/habib_invoice-_system/icon-192.png',
  '/habib_invoice-_system/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
