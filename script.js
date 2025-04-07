// script.js

// Simple success feedback for contact form (can be enhanced with real backend later)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message submitted successfully!");
    form.reset();
  });
});
