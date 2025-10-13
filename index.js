// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggleDarkMode');
toggleDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleDarkMode.textContent = 
    document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Back to Top Button
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Player Search
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('keyup', () => {
  const filter = searchInput.value.toLowerCase();
  const players = document.querySelectorAll('.team li');

  players.forEach(player => {
    const text = player.textContent.toLowerCase();
    player.style.display = text.includes(filter) ? '' : 'none';
  });
});
// Fade-in on scroll
const fadeElements = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => appearOnScroll.observe(el));
