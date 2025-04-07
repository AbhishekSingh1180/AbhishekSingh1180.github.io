document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle
  const toggle = document.getElementById("mode-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
  });

  // Accordion for project section
  const accordionToggle = document.querySelector(".accordion-toggle");
  const accordionContent = document.querySelector(".accordion-content");

  accordionToggle.addEventListener("click", () => {
    accordionContent.classList.toggle("active");
  });

  // GitHub Contributions Image
  const githubContributionImage = new Image();
  githubContributionImage.src = "https://ghchart.rshah.org/AbhishekSingh1180";
  githubContributionImage.alt = "GitHub Contributions";
  githubContributionImage.style.width = "100%";
  document.querySelector("#skills").appendChild(githubContributionImage);
});
