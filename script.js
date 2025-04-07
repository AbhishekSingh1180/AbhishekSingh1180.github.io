// script.js

// Loader Animation
window.addEventListener("load", () => {
  const loader = document.createElement("div");
  loader.className = "loader";
  loader.innerHTML = `<div class="spinner"></div>`;
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.style.opacity = 0;
    setTimeout(() => loader.remove(), 500);
  }, 1000);
});

// GitHub Calendar
new GitHubCalendar("#github-contribution-wrapper", "AbhishekSingh1180", {
  responsive: true,
  tooltips: true
});

// Contact form
const form = document.getElementById("contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for contacting me! I'll get back to you soon.");
  form.reset();
});

// Smooth scroll
const links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

// Dark/Light Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.textContent = "🌓 Toggle Theme";
toggleButton.className = "theme-toggle";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Persist theme
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});
