self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('nimo-cache-v1').then(cache => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/image.png',
        '/image.png'
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
