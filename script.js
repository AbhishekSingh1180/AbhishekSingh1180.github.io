// script.js

// Toggle dark/light mode
const toggleButton = document.getElementById("mode-toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleButton.textContent =
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Smooth scroll to section on nav click
document.querySelectorAll("nav ul li a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Accordion toggle for projects
const accordionToggle = document.querySelector(".accordion-toggle");
if (accordionToggle) {
  accordionToggle.addEventListener("click", () => {
    const content = document.querySelector(".accordion-content");
    content.classList.toggle("active");
  });
}

// Contact form submission alert
document.getElementById("contact-form")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent! Thank you for reaching out.");
  e.target.reset();
});
