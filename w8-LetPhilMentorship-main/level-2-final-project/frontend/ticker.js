async function loadCryptoTicker() {
  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&price_change_percentage=24h&sparkline=false';

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('API error');
    
    const coins = await response.json();
    
    const content = document.getElementById('ticker-content');
    content.innerHTML = ''; // clear previous

    // Build the ticker items
    coins.forEach(coin => {
      const change = coin.price_change_percentage_24h?.toFixed(2) || '0.00';
      const isPositive = change >= 0;
      const color = isPositive ? '#10b981' : '#ef4444';

      const itemHTML = `
        <div class="ticker-item">
          <img src="${coin.image}" alt="${coin.symbol}">
          <span class="symbol">${coin.symbol}</span>
          <span class="price">$${coin.current_price.toLocaleString()}</span>
          <span style="color:${color}; font-weight:700;">
            ${isPositive ? '↑' : '↓'} ${Math.abs(change)}%
          </span>
        </div>
      `;

      const item = document.createElement('div');
      item.innerHTML = itemHTML;
      content.appendChild(item.firstElementChild);
    });

    // Duplicate the entire list for seamless infinite scrolling
    const clone = content.cloneNode(true);
    content.appendChild(clone);

  } catch (error) {
    console.warn('Crypto ticker unavailable (API rate limit or network issue)');
    // Optional: show a static fallback message
    document.getElementById('ticker-content').innerHTML = `
      <div style="color:#ecfdf5; padding:8px 20px;">⚡ Live crypto prices temporarily unavailable • Refresh to try again</div>
    `;
  }
}

// Auto-load + refresh every 60 seconds (gentle on the free API)
document.addEventListener('DOMContentLoaded', () => {
  loadCryptoTicker();
  setInterval(loadCryptoTicker, 60000);
});