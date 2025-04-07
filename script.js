document.addEventListener('DOMContentLoaded', () => {
  // Initialize AOS
  AOS.init({
    duration: 800,
    once: true,
  });

  // Fallback animation (optional)
  const revealElements = document.querySelectorAll('[data-aos]');
  const revealOnScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    revealElements.forEach((el) => {
      const offsetTop = el.getBoundingClientRect().top + scrollTop;
      if (scrollTop + windowHeight > offsetTop + 100) {
        el.classList.add('aos-animate');
      }
    });
  };

  // Optional fallback
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // run on load
});
