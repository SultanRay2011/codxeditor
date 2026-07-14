window.CODX_STARTER_TEMPLATES = [
  {
    id: "signal-room",
    name: "Signal Room",
    category: "Product launch",
    preview: "signal",
    icon: "fa-satellite-dish",
    accent: "#8eea38",
    accent2: "#16a36d",
    tone: "Electric systems",
    level: "Motion + demo",
    description: "A high-contrast product story with a live system demo, kinetic status text, and an asymmetric bento layout.",
    highlights: ["Interactive demo", "Kinetic hero", "Bento system"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Signal Room product launch concept" />
    <title>Signal Room — Make software feel inevitable</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="noise" aria-hidden="true"></div>
    <header class="nav shell">
      <a class="wordmark" href="#top" aria-label="Signal Room home"><span>SR</span> SIGNAL ROOM</a>
      <nav aria-label="Main navigation">
        <a href="#system">System</a>
        <a href="#proof">Proof</a>
        <a href="#contact">Contact</a>
      </nav>
      <a class="nav-cta" href="#system">ENTER SYSTEM <span>↗</span></a>
    </header>

    <main id="top">
      <section class="hero shell">
        <div class="hero-copy">
          <div class="micro-row"><span class="live-dot"></span> SYSTEM 04 IS ONLINE <b>38.8977° N</b></div>
          <p class="section-number">/001 — PRODUCT INTELLIGENCE</p>
          <h1>Make software feel <em id="rotatingWord">inevitable.</em></h1>
          <p class="hero-lead">Signal Room turns complicated workflows into one calm operating layer—designed for teams moving faster than their tools.</p>
          <div class="hero-actions">
            <button class="primary-action" id="runDemoBtn" type="button">RUN LIVE SEQUENCE <span>→</span></button>
            <a href="#proof">READ THE FIELD NOTES</a>
          </div>
        </div>

        <div class="signal-stage" id="signalStage">
          <div class="orbit orbit-one"></div>
          <div class="orbit orbit-two"></div>
          <div class="signal-core"><span>04</span><small>ACTIVE NODE</small></div>
          <div class="terminal-card">
            <div class="terminal-head"><span>signal-room / live</span><i></i><i></i></div>
            <div class="terminal-body" id="terminalBody" aria-live="polite">
              <p><span>01</span> listening for a sequence...</p>
              <p><span>02</span> all systems nominal</p>
              <p class="terminal-ready"><span>03</span> ready when you are_</p>
            </div>
          </div>
          <div class="stage-label top">LATENCY <strong>12MS</strong></div>
          <div class="stage-label bottom">UPTIME <strong>99.98%</strong></div>
        </div>
      </section>

      <div class="ticker" aria-label="Product capabilities">
        <div>LIVE CONTEXT <span>✦</span> AUTOMATED HANDOFFS <span>✦</span> ZERO-FRICTION OPS <span>✦</span> LIVE CONTEXT <span>✦</span> AUTOMATED HANDOFFS <span>✦</span> ZERO-FRICTION OPS</div>
      </div>

      <section class="system shell" id="system">
        <div class="section-heading">
          <p>/002 — THE SYSTEM</p>
          <h2>One signal.<br />Every decision.</h2>
          <p>Built for operators who need information to arrive already organized, connected, and ready to use.</p>
        </div>
        <div class="bento-grid">
          <article class="bento-card card-wide">
            <span class="card-index">A—01</span>
            <div class="flow-map" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>
            <div><h3>Context that travels</h3><p>Every update keeps its decisions, owners, and next steps attached.</p></div>
          </article>
          <article class="bento-card card-accent">
            <span class="card-index">A—02</span>
            <strong class="big-stat">4.8×</strong>
            <div><h3>Faster response</h3><p>From incoming signal to confident action.</p></div>
          </article>
          <article class="bento-card card-dark">
            <span class="card-index">A—03</span>
            <div class="pulse-ring" aria-hidden="true"><i></i></div>
            <div><h3>Always listening</h3><p>Quiet automation that surfaces only what matters.</p></div>
          </article>
          <article class="bento-card card-list" id="proof">
            <span class="card-index">A—04</span>
            <h3>Built around real work</h3>
            <ul><li><span>01</span> Product operations</li><li><span>02</span> Customer intelligence</li><li><span>03</span> Incident response</li></ul>
          </article>
        </div>
      </section>
    </main>

    <footer id="contact">
      <div class="shell footer-inner">
        <p>THE NEXT SIGNAL IS YOURS.</p>
        <a href="mailto:hello@example.com">hello@signalroom.dev <span>↗</span></a>
        <small>© <span id="year"></span> SIGNAL ROOM / SYSTEM 04</small>
      </div>
    </footer>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root {
  --ink: #080b09;
  --paper: #eef1e9;
  --acid: #bafc4a;
  --green: #16784a;
  --line: rgba(238, 241, 233, 0.18);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  overflow-x: hidden;
  color: var(--paper);
  background: var(--ink);
  font-family: Arial, Helvetica, sans-serif;
}
button, a { font: inherit; }
a { color: inherit; }
.shell { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
.noise { position: fixed; inset: 0; z-index: 20; pointer-events: none; opacity: .055; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.75'/%3E%3C/svg%3E"); }

.nav { height: 84px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; border-bottom: 1px solid var(--line); }
.wordmark { display: inline-flex; align-items: center; gap: 10px; width: max-content; text-decoration: none; font-size: 12px; font-weight: 900; letter-spacing: .12em; }
.wordmark span { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; color: var(--ink); background: var(--acid); letter-spacing: -.04em; }
.nav nav { display: flex; gap: 28px; }
.nav nav a { color: rgba(238,241,233,.66); text-decoration: none; font-size: 11px; text-transform: uppercase; letter-spacing: .12em; }
.nav nav a:hover { color: var(--acid); }
.nav-cta { justify-self: end; display: flex; gap: 17px; text-decoration: none; font-size: 11px; font-weight: 800; letter-spacing: .1em; }

.hero { min-height: 690px; display: grid; grid-template-columns: 1.08fr .92fr; gap: 46px; align-items: center; padding-block: 70px; }
.hero-copy { position: relative; z-index: 2; }
.micro-row { display: flex; align-items: center; gap: 9px; margin-bottom: 76px; color: rgba(238,241,233,.58); font-size: 9px; letter-spacing: .12em; }
.micro-row b { margin-left: auto; font-weight: 500; }
.live-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--acid); box-shadow: 0 0 15px var(--acid); animation: blink 1.5s infinite; }
.section-number { color: var(--acid); font-size: 10px; font-weight: 800; letter-spacing: .14em; }
h1 { max-width: 760px; margin: 18px 0 25px; font-size: clamp(4.3rem, 8.2vw, 8rem); line-height: .82; letter-spacing: -.075em; text-transform: uppercase; }
h1 em { display: block; color: var(--acid); font-family: Georgia, serif; font-weight: 400; text-transform: none; }
.hero-lead { max-width: 590px; color: rgba(238,241,233,.66); font-size: 16px; line-height: 1.65; }
.hero-actions { display: flex; align-items: center; gap: 25px; margin-top: 34px; }
.hero-actions > a { font-size: 9px; font-weight: 800; letter-spacing: .11em; text-underline-offset: 5px; }
.primary-action { display: flex; align-items: center; gap: 30px; padding: 16px 18px; border: 0; border-radius: 2px; color: var(--ink); background: var(--acid); font-size: 10px; font-weight: 900; letter-spacing: .08em; cursor: pointer; }
.primary-action:hover { background: #d2ff81; }

.signal-stage { --mx: 50%; --my: 50%; position: relative; min-height: 510px; border: 1px solid var(--line); overflow: hidden; background: radial-gradient(circle at var(--mx) var(--my), rgba(186,252,74,.16), transparent 25%), linear-gradient(rgba(186,252,74,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(186,252,74,.045) 1px, transparent 1px); background-size: auto, 32px 32px, 32px 32px; transition: background .12s linear; }
.signal-stage::before { content: ""; position: absolute; inset: 11px; border: 1px solid rgba(186,252,74,.1); }
.orbit { position: absolute; left: 50%; top: 42%; translate: -50% -50%; border: 1px solid rgba(186,252,74,.25); border-radius: 50%; animation: orbit 12s linear infinite; }
.orbit::after { content: ""; position: absolute; width: 9px; height: 9px; left: 18%; top: 7%; border-radius: 50%; background: var(--acid); box-shadow: 0 0 18px var(--acid); }
.orbit-one { width: 290px; height: 290px; }
.orbit-two { width: 410px; height: 410px; animation-direction: reverse; animation-duration: 17s; }
.signal-core { position: absolute; left: 50%; top: 42%; translate: -50% -50%; display: grid; place-items: center; width: 132px; height: 132px; border-radius: 50%; color: var(--ink); background: var(--acid); box-shadow: 0 0 80px rgba(186,252,74,.26); }
.signal-core span { font-size: 52px; font-weight: 900; letter-spacing: -.08em; line-height: .8; }
.signal-core small { font-size: 7px; font-weight: 900; letter-spacing: .13em; }
.terminal-card { position: absolute; left: 20px; right: 20px; bottom: 20px; border: 1px solid rgba(186,252,74,.24); background: rgba(4,9,5,.86); backdrop-filter: blur(12px); }
.terminal-head { height: 30px; display: flex; align-items: center; gap: 6px; padding: 0 10px; border-bottom: 1px solid rgba(186,252,74,.15); color: rgba(238,241,233,.48); font: 8px monospace; }
.terminal-head span { margin-right: auto; }
.terminal-head i { width: 5px; height: 5px; border-radius: 50%; background: rgba(238,241,233,.32); }
.terminal-body { padding: 10px 13px; font: 10px/1.35 monospace; }
.terminal-body p { margin: 4px 0; color: rgba(238,241,233,.55); }
.terminal-body span { color: rgba(186,252,74,.4); margin-right: 10px; }
.terminal-body .terminal-ready { color: var(--acid); }
.terminal-body .new-line { animation: lineIn .35s ease both; }
.stage-label { position: absolute; top: 18px; left: 18px; color: rgba(238,241,233,.4); font-size: 7px; letter-spacing: .12em; }
.stage-label strong { display: block; margin-top: 3px; color: var(--paper); font-size: 11px; }
.stage-label.bottom { left: auto; right: 18px; }

.ticker { overflow: hidden; border-block: 1px solid var(--line); color: var(--ink); background: var(--acid); }
.ticker div { width: max-content; padding: 14px 0; font-size: 10px; font-weight: 900; letter-spacing: .14em; animation: marquee 22s linear infinite; }
.ticker span { margin: 0 24px; }
.system { padding-block: 120px; }
.section-heading { display: grid; grid-template-columns: .7fr 1.35fr 1fr; gap: 25px; align-items: end; margin-bottom: 48px; }
.section-heading > p:first-child { align-self: start; color: var(--acid); font-size: 9px; font-weight: 800; letter-spacing: .13em; }
.section-heading h2 { margin: 0; font-size: clamp(3rem, 6vw, 5.8rem); line-height: .9; letter-spacing: -.06em; text-transform: uppercase; }
.section-heading > p:last-child { color: rgba(238,241,233,.58); line-height: 1.7; }
.bento-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: 12px; }
.bento-card { min-height: 300px; display: flex; flex-direction: column; justify-content: space-between; padding: 25px; border: 1px solid var(--line); background: #0c100d; }
.bento-card h3 { margin: 0 0 8px; font-size: 22px; }
.bento-card p { max-width: 39ch; margin: 0; color: rgba(238,241,233,.56); font-size: 12px; line-height: 1.55; }
.card-index { color: rgba(238,241,233,.35); font-size: 8px; letter-spacing: .13em; }
.card-wide { grid-column: span 7; }
.card-accent { grid-column: span 5; color: var(--ink); background: var(--acid); }
.card-accent p, .card-accent .card-index { color: rgba(8,11,9,.62); }
.big-stat { font-size: clamp(5rem, 9vw, 8rem); letter-spacing: -.08em; }
.card-dark { grid-column: span 4; }
.card-list { grid-column: span 8; }
.flow-map { position: relative; height: 105px; display: flex; justify-content: space-between; align-items: center; }
.flow-map::before { content: ""; position: absolute; left: 9%; right: 9%; top: 50%; height: 1px; background: rgba(186,252,74,.4); }
.flow-map i { z-index: 1; width: 35px; height: 35px; border: 1px solid rgba(186,252,74,.48); border-radius: 50%; background: #0c100d; }
.flow-map i:nth-child(3) { background: var(--acid); box-shadow: 0 0 30px rgba(186,252,74,.28); }
.pulse-ring { display: grid; place-items: center; width: 125px; height: 125px; margin: 8px auto; border: 1px solid rgba(186,252,74,.2); border-radius: 50%; box-shadow: 0 0 0 24px rgba(186,252,74,.035), 0 0 0 48px rgba(186,252,74,.02); }
.pulse-ring i { width: 26px; height: 26px; border-radius: 50%; background: var(--acid); animation: blink 1.5s infinite; }
.card-list ul { margin: 30px 0 0; padding: 0; list-style: none; }
.card-list li { display: flex; gap: 18px; padding: 17px 0; border-top: 1px solid var(--line); font-size: 14px; }
.card-list li span { color: var(--acid); font: 9px monospace; }
footer { border-top: 1px solid var(--line); background: var(--acid); color: var(--ink); }
.footer-inner { min-height: 360px; display: grid; align-content: center; }
.footer-inner p { font-size: 10px; font-weight: 900; letter-spacing: .15em; }
.footer-inner > a { display: flex; justify-content: space-between; padding: 24px 0; border-bottom: 2px solid var(--ink); text-decoration: none; font-size: clamp(2rem, 6vw, 5.5rem); font-weight: 900; letter-spacing: -.06em; }
.footer-inner small { margin-top: 40px; font-size: 8px; letter-spacing: .12em; }
@keyframes blink { 50% { opacity: .35; transform: scale(.82); } }
@keyframes orbit { to { transform: rotate(360deg); } }
@keyframes marquee { to { transform: translateX(-50%); } }
@keyframes lineIn { from { opacity: 0; transform: translateY(6px); } }
@media (max-width: 850px) {
  .nav { grid-template-columns: 1fr auto; } .nav nav { display: none; }
  .hero { grid-template-columns: 1fr; padding-top: 48px; }
  .micro-row { margin-bottom: 52px; }
  .signal-stage { min-height: 480px; }
  .section-heading { grid-template-columns: 1fr; }
  .card-wide, .card-accent, .card-dark, .card-list { grid-column: span 12; }
}
@media (max-width: 560px) {
  .shell { width: min(100% - 26px, 1180px); }
  .nav-cta { font-size: 0; } .nav-cta span { font-size: 18px; }
  h1 { font-size: clamp(3.4rem, 19vw, 5.7rem); }
  .hero-actions { align-items: flex-start; flex-direction: column; }
  .signal-stage { min-height: 420px; }
  .orbit-one { width: 230px; height: 230px; } .orbit-two { width: 330px; height: 330px; }
  .signal-core { width: 105px; height: 105px; }
}`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const rotatingWord = document.getElementById('rotatingWord');
const words = ['inevitable.', 'electric.', 'effortless.'];
let wordIndex = 0;

setInterval(function () {
  wordIndex = (wordIndex + 1) % words.length;
  rotatingWord.animate(
    [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
    { duration: 460, easing: 'cubic-bezier(.2,.8,.2,1)' }
  );
  rotatingWord.textContent = words[wordIndex];
}, 2800);

const terminalBody = document.getElementById('terminalBody');
const runDemoBtn = document.getElementById('runDemoBtn');
let sequence = 3;

runDemoBtn.addEventListener('click', function () {
  runDemoBtn.disabled = true;
  runDemoBtn.firstChild.textContent = 'SEQUENCE RUNNING ';
  const messages = ['context graph connected', '12 workflows synchronized', 'signal resolved in 0.8 seconds'];
  messages.forEach(function (message, index) {
    setTimeout(function () {
      sequence += 1;
      const line = document.createElement('p');
      line.className = 'new-line';
      const number = document.createElement('span');
      number.textContent = String(sequence).padStart(2, '0');
      line.append(number, document.createTextNode(message));
      terminalBody.appendChild(line);
      if (index === messages.length - 1) {
        runDemoBtn.disabled = false;
        runDemoBtn.firstChild.textContent = 'RUN AGAIN ';
      }
    }, 520 * (index + 1));
  });
});

const signalStage = document.getElementById('signalStage');
signalStage.addEventListener('pointermove', function (event) {
  const bounds = signalStage.getBoundingClientRect();
  signalStage.style.setProperty('--mx', event.clientX - bounds.left + 'px');
  signalStage.style.setProperty('--my', event.clientY - bounds.top + 'px');
});

document.getElementById('year').textContent = new Date().getFullYear();`,
      },
    ],
  },
  {
    id: "pulseboard",
    name: "Pulseboard",
    category: "Analytics workspace",
    preview: "dashboard",
    icon: "fa-chart-line",
    accent: "#4ee7cb",
    accent2: "#7c6cff",
    tone: "Operational clarity",
    level: "Live data ranges",
    description: "A polished analytics workspace with adaptive KPIs, an animated SVG trend, channel bars, activity, and responsive navigation.",
    highlights: ["Animated chart", "Range controls", "Responsive shell"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pulseboard — Growth intelligence</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="app-shell">
      <aside class="sidebar" id="sidebar">
        <a class="logo" href="#"><span>P</span>PULSE</a>
        <nav aria-label="Dashboard navigation">
          <a class="active" href="#"><i>⌁</i><span>Overview</span></a>
          <a href="#"><i>◫</i><span>Customers</span></a>
          <a href="#"><i>↗</i><span>Acquisition</span></a>
          <a href="#"><i>◎</i><span>Campaigns</span></a>
        </nav>
        <div class="side-foot"><span class="avatar">AM</span><div><strong>Alex Morgan</strong><small>Growth workspace</small></div></div>
      </aside>

      <main>
        <header class="topbar">
          <button class="menu-button" id="menuButton" type="button" aria-label="Toggle navigation">☰</button>
          <div><p>MONDAY, 14 JULY</p><h1>Good morning, Alex.</h1></div>
          <div class="top-actions"><button type="button" title="Notifications">◌<i></i></button><button class="new-report" type="button">NEW REPORT <span>＋</span></button></div>
        </header>

        <section class="metrics" aria-label="Key metrics">
          <article><div><span>NET REVENUE</span><b class="trend up">↗ 14.8%</b></div><strong id="revenueValue">$184,240</strong><small>vs. $160,480 previous period</small></article>
          <article><div><span>ACTIVE USERS</span><b class="trend up">↗ 8.2%</b></div><strong id="usersValue">28,492</strong><small>2,148 joined this period</small></article>
          <article><div><span>CONVERSION</span><b class="trend down">↘ 1.4%</b></div><strong id="conversionValue">6.84%</strong><small>Goal for this period: 7.5%</small></article>
          <article class="score-card"><div><span>GROWTH SCORE</span><b>LIVE</b></div><strong id="scoreValue">82</strong><div class="score-ring" style="--score:82"><i></i></div><small>Excellent momentum</small></article>
        </section>

        <section class="workspace-grid">
          <article class="panel chart-panel">
            <header class="panel-head"><div><span>REVENUE VELOCITY</span><h2>$184.2k <small>net</small></h2></div><div class="range-switch" id="rangeSwitch"><button data-range="7">7D</button><button class="active" data-range="30">30D</button><button data-range="90">90D</button></div></header>
            <div class="chart-wrap">
              <div class="axis"><span>$240k</span><span>$160k</span><span>$80k</span><span>$0</span></div>
              <svg viewBox="0 0 800 260" preserveAspectRatio="none" role="img" aria-label="Revenue trend chart">
                <defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4ee7cb" stop-opacity=".3"/><stop offset="1" stop-color="#4ee7cb" stop-opacity="0"/></linearGradient></defs>
                <g class="grid-lines"><line x1="0" y1="10" x2="800" y2="10"/><line x1="0" y1="90" x2="800" y2="90"/><line x1="0" y1="170" x2="800" y2="170"/><line x1="0" y1="250" x2="800" y2="250"/></g>
                <path id="areaPath" class="area" d="M0 230 C100 210 120 170 220 184 S350 92 430 132 S560 95 620 70 S720 85 800 28 L800 260 L0 260 Z"/>
                <path id="linePath" class="line" d="M0 230 C100 210 120 170 220 184 S350 92 430 132 S560 95 620 70 S720 85 800 28"/>
                <circle id="endPoint" cx="800" cy="28" r="6"/>
              </svg>
              <div class="chart-labels"><span>JUN 15</span><span>JUN 22</span><span>JUN 29</span><span>JUL 06</span><span>JUL 14</span></div>
            </div>
          </article>

          <article class="panel channels-panel">
            <header class="panel-head"><div><span>ACQUISITION MIX</span><h2>Channel share</h2></div><button type="button">•••</button></header>
            <div class="donut" aria-label="62 percent organic"><div><strong>62%</strong><span>ORGANIC</span></div></div>
            <ul class="channels"><li><i class="mint"></i><span>Organic search</span><strong>62%</strong></li><li><i class="violet"></i><span>Paid social</span><strong>21%</strong></li><li><i class="blue"></i><span>Direct</span><strong>11%</strong></li><li><i class="gray"></i><span>Referral</span><strong>6%</strong></li></ul>
          </article>

          <article class="panel activity-panel">
            <header class="panel-head"><div><span>LIVE ACTIVITY</span><h2>What changed</h2></div><span class="live"><i></i> LIVE</span></header>
            <div class="activity"><div><span class="activity-icon mint">↗</span><p><strong>Campaign converted 42 users</strong><small>Summer activation · 3 minutes ago</small></p><b>+$4.8k</b></div><div><span class="activity-icon violet">◎</span><p><strong>Milestone reached</strong><small>25,000 active users · 1 hour ago</small></p><b>100%</b></div><div><span class="activity-icon blue">＋</span><p><strong>New enterprise account</strong><small>Northstar Labs · 2 hours ago</small></p><b>PRO</b></div></div>
          </article>
        </section>
      </main>
    </div>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --bg: #07131c; --surface: #0c1c27; --surface-2: #102531; --line: rgba(208,232,238,.11); --text: #e8f3f3; --muted: #78939c; --mint: #4ee7cb; --violet: #7c6cff; --blue: #4aa7ff; --danger: #ff7485; }
* { box-sizing: border-box; }
body { margin: 0; color: var(--text); background: var(--bg); font-family: Arial, Helvetica, sans-serif; }
button, a { font: inherit; }
.app-shell { min-height: 100vh; display: grid; grid-template-columns: 220px 1fr; }
.sidebar { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; padding: 24px 16px 17px; border-right: 1px solid var(--line); background: #081720; }
.logo { display: flex; align-items: center; gap: 10px; padding: 0 8px 35px; color: var(--text); text-decoration: none; font-size: 13px; font-weight: 900; letter-spacing: .13em; }.logo span { display: grid; place-items: center; width: 31px; height: 31px; border-radius: 9px; color: var(--bg); background: var(--mint); font-size: 17px; letter-spacing: -.08em; transform: rotate(-5deg); }
.sidebar nav { display: grid; gap: 6px; }.sidebar nav a { display: flex; align-items: center; gap: 12px; padding: 11px 12px; border-radius: 9px; color: var(--muted); text-decoration: none; font-size: 11px; font-weight: 700; }.sidebar nav a i { width: 18px; color: inherit; font-size: 16px; font-style: normal; text-align: center; }.sidebar nav a:hover, .sidebar nav a.active { color: var(--text); background: rgba(78,231,203,.1); }.sidebar nav a.active i { color: var(--mint); }
.side-foot { display: flex; align-items: center; gap: 10px; margin-top: auto; padding: 13px 8px 0; border-top: 1px solid var(--line); }.avatar { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%; color: #20175d; background: #afa4ff; font-size: 9px; font-weight: 900; }.side-foot div { display: grid; gap: 3px; }.side-foot strong { font-size: 10px; }.side-foot small { color: var(--muted); font-size: 8px; }
main { min-width: 0; padding: 26px clamp(18px, 3vw, 38px) 50px; }
.topbar { display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 30px; }.topbar p { margin: 0 0 6px; color: var(--mint); font-size: 8px; font-weight: 900; letter-spacing: .13em; }.topbar h1 { margin: 0; font-size: clamp(24px, 3.2vw, 38px); letter-spacing: -.045em; }.top-actions { display: flex; gap: 8px; }.top-actions button, .menu-button { position: relative; min-height: 39px; padding: 0 14px; border: 1px solid var(--line); border-radius: 9px; color: var(--text); background: var(--surface); cursor: pointer; }.top-actions button i { position: absolute; width: 6px; height: 6px; right: 8px; top: 8px; border-radius: 50%; background: var(--danger); }.top-actions .new-report { display: flex; align-items: center; gap: 20px; border-color: var(--mint); color: var(--bg); background: var(--mint); font-size: 9px; font-weight: 900; letter-spacing: .08em; }.menu-button { display: none; }
.metrics { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10px; margin-bottom: 10px; }.metrics article { position: relative; min-height: 145px; display: flex; flex-direction: column; padding: 17px; overflow: hidden; border: 1px solid var(--line); border-radius: 12px; background: linear-gradient(145deg, rgba(255,255,255,.025), transparent), var(--surface); }.metrics article > div:first-child { display: flex; justify-content: space-between; gap: 10px; }.metrics article span { color: var(--muted); font-size: 8px; font-weight: 800; letter-spacing: .1em; }.trend { padding: 4px 6px; border-radius: 99px; font-size: 8px; }.trend.up { color: var(--mint); background: rgba(78,231,203,.1); }.trend.down { color: var(--danger); background: rgba(255,116,133,.1); }.metrics article > strong { margin: auto 0 4px; font-size: clamp(26px, 3vw, 40px); letter-spacing: -.06em; }.metrics article > small { color: var(--muted); font-size: 8px; }.score-card { background: linear-gradient(145deg, rgba(124,108,255,.18), transparent), var(--surface) !important; }.score-card > strong { position: relative; z-index: 2; }.score-card > div:first-child b { color: var(--violet); font-size: 8px; }.score-ring { --score: 82; position: absolute; right: -18px; bottom: -26px; width: 112px; height: 112px; border-radius: 50%; background: conic-gradient(var(--violet) calc(var(--score) * 1%), rgba(124,108,255,.1) 0); }.score-ring::after { content: ""; position: absolute; inset: 9px; border-radius: 50%; background: var(--surface); }
.workspace-grid { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(270px, .7fr); gap: 10px; }.panel { padding: 18px; border: 1px solid var(--line); border-radius: 12px; background: var(--surface); }.chart-panel { min-width: 0; }.panel-head { display: flex; align-items: flex-start; justify-content: space-between; gap: 15px; }.panel-head span { color: var(--muted); font-size: 8px; font-weight: 900; letter-spacing: .11em; }.panel-head h2 { margin: 8px 0 0; font-size: 23px; letter-spacing: -.04em; }.panel-head h2 small { color: var(--muted); font-size: 11px; font-weight: 400; }.panel-head > button { border: 0; color: var(--muted); background: transparent; cursor: pointer; }
.range-switch { display: flex; padding: 3px; border: 1px solid var(--line); border-radius: 7px; }.range-switch button { padding: 6px 9px; border: 0; border-radius: 5px; color: var(--muted); background: transparent; font-size: 8px; cursor: pointer; }.range-switch button.active { color: var(--bg); background: var(--mint); }
.chart-wrap { position: relative; height: 290px; margin-top: 22px; padding-left: 40px; }.axis { position: absolute; inset: 4px auto 25px 0; display: flex; flex-direction: column; justify-content: space-between; color: var(--muted); font-size: 7px; }.chart-wrap svg { width: 100%; height: 250px; overflow: visible; }.grid-lines line { stroke: rgba(208,232,238,.08); stroke-width: 1; }.area { fill: url(#areaFill); transition: d .55s ease; }.line { fill: none; stroke: var(--mint); stroke-width: 3; filter: drop-shadow(0 0 7px rgba(78,231,203,.3)); transition: d .55s ease; }.chart-wrap circle { fill: var(--bg); stroke: var(--mint); stroke-width: 4; transition: cy .55s ease; }.chart-labels { display: flex; justify-content: space-between; color: var(--muted); font-size: 7px; }
.channels-panel { min-height: 390px; }.donut { width: 150px; height: 150px; display: grid; place-items: center; margin: 24px auto 20px; border-radius: 50%; background: conic-gradient(var(--mint) 0 62%, var(--violet) 62% 83%, var(--blue) 83% 94%, #31414a 94%); }.donut::before { content: ""; grid-area: 1/1; width: 105px; height: 105px; border-radius: 50%; background: var(--surface); }.donut div { z-index: 1; grid-area: 1/1; display: grid; text-align: center; }.donut strong { font-size: 28px; letter-spacing: -.05em; }.donut span { color: var(--muted); font-size: 7px; letter-spacing: .1em; }.channels { display: grid; gap: 10px; margin: 0; padding: 0; list-style: none; }.channels li { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 8px; color: var(--muted); font-size: 9px; }.channels li i { width: 7px; height: 7px; border-radius: 50%; }.channels li strong { color: var(--text); }.mint { background: var(--mint); }.violet { background: var(--violet); }.blue { background: var(--blue); }.gray { background: #31414a; }
.activity-panel { grid-column: 1 / -1; }.live { display: flex; align-items: center; gap: 5px; color: var(--mint) !important; }.live i { width: 6px; height: 6px; border-radius: 50%; background: var(--mint); box-shadow: 0 0 9px var(--mint); }.activity { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 17px; }.activity > div { display: grid; grid-template-columns: auto 1fr auto; align-items: center; gap: 10px; padding: 12px; border: 1px solid var(--line); border-radius: 9px; background: rgba(255,255,255,.015); }.activity-icon { display: grid; place-items: center; width: 31px; height: 31px; border-radius: 8px; color: var(--bg); }.activity p { display: grid; gap: 4px; margin: 0; }.activity p strong { font-size: 9px; }.activity p small { color: var(--muted); font-size: 7px; }.activity > div > b { color: var(--mint); font-size: 9px; }
@media (max-width: 1050px) { .metrics { grid-template-columns: 1fr 1fr; }.activity { grid-template-columns: 1fr; } }
@media (max-width: 760px) { .app-shell { grid-template-columns: 1fr; }.sidebar { position: fixed; z-index: 10; width: 220px; transform: translateX(-105%); transition: transform .25s; box-shadow: 20px 0 50px rgba(0,0,0,.35); }.sidebar.open { transform: translateX(0); }.menu-button { display: block; }.topbar { justify-content: flex-start; }.top-actions { margin-left: auto; }.workspace-grid { grid-template-columns: 1fr; }.channels-panel { min-height: auto; }.activity-panel { grid-column: auto; } }
@media (max-width: 520px) { main { padding-inline: 12px; }.top-actions > button:first-child { display: none; }.new-report { font-size: 0 !important; gap: 0 !important; }.new-report span { font-size: 16px; }.metrics { grid-template-columns: 1fr; }.chart-wrap { height: 235px; }.chart-wrap svg { height: 195px; } }
`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const ranges = {
  7: { revenue: '$48,920', users: '8,140', conversion: '7.12%', score: '76', line: 'M0 218 C110 240 150 145 250 174 S390 88 480 120 S640 75 800 54', area: 'M0 218 C110 240 150 145 250 174 S390 88 480 120 S640 75 800 54 L800 260 L0 260 Z', end: 54 },
  30: { revenue: '$184,240', users: '28,492', conversion: '6.84%', score: '82', line: 'M0 230 C100 210 120 170 220 184 S350 92 430 132 S560 95 620 70 S720 85 800 28', area: 'M0 230 C100 210 120 170 220 184 S350 92 430 132 S560 95 620 70 S720 85 800 28 L800 260 L0 260 Z', end: 28 },
  90: { revenue: '$512,880', users: '72,904', conversion: '7.36%', score: '91', line: 'M0 238 C90 230 155 205 230 190 S340 162 425 142 S540 118 620 92 S720 58 800 42', area: 'M0 238 C90 230 155 205 230 190 S340 162 425 142 S540 118 620 92 S720 58 800 42 L800 260 L0 260 Z', end: 42 }
};

document.querySelectorAll('[data-range]').forEach(function (button) {
  button.addEventListener('click', function () {
    const data = ranges[button.dataset.range];
    document.querySelectorAll('[data-range]').forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active');
    document.getElementById('revenueValue').textContent = data.revenue;
    document.getElementById('usersValue').textContent = data.users;
    document.getElementById('conversionValue').textContent = data.conversion;
    document.getElementById('scoreValue').textContent = data.score;
    document.querySelector('.score-ring').style.setProperty('--score', data.score);
    document.getElementById('linePath').setAttribute('d', data.line);
    document.getElementById('areaPath').setAttribute('d', data.area);
    document.getElementById('endPoint').setAttribute('cy', data.end);
  });
});

document.getElementById('menuButton').addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('open');
});`,
      },
    ],
  },
  {
    id: "studio-ledger",
    name: "Studio Ledger",
    category: "Creative portfolio",
    preview: "ledger",
    icon: "fa-book-open",
    accent: "#d94b2b",
    accent2: "#8d281c",
    tone: "Editorial brutalism",
    level: "Filterable work",
    description: "A magazine-inspired portfolio with strong typography, numbered case studies, and a working discipline filter.",
    highlights: ["Project filters", "Editorial grid", "Case-study cards"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Studio Ledger — Selected work</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="masthead">
      <a href="#top" class="studio-name">STUDIO<br />LEDGER</a>
      <p>Independent practice for identities,<br />interfaces, and useful objects.</p>
      <nav><a href="#index">Index</a><a href="#about">About</a><a href="mailto:studio@example.com">Enquire ↗</a></nav>
    </header>

    <main id="top">
      <section class="cover">
        <div class="cover-meta"><span>VOL. 06</span><span>2026</span><span>LAGOS / WORLDWIDE</span></div>
        <h1>Work with<br /><em>weight.</em></h1>
        <div class="cover-note"><span class="asterisk">✳</span><p>We make identities and digital systems for people building a more interesting world.</p></div>
        <div class="cover-art" aria-hidden="true"><i></i><i></i><b>06</b></div>
      </section>

      <section class="project-index" id="index">
        <header class="index-head">
          <div><p>SELECTED INDEX</p><h2>Six recent engagements.</h2></div>
          <div class="filters" aria-label="Filter projects">
            <button class="active" type="button" data-filter="all">All</button>
            <button type="button" data-filter="identity">Identity</button>
            <button type="button" data-filter="digital">Digital</button>
            <button type="button" data-filter="objects">Objects</button>
          </div>
        </header>

        <div class="projects">
          <article class="project" data-type="identity">
            <div class="project-number">01</div><div class="project-art art-cobalt"><span>FORM<br />FOLLOWS<br />ENERGY</span></div>
            <div class="project-copy"><span>IDENTITY / CULTURE</span><h3>After Hours Radio</h3><p>A flexible broadcast identity tuned for discovery.</p></div><a href="#">VIEW CASE ↗</a>
          </article>
          <article class="project" data-type="digital">
            <div class="project-number">02</div><div class="project-art art-grid"><i></i><i></i><i></i><i></i><b>N—48</b></div>
            <div class="project-copy"><span>DIGITAL / PRODUCT</span><h3>Northline Archive</h3><p>A living research library for a restless studio.</p></div><a href="#">VIEW CASE ↗</a>
          </article>
          <article class="project" data-type="objects">
            <div class="project-number">03</div><div class="project-art art-orbit"><i></i><b>O</b></div>
            <div class="project-copy"><span>OBJECTS / DIRECTION</span><h3>Onda Editions</h3><p>Everyday objects with unusual proportions.</p></div><a href="#">VIEW CASE ↗</a>
          </article>
          <article class="project" data-type="identity">
            <div class="project-number">04</div><div class="project-art art-red"><span>SLOW<br />IS A<br />POWER</span></div>
            <div class="project-copy"><span>IDENTITY / HOSPITALITY</span><h3>Common Ground</h3><p>A neighborhood kitchen built around long tables.</p></div><a href="#">VIEW CASE ↗</a>
          </article>
          <article class="project" data-type="digital">
            <div class="project-number">05</div><div class="project-art art-type"><span>22:04</span><b>NOW / NEXT</b></div>
            <div class="project-copy"><span>DIGITAL / EDITORIAL</span><h3>Elsewhere Journal</h3><p>Stories, signals, and field notes from the edge.</p></div><a href="#">VIEW CASE ↗</a>
          </article>
          <article class="project" data-type="objects">
            <div class="project-number">06</div><div class="project-art art-stripe"><i></i><i></i><i></i><i></i></div>
            <div class="project-copy"><span>OBJECTS / PACKAGING</span><h3>Mineral Works</h3><p>A tactile packaging family inspired by strata.</p></div><a href="#">VIEW CASE ↗</a>
          </article>
        </div>
      </section>

      <section class="about" id="about">
        <p>ABOUT THE PRACTICE</p>
        <h2>Small team.<br />Wide lens.<br /><em>Exact outcomes.</em></h2>
        <div><p>We partner with founders and cultural teams from the first sketch through launch. Strategy, language, identity, and interface live at the same table.</p><a href="mailto:studio@example.com">START A CONVERSATION ↗</a></div>
      </section>
    </main>

    <footer><span>STUDIO LEDGER</span><span>© <b id="year"></b></span><a href="#top">BACK TO TOP ↑</a></footer>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --paper: #e9e3d4; --ink: #171713; --red: #d94b2b; --blue: #183dcc; --rule: rgba(23,23,19,.35); }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--ink); background: var(--paper); font-family: Arial, Helvetica, sans-serif; }
a { color: inherit; }
button { font: inherit; }
.masthead { min-height: 94px; display: grid; grid-template-columns: 1fr 1fr 1fr; align-items: center; gap: 20px; padding: 16px 24px; border-bottom: 1px solid var(--ink); }
.studio-name { width: max-content; text-decoration: none; font-size: 16px; font-weight: 900; line-height: .82; letter-spacing: -.06em; }
.masthead p { margin: 0; font: 11px/1.35 Georgia, serif; }
.masthead nav { justify-self: end; display: flex; gap: 22px; }
.masthead nav a { font-size: 10px; font-weight: 800; text-decoration: none; text-transform: uppercase; }
.cover { position: relative; min-height: 720px; display: grid; grid-template-columns: 1.35fr .65fr; align-items: end; padding: 24px; overflow: hidden; border-bottom: 1px solid var(--ink); }
.cover-meta { position: absolute; top: 25px; left: 24px; right: 24px; display: flex; justify-content: space-between; font-size: 9px; font-weight: 800; letter-spacing: .11em; }
.cover h1 { position: relative; z-index: 2; margin: 0; font-size: clamp(5.7rem, 14.2vw, 13.6rem); line-height: .68; letter-spacing: -.085em; text-transform: uppercase; }
.cover h1 em { color: var(--red); font-family: Georgia, serif; font-weight: 400; text-transform: lowercase; }
.cover-note { position: relative; z-index: 2; align-self: center; display: grid; grid-template-columns: auto 1fr; gap: 18px; max-width: 340px; margin-left: auto; }
.cover-note p { margin: 0; font: 19px/1.35 Georgia, serif; }
.asterisk { color: var(--red); font-size: 36px; }
.cover-art { position: absolute; right: 4%; top: 14%; width: min(36vw, 470px); aspect-ratio: 1; border: 1px solid var(--ink); border-radius: 50%; }
.cover-art::before, .cover-art::after { content: ""; position: absolute; border-radius: inherit; border: 1px solid var(--ink); }
.cover-art::before { inset: 11%; } .cover-art::after { inset: 27%; background: var(--red); }
.cover-art i { position: absolute; z-index: 2; width: 16px; height: 16px; border-radius: 50%; background: var(--ink); }
.cover-art i:first-child { left: 9%; top: 28%; } .cover-art i:nth-child(2) { right: 13%; bottom: 20%; }
.cover-art b { position: absolute; z-index: 3; inset: 0; display: grid; place-items: center; color: var(--paper); font-size: 72px; letter-spacing: -.08em; }
.project-index { padding: 90px 24px 120px; }
.index-head { display: grid; grid-template-columns: 1fr 1fr; gap: 25px; align-items: end; padding-bottom: 32px; border-bottom: 2px solid var(--ink); }
.index-head p { margin: 0 0 12px; font-size: 9px; font-weight: 900; letter-spacing: .12em; }
.index-head h2 { margin: 0; font: 42px/1 Georgia, serif; }
.filters { justify-self: end; display: flex; flex-wrap: wrap; gap: 7px; }
.filters button { padding: 8px 12px; border: 1px solid var(--ink); border-radius: 99px; color: var(--ink); background: transparent; font-size: 9px; font-weight: 800; text-transform: uppercase; cursor: pointer; }
.filters button.active, .filters button:hover { color: var(--paper); background: var(--ink); }
.project { display: grid; grid-template-columns: 60px minmax(250px, .85fr) 1fr auto; gap: 22px; align-items: center; padding: 22px 0; border-bottom: 1px solid var(--rule); transition: opacity .25s, transform .25s; }
.project.is-hidden { display: none; }
.project-number { align-self: start; padding-top: 3px; color: var(--red); font: 18px Georgia, serif; }
.project-art { position: relative; min-height: 210px; overflow: hidden; background: #d8d0bf; }
.project-copy > span { font-size: 8px; font-weight: 900; letter-spacing: .13em; }
.project-copy h3 { margin: 14px 0 10px; font-size: clamp(28px, 4vw, 55px); line-height: .9; letter-spacing: -.055em; }
.project-copy p { max-width: 40ch; margin: 0; font: 15px/1.45 Georgia, serif; }
.project > a { align-self: end; font-size: 9px; font-weight: 900; text-underline-offset: 4px; }
.art-cobalt { display: grid; place-items: center; color: white; background: var(--blue); }
.art-cobalt span { font-size: clamp(26px, 4vw, 56px); font-weight: 900; line-height: .78; letter-spacing: -.07em; transform: rotate(-7deg); }
.art-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--ink); }
.art-grid i { background: var(--paper); } .art-grid i:nth-child(2), .art-grid i:nth-child(3) { background: var(--red); }
.art-grid b { position: absolute; inset: 0; display: grid; place-items: center; color: white; font-size: 42px; mix-blend-mode: difference; }
.art-orbit { display: grid; place-items: center; background: #efbc35; }
.art-orbit i { width: 150px; height: 150px; border: 30px solid var(--ink); border-radius: 50%; }
.art-orbit b { position: absolute; color: var(--red); font-size: 80px; }
.art-red { display: grid; place-items: center; color: var(--paper); background: var(--red); }
.art-red span { font: italic 42px/.82 Georgia, serif; text-align: center; }
.art-type { display: grid; align-content: space-between; padding: 17px; color: var(--paper); background: var(--ink); }
.art-type span { font-size: 58px; font-weight: 900; letter-spacing: -.08em; }.art-type b { color: var(--red); letter-spacing: .14em; }
.art-stripe { display: flex; background: #d5c8ae; }
.art-stripe i { flex: 1; transform: skewX(-14deg); border-right: 2px solid var(--paper); background: var(--blue); }.art-stripe i:nth-child(even) { background: var(--red); }
.about { display: grid; grid-template-columns: .45fr 1.2fr .75fr; gap: 30px; padding: 100px 24px; color: var(--paper); background: var(--ink); }
.about > p { color: var(--red); font-size: 9px; font-weight: 900; letter-spacing: .13em; }
.about h2 { margin: 0; font-size: clamp(3.4rem, 7vw, 7rem); line-height: .82; letter-spacing: -.06em; text-transform: uppercase; }
.about h2 em { color: var(--red); font-family: Georgia, serif; font-weight: 400; text-transform: none; }
.about > div { align-self: end; }
.about > div p { color: rgba(233,227,212,.68); font: 17px/1.55 Georgia, serif; }
.about > div a { display: inline-block; margin-top: 22px; font-size: 9px; font-weight: 900; letter-spacing: .1em; }
footer { display: flex; justify-content: space-between; gap: 20px; padding: 22px 24px; border-top: 1px solid var(--paper); color: var(--paper); background: var(--ink); font-size: 9px; letter-spacing: .1em; }
footer a { text-decoration: none; }
@media (max-width: 850px) {
  .cover { min-height: 620px; grid-template-columns: 1fr; }
  .cover-art { width: 55vw; opacity: .78; }
  .index-head { grid-template-columns: 1fr; } .filters { justify-self: start; }
  .project { grid-template-columns: 42px 1fr; }.project-art { grid-column: 2; }.project-copy { grid-column: 2; }.project > a { grid-column: 2; }
  .about { grid-template-columns: 1fr; }
}
@media (max-width: 600px) {
  .masthead { grid-template-columns: 1fr auto; }.masthead > p { display: none; }.masthead nav a:not(:last-child) { display: none; }
  .cover { min-height: 550px; }.cover h1 { font-size: 25vw; }.cover-note { align-self: end; }.cover-art { top: 22%; right: -10%; width: 76vw; }
  .project-index { padding-inline: 14px; }.project { grid-template-columns: 30px 1fr; gap: 12px; }.project-art { min-height: 180px; }
  footer { flex-wrap: wrap; }
}`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const filterButtons = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    filterButtons.forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active');
    const filter = button.dataset.filter;
    projects.forEach(function (project) {
      const visible = filter === 'all' || project.dataset.type === filter;
      project.classList.toggle('is-hidden', !visible);
      if (visible) {
        project.animate(
          [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
          { duration: 360, easing: 'ease-out' }
        );
      }
    });
  });
});

document.querySelectorAll('.project > a').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    link.textContent = link.textContent.includes('SOON') ? 'VIEW CASE ↗' : 'CASE STUDY SOON';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();`,
      },
    ],
  },
  {
    id: "project-concierge",
    name: "Project Concierge",
    category: "Project intake",
    preview: "concierge",
    icon: "fa-bell-concierge",
    accent: "#ff9d72",
    accent2: "#d34f87",
    tone: "Guided conversation",
    level: "Multi-step form",
    description: "A warm, conversational project brief with animated steps, selectable answers, progress, validation, and a success state.",
    highlights: ["4-step intake", "Input validation", "Success state"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Concierge — Tell us what you are building</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="page-shell">
      <aside class="brand-panel">
        <a class="brand" href="#">TWOFOLD<span>®</span></a>
        <div class="panel-copy">
          <span class="availability"><i></i> ACCEPTING 2 PROJECTS</span>
          <h1>Good work begins with a <em>better question.</em></h1>
          <p>Tell us where you are, where you want to go, and what is getting in the way. This takes about two minutes.</p>
        </div>
        <footer><span>INDEPENDENT CREATIVE PRACTICE</span><a href="mailto:hello@example.com">hello@twofold.studio</a></footer>
      </aside>

      <section class="form-panel">
        <header class="form-header">
          <div><span>PROJECT CONCIERGE</span><strong id="stepLabel">01 / 04</strong></div>
          <div class="progress" aria-label="Form progress"><i id="progressBar"></i></div>
        </header>

        <form id="projectForm" novalidate>
          <section class="form-step active" data-step="1">
            <span class="step-number">01</span>
            <p class="step-kicker">FIRST, THE BIG PICTURE</p>
            <h2>What are we<br />making together?</h2>
            <div class="choice-grid" data-required-group="projectType">
              <label><input type="radio" name="projectType" value="A new identity" /><span><b>01</b>A new identity<small>Strategy, voice, and visual system</small></span></label>
              <label><input type="radio" name="projectType" value="A digital product" /><span><b>02</b>A digital product<small>Website, platform, or experience</small></span></label>
              <label><input type="radio" name="projectType" value="A launch campaign" /><span><b>03</b>A launch campaign<small>Concept, content, and rollout</small></span></label>
              <label><input type="radio" name="projectType" value="Something unusual" /><span><b>04</b>Something unusual<small>The interesting option</small></span></label>
            </div>
          </section>

          <section class="form-step" data-step="2">
            <span class="step-number">02</span>
            <p class="step-kicker">NOW, THE CONTEXT</p>
            <h2>Where does the<br />project stand?</h2>
            <div class="choice-grid" data-required-group="stage">
              <label><input type="radio" name="stage" value="Just an idea" /><span><b>A</b>Just an idea<small>We need to shape the opportunity</small></span></label>
              <label><input type="radio" name="stage" value="Ready to evolve" /><span><b>B</b>Ready to evolve<small>There is a foundation to build on</small></span></label>
              <label><input type="radio" name="stage" value="Ready to launch" /><span><b>C</b>Ready to launch<small>The direction is already clear</small></span></label>
              <label><input type="radio" name="stage" value="Needs rescue" /><span><b>D</b>Needs rescue<small>Something is not connecting</small></span></label>
            </div>
          </section>

          <section class="form-step" data-step="3">
            <span class="step-number">03</span>
            <p class="step-kicker">SCOPE AND TIMING</p>
            <h2>Give us the<br /><em>real constraints.</em></h2>
            <label class="text-field">Ideal launch window<input name="timeline" required placeholder="For example: September 2026" /></label>
            <label class="text-field">Comfortable investment<select name="budget" required><option value="">Choose a range</option><option>$5k — $10k</option><option>$10k — $25k</option><option>$25k — $50k</option><option>$50k+</option></select></label>
            <label class="text-field">What should this change?<textarea name="outcome" required rows="3" placeholder="A short, honest answer is perfect."></textarea></label>
          </section>

          <section class="form-step" data-step="4">
            <span class="step-number">04</span>
            <p class="step-kicker">LAST DETAIL</p>
            <h2>Where should we<br />send our thoughts?</h2>
            <div class="field-row">
              <label class="text-field">Your name<input name="name" required placeholder="Name" /></label>
              <label class="text-field">Email<input name="email" type="email" required placeholder="you@company.com" /></label>
            </div>
            <label class="text-field">Anything else? <span>Optional</span><textarea name="note" rows="3" placeholder="Links, context, good questions..."></textarea></label>
            <div class="review-card"><span>YOUR BRIEF</span><strong id="reviewText">A thoughtful project, ready to discuss.</strong></div>
          </section>

          <section class="success-step" id="successStep" aria-live="polite">
            <span class="success-mark">✓</span><p>BRIEF RECEIVED</p><h2>We like where<br />this is going.</h2><span>Expect a thoughtful reply within two working days.</span>
            <button type="button" id="resetBtn">SEND ANOTHER BRIEF</button>
          </section>

          <p class="form-error" id="formError" role="alert"></p>
          <div class="form-actions" id="formActions">
            <button class="back" id="backBtn" type="button">← BACK</button>
            <button class="next" id="nextBtn" type="button">CONTINUE <span>→</span></button>
          </div>
        </form>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --plum: #25132c; --plum-2: #371841; --cream: #fff7ed; --peach: #ffb38f; --pink: #d34f87; --line: rgba(255,247,237,.16); }
* { box-sizing: border-box; }
body { margin: 0; color: var(--cream); background: var(--plum); font-family: Arial, Helvetica, sans-serif; }
button, input, select, textarea { font: inherit; }
.page-shell { min-height: 100vh; display: grid; grid-template-columns: minmax(320px, .78fr) minmax(560px, 1.22fr); }
.brand-panel { position: sticky; top: 0; height: 100vh; display: flex; flex-direction: column; justify-content: space-between; padding: 34px; overflow: hidden; border-right: 1px solid var(--line); background: radial-gradient(circle at 85% 20%, rgba(211,79,135,.32), transparent 29%), radial-gradient(circle at 16% 75%, rgba(255,179,143,.13), transparent 28%), var(--plum); }
.brand-panel::before { content: ""; position: absolute; width: 320px; height: 320px; right: -190px; bottom: 5%; border: 1px solid rgba(255,179,143,.22); border-radius: 50%; box-shadow: 0 0 0 55px rgba(255,179,143,.035), 0 0 0 110px rgba(255,179,143,.025); }
.brand { position: relative; z-index: 1; width: max-content; color: var(--cream); text-decoration: none; font-size: 17px; font-weight: 900; letter-spacing: -.04em; }.brand span { margin-left: 3px; color: var(--peach); font-size: 8px; vertical-align: top; }
.panel-copy { position: relative; z-index: 1; max-width: 540px; }
.availability { display: flex; align-items: center; gap: 8px; color: var(--peach); font-size: 9px; font-weight: 900; letter-spacing: .13em; }.availability i { width: 7px; height: 7px; border-radius: 50%; background: var(--peach); box-shadow: 0 0 12px var(--peach); }
.panel-copy h1 { margin: 22px 0; font-size: clamp(3.6rem, 6.5vw, 7rem); line-height: .82; letter-spacing: -.07em; }.panel-copy h1 em { display: block; color: var(--peach); font-family: Georgia, serif; font-weight: 400; }
.panel-copy > p { max-width: 49ch; color: rgba(255,247,237,.62); font: 16px/1.55 Georgia, serif; }
.brand-panel footer { position: relative; z-index: 1; display: flex; justify-content: space-between; gap: 18px; color: rgba(255,247,237,.5); font-size: 8px; letter-spacing: .1em; }.brand-panel footer a { color: inherit; text-decoration: none; }
.form-panel { min-height: 100vh; background: var(--cream); color: var(--plum); }
.form-header { display: grid; grid-template-columns: 1fr 150px; align-items: center; gap: 20px; height: 84px; padding: 0 6vw; border-bottom: 1px solid rgba(37,19,44,.14); }
.form-header > div:first-child { display: flex; justify-content: space-between; gap: 20px; color: rgba(37,19,44,.55); font-size: 9px; font-weight: 900; letter-spacing: .12em; }
.form-header strong { color: var(--plum); }
.progress { height: 4px; overflow: hidden; border-radius: 99px; background: rgba(37,19,44,.11); }.progress i { display: block; width: 25%; height: 100%; border-radius: inherit; background: linear-gradient(90deg, var(--pink), var(--peach)); transition: width .4s ease; }
#projectForm { min-height: calc(100vh - 84px); display: flex; flex-direction: column; padding: clamp(36px, 6vw, 78px) 6vw 32px; }
.form-step { position: relative; display: none; width: min(100%, 760px); margin: auto 0; animation: stepIn .45s cubic-bezier(.2,.8,.2,1); }.form-step.active { display: block; }
.step-number { position: absolute; right: 0; top: -25px; color: rgba(37,19,44,.06); font: 900 clamp(7rem, 14vw, 12rem)/1 Georgia, serif; }
.step-kicker { position: relative; z-index: 1; margin: 0 0 18px; color: var(--pink); font-size: 9px; font-weight: 900; letter-spacing: .14em; }
.form-step h2, .success-step h2 { position: relative; z-index: 1; margin: 0 0 35px; font-size: clamp(3.3rem, 6.8vw, 6.8rem); line-height: .82; letter-spacing: -.07em; }.form-step h2 em { color: var(--pink); font-family: Georgia, serif; font-weight: 400; }
.choice-grid { position: relative; z-index: 1; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.choice-grid label { cursor: pointer; }.choice-grid input { position: absolute; opacity: 0; pointer-events: none; }
.choice-grid label > span { min-height: 105px; display: grid; grid-template-columns: 30px 1fr; align-content: center; padding: 17px; border: 1px solid rgba(37,19,44,.16); border-radius: 12px; color: var(--plum); background: transparent; font-size: 14px; font-weight: 800; transition: .2s ease; }
.choice-grid label b { color: var(--pink); font-size: 9px; }.choice-grid label small { grid-column: 2; margin-top: 6px; color: rgba(37,19,44,.53); font: 12px/1.35 Georgia, serif; }
.choice-grid input:checked + span { border-color: var(--plum); color: var(--cream); background: var(--plum); transform: translateY(-3px); box-shadow: 0 13px 30px rgba(37,19,44,.18); }.choice-grid input:checked + span small { color: rgba(255,247,237,.62); }.choice-grid input:checked + span b { color: var(--peach); }
.text-field { display: grid; gap: 8px; margin-bottom: 16px; color: rgba(37,19,44,.65); font-size: 9px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }.text-field > span { margin-left: 5px; color: rgba(37,19,44,.34); }
.text-field input, .text-field select, .text-field textarea { width: 100%; padding: 14px 0; border: 0; border-bottom: 1px solid rgba(37,19,44,.27); border-radius: 0; outline: 0; color: var(--plum); background: transparent; font-size: 18px; letter-spacing: 0; text-transform: none; resize: vertical; }.text-field input:focus, .text-field select:focus, .text-field textarea:focus { border-color: var(--pink); }
.field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
.review-card { display: grid; grid-template-columns: 120px 1fr; gap: 15px; margin-top: 24px; padding: 16px; border-radius: 10px; color: var(--cream); background: var(--plum); }.review-card span { color: var(--peach); font-size: 8px; font-weight: 900; letter-spacing: .12em; }.review-card strong { font: 14px Georgia, serif; }
.form-actions { display: flex; justify-content: space-between; align-items: center; width: min(100%, 760px); margin-top: 38px; padding-top: 20px; border-top: 1px solid rgba(37,19,44,.13); }.form-actions button { border: 0; cursor: pointer; font-size: 9px; font-weight: 900; letter-spacing: .1em; }.back { visibility: hidden; color: rgba(37,19,44,.55); background: transparent; }.back.visible { visibility: visible; }.next { display: flex; align-items: center; gap: 40px; padding: 15px 17px; color: var(--cream); background: var(--plum); }.next:hover { background: var(--pink); }
.form-error { min-height: 18px; width: min(100%, 760px); margin: 12px 0 0; color: #b42348; font-size: 11px; }
.success-step { display: none; width: min(100%, 760px); margin: auto 0; }.success-step.active { display: block; animation: stepIn .5s ease; }.success-mark { display: grid; place-items: center; width: 58px; height: 58px; margin-bottom: 27px; border-radius: 50%; color: var(--plum); background: var(--peach); font-size: 24px; }.success-step > p { color: var(--pink); font-size: 9px; font-weight: 900; letter-spacing: .14em; }.success-step > span:not(.success-mark) { color: rgba(37,19,44,.58); font: 16px Georgia, serif; }.success-step button { display: block; margin-top: 32px; padding: 14px 18px; border: 1px solid var(--plum); color: var(--plum); background: transparent; font-size: 9px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }
@keyframes stepIn { from { opacity: 0; transform: translateY(18px); } }
@media (max-width: 980px) { .page-shell { grid-template-columns: 1fr; }.brand-panel { position: relative; height: auto; min-height: 550px; }.form-panel { min-height: 720px; } }
@media (max-width: 600px) { .brand-panel { min-height: 520px; padding: 24px; }.brand-panel footer { flex-direction: column; }.form-header { grid-template-columns: 1fr; height: auto; padding-block: 18px; }.form-header .progress { width: 100%; }.form-step h2, .success-step h2 { font-size: 16vw; }.choice-grid, .field-row { grid-template-columns: 1fr; }.choice-grid label > span { min-height: 82px; } }
`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const form = document.getElementById('projectForm');
const steps = Array.from(document.querySelectorAll('.form-step'));
const nextButton = document.getElementById('nextBtn');
const backButton = document.getElementById('backBtn');
const progressBar = document.getElementById('progressBar');
const stepLabel = document.getElementById('stepLabel');
const errorText = document.getElementById('formError');
const successStep = document.getElementById('successStep');
const formActions = document.getElementById('formActions');
let currentStep = 0;

function validateStep() {
  const step = steps[currentStep];
  const group = step.querySelector('[data-required-group]');
  if (group && !group.querySelector('input:checked')) {
    errorText.textContent = 'Choose one option to continue.';
    return false;
  }
  const fields = Array.from(step.querySelectorAll('[required]'));
  const invalid = fields.find(function (field) { return !field.checkValidity(); });
  if (invalid) {
    errorText.textContent = invalid.type === 'email' ? 'Enter a valid email address.' : 'Complete the highlighted details to continue.';
    invalid.focus();
    return false;
  }
  errorText.textContent = '';
  return true;
}

function showStep(index) {
  currentStep = index;
  steps.forEach(function (step, stepIndex) { step.classList.toggle('active', stepIndex === index); });
  progressBar.style.width = ((index + 1) / steps.length) * 100 + '%';
  stepLabel.textContent = String(index + 1).padStart(2, '0') + ' / 04';
  backButton.classList.toggle('visible', index > 0);
  nextButton.firstChild.textContent = index === steps.length - 1 ? 'SEND BRIEF ' : 'CONTINUE ';
  if (index === steps.length - 1) updateReview();
}

function updateReview() {
  const data = new FormData(form);
  const project = data.get('projectType') || 'thoughtful project';
  const stage = data.get('stage') || 'ready for a conversation';
  document.getElementById('reviewText').textContent = project + ' — ' + stage + '.';
}

nextButton.addEventListener('click', function () {
  if (!validateStep()) return;
  if (currentStep < steps.length - 1) {
    showStep(currentStep + 1);
    return;
  }
  steps[currentStep].classList.remove('active');
  formActions.style.display = 'none';
  errorText.style.display = 'none';
  successStep.classList.add('active');
});

backButton.addEventListener('click', function () {
  if (currentStep > 0) showStep(currentStep - 1);
});

document.getElementById('resetBtn').addEventListener('click', function () {
  form.reset();
  successStep.classList.remove('active');
  formActions.style.display = 'flex';
  errorText.style.display = 'block';
  showStep(0);
});

showStep(0);`,
      },
    ],
  },
  {
    id: "nocturne-festival",
    name: "Nocturne",
    category: "Event experience",
    preview: "event",
    icon: "fa-moon",
    accent: "#b7ff47",
    accent2: "#a84eff",
    tone: "After-dark energy",
    level: "Countdown + lineup",
    description: "An atmospheric event launch with oversized type, a live countdown, expandable artist schedule, and mobile ticket bar.",
    highlights: ["Live countdown", "Schedule accordion", "Neon art direction"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Nocturne — A festival after dark</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="grain" aria-hidden="true"></div>
    <header class="nav">
      <a class="mark" href="#top">N<span>°</span></a>
      <nav><a href="#lineup">Lineup</a><a href="#program">Program</a><a href="#location">Location</a></nav>
      <button class="ticket-button" type="button" data-ticket>GET PASSES <span>↗</span></button>
    </header>

    <main id="top">
      <section class="hero">
        <div class="hero-meta"><span>SEPT 09—12</span><span>THREE NIGHTS / ONE CITY</span><span>LAGOS, NG</span></div>
        <div class="moon-scene" aria-hidden="true"><div class="moon"><i></i></div><span class="star one">✦</span><span class="star two">✦</span><span class="star three">✦</span></div>
        <h1>NOCTURNE</h1>
        <div class="hero-bottom"><p>A gathering for sound, light, moving image, and the people who stay curious after midnight.</p><a href="#lineup">DISCOVER THE PROGRAM ↓</a></div>
        <div class="marquee"><div>LIVE SOUND ✦ DIGITAL ART ✦ NIGHT TALKS ✦ NEW RITUALS ✦ LIVE SOUND ✦ DIGITAL ART ✦ NIGHT TALKS ✦ NEW RITUALS ✦</div></div>
      </section>

      <section class="countdown-section">
        <p>NEXT GATE OPENS IN</p>
        <div class="countdown" aria-live="polite"><div><strong id="days">09</strong><span>DAYS</span></div><i>:</i><div><strong id="hours">14</strong><span>HOURS</span></div><i>:</i><div><strong id="minutes">32</strong><span>MIN</span></div><i>:</i><div><strong id="seconds">08</strong><span>SEC</span></div></div>
      </section>

      <section class="lineup" id="lineup">
        <header class="section-head"><span>01 / LINEUP</span><h2>Three nights.<br /><em>No fillers.</em></h2><p>Artists working between disciplines, selected for the worlds they create—not the categories they fit.</p></header>
        <div class="lineup-list" id="program">
          <article class="artist open"><button type="button" aria-expanded="true"><span>THU / 09</span><strong>AMAARA</strong><i>−</i></button><div class="artist-detail"><p>Ambient electronics meet field recordings and fractured club rhythms.</p><span>MAIN HALL · 23:40</span><div class="artist-art art-one"></div></div></article>
          <article class="artist"><button type="button" aria-expanded="false"><span>FRI / 10</span><strong>KAIRO SYSTEM</strong><i>＋</i></button><div class="artist-detail"><p>A live audiovisual transmission built from modular synthesis and light.</p><span>LIGHT ROOM · 00:20</span><div class="artist-art art-two"></div></div></article>
          <article class="artist"><button type="button" aria-expanded="false"><span>SAT / 11</span><strong>SABLE RADIO</strong><i>＋</i></button><div class="artist-detail"><p>Future-facing dance music transmitted as one continuous late-night story.</p><span>COURTYARD · 01:30</span><div class="artist-art art-three"></div></div></article>
          <article class="artist"><button type="button" aria-expanded="false"><span>SUN / 12</span><strong>THE QUIET HOUR</strong><i>＋</i></button><div class="artist-detail"><p>A sunrise listening session for everyone still in the room.</p><span>ROOFTOP · 05:15</span><div class="artist-art art-four"></div></div></article>
        </div>
      </section>

      <section class="location" id="location">
        <div class="location-orbit" aria-hidden="true"><i></i><i></i><i></i><strong>6.4550° N<br />3.3841° E</strong></div>
        <div><span>02 / LOCATION</span><h2>THE OLD<br />POWER HOUSE</h2><p>Dock Road, Lagos Island<br />Doors each night at 19:00</p><a href="#">OPEN MAP ↗</a></div>
      </section>
    </main>

    <footer><div><strong>NOCTURNE</strong><p>Sound / light / image / night</p></div><button type="button" data-ticket>RESERVE A PASS <span>→</span></button><small>© <span id="year"></span> / 18+ EVENT</small></footer>
    <div class="ticket-toast" id="ticketToast" role="status">Pass portal opened — connect your ticket provider here.<button type="button" aria-label="Close">×</button></div>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --night: #11051d; --ink: #09020f; --white: #f8f5ff; --acid: #b7ff47; --violet: #a84eff; --line: rgba(248,245,255,.18); }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; overflow-x: hidden; color: var(--white); background: var(--night); font-family: Arial, Helvetica, sans-serif; }
button, a { font: inherit; }
a { color: inherit; }
.grain { position: fixed; z-index: 20; inset: 0; pointer-events: none; opacity: .06; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 140 140' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
.nav { position: absolute; z-index: 5; top: 0; left: 0; right: 0; height: 80px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 clamp(16px, 3vw, 42px); border-bottom: 1px solid var(--line); }.mark { width: max-content; color: var(--white); text-decoration: none; font-size: 25px; font-weight: 900; letter-spacing: -.08em; }.mark span { color: var(--acid); }.nav nav { display: flex; gap: 30px; }.nav nav a { color: rgba(248,245,255,.7); text-decoration: none; font-size: 9px; font-weight: 900; letter-spacing: .13em; text-transform: uppercase; }.ticket-button { justify-self: end; display: flex; gap: 18px; padding: 12px 15px; border: 1px solid var(--acid); color: var(--acid); background: transparent; font-size: 9px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }.ticket-button:hover { color: var(--ink); background: var(--acid); }
.hero { position: relative; min-height: 790px; display: flex; flex-direction: column; justify-content: flex-end; padding: 110px clamp(16px, 3vw, 42px) 66px; overflow: hidden; background: radial-gradient(circle at 72% 40%, rgba(168,78,255,.32), transparent 25%), linear-gradient(160deg, #1a0929, var(--night)); }.hero-meta { position: absolute; z-index: 2; top: 108px; left: clamp(16px, 3vw, 42px); right: clamp(16px, 3vw, 42px); display: flex; justify-content: space-between; color: var(--acid); font-size: 9px; font-weight: 900; letter-spacing: .14em; }.hero h1 { position: relative; z-index: 2; margin: 0 0 40px; font-size: clamp(6rem, 17.2vw, 16.5rem); line-height: .66; letter-spacing: -.085em; transform: skewY(-3deg); text-shadow: 0 0 50px rgba(168,78,255,.15); }.moon-scene { position: absolute; inset: 0; }.moon { position: absolute; top: 17%; right: 14%; width: min(38vw, 480px); aspect-ratio: 1; border-radius: 50%; background: radial-gradient(circle at 34% 28%, #e9d7ff, #a84eff 31%, #481269 66%, #1d082d 68%); box-shadow: 0 0 90px rgba(168,78,255,.48); }.moon i { position: absolute; inset: 9%; border: 1px solid rgba(183,255,71,.3); border-radius: 50%; }.moon::after { content: ""; position: absolute; width: 28%; height: 18%; left: 18%; top: 23%; border-radius: 50%; background: rgba(17,5,29,.24); filter: blur(3px); }.star { position: absolute; color: var(--acid); animation: twinkle 2s infinite alternate; }.star.one { left: 18%; top: 30%; }.star.two { right: 8%; top: 45%; font-size: 23px; animation-delay: -.7s; }.star.three { left: 48%; top: 18%; font-size: 11px; animation-delay: -1.3s; }
.hero-bottom { position: relative; z-index: 2; display: flex; justify-content: space-between; align-items: end; gap: 20px; }.hero-bottom p { max-width: 480px; margin: 0; color: rgba(248,245,255,.67); font: 16px/1.5 Georgia, serif; }.hero-bottom a { color: var(--acid); font-size: 9px; font-weight: 900; letter-spacing: .12em; text-decoration: none; }.marquee { position: absolute; left: 0; right: 0; bottom: 0; overflow: hidden; border-top: 1px solid var(--line); background: rgba(9,2,15,.4); }.marquee div { width: max-content; padding: 13px 0; color: rgba(248,245,255,.65); font-size: 8px; font-weight: 900; letter-spacing: .18em; animation: marquee 24s linear infinite; }
.countdown-section { padding: 70px clamp(16px, 3vw, 42px); color: var(--ink); background: var(--acid); }.countdown-section > p { margin: 0 0 20px; font-size: 9px; font-weight: 900; letter-spacing: .15em; }.countdown { display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; align-items: start; gap: 18px; }.countdown div { display: grid; }.countdown strong { font-size: clamp(4rem, 11vw, 10rem); line-height: .8; letter-spacing: -.08em; }.countdown span { margin-top: 13px; font-size: 8px; font-weight: 900; letter-spacing: .13em; }.countdown i { font-style: normal; font-size: clamp(2rem, 6vw, 6rem); line-height: .7; }
.lineup { padding: 120px clamp(16px, 3vw, 42px); }.section-head { display: grid; grid-template-columns: .45fr 1.25fr .7fr; gap: 30px; align-items: end; margin-bottom: 70px; }.section-head > span, .location > div > span { align-self: start; color: var(--acid); font-size: 9px; font-weight: 900; letter-spacing: .14em; }.section-head h2 { margin: 0; font-size: clamp(4rem, 9vw, 8.5rem); line-height: .78; letter-spacing: -.07em; text-transform: uppercase; }.section-head h2 em { color: var(--violet); font-family: Georgia, serif; font-weight: 400; text-transform: none; }.section-head p { margin: 0; color: rgba(248,245,255,.6); font: 15px/1.55 Georgia, serif; }
.artist { border-top: 1px solid var(--line); }.artist:last-child { border-bottom: 1px solid var(--line); }.artist > button { width: 100%; display: grid; grid-template-columns: 130px 1fr auto; align-items: center; gap: 25px; padding: 25px 0; border: 0; color: var(--white); background: transparent; text-align: left; cursor: pointer; }.artist > button span { color: var(--acid); font-size: 8px; font-weight: 900; letter-spacing: .13em; }.artist > button strong { font-size: clamp(2.2rem, 6vw, 6rem); line-height: .86; letter-spacing: -.06em; }.artist > button i { font-size: 25px; font-style: normal; }.artist-detail { max-height: 0; display: grid; grid-template-columns: 1fr .6fr .85fr; gap: 25px; overflow: hidden; opacity: 0; transition: max-height .45s ease, opacity .35s ease, padding .35s ease; }.artist.open .artist-detail { max-height: 300px; padding: 0 0 25px 155px; opacity: 1; }.artist-detail p { margin: 0; color: rgba(248,245,255,.65); font: 15px/1.55 Georgia, serif; }.artist-detail > span { color: var(--acid); font-size: 8px; font-weight: 900; letter-spacing: .1em; }.artist-art { min-height: 120px; }.art-one { background: repeating-radial-gradient(circle at 70% 120%, var(--violet) 0 15px, transparent 16px 28px); }.art-two { background: repeating-linear-gradient(110deg, var(--acid) 0 12px, var(--night) 13px 25px); }.art-three { background: radial-gradient(circle, var(--violet) 0 9%, transparent 10%), conic-gradient(from 30deg, var(--acid), var(--violet), var(--acid)); }.art-four { background: linear-gradient(25deg, transparent 40%, var(--acid) 41% 44%, transparent 45%), #29123b; }
.location { min-height: 660px; display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 40px; padding: 80px clamp(16px, 3vw, 42px); color: var(--ink); background: #f1e8ff; }.location-orbit { position: relative; width: min(80vw, 500px); aspect-ratio: 1; display: grid; place-items: center; border: 1px solid var(--ink); border-radius: 50%; }.location-orbit::before, .location-orbit::after { content: ""; position: absolute; border: 1px solid var(--ink); border-radius: 50%; }.location-orbit::before { inset: 17%; }.location-orbit::after { inset: 34%; background: var(--violet); }.location-orbit i { position: absolute; z-index: 2; width: 16px; height: 16px; border-radius: 50%; background: var(--acid); border: 1px solid var(--ink); }.location-orbit i:first-child { left: 7%; top: 35%; }.location-orbit i:nth-child(2) { right: 14%; top: 19%; }.location-orbit i:nth-child(3) { bottom: 5%; left: 45%; }.location-orbit strong { z-index: 3; color: var(--white); font-size: 12px; line-height: 1.5; text-align: center; }.location h2 { margin: 25px 0; font-size: clamp(3.7rem, 8vw, 7.7rem); line-height: .75; letter-spacing: -.07em; }.location p { font: 16px/1.6 Georgia, serif; }.location a { display: inline-block; margin-top: 18px; font-size: 9px; font-weight: 900; letter-spacing: .12em; }
footer { min-height: 250px; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 25px; padding: 45px clamp(16px, 3vw, 42px); background: var(--ink); }.footer strong { font-size: 34px; }.footer p { color: rgba(248,245,255,.5); }.footer button { display: flex; gap: 45px; padding: 17px; border: 0; color: var(--ink); background: var(--acid); font-size: 9px; font-weight: 900; letter-spacing: .12em; cursor: pointer; }footer small { grid-column: 1/-1; color: rgba(248,245,255,.4); font-size: 8px; letter-spacing: .12em; }
.ticket-toast { position: fixed; z-index: 30; left: 50%; bottom: 22px; translate: -50% 30px; width: min(480px, calc(100% - 24px)); display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 14px 16px; border: 1px solid var(--acid); color: var(--acid); background: rgba(9,2,15,.94); opacity: 0; pointer-events: none; transition: .25s; font-size: 11px; }.ticket-toast.show { translate: -50% 0; opacity: 1; pointer-events: auto; }.ticket-toast button { border: 0; color: inherit; background: transparent; font-size: 22px; cursor: pointer; }
@keyframes marquee { to { transform: translateX(-50%); } } @keyframes twinkle { to { opacity: .25; transform: scale(.7) rotate(40deg); } }
@media (max-width: 800px) { .nav { grid-template-columns: 1fr auto; }.nav nav { display: none; }.hero { min-height: 690px; }.hero h1 { font-size: 20vw; }.section-head { grid-template-columns: 1fr; }.artist > button { grid-template-columns: 80px 1fr auto; }.artist.open .artist-detail { grid-template-columns: 1fr; padding-left: 105px; }.location { grid-template-columns: 1fr; }.location-orbit { width: min(100%, 430px); } }
@media (max-width: 540px) { .hero-meta span:nth-child(2) { display: none; }.hero-bottom { align-items: flex-start; flex-direction: column; }.moon { width: 75vw; right: -8%; top: 24%; }.countdown { gap: 5px; }.countdown i { font-size: 20px; }.artist > button { grid-template-columns: 55px 1fr auto; gap: 8px; }.artist.open .artist-detail { padding-left: 0; }.location { min-height: 700px; }footer { grid-template-columns: 1fr; } }
`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const target = new Date();
target.setDate(target.getDate() + 9);
target.setHours(19, 0, 0, 0);

function updateCountdown() {
  const remaining = Math.max(0, target.getTime() - Date.now());
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining / 3600000) % 24);
  const minutes = Math.floor((remaining / 60000) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}
updateCountdown();
setInterval(updateCountdown, 1000);

document.querySelectorAll('.artist > button').forEach(function (button) {
  button.addEventListener('click', function () {
    const artist = button.closest('.artist');
    const willOpen = !artist.classList.contains('open');
    document.querySelectorAll('.artist').forEach(function (item) {
      item.classList.remove('open');
      item.querySelector('button').setAttribute('aria-expanded', 'false');
      item.querySelector('button i').textContent = '＋';
    });
    if (willOpen) {
      artist.classList.add('open');
      button.setAttribute('aria-expanded', 'true');
      button.querySelector('i').textContent = '−';
    }
  });
});

const toast = document.getElementById('ticketToast');
document.querySelectorAll('[data-ticket]').forEach(function (button) {
  button.addEventListener('click', function () { toast.classList.add('show'); });
});
toast.querySelector('button').addEventListener('click', function () { toast.classList.remove('show'); });
document.getElementById('year').textContent = new Date().getFullYear();`,
      },
    ],
  },
  {
    id: "atelier-market",
    name: "Atelier Market",
    category: "Concept store",
    preview: "shop",
    icon: "fa-bag-shopping",
    accent: "#2446d8",
    accent2: "#ff6e4a",
    tone: "Playful commerce",
    level: "Filters + cart",
    description: "An editorial storefront with sculptural product art, category filters, a working cart drawer, and tactile micro-interactions.",
    highlights: ["Product filters", "Cart drawer", "CSS product art"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Atelier Market — Useful objects, unusual forms</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="nav">
      <button class="menu" type="button" aria-label="Open menu">MENU</button>
      <a class="brand" href="#top">ATELIER<br />MARKET</a>
      <button class="cart-button" id="cartButton" type="button">CART <span id="cartCount">0</span></button>
    </header>

    <main id="top">
      <section class="hero">
        <p class="hero-index">ISSUE 03 / OBJECTS FOR DAILY LIFE</p>
        <h1>USEFUL<br /><em>THINGS,</em><br />UNUSUAL<br />FORMS.</h1>
        <div class="hero-object" aria-hidden="true"><div class="vase"><i></i></div><span>AM—03</span></div>
        <div class="hero-note"><p>A small collection of objects chosen for their color, character, and ability to make ordinary rituals feel considered.</p><a href="#collection">SHOP THE COLLECTION ↓</a></div>
        <div class="seal" aria-hidden="true">DESIGNED WITH CARE · MADE TO BE USED ·</div>
      </section>

      <section class="collection" id="collection">
        <header class="collection-head">
          <div><span>01 / CURRENT COLLECTION</span><h2>Six objects.<br />No filler.</h2></div>
          <div class="filters" aria-label="Filter products"><button class="active" data-filter="all" type="button">All</button><button data-filter="home" type="button">Home</button><button data-filter="wear" type="button">Wear</button><button data-filter="print" type="button">Print</button></div>
        </header>

        <div class="product-grid">
          <article class="product" data-category="home" data-name="Orbit Lamp" data-price="148">
            <div class="product-art lamp"><span></span><i></i><b>NEW</b></div><div class="product-info"><span>AM—001 / HOME</span><h3>Orbit Lamp</h3><p>$148</p></div><button type="button">ADD TO CART <span>＋</span></button>
          </article>
          <article class="product" data-category="wear" data-name="Soft Form Tote" data-price="86">
            <div class="product-art tote"><span></span><i></i></div><div class="product-info"><span>AM—002 / WEAR</span><h3>Soft Form Tote</h3><p>$86</p></div><button type="button">ADD TO CART <span>＋</span></button>
          </article>
          <article class="product" data-category="home" data-name="Arc Vessel" data-price="110">
            <div class="product-art vessel"><span></span><i></i></div><div class="product-info"><span>AM—003 / HOME</span><h3>Arc Vessel</h3><p>$110</p></div><button type="button">ADD TO CART <span>＋</span></button>
          </article>
          <article class="product" data-category="print" data-name="Shape Study 04" data-price="42">
            <div class="product-art print-one"><span>FORM<br />04</span></div><div class="product-info"><span>AM—004 / PRINT</span><h3>Shape Study 04</h3><p>$42</p></div><button type="button">ADD TO CART <span>＋</span></button>
          </article>
          <article class="product" data-category="wear" data-name="Field Cap" data-price="54">
            <div class="product-art cap"><span></span><i>AM</i></div><div class="product-info"><span>AM—005 / WEAR</span><h3>Field Cap</h3><p>$54</p></div><button type="button">ADD TO CART <span>＋</span></button>
          </article>
          <article class="product" data-category="print" data-name="Color Notes" data-price="28">
            <div class="product-art books"><span></span><span></span><span></span></div><div class="product-info"><span>AM—006 / PRINT</span><h3>Color Notes</h3><p>$28</p></div><button type="button">ADD TO CART <span>＋</span></button>
          </article>
        </div>
      </section>

      <section class="manifesto">
        <span>02 / OUR RULE</span><h2>KEEP FEWER.<br />CHOOSE <em>BETTER.</em></h2>
        <div><p>We work with independent makers, small factories, and patient processes. Every object is selected to be lived with, not scrolled past.</p><a href="#">MEET THE MAKERS ↗</a></div>
      </section>
    </main>

    <footer><a class="brand" href="#top">ATELIER<br />MARKET</a><p>Useful objects from independent minds.<br />Ships worldwide from Lagos.</p><div><a href="#">Instagram</a><a href="#">Journal</a><a href="#">Shipping</a></div><small>© <span id="year"></span> AM</small></footer>

    <div class="cart-backdrop" id="cartBackdrop"></div>
    <aside class="cart-drawer" id="cartDrawer" aria-labelledby="cartTitle">
      <header><div><span>YOUR SELECTION</span><h2 id="cartTitle">Cart / <b id="drawerCount">0</b></h2></div><button id="closeCart" type="button" aria-label="Close cart">×</button></header>
      <div class="cart-items" id="cartItems"><p class="empty-cart">Your cart is waiting for something good.</p></div>
      <footer><div><span>TOTAL</span><strong id="cartTotal">$0</strong></div><button type="button">CONTINUE TO CHECKOUT <span>→</span></button></footer>
    </aside>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --paper: #eee6d6; --paper-2: #e5dac4; --ink: #171713; --blue: #2446d8; --orange: #ff6e4a; --yellow: #edbd2e; --rule: rgba(23,23,19,.23); }
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--ink); background: var(--paper); font-family: Arial, Helvetica, sans-serif; }
button, a { font: inherit; }
a { color: inherit; }
.nav { position: relative; z-index: 5; height: 88px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 clamp(15px, 3vw, 38px); border-bottom: 1px solid var(--ink); }.nav button { width: max-content; padding: 0; border: 0; color: var(--ink); background: transparent; font-size: 10px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }.brand { text-decoration: none; font-size: 17px; font-weight: 900; line-height: .78; letter-spacing: -.06em; text-align: center; }.cart-button { justify-self: end; display: flex; align-items: center; gap: 8px; }.cart-button span { display: grid; place-items: center; width: 25px; height: 25px; border-radius: 50%; color: var(--paper); background: var(--blue); }
.hero { position: relative; min-height: 790px; display: grid; grid-template-columns: 1.1fr .9fr; align-items: end; padding: 70px clamp(15px, 3vw, 38px) 50px; overflow: hidden; }.hero::before { content: ""; position: absolute; inset: 0 50% 0 0; border-right: 1px solid var(--rule); background: linear-gradient(90deg, transparent 95%, rgba(36,70,216,.05)); }.hero-index { position: absolute; top: 28px; left: clamp(15px, 3vw, 38px); margin: 0; color: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: .13em; }.hero h1 { position: relative; z-index: 2; margin: 0; font-size: clamp(5.5rem, 12vw, 12rem); line-height: .67; letter-spacing: -.09em; }.hero h1 em { color: var(--blue); font-family: Georgia, serif; font-weight: 400; }.hero-object { position: absolute; right: 7%; top: 12%; width: min(41vw, 520px); aspect-ratio: 1; display: grid; place-items: center; border: 1px solid var(--ink); border-radius: 50%; background: var(--yellow); }.hero-object::before, .hero-object::after { content: ""; position: absolute; border: 1px solid var(--ink); border-radius: 50%; }.hero-object::before { inset: 12%; }.hero-object::after { inset: 25%; background: var(--orange); }.vase { position: relative; z-index: 2; width: 150px; height: 205px; border-radius: 42% 42% 18% 18% / 25% 25% 14% 14%; background: var(--blue); transform: rotate(7deg); box-shadow: inset -23px 0 rgba(0,0,0,.12); }.vase::before { content: ""; position: absolute; left: 37px; top: -36px; width: 75px; height: 65px; border-radius: 45% 45% 0 0; background: var(--blue); }.vase i { position: absolute; width: 58px; height: 58px; right: 18px; top: 64px; border-radius: 50%; background: var(--orange); }.hero-object > span { position: absolute; right: 8%; bottom: 12%; font-size: 9px; font-weight: 900; letter-spacing: .12em; }.hero-note { position: relative; z-index: 2; align-self: end; max-width: 390px; margin: 0 0 4px auto; }.hero-note p { margin: 0 0 25px; font: 17px/1.5 Georgia, serif; }.hero-note a { color: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: .12em; text-decoration: none; }.seal { position: absolute; z-index: 3; right: 42%; top: 18%; width: 105px; height: 105px; display: grid; place-items: center; border-radius: 50%; color: var(--paper); background: var(--ink); font-size: 7px; font-weight: 900; line-height: 1.6; letter-spacing: .12em; text-align: center; transform: rotate(-13deg); }
.collection { padding: 110px clamp(15px, 3vw, 38px); border-top: 1px solid var(--ink); background: #f5eddd; }.collection-head { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 30px; margin-bottom: 45px; }.collection-head span, .manifesto > span { color: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: .13em; }.collection-head h2 { margin: 13px 0 0; font-size: clamp(3.5rem, 7vw, 7rem); line-height: .79; letter-spacing: -.07em; }.filters { display: flex; flex-wrap: wrap; gap: 6px; }.filters button { padding: 8px 12px; border: 1px solid var(--ink); border-radius: 99px; color: var(--ink); background: transparent; font-size: 9px; font-weight: 900; text-transform: uppercase; cursor: pointer; }.filters button.active, .filters button:hover { color: var(--paper); background: var(--blue); border-color: var(--blue); }
.product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 11px; }.product { min-width: 0; padding: 10px; border: 1px solid var(--rule); background: var(--paper); transition: opacity .25s, transform .25s; }.product.hidden { display: none; }.product-art { position: relative; height: 320px; display: grid; place-items: center; overflow: hidden; background: var(--paper-2); }.product-art b { position: absolute; top: 10px; left: 10px; padding: 6px 8px; border-radius: 99px; color: var(--paper); background: var(--blue); font-size: 8px; }.lamp > span { width: 145px; height: 145px; border-radius: 50%; background: var(--orange); box-shadow: 0 0 0 28px var(--yellow); }.lamp > i { position: absolute; width: 7px; height: 90px; bottom: 0; background: var(--ink); }.tote > span { width: 190px; height: 180px; border-radius: 16px 16px 60px 30px; background: var(--blue); transform: rotate(-4deg); }.tote > i { position: absolute; width: 105px; height: 70px; top: 52px; border: 15px solid var(--orange); border-bottom: 0; border-radius: 60px 60px 0 0; }.vessel > span { width: 165px; height: 210px; border-radius: 50% 50% 22% 22%; background: var(--orange); box-shadow: inset -32px -5px rgba(151,31,15,.2); }.vessel > i { position: absolute; width: 55px; height: 55px; border: 16px solid var(--paper-2); border-radius: 50%; }.print-one { color: var(--paper); background: var(--blue); }.print-one::before { content: ""; position: absolute; width: 220px; height: 220px; border: 42px solid var(--orange); border-radius: 50%; }.print-one span { z-index: 1; font-size: 43px; font-weight: 900; line-height: .75; letter-spacing: -.08em; }.cap > span { width: 190px; height: 115px; border-radius: 90px 90px 22px 22px; background: var(--yellow); transform: rotate(-7deg); }.cap > span::after { content: ""; position: absolute; width: 115px; height: 35px; right: -55px; bottom: 0; border-radius: 0 60px 60px 0; background: var(--blue); }.cap > i { position: absolute; color: var(--blue); font-style: normal; font-weight: 900; font-size: 27px; }.books { display: flex; align-items: center; gap: 8px; padding: 35px; }.books span { width: 55px; height: 210px; background: var(--orange); box-shadow: inset 8px 0 rgba(0,0,0,.1); transform: rotate(-5deg); }.books span:nth-child(2) { height: 250px; background: var(--blue); transform: rotate(3deg); }.books span:nth-child(3) { height: 185px; background: var(--yellow); transform: rotate(8deg); }
.product-info { display: grid; grid-template-columns: 1fr auto; align-items: end; gap: 6px; padding: 14px 3px; }.product-info > span { grid-column: 1/-1; color: rgba(23,23,19,.5); font-size: 8px; font-weight: 900; letter-spacing: .11em; }.product-info h3 { margin: 5px 0 0; font-size: 21px; letter-spacing: -.04em; }.product-info p { margin: 0; font: 15px Georgia, serif; }.product > button { width: 100%; display: flex; justify-content: space-between; padding: 12px; border: 1px solid var(--ink); color: var(--ink); background: transparent; font-size: 9px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }.product > button:hover { color: var(--paper); background: var(--blue); border-color: var(--blue); }
.manifesto { display: grid; grid-template-columns: .45fr 1.25fr .7fr; gap: 30px; padding: 110px clamp(15px, 3vw, 38px); color: var(--paper); background: var(--blue); }.manifesto > span { color: var(--yellow); }.manifesto h2 { margin: 0; font-size: clamp(4rem, 8vw, 8rem); line-height: .76; letter-spacing: -.08em; }.manifesto h2 em { color: var(--orange); font-family: Georgia, serif; font-weight: 400; }.manifesto > div { align-self: end; }.manifesto p { color: rgba(238,230,214,.75); font: 16px/1.55 Georgia, serif; }.manifesto a { display: inline-block; margin-top: 18px; color: var(--yellow); font-size: 9px; font-weight: 900; letter-spacing: .12em; }
body > footer { display: grid; grid-template-columns: 1fr 1fr 1fr auto; align-items: start; gap: 25px; padding: 55px clamp(15px, 3vw, 38px); border-top: 1px solid var(--ink); }.footer .brand { text-align: left; }.footer p { margin: 0; font: 13px/1.5 Georgia, serif; }.footer > div { display: grid; gap: 7px; }.footer > div a { font-size: 9px; font-weight: 900; text-decoration: none; text-transform: uppercase; }.footer small { font-size: 9px; }
.cart-backdrop { position: fixed; z-index: 30; inset: 0; background: rgba(23,23,19,.48); opacity: 0; pointer-events: none; transition: opacity .25s; }.cart-backdrop.open { opacity: 1; pointer-events: auto; }.cart-drawer { position: fixed; z-index: 31; top: 0; right: 0; width: min(470px, 100%); height: 100vh; display: flex; flex-direction: column; padding: 25px; color: var(--ink); background: var(--paper); transform: translateX(102%); transition: transform .35s cubic-bezier(.2,.8,.2,1); }.cart-drawer.open { transform: translateX(0); }.cart-drawer > header { display: flex; justify-content: space-between; padding-bottom: 20px; border-bottom: 1px solid var(--ink); }.cart-drawer header span { color: var(--blue); font-size: 8px; font-weight: 900; letter-spacing: .13em; }.cart-drawer h2 { margin: 7px 0 0; font-size: 35px; }.cart-drawer header button { border: 0; background: transparent; font-size: 29px; cursor: pointer; }.cart-items { flex: 1; overflow: auto; }.empty-cart { margin-top: 35px; color: rgba(23,23,19,.55); font: 16px Georgia, serif; }.cart-row { display: grid; grid-template-columns: 54px 1fr auto; align-items: center; gap: 12px; padding: 15px 0; border-bottom: 1px solid var(--rule); }.cart-thumb { height: 54px; display: grid; place-items: center; color: var(--paper); background: var(--blue); font-weight: 900; }.cart-row div { display: grid; gap: 4px; }.cart-row small { color: rgba(23,23,19,.55); }.cart-row button { border: 0; color: var(--orange); background: transparent; cursor: pointer; }.cart-drawer > footer { padding-top: 18px; border-top: 1px solid var(--ink); }.cart-drawer > footer div { display: flex; justify-content: space-between; margin-bottom: 15px; }.cart-drawer > footer span { font-size: 9px; font-weight: 900; letter-spacing: .12em; }.cart-drawer > footer strong { font-size: 24px; }.cart-drawer > footer button { width: 100%; display: flex; justify-content: space-between; padding: 16px; border: 0; color: var(--paper); background: var(--blue); font-size: 9px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }
@media (max-width: 900px) { .hero { min-height: 720px; grid-template-columns: 1fr; }.hero-object { width: 55vw; right: -6%; top: 17%; }.hero-note { margin-left: 0; }.seal { right: 35%; }.product-grid { grid-template-columns: 1fr 1fr; }.manifesto { grid-template-columns: 1fr; }body > footer { grid-template-columns: 1fr 1fr; } }
@media (max-width: 580px) { .hero { min-height: 650px; }.hero h1 { font-size: 22vw; }.hero-object { opacity: .68; width: 78vw; right: -22%; top: 20%; }.vase { scale: .75; }.hero-note { max-width: 75%; }.seal { top: 8%; right: 7%; }.collection-head { grid-template-columns: 1fr; }.product-grid { grid-template-columns: 1fr; }.product-art { height: 350px; }body > footer { grid-template-columns: 1fr; } }
`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const products = Array.from(document.querySelectorAll('.product'));
const cart = [];
const cartDrawer = document.getElementById('cartDrawer');
const cartBackdrop = document.getElementById('cartBackdrop');

document.querySelectorAll('[data-filter]').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('[data-filter]').forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active');
    products.forEach(function (product) {
      const show = button.dataset.filter === 'all' || product.dataset.category === button.dataset.filter;
      product.classList.toggle('hidden', !show);
      if (show) product.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300 });
    });
  });
});

function openCart() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  document.getElementById('cartCount').textContent = cart.length;
  document.getElementById('drawerCount').textContent = cart.length;
  document.getElementById('cartTotal').textContent = '$' + cart.reduce(function (sum, item) { return sum + item.price; }, 0);
  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">Your cart is waiting for something good.</p>';
    return;
  }
  cartItems.innerHTML = cart.map(function (item, index) {
    return '<div class="cart-row"><span class="cart-thumb">AM</span><div><strong>' + item.name + '</strong><small>$' + item.price + '</small></div><button type="button" data-remove="' + index + '">REMOVE</button></div>';
  }).join('');
  cartItems.querySelectorAll('[data-remove]').forEach(function (button) {
    button.addEventListener('click', function () { cart.splice(Number(button.dataset.remove), 1); renderCart(); });
  });
}

products.forEach(function (product) {
  product.querySelector('button').addEventListener('click', function () {
    cart.push({ name: product.dataset.name, price: Number(product.dataset.price) });
    renderCart();
    openCart();
  });
});

document.getElementById('cartButton').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
cartBackdrop.addEventListener('click', closeCart);
document.getElementById('year').textContent = new Date().getFullYear();`,
      },
    ],
  },
  {
    id: "canvas-desk",
    name: "Canvas Desk",
    category: "Creative workspace",
    preview: "workspace",
    group: "apps",
    icon: "fa-object-group",
    accent: "#6559e8",
    accent2: "#ff765f",
    tone: "Draggable desktop",
    level: "Window interactions",
    description: "A playful browser desktop with draggable windows, a live clock, dock controls, layered notes, and an alternate night palette.",
    highlights: ["Drag windows", "Dock controls", "Theme switch"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Canvas Desk — A movable creative homepage</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="desktop" id="desktop">
      <header class="menu-bar">
        <a href="#" class="desk-logo"><span>CD</span> CANVAS DESK</a>
        <p>PORTFOLIO.OS / AVAILABLE FOR PROJECTS</p>
        <div><button id="themeButton" type="button">NIGHT MODE</button><time id="clock">09:41</time></div>
      </header>

      <div class="desktop-label"><span>DESKTOP / 01</span><h1>Move things<br />until they <em>click.</em></h1><p>This page is a canvas. Drag a window, open something from the dock, and make the system yours.</p></div>

      <section class="window intro-window" data-window="intro" style="--x:7vw;--y:24vh;--w:430px;--accent:#6559e8;">
        <header class="window-bar" data-drag-handle><div><i></i><i></i><i></i></div><span>HELLO.TXT</span><button type="button" data-close aria-label="Close window">×</button></header>
        <div class="window-body intro-body"><span class="portrait" aria-hidden="true"><i></i><b>HI</b></span><div><p>DESIGNER / DEVELOPER / MAKER</p><h2>I build digital spaces with character.</h2><a href="mailto:hello@example.com">LET'S WORK TOGETHER ↗</a></div></div>
      </section>

      <section class="window work-window" data-window="work" style="--x:48vw;--y:19vh;--w:470px;--accent:#ff765f;">
        <header class="window-bar" data-drag-handle><div><i></i><i></i><i></i></div><span>SELECTED_WORK.APP</span><button type="button" data-close aria-label="Close window">×</button></header>
        <div class="window-body work-body">
          <article><span>01 / IDENTITY</span><strong>Common Thread</strong><i class="project-art coral"></i></article>
          <article><span>02 / PRODUCT</span><strong>Signal Atlas</strong><i class="project-art violet"></i></article>
          <article><span>03 / CULTURE</span><strong>Night School</strong><i class="project-art yellow"></i></article>
        </div>
      </section>

      <section class="window note-window" data-window="note" style="--x:35vw;--y:60vh;--w:250px;--accent:#efbd35;">
        <header class="window-bar" data-drag-handle><div><i></i><i></i><i></i></div><span>NOTE_04</span><button type="button" data-close aria-label="Close window">×</button></header>
        <div class="window-body note-body"><strong>MAKE IT<br />USEFUL.</strong><em>THEN MAKE IT<br />UNFORGETTABLE.</em><span>— DESK RULE 01</span></div>
      </section>

      <section class="window contact-window is-minimized" data-window="contact" style="--x:69vw;--y:56vh;--w:310px;--accent:#38b98f;">
        <header class="window-bar" data-drag-handle><div><i></i><i></i><i></i></div><span>CONTACT.CARD</span><button type="button" data-close aria-label="Close window">×</button></header>
        <div class="window-body contact-body"><span>START A CONVERSATION</span><a href="mailto:hello@example.com">hello@canvasdesk.design</a><p>Lagos · London · Remote</p></div>
      </section>

      <nav class="dock" aria-label="Desktop windows">
        <button type="button" data-open="intro" title="About"><span class="violet">Aa</span><small>About</small></button>
        <button type="button" data-open="work" title="Work"><span class="coral">▦</span><small>Work</small></button>
        <button type="button" data-open="note" title="Notes"><span class="yellow">✦</span><small>Notes</small></button>
        <button type="button" data-open="contact" title="Contact"><span class="green">@</span><small>Contact</small></button>
      </nav>
      <div class="cursor-tip" aria-hidden="true">DRAG ME <span>↖</span></div>
    </main>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --desk: #ddd9ff; --ink: #272258; --paper: #fbfaff; --line: rgba(39,34,88,.24); --shadow: 0 22px 55px rgba(49,42,117,.2); }
* { box-sizing: border-box; }
body { margin: 0; overflow: hidden; color: var(--ink); background: var(--desk); font-family: Arial, Helvetica, sans-serif; }
button, a { font: inherit; }
.desktop { position: relative; width: 100vw; height: 100vh; overflow: hidden; background: radial-gradient(circle, rgba(39,34,88,.19) 1px, transparent 1px), linear-gradient(130deg, rgba(255,255,255,.22), transparent 50%); background-size: 18px 18px, auto; transition: color .3s, background .3s; }
.menu-bar { position: relative; z-index: 100; height: 55px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; padding: 0 18px; border-bottom: 1px solid var(--ink); background: rgba(251,250,255,.7); backdrop-filter: blur(16px); }.desk-logo { display: flex; align-items: center; gap: 9px; width: max-content; color: inherit; text-decoration: none; font-size: 10px; font-weight: 900; letter-spacing: .09em; }.desk-logo span { display: grid; place-items: center; width: 27px; height: 27px; border-radius: 8px; color: white; background: #6559e8; letter-spacing: -.05em; }.menu-bar > p { margin: 0; font-size: 8px; font-weight: 900; letter-spacing: .12em; }.menu-bar > div { justify-self: end; display: flex; align-items: center; gap: 17px; }.menu-bar button { padding: 7px 9px; border: 1px solid var(--ink); border-radius: 99px; color: inherit; background: transparent; font-size: 8px; font-weight: 900; cursor: pointer; }.menu-bar time { font-size: 10px; font-weight: 900; }
.desktop-label { position: absolute; left: 25px; bottom: 22px; max-width: 410px; }.desktop-label > span { font-size: 8px; font-weight: 900; letter-spacing: .13em; }.desktop-label h1 { margin: 10px 0 12px; font-size: clamp(3.2rem, 6vw, 6rem); line-height: .77; letter-spacing: -.075em; }.desktop-label h1 em { color: #6559e8; font-family: Georgia, serif; font-weight: 400; }.desktop-label p { max-width: 42ch; margin: 0; font: 13px/1.45 Georgia, serif; }
.window { position: absolute; z-index: 2; left: var(--x); top: var(--y); width: min(var(--w), calc(100vw - 20px)); overflow: hidden; border: 1px solid var(--ink); border-radius: 11px; background: var(--paper); box-shadow: var(--shadow); transition: opacity .2s, transform .2s; }.window.is-front { z-index: 20; }.window.is-minimized { opacity: 0; pointer-events: none; transform: scale(.82) translateY(35px); }.window-bar { height: 34px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 0 9px; border-bottom: 1px solid var(--ink); background: color-mix(in srgb, var(--accent) 18%, var(--paper)); cursor: grab; user-select: none; }.window-bar:active { cursor: grabbing; }.window-bar > div { display: flex; gap: 4px; }.window-bar i { width: 7px; height: 7px; border: 1px solid var(--ink); border-radius: 50%; background: var(--paper); }.window-bar > span { font-size: 7px; font-weight: 900; letter-spacing: .12em; }.window-bar button { justify-self: end; width: 22px; height: 22px; padding: 0; border: 0; color: var(--ink); background: transparent; font-size: 18px; cursor: pointer; }.window-body { padding: 15px; }
.intro-body { display: grid; grid-template-columns: 130px 1fr; gap: 17px; }.portrait { position: relative; min-height: 165px; display: grid; place-items: center; overflow: hidden; border-radius: 70px 70px 14px 14px; color: white; background: #6559e8; }.portrait::before { content: ""; position: absolute; width: 85px; height: 85px; top: 24px; border-radius: 50%; background: #ffb19f; }.portrait i { position: absolute; width: 135px; height: 85px; bottom: -15px; border-radius: 50% 50% 0 0; background: #ff765f; }.portrait b { z-index: 2; margin-top: 27px; font-size: 29px; }.intro-body > div > p { margin: 3px 0 12px; color: #6559e8; font-size: 7px; font-weight: 900; letter-spacing: .12em; }.intro-body h2 { margin: 0 0 18px; font-size: 27px; line-height: .93; letter-spacing: -.05em; }.intro-body a { font-size: 8px; font-weight: 900; letter-spacing: .09em; }
.work-body { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }.work-body article { display: grid; gap: 7px; }.work-body article > span { font-size: 6px; font-weight: 900; letter-spacing: .08em; }.work-body article > strong { min-height: 28px; font-size: 11px; }.project-art { height: 115px; display: block; border: 1px solid var(--ink); }.project-art.coral { background: radial-gradient(circle, #efbd35 0 20%, transparent 21%), conic-gradient(#ff765f, #6559e8, #ff765f); }.project-art.violet { background: repeating-linear-gradient(45deg, #6559e8 0 12px, #ddd9ff 13px 24px); }.project-art.yellow { background: linear-gradient(20deg, transparent 43%, #272258 44% 47%, transparent 48%), #efbd35; }
.note-body { display: grid; gap: 10px; min-height: 170px; color: #442d09; background: #efbd35; }.note-body strong { font-size: 36px; line-height: .78; letter-spacing: -.07em; }.note-body em { color: #6559e8; font: 18px/.9 Georgia, serif; }.note-body span { margin-top: auto; font-size: 7px; font-weight: 900; letter-spacing: .1em; }
.contact-body { display: grid; gap: 12px; }.contact-body > span { color: #279373; font-size: 7px; font-weight: 900; letter-spacing: .12em; }.contact-body a { font-size: 19px; font-weight: 900; letter-spacing: -.04em; }.contact-body p { margin: 0; font: 12px Georgia, serif; }
.dock { position: absolute; z-index: 90; left: 50%; bottom: 18px; translate: -50%; display: flex; gap: 6px; padding: 7px; border: 1px solid rgba(39,34,88,.18); border-radius: 16px; background: rgba(251,250,255,.7); box-shadow: 0 14px 35px rgba(49,42,117,.18); backdrop-filter: blur(14px); }.dock button { display: grid; justify-items: center; gap: 3px; padding: 0; border: 0; color: var(--ink); background: transparent; cursor: pointer; }.dock button > span { width: 43px; height: 43px; display: grid; place-items: center; border: 1px solid var(--ink); border-radius: 11px; color: white; font-size: 17px; font-weight: 900; transition: transform .18s; }.dock button:hover > span { transform: translateY(-7px) rotate(-3deg); }.dock small { font-size: 6px; font-weight: 800; }.violet { background: #6559e8; }.coral { background: #ff765f; }.yellow { color: var(--ink) !important; background: #efbd35; }.green { background: #38b98f; }.cursor-tip { position: absolute; right: 4%; bottom: 11%; padding: 8px 10px; border-radius: 8px; color: white; background: #6559e8; font-size: 7px; font-weight: 900; letter-spacing: .1em; transform: rotate(4deg); animation: float 2s ease-in-out infinite; }.cursor-tip span { font-size: 18px; }
.desktop.night { --desk: #17152c; --ink: #f1efff; --paper: #25213f; --line: rgba(241,239,255,.2); --shadow: 0 22px 55px rgba(0,0,0,.4); background-color: var(--desk); }.desktop.night .menu-bar { background: rgba(23,21,44,.72); }.desktop.night .window-bar i { background: var(--paper); }.desktop.night .desktop-label h1 em { color: #a99fff; }
@keyframes float { 50% { transform: translateY(-8px) rotate(1deg); } }
@media (max-width: 780px) { body { overflow: auto; }.desktop { min-height: 1100px; height: auto; overflow: hidden; }.menu-bar { grid-template-columns: 1fr auto; }.menu-bar > p { display: none; }.desktop-label { top: 85px; bottom: auto; }.window { left: 12px !important; width: calc(100% - 24px); }.intro-window { top: 280px !important; }.work-window { top: 520px !important; }.note-window { top: 795px !important; }.contact-window { top: 1015px !important; }.dock { position: fixed; }.cursor-tip { display: none; } }
@media (max-width: 480px) { .menu-bar > div button { display: none; }.desktop-label h1 { font-size: 15vw; }.intro-body { grid-template-columns: 90px 1fr; }.portrait { min-height: 145px; }.work-body { grid-template-columns: 1fr 1fr; }.work-body article:last-child { display: none; }.dock button > span { width: 38px; height: 38px; } }
`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const desktop = document.getElementById('desktop');
const windows = Array.from(document.querySelectorAll('[data-window]'));
let topLayer = 20;

function bringToFront(windowElement) {
  topLayer += 1;
  windows.forEach(function (item) { item.classList.remove('is-front'); });
  windowElement.classList.add('is-front');
  windowElement.style.zIndex = topLayer;
}

windows.forEach(function (windowElement) {
  const handle = windowElement.querySelector('[data-drag-handle]');
  let drag = null;
  windowElement.addEventListener('pointerdown', function () { bringToFront(windowElement); });
  handle.addEventListener('pointerdown', function (event) {
    if (event.target.closest('button') || window.innerWidth < 780) return;
    const rect = windowElement.getBoundingClientRect();
    drag = { offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top };
    handle.setPointerCapture(event.pointerId);
  });
  handle.addEventListener('pointermove', function (event) {
    if (!drag) return;
    const maxX = window.innerWidth - windowElement.offsetWidth - 8;
    const maxY = window.innerHeight - windowElement.offsetHeight - 8;
    windowElement.style.left = Math.max(8, Math.min(maxX, event.clientX - drag.offsetX)) + 'px';
    windowElement.style.top = Math.max(63, Math.min(maxY, event.clientY - drag.offsetY)) + 'px';
  });
  handle.addEventListener('pointerup', function () { drag = null; });
  windowElement.querySelector('[data-close]').addEventListener('click', function () {
    windowElement.classList.add('is-minimized');
  });
});

document.querySelectorAll('[data-open]').forEach(function (button) {
  button.addEventListener('click', function () {
    const windowElement = document.querySelector('[data-window="' + button.dataset.open + '"]');
    windowElement.classList.remove('is-minimized');
    bringToFront(windowElement);
  });
});

document.getElementById('themeButton').addEventListener('click', function (event) {
  desktop.classList.toggle('night');
  event.currentTarget.textContent = desktop.classList.contains('night') ? 'DAY MODE' : 'NIGHT MODE';
});

function updateClock() {
  document.getElementById('clock').textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
updateClock();
setInterval(updateClock, 30000);`,
      },
    ],
  },
  {
    id: "loop-lab",
    name: "Loop Lab",
    category: "Audio experiment",
    preview: "loop",
    group: "apps",
    icon: "fa-wave-square",
    accent: "#ff6735",
    accent2: "#d9ff43",
    tone: "Browser instrument",
    level: "Web Audio sequencer",
    description: "A playable 16-step rhythm machine with Web Audio synthesis, tempo control, transport, pattern presets, and animated playhead.",
    highlights: ["Playable sequencer", "Web Audio API", "Pattern presets"],
    files: [
      {
        name: "index.html",
        type: "html",
        content: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Loop Lab — Browser rhythm machine</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="machine">
      <header class="machine-head">
        <a href="#" class="brand"><span>LL</span><div>LOOP LAB<small>BROWSER RHYTHM UNIT / 08</small></div></a>
        <div class="status"><i id="statusLight"></i><span id="statusText">ENGINE READY</span></div>
        <button class="about-button" type="button">ABOUT THIS UNIT ↗</button>
      </header>

      <section class="hero-row">
        <div><span class="eyebrow">MAKE A PATTERN / BREAK THE PATTERN</span><h1>TURN THE<br />BROWSER<br /><em>UP.</em></h1></div>
        <div class="dial-cluster">
          <div class="dial" id="tempoDial"><span id="tempoValue">112</span><small>BPM</small><i></i></div>
          <label>Tempo<input id="tempoInput" type="range" min="70" max="170" value="112" /></label>
        </div>
      </section>

      <section class="transport">
        <div class="transport-buttons"><button class="play" id="playButton" type="button"><span>▶</span> PLAY</button><button id="clearButton" type="button">CLEAR</button></div>
        <div class="preset-buttons" aria-label="Pattern presets"><span>PATTERN</span><button class="active" data-preset="pulse" type="button">PULSE</button><button data-preset="broken" type="button">BROKEN</button><button data-preset="empty" type="button">EMPTY</button></div>
        <div class="counter"><span>STEP</span><strong id="stepCounter">01 / 16</strong></div>
      </section>

      <section class="sequencer" aria-label="16 step rhythm sequencer">
        <div class="step-numbers"><span></span><div id="stepNumbers"></div></div>
        <div id="sequenceRows"></div>
      </section>

      <section class="lower-grid">
        <article class="info-panel"><span>HOW TO PLAY</span><h2>Tap squares.<br />Press play.<br /><em>Find the pocket.</em></h2><p>Every sound is synthesized live with the Web Audio API. No samples, no libraries, no download.</p></article>
        <article class="visualizer"><div class="bars" id="visualizerBars"></div><span>OUTPUT / LIVE</span></article>
        <article class="notes-panel"><span>PATCH NOTES</span><ul><li><b>01</b> Four synthesized voices</li><li><b>02</b> Sixteen programmable steps</li><li><b>03</b> Tempo from 70 to 170 BPM</li></ul></article>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
</html>`,
      },
      {
        name: "style.css",
        type: "css",
        content: `:root { --black: #100c0a; --panel: #1a1411; --panel-2: #241b17; --white: #f6f0e9; --orange: #ff6735; --acid: #d9ff43; --line: rgba(246,240,233,.15); }
* { box-sizing: border-box; }
body { margin: 0; color: var(--white); background: var(--black); font-family: Arial, Helvetica, sans-serif; }
button, input, a { font: inherit; }
.machine { width: min(1420px, 100%); min-height: 100vh; margin: auto; border-inline: 1px solid var(--line); background: linear-gradient(rgba(255,255,255,.018) 1px, transparent 1px), var(--black); background-size: 100% 32px; }
.machine-head { height: 76px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 20px; padding: 0 clamp(15px, 3vw, 34px); border-bottom: 1px solid var(--line); }.brand { display: flex; align-items: center; gap: 11px; width: max-content; color: inherit; text-decoration: none; }.brand > span { width: 36px; height: 36px; display: grid; place-items: center; border-radius: 50%; color: var(--black); background: var(--orange); font-weight: 900; letter-spacing: -.06em; }.brand > div { display: grid; font-size: 12px; font-weight: 900; letter-spacing: .12em; }.brand small { margin-top: 3px; color: rgba(246,240,233,.44); font-size: 6px; letter-spacing: .1em; }.status { display: flex; align-items: center; gap: 8px; color: rgba(246,240,233,.55); font-size: 8px; font-weight: 900; letter-spacing: .12em; }.status i { width: 7px; height: 7px; border-radius: 50%; background: var(--acid); box-shadow: 0 0 10px var(--acid); }.about-button { justify-self: end; padding: 9px 11px; border: 1px solid var(--line); color: var(--white); background: transparent; font-size: 7px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }
.hero-row { min-height: 430px; display: grid; grid-template-columns: 1.25fr .75fr; align-items: end; gap: 40px; padding: 50px clamp(15px, 3vw, 34px) 38px; border-bottom: 1px solid var(--line); overflow: hidden; }.eyebrow { color: var(--orange); font-size: 8px; font-weight: 900; letter-spacing: .15em; }.hero-row h1 { margin: 24px 0 0; font-size: clamp(5rem, 11vw, 11.5rem); line-height: .67; letter-spacing: -.09em; }.hero-row h1 em { color: var(--acid); font-family: Georgia, serif; font-weight: 400; }.dial-cluster { justify-self: center; display: grid; justify-items: center; gap: 25px; }.dial { position: relative; width: min(30vw, 260px); aspect-ratio: 1; display: grid; place-items: center; border: 1px solid var(--line); border-radius: 50%; background: repeating-conic-gradient(from -130deg, rgba(246,240,233,.34) 0 1deg, transparent 1deg 7deg); box-shadow: inset 0 0 0 24px var(--black), inset 0 0 0 25px var(--line); }.dial::before { content: ""; position: absolute; inset: 48px; border-radius: 50%; background: radial-gradient(circle at 34% 28%, #3b2c25, #17100d 70%); box-shadow: 0 18px 40px rgba(0,0,0,.5); }.dial span, .dial small { position: absolute; z-index: 2; }.dial span { font-size: clamp(3rem, 6vw, 5.5rem); font-weight: 900; letter-spacing: -.08em; }.dial small { margin-top: 80px; color: var(--orange); font-size: 8px; font-weight: 900; letter-spacing: .12em; }.dial i { position: absolute; z-index: 2; width: 5px; height: 54px; top: 38px; border-radius: 5px; background: var(--acid); transform-origin: 50% 91px; transform: rotate(var(--dial-angle, -35deg)); transition: transform .18s; }.dial-cluster label { display: grid; gap: 8px; width: 190px; color: rgba(246,240,233,.5); font-size: 7px; font-weight: 900; letter-spacing: .1em; text-transform: uppercase; }.dial-cluster input { width: 100%; accent-color: var(--orange); }
.transport { min-height: 82px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 24px; padding: 13px clamp(15px, 3vw, 34px); border-bottom: 1px solid var(--line); }.transport button { padding: 11px 15px; border: 1px solid var(--line); color: var(--white); background: var(--panel); font-size: 8px; font-weight: 900; letter-spacing: .1em; cursor: pointer; }.transport-buttons { display: flex; gap: 7px; }.transport-buttons .play { border-color: var(--orange); color: var(--black); background: var(--orange); }.transport-buttons .play.playing { border-color: var(--acid); background: var(--acid); }.preset-buttons { display: flex; align-items: center; gap: 5px; }.preset-buttons > span { margin-right: 8px; color: rgba(246,240,233,.45); font-size: 7px; font-weight: 900; letter-spacing: .12em; }.preset-buttons button.active { border-color: var(--acid); color: var(--acid); }.counter { justify-self: end; display: grid; justify-items: end; gap: 4px; }.counter span { color: rgba(246,240,233,.4); font-size: 7px; font-weight: 900; letter-spacing: .12em; }.counter strong { font-size: 12px; letter-spacing: .08em; }
.sequencer { padding: 28px clamp(15px, 3vw, 34px) 35px; border-bottom: 1px solid var(--line); overflow-x: auto; }.step-numbers, .sequence-row { min-width: 940px; display: grid; grid-template-columns: 125px 1fr; gap: 12px; }.step-numbers > div, .steps { display: grid; grid-template-columns: repeat(16, 1fr); gap: 5px; }.step-numbers span { height: 21px; }.step-numbers i { color: rgba(246,240,233,.32); font-size: 7px; font-style: normal; text-align: center; }.sequence-row { align-items: center; margin-top: 7px; }.voice-label { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding-right: 9px; }.voice-label div { display: grid; gap: 3px; }.voice-label strong { font-size: 10px; }.voice-label small { color: rgba(246,240,233,.38); font-size: 6px; letter-spacing: .09em; }.voice-label span { width: 8px; height: 8px; border-radius: 50%; background: var(--voice-color); box-shadow: 0 0 8px var(--voice-color); }.step { aspect-ratio: 1.35; min-width: 42px; border: 1px solid var(--line); border-radius: 4px; background: var(--panel); cursor: pointer; transition: transform .1s, background .1s; }.step:hover { transform: translateY(-2px); border-color: rgba(246,240,233,.4); }.step.active { border-color: var(--voice-color); background: var(--voice-color); box-shadow: 0 0 13px color-mix(in srgb, var(--voice-color) 42%, transparent); }.step.current { outline: 2px solid var(--acid); outline-offset: 2px; }
.lower-grid { display: grid; grid-template-columns: 1.1fr .9fr .8fr; }.lower-grid article { min-height: 290px; padding: 28px; border-right: 1px solid var(--line); }.lower-grid article:last-child { border-right: 0; }.lower-grid article > span { color: var(--orange); font-size: 7px; font-weight: 900; letter-spacing: .13em; }.info-panel h2 { margin: 20px 0; font-size: clamp(2.6rem, 5vw, 5rem); line-height: .76; letter-spacing: -.07em; }.info-panel h2 em { color: var(--acid); font-family: Georgia, serif; font-weight: 400; }.info-panel p { max-width: 45ch; color: rgba(246,240,233,.55); font: 13px/1.5 Georgia, serif; }.visualizer { display: flex; flex-direction: column; }.bars { flex: 1; display: flex; align-items: end; gap: 5px; margin-bottom: 20px; }.bars i { flex: 1; min-height: 5%; background: linear-gradient(var(--acid), var(--orange)); transition: height .1s; }.notes-panel ul { margin: 25px 0 0; padding: 0; list-style: none; }.notes-panel li { display: flex; gap: 13px; padding: 15px 0; border-top: 1px solid var(--line); font-size: 10px; }.notes-panel b { color: var(--acid); font-size: 7px; }
@media (max-width: 850px) { .hero-row { grid-template-columns: 1fr; }.dial-cluster { display: none; }.transport { grid-template-columns: 1fr auto; }.preset-buttons { grid-column: 1/-1; grid-row: 2; }.lower-grid { grid-template-columns: 1fr; }.lower-grid article { border-right: 0; border-bottom: 1px solid var(--line); } }
@media (max-width: 540px) { .machine-head { grid-template-columns: 1fr auto; }.machine-head .status { display: none; }.about-button { font-size: 0; }.about-button::after { content: "?"; font-size: 12px; }.hero-row { min-height: 360px; }.hero-row h1 { font-size: 22vw; }.transport { grid-template-columns: 1fr auto; }.preset-buttons { overflow-x: auto; }.counter { align-self: start; }.sequencer { padding-inline: 10px; } }
`,
      },
      {
        name: "script.js",
        type: "js",
        content: `const voices = [
  { id: 'kick', name: 'KICK', detail: 'SINE / LOW', color: '#ff6735' },
  { id: 'snare', name: 'SNARE', detail: 'NOISE / SNAP', color: '#d9ff43' },
  { id: 'hat', name: 'HAT', detail: 'NOISE / HIGH', color: '#57b7ff' },
  { id: 'tone', name: 'TONE', detail: 'SQUARE / C3', color: '#b27cff' }
];
const patterns = {
  pulse: [[0,4,8,12],[4,12],[2,6,10,14],[3,7,11,15]],
  broken: [[0,5,8,11],[4,10,14],[2,3,7,9,13,15],[1,6,12]],
  empty: [[],[],[],[]]
};
let pattern = voices.map(function () { return Array(16).fill(false); });
let audioContext = null;
let timer = null;
let currentStep = 0;
let playing = false;

const rows = document.getElementById('sequenceRows');
const numbers = document.getElementById('stepNumbers');
for (let index = 0; index < 16; index += 1) {
  const number = document.createElement('i');
  number.textContent = String(index + 1).padStart(2, '0');
  numbers.appendChild(number);
}
voices.forEach(function (voice, voiceIndex) {
  const row = document.createElement('div');
  row.className = 'sequence-row';
  row.innerHTML = '<div class="voice-label" style="--voice-color:' + voice.color + '"><div><strong>' + voice.name + '</strong><small>' + voice.detail + '</small></div><span></span></div><div class="steps"></div>';
  const steps = row.querySelector('.steps');
  for (let stepIndex = 0; stepIndex < 16; stepIndex += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'step';
    button.style.setProperty('--voice-color', voice.color);
    button.setAttribute('aria-label', voice.name + ' step ' + (stepIndex + 1));
    button.addEventListener('click', function () {
      pattern[voiceIndex][stepIndex] = !pattern[voiceIndex][stepIndex];
      button.classList.toggle('active', pattern[voiceIndex][stepIndex]);
      if (pattern[voiceIndex][stepIndex]) playVoice(voice.id);
    });
    steps.appendChild(button);
  }
  rows.appendChild(row);
});

const bars = document.getElementById('visualizerBars');
for (let index = 0; index < 24; index += 1) {
  const bar = document.createElement('i');
  bar.style.height = 8 + Math.random() * 45 + '%';
  bars.appendChild(bar);
}

function ensureAudio() {
  if (!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
  if (audioContext.state === 'suspended') audioContext.resume();
}

function playVoice(id) {
  ensureAudio();
  const now = audioContext.currentTime;
  const gain = audioContext.createGain();
  gain.connect(audioContext.destination);
  if (id === 'kick') {
    const oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(150, now);
    oscillator.frequency.exponentialRampToValueAtTime(42, now + .16);
    gain.gain.setValueAtTime(.8, now);
    gain.gain.exponentialRampToValueAtTime(.001, now + .2);
    oscillator.connect(gain); oscillator.start(now); oscillator.stop(now + .21);
  } else if (id === 'tone') {
    const oscillator = audioContext.createOscillator();
    oscillator.type = 'square'; oscillator.frequency.value = 130.81;
    gain.gain.setValueAtTime(.14, now); gain.gain.exponentialRampToValueAtTime(.001, now + .12);
    oscillator.connect(gain); oscillator.start(now); oscillator.stop(now + .13);
  } else {
    const length = audioContext.sampleRate * (id === 'snare' ? .16 : .055);
    const buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < length; index += 1) data[index] = Math.random() * 2 - 1;
    const noise = audioContext.createBufferSource();
    const filter = audioContext.createBiquadFilter();
    noise.buffer = buffer; filter.type = 'highpass'; filter.frequency.value = id === 'hat' ? 6500 : 1200;
    gain.gain.setValueAtTime(id === 'hat' ? .12 : .28, now); gain.gain.exponentialRampToValueAtTime(.001, now + (id === 'hat' ? .06 : .17));
    noise.connect(filter); filter.connect(gain); noise.start(now);
  }
  Array.from(bars.children).forEach(function (bar) { bar.style.height = 8 + Math.random() * 92 + '%'; });
}

function renderPattern() {
  document.querySelectorAll('.sequence-row').forEach(function (row, voiceIndex) {
    row.querySelectorAll('.step').forEach(function (button, stepIndex) { button.classList.toggle('active', pattern[voiceIndex][stepIndex]); });
  });
}

function loadPreset(name) {
  pattern = patterns[name].map(function (activeSteps) { return Array.from({ length: 16 }, function (_, index) { return activeSteps.includes(index); }); });
  renderPattern();
}

function tick() {
  document.querySelectorAll('.step').forEach(function (button) { button.classList.remove('current'); });
  document.querySelectorAll('.sequence-row').forEach(function (row, voiceIndex) {
    const button = row.querySelectorAll('.step')[currentStep];
    button.classList.add('current');
    if (pattern[voiceIndex][currentStep]) playVoice(voices[voiceIndex].id);
  });
  document.getElementById('stepCounter').textContent = String(currentStep + 1).padStart(2, '0') + ' / 16';
  currentStep = (currentStep + 1) % 16;
}

function restartTimer() {
  clearInterval(timer);
  if (playing) timer = setInterval(tick, (60000 / Number(document.getElementById('tempoInput').value)) / 4);
}

document.getElementById('playButton').addEventListener('click', function (event) {
  playing = !playing; ensureAudio();
  event.currentTarget.classList.toggle('playing', playing);
  event.currentTarget.innerHTML = playing ? '<span>■</span> STOP' : '<span>▶</span> PLAY';
  document.getElementById('statusText').textContent = playing ? 'SEQUENCE RUNNING' : 'ENGINE READY';
  restartTimer();
});
document.getElementById('clearButton').addEventListener('click', function () { loadPreset('empty'); });
document.getElementById('tempoInput').addEventListener('input', function (event) {
  const tempo = Number(event.target.value);
  document.getElementById('tempoValue').textContent = tempo;
  document.getElementById('tempoDial').style.setProperty('--dial-angle', -120 + ((tempo - 70) / 100) * 240 + 'deg');
  restartTimer();
});
document.querySelectorAll('[data-preset]').forEach(function (button) {
  button.addEventListener('click', function () {
    document.querySelectorAll('[data-preset]').forEach(function (item) { item.classList.remove('active'); });
    button.classList.add('active'); loadPreset(button.dataset.preset);
  });
});
loadPreset('pulse');`,
      },
    ],
  },
];
