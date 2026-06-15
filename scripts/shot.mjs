// Headless screenshot helper for gallery QA.
// Usage: node scripts/shot.mjs <url> <outPath> [width=1440] [height=900] [full=1]
import { chromium } from 'playwright';

const [, , url, out, width = '1440', height = '900', full = '1'] = process.argv;
if (!url || !out) {
  console.error('usage: node scripts/shot.mjs <url> <out> [w] [h] [full]');
  process.exit(2);
}

const browser = await chromium.launch();
try {
  const page = await browser.newPage({
    viewport: { width: Number(width), height: Number(height) },
    deviceScaleFactor: 1,
  });
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(900); // let fonts/animations settle
  await page.screenshot({ path: out, fullPage: full !== '0' });
  console.log('OK', out);
} catch (err) {
  console.error('SHOT_ERROR', err?.message || err);
  process.exit(1);
} finally {
  await browser.close();
}
