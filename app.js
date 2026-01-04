console.log("Mini Vinted chargé");
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/MPO.github.io/sw.js")
    .then(() => console.log("Service Worker OK"))
    .catch(err => console.log("Erreur SW", err));
}

let deferredPrompt;
const installBtn = document.getElementById("installBtn");

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = "block";
});

installBtn.addEventListener("click", () => {
  deferredPrompt.prompt();
});

if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
  alert("Sur iPhone : appuie sur Partager puis 'Ajouter à l’écran d’accueil'");
}
