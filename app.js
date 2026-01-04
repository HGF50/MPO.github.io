console.log("Mini Vinted chargé");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("Service Worker OK"))
    .catch(err => console.log("SW erreur", err));
}
let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
  installBtn.style.display = "none";
  deferredPrompt.prompt();
});
if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  alert("Sur iPhone : appuie sur Partager puis 'Ajouter à l’écran d’accueil'");
}
