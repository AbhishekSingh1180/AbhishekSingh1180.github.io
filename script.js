// script.js

// Dark/Light Mode Toggle
const toggleBtn = document.getElementById("mode-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Smooth Scroll on Nav Click
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Accordion for Project Cards
const accordionToggle = document.querySelector(".accordion-toggle");
const accordionContent = document.querySelector(".accordion-content");
accordionToggle.addEventListener("click", () => {
  accordionContent.classList.toggle("active");
  accordionToggle.textContent = accordionContent.classList.contains("active")
    ? "Show Less"
    : "Show More Projects";
});

// Load GitHub Contributions Graph
const contributionImage = document.getElementById("github-contribution-image");
const username = "abhisheksingh1180";
contributionImage.src = `https://ghchart.rshah.org/${username}`;

// Skill Bar Animation
window.addEventListener("scroll", () => {
  document.querySelectorAll(".skill-progress").forEach(bar => {
    const sectionPos = bar.getBoundingClientRect().top;
    const screenPos = window.innerHeight;
    if (sectionPos < screenPos) {
      bar.style.animation = "grow 1.5s ease-out forwards";
    }
  });
});