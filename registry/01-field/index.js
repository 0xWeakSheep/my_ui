const root = document.querySelector(".experience");
const canvas = document.getElementById("pollenCanvas");
const ctx = canvas.getContext("2d");
const windValue = document.getElementById("windValue");
const buttons = document.querySelectorAll("[data-mode-button]");

let width = 0;
let height = 0;
let dpr = 1;
let particles = [];
let pointerX = 0;
let pointerY = 0;
let mode = "golden";

const modeSettings = {
  golden: { speed: 0.45, count: 82, wind: 12, color: "rgba(242, 196, 109," },
  wind: { speed: 1.25, count: 120, wind: 27, color: "rgba(255, 217, 142," },
  dusk: { speed: 0.28, count: 64, wind: 7, color: "rgba(134, 183, 201," },
};

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 2);
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createParticles();
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function createParticles() {
  const settings = modeSettings[mode];
  particles = Array.from({ length: settings.count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: randomBetween(0.7, 2.5),
    vx: randomBetween(0.08, 0.42),
    vy: randomBetween(-0.06, 0.18),
    alpha: randomBetween(0.08, 0.4),
    drift: randomBetween(0.001, 0.006),
    phase: Math.random() * Math.PI * 2,
  }));
}

function drawParticles(time) {
  const settings = modeSettings[mode];
  ctx.clearRect(0, 0, width, height);

  for (const p of particles) {
    const wave = Math.sin(time * p.drift + p.phase);
    p.x += (p.vx * settings.speed) + pointerX * 0.16 + wave * 0.08;
    p.y += p.vy * settings.speed + pointerY * 0.08;

    if (p.x > width + 20) p.x = -20;
    if (p.x < -20) p.x = width + 20;
    if (p.y > height + 20) p.y = -20;
    if (p.y < -20) p.y = height + 20;

    ctx.beginPath();
    ctx.fillStyle = `${settings.color} ${p.alpha})`;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function animate(time) {
  drawParticles(time);
  requestAnimationFrame(animate);
}

function setPointerVars(event) {
  const x = event.clientX / window.innerWidth - 0.5;
  const y = event.clientY / window.innerHeight - 0.5;
  pointerX += (x - pointerX) * 0.16;
  pointerY += (y - pointerY) * 0.16;
  root.style.setProperty("--mx", pointerX.toFixed(3));
  root.style.setProperty("--my", pointerY.toFixed(3));
}

function setMode(nextMode) {
  mode = nextMode;
  root.dataset.mode = nextMode;
  windValue.textContent = `${modeSettings[nextMode].wind} km/h`;
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.modeButton === nextMode);
  });
  createParticles();
}

buttons.forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.modeButton));
});

window.addEventListener("resize", resize);
window.addEventListener("pointermove", setPointerVars);

resize();
requestAnimationFrame(animate);
