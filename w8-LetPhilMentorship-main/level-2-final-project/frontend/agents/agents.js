// Sample agents data
const agentsData = [
  { id:1, name:"Momentum Agent", strategy:"Momentum", risk:"Medium", followers:1240, roi:32, color:"#10b981" },
  { id:2, name:"Mean Reversion", strategy:"Reversion", risk:"Low", followers:890, roi:18, color:"#22d3ee" },
  { id:3, name:"Breakout Hunter", strategy:"Breakout", risk:"High", followers:2140, roi:47, color:"#a78bfa" },
  { id:4, name:"Scalper Pro", strategy:"Momentum", risk:"High", followers:670, roi:25, color:"#10b981" },
  { id:5, name:"Trend Follower", strategy:"Reversion", risk:"Medium", followers:1560, roi:14, color:"#22d3ee" }
];

function createCard(agent) {
  const confidence = Math.floor(65 + Math.random() * 30); // fake 65-95%

  const card = document.createElement('div');
  card.className = 'agent-card';
  card.innerHTML = `
    <div style="padding:1.6rem 1.6rem 0.8rem; display:flex; justify-content:space-between; align-items:flex-start;">
      <div>
        <span class="tag">${agent.strategy}</span>
        <span style="margin-left:8px; background:rgba(255,255,255,0.1); padding:4px 12px; border-radius:9999px; font-size:0.8rem;">${agent.risk} Risk</span>
      </div>
      
      <!-- AI Confidence -->
      <div class="ai-confidence">
        <svg width="58" height="58" class="ai-circle">
          <circle cx="29" cy="29" r="26" fill="none" stroke="#111827" stroke-width="6"/>
          <circle cx="29" cy="29" r="26" fill="none" 
                  stroke="#10b981" 
                  stroke-width="6"
                  stroke-dasharray="${confidence * 1.63} 163"
                  stroke-linecap="round"/>
        </svg>
        <div class="ai-confidence-text">${confidence}%</div>
      </div>
    </div>

    <h3 style="padding:0 1.6rem; margin-bottom:1rem; font-size:1.5rem;">${agent.name}</h3>

    <!-- Better area chart -->
    <div style="height:170px; background:#0a0f1c; padding:1rem; display:flex; align-items:end;">
      <svg width="100%" height="100%" viewBox="0 0 320 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="#10b981" stop-opacity="0.4"/>
            <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
          </linearGradient>
        </defs>
        <path d="M10 120 Q60 95 110 105 Q170 65 210 75 Q260 35 310 20" 
              stroke="#10b981" stroke-width="4" stroke-linecap="round" fill="url(#grad)"/>
        <circle cx="110" cy="105" r="5" fill="#10b981"/>
        <circle cx="210" cy="75" r="5" fill="#10b981"/>
        <circle cx="310" cy="20" r="5" fill="#10b981"/>
      </svg>
    </div>

    <div style="padding:1.2rem 1.6rem; display:flex; justify-content:space-between; align-items:center;">
      <div>
        <div style="font-size:0.85rem; opacity:0.7;">Followers</div>
        <div style="font-size:1.45rem; font-weight:700;">${agent.followers}</div>
      </div>

      <div style="text-align:center;">
        <div style="font-size:0.85rem; opacity:0.7;">30d ROI</div>
        <div style="font-size:1.45rem; font-weight:700; color:#10b981; display:flex; align-items:center; gap:4px;">
          +${agent.roi}% <span style="font-size:1.1rem;">↑</span>
        </div>
      </div>

      <button onclick="toggleFollow(this, ${agent.id})" class="follow-btn"
              style="background:#10b981; color:#000; border:none; padding:11px 24px; border-radius:9999px; font-weight:700; cursor:pointer;">
        Follow
      </button>
    </div>
  `;
  return card;
}

function toggleFollow(btn, id) {
  const key = `followed_${id}`;
  if (btn.textContent === "Follow") {
    btn.textContent = "Following ✓";
    localStorage.setItem(key, 'true');
  } else {
    btn.textContent = "Follow";
    localStorage.removeItem(key);
  }
}

function renderAgents(filteredAgents) {
  const grid = document.getElementById('agent-grid');
  if (!grid) return;
  grid.innerHTML = '';
  filteredAgents.forEach(agent => grid.appendChild(createCard(agent)));
}

function filterAndSort() {
  let filtered = [...agentsData];

  // Search
  const searchTerm = document.getElementById('search-input').value.toLowerCase();
  if (searchTerm) {
    filtered = filtered.filter(a => a.name.toLowerCase().includes(searchTerm));
  }

  // Strategy filter
  const strategy = document.getElementById('strategy-filter').value;
  if (strategy) filtered = filtered.filter(a => a.strategy === strategy);

  // Risk filter
  const risk = document.getElementById('risk-filter').value;
  if (risk) filtered = filtered.filter(a => a.risk === risk);

  // Sort
  const sortMode = document.getElementById('sort-select').value;
  if (sortMode === 'high-to-low') filtered.sort((a,b) => b.roi - a.roi);
  else if (sortMode === 'low-to-high') filtered.sort((a,b) => a.roi - b.roi);
  else if (sortMode === 'follower-number') filtered.sort((a,b) => b.followers - a.followers);

  renderAgents(filtered);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  const filtersContainer = document.querySelector('.filters');   // parent of all filters

  if (filtersContainer) {
    filtersContainer.addEventListener('input', filterAndSort);
    filtersContainer.addEventListener('change', filterAndSort);
  }

  renderAgents(agentsData);
});


