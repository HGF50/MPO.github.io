// INSCRIPTION UNIQUE
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;
  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  // Sauvegarde locale
  localStorage.setItem("registeredEmail", email);
  localStorage.setItem("loggedIn", "true");

  // Redirection vers les articles
  window.location.href = "home.html";
});
// INSCRIPTION UNIQUE (connexion persistante)
document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;

  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  // 🔒 Sauvegarde PERSISTANTE
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userEmail", email);
  localStorage.setItem("registerDate", new Date().toISOString());

  // ➡️ Redirection directe vers les articles
  window.location.href = "home.html";
});
