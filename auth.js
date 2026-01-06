// 🔹 Redirection si déjà inscrit
if (localStorage.getItem("loggedIn") === "true") {
  window.location.href = "home.html";
}

// 🔹 Formulaire inscription
document.getElementById("registerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("registerEmail").value;

  if (!email.includes("@")) {
    alert("Email invalide");
    return;
  }

  // 🔒 Sauvegarde persistante
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("email", email);
  localStorage.setItem("registerDate", new Date().toISOString());

  // 🔄 Redirection vers home
  window.location.href = "home.html";
});
