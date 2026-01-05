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
  alert("Sur iPhone : appuie sur Partager puis 'Ajouter à l’écran d’accueil");
}
// ===============================
// AUTH VIVANTE - Drop Ton Weh
// ===============================

const authBox = document.getElementById("authBox");
const userBox = document.getElementById("userBox");
const userEmailText = document.getElementById("userEmail");

function register() {
  const email = document.getElementById("email").value;
  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ email }));
  localStorage.setItem("loggedIn", "true");

  document.getElementById("registerForm").submit();
}

function login() {
  const email = emailInput();
  const password = passwordInput();

  if (!email || !password) return;

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || user.email !== email || user.password !== password) {
    alert("❌ Email ou mot de passe incorrect");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  animateSuccess("Connexion réussie ✅");
  showUser(email);
}

function logout() {
  localStorage.removeItem("loggedIn");
  location.reload();
}

function showUser(email) {
  authBox.style.display = "none";
  userBox.style.display = "block";
  userEmailText.textContent = email;
}

function emailInput() {
  const email = document.getElementById("email").value.trim();
  if (!email.includes("@")) {
    alert("❌ Email invalide");
    return null;
  }
  return email;
}

function passwordInput() {
  const password = document.getElementById("password").value;
  if (password.length < 4) {
    alert("❌ Mot de passe trop court");
    return null;
  }
  return password;
}

function animateSuccess(message) {
  const toast = document.createElement("div");
  toast.textContent = message;
  toast.style.cssText = `
    position:fixed;
    top:20px;
    left:50%;
    transform:translateX(-50%);
    background:black;
    color:white;
    padding:10px 20px;
    border-radius:20px;
    z-index:9999;
  `;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2000);
}

// Auto-connexion
window.addEventListener("load", () => {
  const loggedIn = localStorage.getItem("loggedIn");
  const user = JSON.parse(localStorage.getItem("user"));

  if (loggedIn && user) {
    showUser(user.email);
  }
});
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "index.html";
}

function logout() {
  localStorage.clear();
  window.location.href = "index.html";
}

