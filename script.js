// Attiva animazioni quando gli elementi entrano in viewport
const animated = document.querySelectorAll('.slide-up, .fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

animated.forEach(el => observer.observe(el));
