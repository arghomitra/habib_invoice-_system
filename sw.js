// sw.js (This must be a standalone file)

importScripts('https://storage.googleapis.com/workbox-cdn/releases/7.2.2/workbox-sw.js');

if (workbox) {
  // 1. Pre-caching: Cache the index.html file itself, and the manifest.
  // We include 'index.html' here so the app shell loads offline.
  workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
    { url: '/manifest.json', revision: '1' }
  ]);
  
  // 2. Runtime Caching: Add routes for any external assets (like external fonts or APIs)
  // Example for Google Fonts (Cache-First strategy)
  workbox.routing.registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com' ||
                 url.origin === 'https://fonts.gstatic.com',
    new workbox.strategies.CacheFirst({
      cacheName: 'google-fonts',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 30,
        }),
      ],
    })
  );

} else {
  console.log('Workbox failed to load.');
}