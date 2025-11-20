// script.js: small interactions for the portfolio site

// DOM helpers
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// Set current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Toggle nav for mobile
  const navToggle = document.getElementById('navToggle');
  const navList = document.getElementById('navList');
  if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Smooth scroll for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth', block: 'start' });
        // close mobile nav after click
        if (navList.classList.contains('show')) navList.classList.remove('show');
      }
    });
  });
});

// Contact form handling (client-side only)
function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  const status = document.getElementById('formStatus');

  // simple client-side validation
  if (!name || !email || !message) {
    status.textContent = 'Please fill all fields.';
    status.style.color = '#b91c1c';
    // show red border briefly
    [form.name, form.email, form.message].forEach(inp => {
      if (!inp.value.trim()) inp.classList.add('input-error');
      setTimeout(() => inp.classList.remove('input-error'), 1500);
    });
    return;
  }

  // Fake send (for demo) — replace with real endpoint or email service
  status.textContent = 'Sending message...';
  status.style.color = '#0f1724';
  setTimeout(() => {
    status.textContent = 'Thanks! Your message has been sent (demo). I will respond soon.';
    status.style.color = '#16a34a';
    form.reset();
  }, 1200);
}
