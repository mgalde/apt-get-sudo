/* ═══════════════════════════════════════════════════════
   apt-get-sudo.com — main.js
═══════════════════════════════════════════════════════ */

const html      = document.documentElement;
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
const themeBtn  = document.getElementById('themeToggle');

/* ── THEME ──────────────────────────────────────────────── */
// Default to dark unless the user has explicitly saved a preference
// or their OS is explicitly set to light mode.
function preferredTheme() {
  const saved = localStorage.getItem('ags-theme');
  if (saved) return saved;
  // Technical audience default: dark. Only override if OS is explicitly light.
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  localStorage.setItem('ags-theme', theme);
}

// Apply immediately to avoid flash of wrong theme
applyTheme(preferredTheme());

themeBtn.addEventListener('click', () => {
  applyTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

// Sync with OS preference changes (only if no saved preference)
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
  if (!localStorage.getItem('ags-theme')) {
    applyTheme(e.matches ? 'light' : 'dark');
  }
});

/* ── MOBILE NAV ─────────────────────────────────────────── */
function closeNav() {
  navLinks.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const opening = !navLinks.classList.contains('open');
  navLinks.classList.toggle('open', opening);
  navToggle.classList.toggle('open', opening);
  navToggle.setAttribute('aria-expanded', String(opening));
});

navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', closeNav);
});

document.addEventListener('click', e => {
  if (!nav.contains(e.target)) closeNav();
});

/* ── NAV SCROLL SHADOW ──────────────────────────────────── */
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 24);
}, { passive: true });

/* ── SMOOTH SCROLL ──────────────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const id = anchor.getAttribute('href');
    if (id === '#') return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    const offset = nav.offsetHeight + 12;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});
