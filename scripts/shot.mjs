// Headless screenshot helper for gallery QA.
// Usage: node scripts/shot.mjs <url> <outPath> [width=1440] [height=900] [full=1] [waitMs=900]
import { chromium } from 'playwright';

const [, , url, out, width = '1440', height = '900', full = '1', waitMs = '900'] =
  process.argv;
if (!url || !out) {
  console.error('usage: node scripts/shot.mjs <url> <out> [w] [h] [full] [waitMs]');
  process.exit(2);
}

const browser = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader'] });
try {
  const page = await browser.newPage({
    viewport: { width: Number(width), height: Number(height) },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(Number(waitMs)); // let fonts / canvas / WebGL / animations settle
  await page.screenshot({ path: out, fullPage: full !== '0' });
  console.log('OK', out);
} catch (err) {
  console.error('SHOT_ERROR', err?.message || err);
  process.exit(1);
} finally {
  await browser.close();
}
