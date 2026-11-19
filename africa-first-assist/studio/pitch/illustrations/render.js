const { chromium } = require('playwright'); const fs = require('fs'); const path = require('path');
const dir = __dirname; const names = process.argv.slice(2);
(async () => {
  const b = await chromium.launch(); const pg = await b.newPage();
  await pg.setContent('<html><body style="margin:0"></body></html>');
  await pg.addScriptTag({ path: path.join(dir, 'p5.min.js') });
  await pg.addScriptTag({ path: path.join(dir, 'art.js') });
  for (const n of names) {
    const t = Date.now();
    const data = await pg.evaluate((n) => new Promise(res => {
      new p5(p => { p.setup = () => { p.pixelDensity(2); p.createCanvas(1920, 1080); p.noLoop(); drawConvergence(p, PRESETS[n]); res(p.canvas.toDataURL('image/jpeg', 0.9)); p.remove(); }; });
    }), n);
    fs.writeFileSync(path.join(dir, 'out', n + '.jpg'), Buffer.from(data.split(',')[1], 'base64'));
    console.log(n, (Date.now() - t) + 'ms');
  }
  await b.close();
})();
