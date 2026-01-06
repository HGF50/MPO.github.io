self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("dropweh-v1").then(cache => {
      return cache.addAll([
        "/MPO.github.io/",
        "/MPO.github.io/index.html",
        "/MPO.github.io/style.css",
        "/MPO.github.io/app.js"
      ]);
    })
  );
});
