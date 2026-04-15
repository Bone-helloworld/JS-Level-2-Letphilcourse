
// SHARED HEADER + FOOTER + TICKER + WALLET + LANGUAGE (FIXED PATHS)
function renderNavbar() {
  const html = `
    <div class="logo">
      <a href="/index.html" style="color:#fff;text-decoration:none;">AlphaScript</a>
    </div>
    <div class="nav-center">
      <a href="/agents/index.html">Trading Agents</a>
      <a href="/pricing/index.html">Pricing</a>
      <a href="/about/index.html">Resources</a>
    </div>
    <div class="right-controls">
      <button id="wallet-btn">Connect Wallet</button>
      <button id="lang-btn"><span class="lang-text">ENG</span> 🌐</button>
    </div>
  `;
  const nav = document.createElement('div');
  nav.innerHTML = html;
  document.body.insertAdjacentElement('afterbegin', nav);
}

function renderFooter() {
  document.body.insertAdjacentHTML('beforeend', `<footer>© 2026 AlphaScript. All rights reserved.</footer>`);
}

function renderTicker() {
  document.body.insertAdjacentHTML('beforeend', `<div class="crypto-ticker"><div id="ticker-content" class="ticker-content"></div></div>`);
}

function connectWallet() {
  if (window.ethereum) {
    window.ethereum.request({ method: "eth_requestAccounts" })
      .then(accounts => alert(`✅ Wallet connected: ${accounts[0]}`))
      .catch(() => alert("❌ Connection failed"));
  } else {
    alert("Please install MetaMask or Phantom!");
  }
}

function setupLanguage() {
  const btn = document.getElementById('lang-btn');
  if (!btn) return;
  const text = btn.querySelector('.lang-text');
  let lang = 'EN';
  btn.addEventListener('click', () => {
    lang = lang === 'EN' ? 'VN' : 'EN';
    text.textContent = lang;
  });
}

async function loadCryptoTicker() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&price_change_percentage=24h&sparkline=false');
    const coins = await res.json();
    const container = document.getElementById('ticker-content');
    container.innerHTML = '';

    coins.forEach(coin => {
      const change = (coin.price_change_percentage_24h || 0).toFixed(2);
      const positive = change >= 0;
      const color = positive ? '#10b981' : '#ef4444';
      const item = document.createElement('div');
      item.className = 'ticker-item';
      item.innerHTML = `
        <img src="${coin.image}" alt="${coin.symbol}">
        <span class="symbol">${coin.symbol}</span>
        <span class="price">$${coin.current_price.toLocaleString()}</span>
        <span style="color:${color};font-weight:700;">${positive ? '↑' : '↓'} ${Math.abs(change)}%</span>
      `;
      container.appendChild(item);
    });

    const clone = container.cloneNode(true);
    container.appendChild(clone);
  } catch (e) {
    console.warn('Ticker unavailable');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderTicker();
  renderFooter();
  setupLanguage();

  const walletBtn = document.getElementById('wallet-btn');
  if (walletBtn) walletBtn.addEventListener('click', connectWallet);

  loadCryptoTicker();
  setInterval(loadCryptoTicker, 60000);
});
