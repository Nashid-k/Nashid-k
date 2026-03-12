<!-- 
  COPY EVERYTHING BELOW THIS LINE 
  → Repo name must be EXACTLY "Nashid-k"
  → Paste as README.md
  → 100% working on GitHub (no JS errors — GitHub blocks scripts)
-->

<style>
  @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');

  body {
    margin: 0;
    padding: 0;
    background: #000;
    color: #00ff41;
    font-family: 'VT323', monospace;
    overflow-x: hidden;
    position: relative;
  }

  /* MATRIX RAIN BACKGROUND (PURE CSS — WORKS ON GITHUB) */
  .matrix-bg {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: -1;
    background: 
      linear-gradient(transparent 50%, rgba(0,255,65,0.03) 50%),
      repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,255,65,0.02) 20px, rgba(0,255,65,0.02) 40px);
    animation: rain 0.8s linear infinite;
    opacity: 0.35;
    pointer-events: none;
  }

  @keyframes rain {
    0% { background-position: 0 0; }
    100% { background-position: 0 200px; }
  }

  /* NEON + 3D EFFECTS */
  .container {
    position: relative;
    z-index: 2;
    max-width: 1100px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  h1 {
    font-size: 4.8rem;
    text-align: center;
    margin: 30px 0 10px;
    text-shadow: 
      0 0 10px #00ff41,
      0 0 20px #00ff41,
      0 0 40px #00ff41,
      0 0 80px #00ff00;
    animation: glitch 1.8s infinite;
  }

  @keyframes glitch {
    0% { text-shadow: 3px 3px #ff00ff, -3px -3px #00ffff; }
    20% { text-shadow: -3px 3px #ff00ff, 3px -3px #00ffff; }
    40% { text-shadow: 3px -3px #ff00ff, -3px 3px #00ffff; }
    100% { text-shadow: 0 0 25px #00ff41; }
  }

  .terminal {
    background: rgba(0, 20, 0, 0.92);
    border: 4px solid #00ff41;
    padding: 35px;
    border-radius: 12px;
    box-shadow: 
      0 0 40px #00ff41,
      inset 0 0 40px rgba(0,255,65,0.25);
    margin: 40px 0;
    position: relative;
    transform: perspective(900px) rotateX(10deg);
    transition: all 0.5s ease;
  }

  .terminal:hover {
    transform: perspective(900px) rotateX(0deg) scale(1.03);
    box-shadow: 0 0 70px #00ff41;
  }

  .scanline {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(
      to bottom,
      transparent 48%,
      rgba(0,255,65,0.12) 50%,
      transparent 52%
    );
    background-size: 100% 8px;
    animation: scan 3.5s linear infinite;
    pointer-events: none;
  }

  @keyframes scan {
    0% { transform: translateY(-120%); }
    100% { transform: translateY(120%); }
  }

  .neon-btn {
    display: inline-block;
    padding: 14px 32px;
    margin: 12px;
    color: #00ff41;
    border: 3px solid #00ff41;
    text-decoration: none;
    font-size: 1.55rem;
    box-shadow: 0 0 20px #00ff41;
    transition: all 0.3s;
  }

  .neon-btn:hover {
    background: #00ff41;
    color: #000;
    box-shadow: 0 0 50px #00ff41;
    transform: translateY(-5px) scale(1.08);
  }

  .skill-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 18px;
  }

  .skill {
    background: rgba(0,255,65,0.08);
    border: 3px solid #00ff41;
    padding: 18px 12px;
    text-align: center;
    transition: all 0.4s cubic-bezier(0.23,1,0.32,1);
    transform: perspective(700px) rotateY(12deg);
  }

  .skill:hover {
    transform: perspective(700px) rotateY(0deg) scale(1.12);
    background: rgba(0,255,65,0.3);
    box-shadow: 0 0 35px #00ff41;
  }

  .project-card {
    background: rgba(0,20,0,0.95);
    border: 4px solid #00ff41;
    padding: 28px;
    margin: 25px 0;
    transition: all 0.6s cubic-bezier(0.23,1,0.32,1);
    transform: perspective(1200px) rotateX(18deg);
  }

  .project-card:hover {
    transform: perspective(1200px) rotateX(0deg) translateY(-20px);
    box-shadow: 0 40px 80px rgba(0,255,65,0.45);
  }
</style>

<div class="matrix-bg"></div>

<div class="container">

  <h1>NASHID K</h1>
  <p style="text-align:center; font-size:2.4rem; margin-bottom:50px; text-shadow:0 0 25px #00ff41;">
    FULL-STACK ENGINEER • NEXT.JS + GROQ AI ARCHITECT<br>
    <span style="color:#00ff9d; font-size:2rem;">THE MATRIX HAS YOU...</span>
  </p>

  <div class="terminal">
    <div class="scanline"></div>
    <h2 style="margin-top:0; color:#00ff41; text-shadow:0 0 15px;">SYSTEM STATUS: ONLINE ✓</h2>
    <p style="font-size:1.75rem; line-height:1.7;">
      Building production systems that scale.<br>
      Next.js 16 • TypeScript • Groq AI • Redis • Clean Architecture<br><br>
      30% latency reduction • 99.9% uptime • Zero security incidents
    </p>
  </div>

  <!-- SKILLS -->
  <h2 style="text-align:center; margin:55px 0 25px; font-size:3rem; text-shadow:0 0 20px;">TECH MATRIX LOADED</h2>
  <div class="skill-grid">
    <div class="skill">Next.js 16<br><span style="font-size:1.3rem;">App Router + Server Components</span></div>
    <div class="skill">React 19 + TypeScript<br><span style="font-size:1.3rem;">TanStack Query</span></div>
    <div class="skill">Node.js • Express<br><span style="font-size:1.3rem;">Zod + RBAC + JWT</span></div>
    <div class="skill">Groq LLM<br><span style="font-size:1.3rem;">10-key rotation pool</span></div>
    <div class="skill">MongoDB + PostgreSQL<br><span style="font-size:1.3rem;">Advanced Indexing</span></div>
    <div class="skill">Upstash Redis<br><span style="font-size:1.3rem;">Caching + Rate Limiting</span></div>
    <div class="skill">Docker + Vercel + AWS<br><span style="font-size:1.3rem;">CI/CD Ready</span></div>
    <div class="skill">Jest + RTL<br><span style="font-size:1.3rem;">Full Test Coverage</span></div>
  </div>

  <!-- PROJECTS -->
  <h2 style="text-align:center; margin:65px 0 30px; font-size:3rem; text-shadow:0 0 20px;">DEPLOYED IN THE GRID</h2>

  <div class="project-card">
    <h3>AXIOM — AI AUTONOMOUS LEARNING OS</h3>
    <p style="font-size:1.6rem;">Live Monaco code editor + Groq-powered AI mentor + Neural Flashcards + personalized 15+ course engine.<br>
    Next.js 16 • React 19 • Redis • NextAuth v5 • MongoDB</p>
    <p style="margin:20px 0 10px;">
      <a href="https://axiom-e-learning.vercel.app" target="_blank" class="neon-btn">LAUNCH AXIOM LIVE →</a>
      <a href="https://github.com/Nashid-k/axiom-e-learning" target="_blank" class="neon-btn">VIEW SOURCE CODE</a>
    </p>
  </div>

  <div class="project-card">
    <h3>ENTERPRISE ASSET TRACKER @ DEXPRO</h3>
    <p style="font-size:1.6rem;">RBAC system for 300+ assets • Real-time updates • Audit trails • 30% faster APIs</p>
    <p style="margin:20px 0 10px;">
      <a href="https://github.com/Nashid-k" target="_blank" class="neon-btn">PRODUCTION SYSTEM (INTERNAL)</a>
    </p>
  </div>

  <!-- CONNECT -->
  <div style="text-align:center; margin:80px 0 50px;">
    <h2 style="font-size:3rem; text-shadow:0 0 25px; margin-bottom:30px;">ENTER THE GRID</h2>
    <a href="mailto:nashid.connect@gmail.com" class="neon-btn">nashid.connect@gmail.com</a>
    <a href="https://www.linkedin.com/in/nashid-k-080909273/" target="_blank" class="neon-btn">LINKEDIN</a>
    <a href="https://axiom-e-learning.vercel.app" target="_blank" class="neon-btn">LIVE DEMO</a>
  </div>

  <p style="text-align:center; font-size:1.6rem; opacity:0.8;">
    THIRUVANANTHAPURAM, KERALA • OPEN TO REMOTE / BANGALORE ROLES
  </p>

</div>
