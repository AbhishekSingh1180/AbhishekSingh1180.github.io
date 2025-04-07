// script.js

document.getElementById("mode-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.getElementById("mode-toggle").textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelector(".accordion-toggle").addEventListener("click", () => {
  document.querySelector(".accordion-content").classList.toggle("active");
});

document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
  e.target.reset();
});
