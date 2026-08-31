const menuBtn = document.querySelector('[data-menu]');
const mobileNav = document.querySelector('[data-mobile-nav]');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  mobileNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileNav.classList.remove('open')));
}

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.14 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const hero = document.querySelector('.hero-media');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const y = Math.min(window.scrollY * 0.10, 70);
  hero.style.transform = `scale(1.04) translateY(${y}px)`;
}, { passive: true });

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const quoteForm = document.querySelector('#quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = new FormData(quoteForm);
    const subject = encodeURIComponent(`Capacity Request - ${d.get('origin') || 'New Inquiry'}`);
    const body = encodeURIComponent(
`Name: ${d.get('name') || ''}\nCompany: ${d.get('company') || ''}\nPhone: ${d.get('phone') || ''}\nEmail: ${d.get('email') || ''}\n\nOrigin: ${d.get('origin') || ''}\nDestination: ${d.get('destination') || ''}\nEquipment: ${d.get('equipment') || ''}\nPickup: ${d.get('pickup') || ''}\n\nDetails:\n${d.get('details') || ''}`);
    window.location.href = `mailto:dispatch@urbanfreightinc.com?subject=${subject}&body=${body}`;
  });
}
