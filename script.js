// small UI helpers
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.getElementById('menuToggle');
menuToggle?.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const visible = nav.style.display === 'flex';
  nav.style.display = visible ? 'none' : 'flex';
});

// Form handler (demo-only: won't send email unless you wire up a backend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const status = document.getElementById('formStatus');
    status.textContent = 'Sending... (demo)';
    setTimeout(() => {
      status.textContent = 'Thanks — your message was received (demo).';
      form.reset();
    }, 800);
  });
}
