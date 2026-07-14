// Fullscreen menu toggle
const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
const toggleText = navToggle.querySelector('.topnav__toggle-text');

function closeMenu(){
  document.body.classList.remove('menu-open');
  navToggle.setAttribute('aria-expanded', false);
  toggleText.textContent = 'MENU';
}
function openMenu(){
  document.body.classList.add('menu-open');
  navToggle.setAttribute('aria-expanded', true);
  toggleText.textContent = 'CLOSE';
}
navToggle.addEventListener('click', () => {
  document.body.classList.contains('menu-open') ? closeMenu() : openMenu();
});
menu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', closeMenu);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObserver.observe(el));

// Contact form -> mailto
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('fromEmail').value.trim();
  const message = document.getElementById('messageBody').value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${email}`);
  const body = encodeURIComponent(`${message}\n\nFrom: ${email}`);
  window.location.href = `mailto:sushmithavashiw@gmail.com?subject=${subject}&body=${body}`;
});
