var cacheName = 'VSP';

self.addEventListener('install', (e) => {
  console.info('[ServiceWorker] 安装。');
});

self.addEventListener('activate', (e) => {
  console.info('[ServiceWorker] 激活。');
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map((key) => {
        if (key !== cacheName) {
          console.info('[ServiceWorker] 移除旧缓存', key, '。');
          return caches.delete(key);
        }
      }));
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache.match(e.request).then((response) => {
        const fetchPromise = fetch(e.request).then((networkResponse) => {
          cache.put(e.request, networkResponse.clone());
          return networkResponse;
        });
        return response || fetchPromise;
      });
    })
  );
});