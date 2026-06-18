/* ═══════════════════════════════════════════
   MEITAV TECH LIMITED — main.js
   Shared across all pages
═══════════════════════════════════════════ */

/* ── CONFIG: Replace with client's real WhatsApp number (digits only, no +) ── */
const WA_NUMBER = '256000000000'; // e.g. 256772123456
const WA_BASE   = 'https://wa.me/' + WA_NUMBER;
const WA_MSG    = encodeURIComponent("Hello Meitav Tech! I'd like to enquire about a product.");

/* ── Set all WhatsApp links on page load ── */
document.addEventListener('DOMContentLoaded', function () {
  const floatEl      = document.getElementById('waFloat');
  const footerWaEl   = document.getElementById('waFooter');
  if (floatEl)    floatEl.href    = WA_BASE + '?text=' + WA_MSG;
  if (footerWaEl) footerWaEl.href = WA_BASE + '?text=' + WA_MSG;

  /* Mark active nav link */
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  /* Init scroll reveal */
  initReveal();
});

/* ── Mobile menu ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.addEventListener('click', function (e) {
  const menu = document.getElementById('mobileMenu');
  const ham  = document.querySelector('.hamburger');
  if (menu && ham && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
  }
});

/* ── WhatsApp functions ── */
function waContact() {
  window.open(WA_BASE + '?text=' + WA_MSG, '_blank');
}

function wa(product) {
  const msg = encodeURIComponent("Hello Meitav Tech! I'm interested in the " + product + ". Is it available and what's the price?");
  window.open(WA_BASE + '?text=' + msg, '_blank');
}

/* ── Newsletter ── */
function subscribeNewsletter() {
  const input = document.getElementById('nlEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) { alert('Please enter a valid email address.'); return; }
  alert('Thank you! You have been added to the Meitav Tech newsletter.');
  input.value = '';
}

/* ── Scroll reveal ── */
function initReveal() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}
window.addEventListener('scroll', initReveal);
