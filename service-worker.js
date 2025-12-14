const CACHE_NAME = "hiking-trails-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./trails.xlsx",
  "https://cdn.jsdelivr.net/npm/xlsx/dist/xlsx.full.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
