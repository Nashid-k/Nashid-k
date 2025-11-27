<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nashid K - Interactive Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #0a0e27 0%, #1a1f3a 50%, #0a0e27 100%);
            color: #fff;
            overflow-x: hidden;
            min-height: 100vh;
        }

        /* Animated Background */
        .bg-animation {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: -1;
            overflow: hidden;
        }

        .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            animation: twinkle 3s infinite;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
        }

        /* Header */
        header {
            text-align: center;
            padding: 60px 20px 40px;
            background: rgba(26, 31, 58, 0.5);
            backdrop-filter: blur(10px);
            border-bottom: 2px solid rgba(0, 217, 255, 0.3);
        }

        .glitch {
            font-size: 3.5rem;
            font-weight: bold;
            text-transform: uppercase;
            position: relative;
            color: #00d9ff;
            letter-spacing: 3px;
            animation: glitch 1s infinite;
        }

        @keyframes glitch {
            0%, 100% { text-shadow: 2px 2px 0 #ff00de, -2px -2px 0 #00ff9f; }
            25% { text-shadow: -2px 2px 0 #ff00de, 2px -2px 0 #00ff9f; }
            50% { text-shadow: 2px -2px 0 #ff00de, -2px 2px 0 #00ff9f; }
            75% { text-shadow: -2px -2px 0 #ff00de, 2px 2px 0 #00ff9f; }
        }

        .subtitle {
            font-size: 1.3rem;
            color: #a0a0ff;
            margin-top: 10px;
            animation: fadeIn 2s;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        /* Navigation */
        nav {
            display: flex;
            justify-content: center;
            gap: 30px;
            margin-top: 30px;
            flex-wrap: wrap;
        }

        .nav-btn {
            padding: 12px 30px;
            background: linear-gradient(135deg, #00d9ff 0%, #0099ff 100%);
            border: none;
            border-radius: 25px;
            color: #fff;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(0, 217, 255, 0.3);
        }

        .nav-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 25px rgba(0, 217, 255, 0.5);
        }

        /* Main Container */
        .container {
            max-width: 1200px;
            margin: 50px auto;
            padding: 0 20px;
        }

        /* Game Section */
        .game-section {
            background: rgba(26, 31, 58, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            border: 2px solid rgba(0, 217, 255, 0.3);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }

        .game-title {
            font-size: 2rem;
            text-align: center;
            margin-bottom: 20px;
            color: #00d9ff;
        }

        .game-canvas {
            width: 100%;
            max-width: 600px;
            height: 400px;
            background: #0a0e27;
            border: 3px solid #00d9ff;
            border-radius: 10px;
            margin: 0 auto;
            display: block;
            cursor: crosshair;
        }

        .game-controls {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        .game-btn {
            padding: 15px 40px;
            background: linear-gradient(135deg, #ff00de 0%, #ff0080 100%);
            border: none;
            border-radius: 25px;
            color: #fff;
            font-size: 1.1rem;
            font-weight: bold;
            cursor: pointer;
            transition: all 0.3s;
            box-shadow: 0 5px 15px rgba(255, 0, 222, 0.3);
        }

        .game-btn:hover {
            transform: scale(1.05);
            box-shadow: 0 8px 25px rgba(255, 0, 222, 0.5);
        }

        .score-display {
            text-align: center;
            font-size: 1.5rem;
            margin-top: 20px;
            color: #00ff9f;
        }

        /* Leaderboard */
        .leaderboard {
            background: rgba(26, 31, 58, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            margin-bottom: 40px;
            border: 2px solid rgba(255, 0, 222, 0.3);
        }

        .leaderboard-title {
            font-size: 1.8rem;
            text-align: center;
            margin-bottom: 20px;
            color: #ff00de;
        }

        .leaderboard-list {
            list-style: none;
        }

        .leaderboard-item {
            background: rgba(0, 217, 255, 0.1);
            padding: 15px;
            margin: 10px 0;
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-left: 4px solid #00d9ff;
            transition: all 0.3s;
        }

        .leaderboard-item:hover {
            background: rgba(0, 217, 255, 0.2);
            transform: translateX(5px);
        }

        .rank {
            font-size: 1.5rem;
            font-weight: bold;
            color: #ffd700;
            min-width: 50px;
        }

        /* About Section */
        .about-section {
            background: rgba(26, 31, 58, 0.7);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 40px;
            margin-bottom: 40px;
            border: 2px solid rgba(0, 255, 159, 0.3);
        }

        .about-title {
            font-size: 2rem;
            margin-bottom: 20px;
            color: #00ff9f;
            text-align: center;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }

        .skill-card {
            background: rgba(0, 217, 255, 0.1);
            padding: 20px;
            border-radius: 15px;
            text-align: center;
            border: 2px solid rgba(0, 217, 255, 0.3);
            transition: all 0.3s;
        }

        .skill-card:hover {
            transform: translateY(-10px);
            border-color: #00d9ff;
            box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        }

        .skill-icon {
            font-size: 3rem;
            margin-bottom: 10px;
        }

        /* Modal */
        .modal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(5px);
        }

        .modal-content {
            background: linear-gradient(135deg, #1a1f3a 0%, #0a0e27 100%);
            margin: 10% auto;
            padding: 40px;
            border: 2px solid #00d9ff;
            border-radius: 20px;
            width: 90%;
            max-width: 500px;
            text-align: center;
            animation: slideDown 0.3s;
        }

        @keyframes slideDown {
            from { transform: translateY(-100px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }

        .modal input {
            width: 100%;
            padding: 15px;
            margin: 20px 0;
            border: 2px solid #00d9ff;
            border-radius: 10px;
            background: rgba(0, 217, 255, 0.1);
            color: #fff;
            font-size: 1rem;
        }

        .modal input:focus {
            outline: none;
            border-color: #ff00de;
        }

        /* Footer */
        footer {
            text-align: center;
            padding: 30px;
            background: rgba(26, 31, 58, 0.5);
            backdrop-filter: blur(10px);
            margin-top: 50px;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }

        .social-btn {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00d9ff 0%, #0099ff 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            text-decoration: none;
            color: #fff;
            transition: all 0.3s;
        }

        .social-btn:hover {
            transform: rotate(360deg) scale(1.2);
        }

        @media (max-width: 768px) {
            .glitch {
                font-size: 2.5rem;
            }
            
            .game-canvas {
                height: 300px;
            }
        }
    </style>
</head>
<body>
    <!-- Animated Background -->
    <div class="bg-animation" id="bgAnimation"></div>

    <!-- Header -->
    <header>
        <h1 class="glitch">NASHID K</h1>
        <p class="subtitle">Full Stack Developer | MERN + TypeScript Specialist</p>
        <nav>
            <button class="nav-btn" onclick="scrollToSection('game')">🎮 Play Game</button>
            <button class="nav-btn" onclick="scrollToSection('leaderboard')">🏆 Leaderboard</button>
            <button class="nav-btn" onclick="scrollToSection('about')">👨‍💻 About Me</button>
            <button class="nav-btn" onclick="scrollToSection('contact')">📧 Contact</button>
        </nav>
    </header>

    <!-- Main Container -->
    <div class="container">
        <!-- Game Section -->
        <div id="game" class="game-section">
            <h2 class="game-title">🎯 Click Speed Challenge</h2>
            <p style="text-align: center; margin-bottom: 20px;">Click the moving targets as fast as you can! You have 30 seconds.</p>
            <canvas id="gameCanvas" class="game-canvas"></canvas>
            <div class="score-display">
                Score: <span id="score">0</span> | Time: <span id="timer">30</span>s
            </div>
            <div class="game-controls">
                <button class="game-btn" onclick="startGame()">Start Game</button>
                <button class="game-btn" onclick="resetGame()">Reset</button>
            </div>
        </div>

        <!-- Leaderboard -->
        <div id="leaderboard" class="leaderboard">
            <h2 class="leaderboard-title">🏆 Top Players</h2>
            <ul class="leaderboard-list" id="leaderboardList">
                <li class="leaderboard-item">
                    <span><span class="rank">1.</span> CodeMaster</span>
                    <span style="color: #ffd700;">250 pts</span>
                </li>
                <li class="leaderboard-item">
                    <span><span class="rank">2.</span> SpeedRunner</span>
                    <span style="color: #c0c0c0;">180 pts</span>
                </li>
                <li class="leaderboard-item">
                    <span><span class="rank">3.</span> ClickHero</span>
                    <span style="color: #cd7f32;">150 pts</span>
                </li>
            </ul>
        </div>

        <!-- About Section -->
        <div id="about" class="about-section">
            <h2 class="about-title">💻 About Me</h2>
            <p style="text-align: center; font-size: 1.1rem; line-height: 1.8; margin-bottom: 30px;">
                I'm a passionate Full Stack Developer from Bengaluru, India. I specialize in building 
                scalable web applications using the MERN stack and TypeScript. I love creating 
                intuitive user interfaces and solving complex problems with clean, maintainable code.
            </p>
            
            <h3 style="text-align: center; color: #00d9ff; margin-bottom: 20px;">🛠️ Tech Stack</h3>
            <div class="skills-grid">
                <div class="skill-card">
                    <div class="skill-icon">⚛️</div>
                    <div>React</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">📘</div>
                    <div>TypeScript</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">🟢</div>
                    <div>Node.js</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">⚡</div>
                    <div>Express</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">🍃</div>
                    <div>MongoDB</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">🐘</div>
                    <div>PostgreSQL</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">🎨</div>
                    <div>Tailwind CSS</div>
                </div>
                <div class="skill-card">
                    <div class="skill-icon">☁️</div>
                    <div>AWS</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Contact Footer -->
    <footer id="contact">
        <h3 style="color: #00d9ff; margin-bottom: 10px;">Let's Connect!</h3>
        <p>Always open to interesting projects and collaborations</p>
        <div class="social-links">
            <a href="#" class="social-btn" title="GitHub">🔗</a>
            <a href="#" class="social-btn" title="LinkedIn">💼</a>
            <a href="#" class="social-btn" title="Email">📧</a>
            <a href="#" class="social-btn" title="Twitter">🐦</a>
        </div>
        <p style="margin-top: 30px; color: #777;">© 2024 Nashid K | Built with 💙 and ☕</p>
    </footer>

    <!-- Name Input Modal -->
    <div id="nameModal" class="modal">
        <div class="modal-content">
            <h2 style="color: #00d9ff; margin-bottom: 20px;">🎉 Great Score!</h2>
            <p style="margin-bottom: 20px;">Enter your name for the leaderboard:</p>
            <input type="text" id="playerName" placeholder="Your Name" maxlength="20">
            <button class="game-btn" onclick="submitScore()">Submit Score</button>
        </div>
    </div>

    <script>
        // Background Animation
        function createStars() {
            const container = document.getElementById('bgAnimation');
            for (let i = 0; i < 100; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.animationDelay = Math.random() * 3 + 's';
                container.appendChild(star);
            }
        }
        createStars();

        // Smooth Scroll
        function scrollToSection(id) {
            document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        }

        // Game Logic
        const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;

        let score = 0;
        let timeLeft = 30;
        let gameActive = false;
        let gameInterval;
        let timerInterval;
        let targets = [];

        class Target {
            constructor() {
                this.radius = 20 + Math.random() * 30;
                this.x = this.radius + Math.random() * (canvas.width - this.radius * 2);
                this.y = this.radius + Math.random() * (canvas.height - this.radius * 2);
                this.vx = (Math.random() - 0.5) * 4;
                this.vy = (Math.random() - 0.5) * 4;
                this.color = `hsl(${Math.random() * 360}, 70%, 50%)`;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
                ctx.strokeStyle = '#fff';
                ctx.lineWidth = 3;
                ctx.stroke();
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
                    this.vx *= -1;
                }
                if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
                    this.vy *= -1;
                }
            }
        }

        function startGame() {
            if (gameActive) return;
            
            gameActive = true;
            score = 0;
            timeLeft = 30;
            targets = [];
            
            for (let i = 0; i < 5; i++) {
                targets.push(new Target());
            }

            document.getElementById('score').textContent = score;
            document.getElementById('timer').textContent = timeLeft;

            gameInterval = setInterval(gameLoop, 1000 / 60);
            timerInterval = setInterval(() => {
                timeLeft--;
                document.getElementById('timer').textContent = timeLeft;
                
                if (timeLeft <= 0) {
                    endGame();
                }
            }, 1000);
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            targets.forEach(target => {
                target.update();
                target.draw();
            });
        }

        function endGame() {
            gameActive = false;
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            
            if (score > 0) {
                document.getElementById('nameModal').style.display = 'block';
            }
        }

        function resetGame() {
            gameActive = false;
            clearInterval(gameInterval);
            clearInterval(timerInterval);
            score = 0;
            timeLeft = 30;
            targets = [];
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            document.getElementById('score').textContent = score;
            document.getElementById('timer').textContent = timeLeft;
        }

        canvas.addEventListener('click', (e) => {
            if (!gameActive) return;

            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            for (let i = targets.length - 1; i >= 0; i--) {
                const target = targets[i];
                const dx = x - target.x;
                const dy = y - target.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < target.radius) {
                    score += Math.floor(50 / target.radius * 10);
                    document.getElementById('score').textContent = score;
                    targets.splice(i, 1);
                    targets.push(new Target());
                    break;
                }
            }
        });

        function submitScore() {
            const name = document.getElementById('playerName').value.trim();
            if (!name) {
                alert('Please enter your name!');
                return;
            }

            const leaderboard = document.getElementById('leaderboardList');
            const newEntry = document.createElement('li');
            newEntry.className = 'leaderboard-item';
            newEntry.innerHTML = `
                <span><span class="rank">🆕</span> ${name}</span>
                <span style="color: #00ff9f;">${score} pts</span>
            `;
            leaderboard.insertBefore(newEntry, leaderboard.firstChild);

            document.getElementById('nameModal').style.display = 'none';
            document.getElementById('playerName').value = '';
            
            scrollToSection('leaderboard');
        }

        // Close modal on outside click
        window.onclick = function(event) {
            const modal = document.getElementById('nameModal');
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        }
    </script>
</body>
</html>
