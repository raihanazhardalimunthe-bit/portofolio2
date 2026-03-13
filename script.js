// ── NAVBAR SCROLL EFFECT ──────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── HAMBURGER MENU ────────────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
  hamburger.classList.remove('active');
  mobileMenu.classList.remove('open');
}

// ── INTERSECTION OBSERVER ─────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-card, .portfolio-card').forEach(el => observer.observe(el));

// ── FORM SUBMIT ───────────────────────────────
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  btn.classList.add('loading');
  setTimeout(() => {
    btn.classList.remove('loading');
    document.getElementById('formSuccess').classList.add('show');
    e.target.reset();
  }, 1200);
}

// ── ACTIVE NAV LINK ON SCROLL ─────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar__links a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 100) current = s.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// ── BACK TO TOP ───────────────────────────────
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.classList.toggle('show', window.scrollY > 400);
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Muat tema tersimpan, default = dark
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});