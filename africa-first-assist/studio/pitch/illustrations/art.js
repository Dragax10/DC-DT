// Signal Convergence: core algorithm (p5 instance mode)
function hexToRgb(h) { h = h.replace('#', ''); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
function smooth(e0, e1, x) { const t = Math.min(1, Math.max(0, (x - e0) / (e1 - e0))); return t * t * (3 - 2 * t); }

function drawConvergence(p, P) {
  const W = p.width, H = p.height, TAU = Math.PI * 2;
  p.randomSeed(P.seed); p.noiseSeed(P.seed);
  p.blendMode(p.BLEND); p.background(P.bg);
  const cLine = hexToRgb(P.line), cGlow = hexToRgb(P.glow);
  const src = P.sources.map(s => ({ x: s.x * W, y: s.y * H, r: s.r || 26 }));
  const diag = Math.hypot(W, H);
  const mask = (x, y) => {
    let m = 1;
    if (P.clearX != null) m *= smooth((P.clearX - P.soft) * W, (P.clearX + P.soft) * W, x);
    if (P.clearY != null) m *= smooth((P.clearY - P.soft) * H, (P.clearY + P.soft) * H, y);
    if (P.fadeBottom != null) m *= 1 - smooth(P.fadeBottom, P.fadeBottom + 0.1, y / H);
    return Math.pow(m, 1.6);
  };
  const nearest = (x, y) => { let b = src[0], bd = 1e9; for (const s of src) { const d = Math.hypot(s.x - x, s.y - y); if (d < bd) { bd = d; b = s; } } return [b, bd]; };

  p.blendMode(P.blend === 'add' ? p.ADD : p.BLEND); p.noFill(); p.strokeCap(p.ROUND);
  const snapA = Math.PI / 4, chunk = 6, stepLen = P.stepLen || 2.4;

  for (let i = 0; i < P.particles; i++) {
    // origins: scattered, biased away from the cores
    let x, y, tries = 0;
    do { x = p.random(-0.08, 1.08) * W; y = p.random(-0.08, 1.08) * H; tries++; }
    while (nearest(x, y)[1] < diag * 0.12 && tries < 20);
    const [s0, d0] = nearest(x, y);
    const stopAt = Math.max(s0.r * p.random(0.6, 1.4), d0 * (1 - P.reach));
    const w = p.random() < 0.06 ? P.weight * 1.3 : P.weight;
    let pts = [[x, y, d0]];
    for (let k = 0; k < P.steps; k++) {
      const [s, d] = nearest(x, y);
      if (d < stopAt) break;
      const n = p.noise(x * P.noiseScale, y * P.noiseScale) * 0.7 + p.noise(x * P.noiseScale * 3.1, y * P.noiseScale * 3.1) * 0.3;
      const na = n * TAU * 2;
      const aa = Math.atan2(s.y - y, s.x - x);
      const t = Math.pow(1 - Math.min(1, d / (diag * 0.75)), 1.6) * P.pull + 0.04;
      let vx = Math.cos(na) * (1 - t) + Math.cos(aa) * t;
      let vy = Math.sin(na) * (1 - t) + Math.sin(aa) * t;
      let a = Math.atan2(vy, vx);
      a = a + (Math.round(a / snapA) * snapA - a) * P.snap;   // eight-fold khatam pull
      x += Math.cos(a) * stepLen; y += Math.sin(a) * stepLen;
      pts.push([x, y, d]);
    }
    for (let k = 0; k < pts.length - 1; k += chunk) {
      const seg = pts.slice(k, k + chunk + 1);
      const [mx, my, md] = seg[0];
      const prox = 1 - Math.min(1, md / (diag * 0.6));
      const m = mask(mx, my);
      if (m < 0.01) continue;
      const c = cLine.map((v, j) => v + (cGlow[j] - v) * Math.pow(prox, 2.2));
      const sat = 1 - 0.75 * smooth(0.78, 0.97, prox);   // keep the core from blowing out
      p.stroke(c[0], c[1], c[2], 255 * P.alpha * 1.25 * (0.3 + 0.7 * Math.pow(prox, 1.5)) * sat * m);
      p.strokeWeight(w * (0.6 + prox * 0.8));
      p.beginShape(); for (const q of seg) p.vertex(q[0], q[1]); p.endShape();
    }
  }

  // ripples: the tap travelling outward
  for (const s of src) {
    let r = s.r * 2.2;
    for (let k = 0; k < P.rings; k++) {
      const dashes = 8 * (k + 2), gap = 0.42;
      const fade = Math.pow(1 - k / P.rings, 1.4);
      for (let j = 0; j < dashes; j++) {
        const a0 = (j / dashes) * TAU + k * 0.11, a1 = a0 + (TAU / dashes) * (1 - gap);
        const mx = s.x + Math.cos(a0) * r, my = s.y + Math.sin(a0) * r;
        const m = mask(mx, my); if (m < 0.01) continue;
        p.stroke(cGlow[0], cGlow[1], cGlow[2], 255 * P.ringAlpha * fade * m);
        p.strokeWeight(1.8);
        p.arc(s.x, s.y, r * 2, r * 2, a0, a1);
      }
      r *= P.ringRatio;
    }
    // core glow
    if (P.core > 0) {
      p.noStroke();
      for (let g = 24; g > 0; g--) { p.fill(cGlow[0], cGlow[1], cGlow[2], 255 * 0.022 * P.core * (1 - g / 25)); p.circle(s.x, s.y, s.r * 0.18 * g); }
      p.noFill(); p.stroke(255, 255, 255, 255 * P.core); p.strokeWeight(3); p.circle(s.x, s.y, s.r * 1.1);
      p.noStroke(); p.fill(255, 255, 255, 255 * P.core); p.circle(s.x, s.y, s.r * 0.5);
      p.noFill();
    }
  }
  p.blendMode(p.BLEND);
}

const PRESETS = {
  cover:   { seed: 2611, bg: '#191824', line: '#1D5C8C', glow: '#BFE0F5', particles: 4200, steps: 700, noiseScale: 0.0021, pull: 1.0, snap: 0.32, reach: 1, alpha: 0.22, weight: 1.0, rings: 9, ringRatio: 1.3, ringAlpha: 0.5, core: 1, sources: [{ x: 0.79, y: 0.44, r: 30 }], clearX: 0.46, soft: 0.16 , fadeBottom: 0.86 },
  moment:  { seed: 1981, bg: '#006FB1', line: '#2F8AC6', glow: '#D8ECF9', particles: 3200, steps: 700, noiseScale: 0.0024, pull: 0.9, snap: 0.32, reach: 0.5, alpha: 0.26, weight: 1.0, rings: 7, ringRatio: 1.36, ringAlpha: 0.4, core: 0.5, sources: [{ x: 0.86, y: 0.80, r: 22 }], clearX: 0.62, clearY: 0.42, soft: 0.14 },
  promise: { seed: 3003, bg: '#191824', line: '#1D5C8C', glow: '#BFE0F5', particles: 4500, steps: 700, noiseScale: 0.0022, pull: 1.0, snap: 0.32, reach: 1, alpha: 0.2, weight: 1.0, rings: 6, ringRatio: 1.3, ringAlpha: 0.45, core: 0.85, sources: [{ x: 0.76, y: 0.26, r: 22 }, { x: 0.89, y: 0.54, r: 22 }, { x: 0.74, y: 0.80, r: 22 }], clearX: 0.6, soft: 0.13 , fadeBottom: 0.86 },
  ask:     { seed: 1119, bg: '#006FB1', line: '#2F8AC6', glow: '#D8ECF9', particles: 3600, steps: 700, noiseScale: 0.0022, pull: 1.0, snap: 0.32, reach: 1, alpha: 0.26, weight: 1.0, rings: 8, ringRatio: 1.3, ringAlpha: 0.45, core: 0.9, sources: [{ x: 0.80, y: 0.80, r: 24 }], clearX: 0.55, clearY: 0.72, soft: 0.12, fadeBottom: 0.86 },
};
if (typeof module !== 'undefined') module.exports = { drawConvergence, PRESETS };
