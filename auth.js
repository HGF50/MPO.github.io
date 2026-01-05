function login() {
  const email = document.getElementById("loginEmail").value;

  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  localStorage.setItem("user", email);
  localStorage.setItem("loggedIn", "true");

  window.location.href = "home.html";
}
document.getElementById("registerForm").addEventListener("submit", function(e) {
  const email = document.getElementById("registerEmail").value;

  if (!email.includes("@")) {
    alert("Email invalide");
    e.preventDefault(); // bloque la soumission si email invalide
    return;
  }

  // ✅ Sauvegarde connexion auto
  localStorage.setItem("user", email);
  localStorage.setItem("loggedIn", "true");

  // ✅ Redirection après 1 seconde pour laisser Formspree envoyer l'email
  setTimeout(() => {
    window.location.href = "home.html";
  }, 1000); // 1 seconde d’attente
});


  // Sauvegarde locale pour connexion auto
  localStorage.setItem("user", email);
  localStorage.setItem("loggedIn", "true");

  // Envoi du formulaire à Formspree via fetch
  fetch(event.target.action, {
    method: "POST",
    body: new FormData(event.target),
    headers: { "Accept": "application/json" }
  })
  .then(() => {
    // ✅ Redirection immédiate vers la page Articles
    window.location.href = "home.html";
  })
  .catch(() => {
    alert("Erreur lors de l'inscription");
  });

