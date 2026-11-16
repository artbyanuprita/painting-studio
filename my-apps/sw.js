// Lets Chrome install "My art apps" on the home screen. Pages always come fresh from the web.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
