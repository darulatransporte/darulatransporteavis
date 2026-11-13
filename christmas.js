/**
 * Weihnachts-Script (Darula Transporte)
 * Generiert die winterliche Hintergrundlandschaft vollautomatisch.
 */
document.addEventListener("DOMContentLoaded", () => {
  // 1. Aktiviert das CSS-Thema für bestehende Karten
  document.body.classList.add("xmas-theme");

  // 2. Erstelle das Hintergrund-Canvas (Layer)
  const canvas = document.createElement("div");
  canvas.id = "xmas-canvas";
  canvas.setAttribute("aria-hidden", "true");

  // 3. Weihnachtsmann mit Schlitten (High-Quality Vektorgrafik Silhouette)
  const santa = document.createElement("div");
  santa.className = "xmas-santa";
  santa.innerHTML = `
    <svg viewBox="0 0 800 300" width="100%" height="100%" fill="rgba(255,255,255,0.9)" xmlns="http://www.w3.org/2000/svg">
      <g transform="scale(1.15)">
        <!-- Rentier 1 -->
        <path d="M580,70 Q590,50 600,55 Q595,65 585,80 L590,100 L580,105 L575,85 L560,85 L550,105 L540,100 L555,75 Z" />
        <path d="M575,60 Q580,40 590,45 L585,55 Z" />
        <!-- Rentier 2 -->
        <path d="M500,80 Q510,60 520,65 Q515,75 505,90 L510,110 L500,115 L495,95 L480,95 L470,115 L460,110 L475,85 Z" />
        <path d="M495,70 Q500,50 510,55 L505,65 Z" />
        <!-- Rentier 3 -->
        <path d="M420,90 Q430,70 440,75 Q435,85 425,100 L430,120 L420,125 L415,105 L400,105 L390,125 L380,120 L395,95 Z" />
        <path d="M415,80 Q420,60 430,65 L425,75 Z" />
        <!-- Zügel -->
        <path d="M290,115 Q360,120 425,100" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" fill="none" />
        <path d="M290,115 Q400,110 505,90" stroke="rgba(255,255,255,0.4)" stroke-width="2.5" fill="none" />
        <!-- Schlitten & Weihnachtsmann -->
        <path d="M210,90 L230,90 L240,120 L280,120 Q300,120 310,105 L315,110 Q300,140 260,140 L200,140 Q170,140 160,110 L170,105 Q175,125 200,125 Z" />
        <path d="M220,80 L260,80 L270,110 L220,110 Z" />
        <path d="M250,80 Q270,60 260,40 Q240,20 220,50 Q200,80 230,80 Z" />
        <circle cx="225" cy="40" r="10" />
      </g>
    </svg>
  `;
  canvas.appendChild(santa);

  // 4. Sterne generieren
  const starCount = window.innerWidth < 768 ? 20 : 50;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "xmas-star";
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 65}vh`; // Sterne primär in den oberen 65%
    const size = Math.random() * 2.5 + 0.5;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    canvas.appendChild(star);
  }

  // 5. Schneeflocken generieren
  const snowCount = window.innerWidth < 768 ? 40 : 120;
  for (let i = 0; i < snowCount; i++) {
    const snow = document.createElement("div");
    snow.className = "xmas-snow";
    snow.style.left = `${Math.random() * 100}vw`;
    
    // Unterschiedliche Größen
    const size = Math.random() * 5 + 3; // Zwischen 3px und 8px
    snow.style.width = `${size}px`;
    snow.style.height = `${size}px`;
    
    // Unterschiedliche Deckkraft
    snow.style.opacity = Math.random() * 0.5 + 0.2;
    
    // Unterschiedliche Fallgeschwindigkeit (10s bis 22s) und Pendeldauer
    snow.style.animationDuration = `${Math.random() * 12 + 10}s, ${Math.random() * 3 + 2}s`;
    
    // Zufälliger Startzeitpunkt, damit der Schnee von Beginn an auf dem ganzen Bildschirm verteilt ist
    snow.style.animationDelay = `-${Math.random() * 20}s, -${Math.random() * 5}s`;
    
    canvas.appendChild(snow);
  }

  // 6. Das fertige Konstrukt hinter allem einhängen
  document.body.prepend(canvas);
});
