/**
 * Holographic Winter Wonderland - Darula Transporte 2026
 */
document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.createElement("div");
  canvas.id = "winter-canvas";
  canvas.setAttribute("aria-hidden", "true");

  // 1. SCHNEE-GENERATOR
  const isMobile = window.innerWidth < 768;
  const snowCount = isMobile ? 50 : 150;

  for (let i = 0; i < snowCount; i++) {
    const flake = document.createElement("div");
    flake.classList.add("snow-flake");
    flake.style.left = `${Math.random() * 100}vw`;
    
    const layerRandom = Math.random();
    let size, duration;
    
    if (layerRandom > 0.8) {
      flake.classList.add("snow-layer-1");
      size = Math.random() * 4 + 4;
      duration = Math.random() * 8 + 6;
    } else if (layerRandom > 0.4) {
      flake.classList.add("snow-layer-2");
      size = Math.random() * 3 + 2;
      duration = Math.random() * 12 + 10;
    } else {
      flake.classList.add("snow-layer-3");
      size = Math.random() * 2 + 1;
      duration = Math.random() * 20 + 15;
    }
    
    flake.style.width = `${size}px`;
    flake.style.height = `${size}px`;
    flake.style.animationDuration = `${duration}s`;
    flake.style.animationDelay = `-${Math.random() * 35}s`;
    
    canvas.appendChild(flake);
  }

  // 2. RENTIERSCHLITTEN
  const santa = document.createElement("div");
  santa.className = "santa-sleigh";
  santa.innerHTML = `
    <svg viewBox="0 0 800 300" width="100%" height="100%" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="holo-glow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fff" stop-opacity="0.9" />
          <stop offset="50%" stop-color="#a78bfa" stop-opacity="0.7" />
          <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0.9" />
        </linearGradient>
      </defs>
      <g transform="scale(1.15)" fill="url(#holo-glow)">
        <path d="M580,70 Q590,50 600,55 Q595,65 585,80 L590,100 L580,105 L575,85 L560,85 L550,105 L540,100 L555,75 Z" />
        <path d="M575,60 Q580,40 590,45 L585,55 Z" />
        <path d="M500,80 Q510,60 520,65 Q515,75 505,90 L510,110 L500,115 L495,95 L480,95 L470,115 L460,110 L475,85 Z" />
        <path d="M495,70 Q500,50 510,55 L505,65 Z" />
        <path d="M290,115 Q400,110 505,90" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none" />
        <path d="M290,115 Q360,120 425,100" stroke="rgba(255,255,255,0.4)" stroke-width="2" fill="none" />
        <path d="M210,90 L230,90 L240,120 L280,120 Q300,120 310,105 L315,110 Q300,140 260,140 L200,140 Q170,140 160,110 L170,105 Q175,125 200,125 Z" />
        <path d="M220,80 L260,80 L270,110 L220,110 Z" />
        <path d="M250,80 Q270,60 260,40 Q240,20 220,50 Q200,80 230,80 Z" />
        <circle cx="225" cy="40" r="10" />
      </g>
    </svg>
  `;
  
  canvas.appendChild(santa);
  document.body.prepend(canvas);
});
