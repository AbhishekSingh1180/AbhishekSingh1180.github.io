document.addEventListener('DOMContentLoaded', () => {
  // GitHub contributions image setup
  const githubImage = document.getElementById('github-contribution-image');
  githubImage.src = 'https://ghchart.rshah.org/AbhishekSingh1180';

  // Contact form handler
  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks for your message! I will get back to you soon.');
    contactForm.reset();
  });
});
