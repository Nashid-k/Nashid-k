<!-- 
  COPY EVERYTHING BELOW THIS LINE 
  → Create a repo named EXACTLY "Nashid-k" 
  → Paste this as README.md 
  → Commit → Your profile will instantly transform into a cyberpunk Matrix terminal
-->

<!DOCTYPE html>
<html>
<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=VT323&display=swap');
    
    body {
      margin: 0;
      padding: 0;
      background: #000;
      color: #00ff41;
      font-family: 'VT323', monospace;
      overflow-x: hidden;
    }

    /* MATRIX RAIN BACKGROUND */
    #matrix {
      position: fixed;
      top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: -1;
      opacity: 0.25;
    }

    /* NEON GLOW & 3D EFFECTS */
    .container {
      position: relative;
      z-index: 2;
      max-width: 1100px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    h1 {
      font-size: 4.5rem;
      text-align: center;
      margin: 20px 0;
      text-shadow: 
        0 0 10px #00ff41,
        0 0 20px #00ff41,
        0 0 40px #00ff41,
        0 0 80px #00ff00;
      animation: glitch 2s infinite;
    }

    @keyframes glitch {
      0% { text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff; }
      20% { text-shadow: -2px 2px #ff00ff, 2px -2px #00ffff; }
      40% { text-shadow: 2px -2px #ff00ff, -2px 2px #00ffff; }
      100% { text-shadow: 0 0 20px #00ff41; }
    }

    .terminal {
      background: rgba(0, 20, 0, 0.85);
      border: 3px solid #00ff41;
      padding: 30px;
      border-radius: 8px;
      box-shadow: 
        0 0 30px #00ff41,
        inset 0 0 30px rgba(0, 255, 65, 0.2);
      margin: 30px 0;
      position: relative;
      transform: perspective(800px) rotateX(8deg);
      transition: all 0.4s;
    }

    .terminal:hover {
      transform: perspective(800px) rotateX(0deg) scale(1.02);
      box-shadow: 0 0 60px #00ff41;
    }

    .scanline {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 255, 65, 0.08) 50%
      );
      background-size: 100% 6px;
      pointer-events: none;
      animation: scan 4s linear infinite;
    }

    @keyframes scan {
      0% { transform: translateY(-100%); }
      100% { transform: translateY(100%); }
    }

    .neon-btn {
      display: inline-block;
      padding: 12px 28px;
      margin: 10px;
      color: #00ff41;
      border: 2px solid #00ff41;
      text-decoration: none;
      font-size: 1.4rem;
      transition: all 0.3s;
      box-shadow: 0 0 15px #00ff41;
    }

    .neon-btn:hover {
      background: #00ff41;
      color: #000;
      box-shadow: 0 0 40px #00ff41;
      transform: translateY(-3px) scale(1.05);
    }

    .skill-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      gap: 15px;
    }

    .skill {
      background: rgba(0, 255, 65, 0.1);
      border: 2px solid #00ff41;
      padding: 15px;
      text-align: center;
      transition: all 0.3s;
      transform: perspective(600px) rotateY(10deg);
    }

    .skill:hover {
      transform: perspective(600px) rotateY(0deg) scale(1.1);
      background: rgba(0, 255, 65, 0.25);
      box-shadow: 0 0 25px #00ff41;
    }

    .project-card {
      background: rgba(0, 20, 0, 0.9);
      border: 3px solid #00ff41;
      padding: 20px;
      margin: 20px 0;
      transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
      transform: perspective(1000px) rotateX(15deg);
    }

    .project-card:hover {
      transform: perspective(1000px) rotateX(0deg) translateY(-15px);
      box-shadow: 0 30px 60px rgba(0, 255, 65, 0.4);
    }
  </style>
</head>
<body>

<canvas id="matrix"></canvas>

<div class="container">

  <h1>NASHID K</h1>
  <p style="text-align:center; font-size:2.2rem; margin-bottom:40px; text-shadow:0 0 20px #00ff41;">
    FULL-STACK ENGINEER • NEXT.JS + AI ARCHITECT<br>
    <span style="color:#00ff9d;">THE MATRIX HAS YOU...</span>
  </p>

  <div class="terminal">
    <div class="scanline"></div>
    <h2 style="margin-top:0; text-shadow:0 0 15px;">SYSTEM STATUS: ONLINE</h2>
    <p style="font-size:1.6rem; line-height:1.6;">
      Crafting living, breathing web systems with Next.js, TypeScript, Groq AI, Redis, and clean architecture.<br><br>
      Turning ideas into production-grade realities that scale, perform, and feel alive.
    </p>
  </div>

  <!-- SKILLS -->
  <h2 style="text-align:center; margin:50px 0 20px; font-size:2.8rem; text-shadow:0 0 20px;">TECH MATRIX</h2>
  <div class="skill-grid">
    <div class="skill">Next.js 16<br><span style="font-size:1.1rem;">App Router + Server Components</span></div>
    <div class="skill">React 19<br><span style="font-size:1.1rem;">TypeScript + TanStack Query</span></div>
    <div class="skill">Node.js + Express<br><span style="font-size:1.1rem;">REST + Zod + Clean Arch</span></div>
    <div class="skill">Groq LLM<br><span style="font-size:1.1rem;">Multi-key orchestration</span></div>
    <div class="skill">MongoDB + PostgreSQL<br><span style="font-size:1.1rem;">Indexing & Optimization</span></div>
    <div class="skill">Upstash Redis<br><span style="font-size:1.1rem;">Caching + Rate Limiting</span></div>
    <div class="skill">RBAC + JWT<br><span style="font-size:1.1rem;">Secure Auth Systems</span></div>
    <div class="skill">Docker + Vercel + AWS<br><span style="font-size:1.1rem;">CI/CD Pipelines</span></div>
  </div>

  <!-- PROJECTS -->
  <h2 style="text-align:center; margin:60px 0 30px; font-size:2.8rem; text-shadow:0 0 20px;">DEPLOYED REALITIES</h2>

  <div class="project-card">
    <h3>AXIOM — AI AUTONOMOUS LEARNING OS</h3>
    <p>Live code editor + Groq-powered mentorship + Neural Flashcards + personalized curriculum engine.<br>
    Built with Next.js 16, React 19, MongoDB, Redis, NextAuth v5 & Monaco Editor.</p>
    <p style="margin:15px 0;">
      <a href="https://axiom-e-learning.vercel.app" target="_blank" class="neon-btn">LAUNCH AXIOM →</a>
      <a href="https://github.com/Nashid-k/axiom-e-learning" target="_blank" class="neon-btn">VIEW SOURCE</a>
    </p>
  </div>

  <div class="project-card">
    <h3>ENTERPRISE ASSET TRACKER</h3>
    <p>Full RBAC system with audit trails, real-time updates, maintenance scheduling & optimized APIs serving 300+ assets.</p>
    <p style="margin:15px 0;">
      <a href="https://github.com/Nashid-k" target="_blank" class="neon-btn">INTERNAL PRODUCTION SYSTEM</a>
    </p>
  </div>

  <!-- CONNECT -->
  <div style="text-align:center; margin:70px 0 40px;">
    <h2 style="font-size:2.8rem; text-shadow:0 0 20px;">ENTER THE GRID</h2>
    <a href="mailto:nashid.connect@gmail.com" class="neon-btn">nashid.connect@gmail.com</a>
    <a href="https://www.linkedin.com/in/nashid-k-080909273/" target="_blank" class="neon-btn">LINKEDIN</a>
    <a href="https://axiom-e-learning.vercel.app" target="_blank" class="neon-btn">LIVE DEMO</a>
  </div>

  <p style="text-align:center; font-size:1.3rem; opacity:0.7;">
    THRIVANANTHAPURAM • OPEN TO REMOTE / BANGALORE OPPORTUNITIES
  </p>

</div>

<!-- MATRIX RAIN ENGINE -->
<script>
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const chars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00ff41';
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);
      
      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 35);

  // Resize handler
  window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });
</script>

</body>
</html>
