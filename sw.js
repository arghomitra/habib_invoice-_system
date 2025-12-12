self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nimo-cache-v1').then(cache => {
      return cache.addAll([
        '/habib_invoice-_system/',
        '/habib_invoice-_system/index.html',
        '/habib_invoice-_system/manifest.json',
        '/habib_invoice-_system/sw.js',
        '/habib_invoice-_system/image.png',
        '/habib_invoice-_system/image.png'
      ]);
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
