document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById("mode-toggle");
  const body = document.body;

  modeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    modeToggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  const toggleBtn = document.querySelector(".accordion-toggle");
  const projectContent = document.querySelector(".accordion-content");

  toggleBtn.addEventListener("click", () => {
    const isVisible = projectContent.style.display === "block";
    projectContent.style.display = isVisible ? "none" : "block";
    toggleBtn.textContent = isVisible ? "View Projects" : "Hide Projects";
  });
});
