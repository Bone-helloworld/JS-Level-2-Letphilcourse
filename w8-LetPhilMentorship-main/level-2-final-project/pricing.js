const plans = [
  { name: "Starter", price: 29, period: "/month", features: ["1 Agent", "Basic strategies", "Real-time alerts"], popular: false },
  { name: "Pro", price: 79, period: "/month", features: ["5 Agents", "All strategies", "Priority execution", "24/7 support"], popular: true },
  { name: "Enterprise", price: 199, period: "/month", features: ["Unlimited Agents", "Custom AI", "Private nodes", "Dedicated manager"], popular: false }
];

function createPricingCard(plan) {
  const card = document.createElement('div');
  card.className = `pricing-card ${plan.popular ? 'popular' : ''}`;
  card.innerHTML = `
    <h3>${plan.name}</h3>
    <div class="price">$${plan.price}<span style="font-size:1.2rem; font-weight:400;">${plan.period}</span></div>
    <ul style="text-align:left; margin:2rem 0; line-height:2;">
      ${plan.features.map(f => `<li>✅ ${f}</li>`).join('')}
    </ul>
    <button onclick="buyPlan('${plan.name}')" style="width:100%; padding:14px; background:#10b981; color:#000; border:none; border-radius:9999px; font-weight:700; font-size:1.1rem; cursor:pointer;">
      Get Started
    </button>
  `;
  return card;
}

function buyPlan(name) {
  alert(`🎉 Thank you! You selected ${name} plan.\n\n(Wallet connect + payment flow will go here later)`);
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('pricing-grid');
  plans.forEach(plan => grid.appendChild(createPricingCard(plan)));

  // Language + Wallet (same on every page)
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
});