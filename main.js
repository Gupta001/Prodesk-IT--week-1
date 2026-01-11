document.addEventListener("DOMContentLoaded", function () {
  const themeBtn = document.getElementById("themeToggle");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  // Dark mode toggle
  themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    themeBtn.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });

  // Mobile menu toggle
  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });
});
