// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Contact form submission (placeholder)
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Thank you for reaching out! I’ll get back to you soon.");
});
