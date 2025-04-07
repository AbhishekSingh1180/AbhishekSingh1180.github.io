/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section-box");
  const options = {
    threshold: 0.1
  };

  const revealOnScroll = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealOnScroll, options);
  sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
  });
});