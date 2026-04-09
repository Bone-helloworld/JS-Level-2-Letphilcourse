document.addEventListener('DOMContentLoaded', () => {
  // Language + Wallet
  const langBtn = document.getElementById('lang-btn');
  const text = langBtn.querySelector('.lang-text');
  let currentLang = 'EN';
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'EN' ? 'VN' : 'EN';
    text.textContent = currentLang;
  });

  document.getElementById('wallet-btn').addEventListener('click', () => {
    alert("✅ Wallet connected!");
  });

  // Contact form
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("✅ Message sent! Thank you.\n\n(Real email backend will be added later)");
    form.reset();
  });
});