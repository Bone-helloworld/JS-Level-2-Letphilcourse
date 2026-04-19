const plans = [
  { name: "Starter", price: 29, period: "/month", features: ["1 Agent", "Basic strategies", "Real-time alerts"] },
  { name: "Pro", price: 79, period: "/month", features: ["5 Agents", "All strategies", "Priority execution", "24/7 support"] },
  { name: "Enterprise", price: 199, period: "/month", features: ["Unlimited Agents", "Custom AI", "Private nodes", "Dedicated manager"] }
];

function createPricingCard(plan) {
  const card = document.createElement('div');
  card.className = "pricing-card";
  card.innerHTML = `
    <h3>${plan.name}</h3>
    <div class="price">$${plan.price}<span style="font-size:1.2rem;font-weight:400;">${plan.period}</span></div>
    <ul style="text-align:left;margin:2rem 0;line-height:2;list-style:none;">
      ${plan.features.map(f => `<li style="margin-bottom:8px;">✅ ${f}</li>`).join('')}
    </ul>
    <button onclick="buyPlan('${plan.name}')" style="width:100%;padding:14px;background:#10b981;color:#000;border:none;border-radius:9999px;font-weight:700;font-size:1.1rem;cursor:pointer;">Get Started</button>
  `;
  return card;
}

function buyPlan(name) {
  alert(`🎉 You selected the ${name} plan!\n\n(Full wallet + payment flow will be added later)`);
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('pricing-grid');
  if (grid) plans.forEach(plan => grid.appendChild(createPricingCard(plan)));
});