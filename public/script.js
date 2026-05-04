function updateCountdown() {
  const now = new Date();
  const target = new Date(2026, 5, 4, 23, 59, 59);
  let diff = target - now;

  if (diff <= 0) {
    document.getElementById('jam').textContent = '00';
    document.getElementById('menit').textContent = '00';
    document.getElementById('detik').textContent = '00';
    return;
  }

  const h = Math.floor(diff / 3600000);
  diff %= 3600000;
  const m = Math.floor(diff / 60000);
  diff %= 60000;
  const s = Math.floor(diff / 1000);

  document.getElementById('jam').textContent = String(h).padStart(2,'0');
  document.getElementById('menit').textContent = String(m).padStart(2,'0');
  document.getElementById('detik').textContent = String(s).padStart(2,'0');
}
setInterval(updateCountdown, 1000);
updateCountdown();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

  function filterKatalog(cat, btn) {
    document.querySelectorAll('.filter-btns .btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.product-item').forEach(item => {
      item.style.display = (cat === 'semua' || item.dataset.cat === cat) ? 'block' : 'none';
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if(t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
  });