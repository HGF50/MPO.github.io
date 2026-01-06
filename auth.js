/* =========================
   CONNEXION
========================= */
function login() {
  const email = document.getElementById("loginEmail").value;

  if (!email || !email.includes("@")) {
    alert("Email invalide");
    return;
  }

  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("email", email);

  window.location.href = "home.html";
}

/* =========================
   INSCRIPTION
========================= */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("registerEmail").value;
    const date = new Date().toLocaleString();

    if (!email || !email.includes("@")) {
      alert("Email invalide");
      return;
    }

    fetch("https://formspree.io/f/xgovblyk", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, date })
    })
    .then(() => {
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("email", email);
      window.location.href = "home.html";
    })
    .catch(() => {
      alert("Erreur lors de l'inscription");
    });
  });
});

