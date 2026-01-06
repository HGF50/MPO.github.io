document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;

  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  // Connexion persistante
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("email", email);

  // Aller aux articles
  window.location.href = "home.html";
});
