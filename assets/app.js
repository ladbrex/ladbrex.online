document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", e => {
    e.preventDefault();

    const user = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value
    };

    // Fake "save" in browser
    localStorage.setItem("ladbrexUser", JSON.stringify(user));
    message.textContent = "✅ Account created (saved locally). Backend coming soon!";
    form.reset();
  });
});
