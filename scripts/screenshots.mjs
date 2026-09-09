/**
 * Generates promo screenshots and posters for the theme listing (astro.build/themes).
 *
 * Usage:
 *   npm run build
 *   npm run screenshots
 *
 * Requirements:
 *   - dist/ built (the script serves it with `astro preview`)
 *   - Chrome installed (Playwright uses the system Chrome via channel: "chrome")
 *
 * Output (screenshots/):
 *   poster-1-hero.png        1600x900  — main listing image (light + feature pills)
 *   poster-2-dark.png        1600x900  — dark mode poster
 *   poster-3-print.png       1600x900  — print/PDF poster
 *   poster-4-responsive.png  1600x900  — desktop + mobile poster
 *   og-image.png             1200x630  — personal card (real CV data from /, copied to public/)
 *   og-demo.png              1200x630  — theme poster (used as og:image of /demo)
 *   raw/                     raw page shots (light, dark, mobile, print)
 */
import {chromium} from "playwright";
import {spawn} from "node:child_process";
import {mkdir, writeFile, copyFile, rm} from "node:fs/promises";
import path from "node:path";
import {fileURLToPath} from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "screenshots");
const RAW = path.join(OUT, "raw");
const PORT = 4322;
const BASE = `http://localhost:${PORT}`;
const DEMO_URL = `${BASE}/demo/`;

const CHROME_CHANNEL = "chrome";
const SHOT = {width: 1600, height: 900};

const COLORS = {
    accent: "#bc52ee",
    pillText: "#edd9ff",
    pillBorder: "rgba(188,82,238,.55)",
    pillBg: "rgba(188,82,238,.14)",
    subText: "#d6cbe8",
    eyebrow: "#c084fc",
};

function pill(label) {
    return `<span class="pill">${label}</span>`;
}

function browserFrame(url, imgTag, imgWidth) {
    return `
    <div class="browser" style="width:${imgWidth}px">
      <div class="browser-bar">
        <span class="dot" style="background:#ff5f57"></span>
        <span class="dot" style="background:#febc2e"></span>
        <span class="dot" style="background:#28c840"></span>
        <span class="url">${url}</span>
      </div>
      ${imgTag}
    </div>`;
}

const BASE_CSS = `
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{overflow:hidden}
  body{font-family:'Segoe UI',system-ui,-apple-system,'Helvetica Neue',Arial,sans-serif;color:#fff;
       background:linear-gradient(135deg,#150a22 0%,#1f0f33 48%,#0c0714 100%)}
  #poster{position:relative;
       background:
         radial-gradient(1200px 700px at 78% 18%, rgba(188,82,238,.30), transparent 60%),
         radial-gradient(900px 600px at 10% 88%, rgba(99,61,255,.20), transparent 60%),
         linear-gradient(135deg,#150a22 0%,#1f0f33 48%,#0c0714 100%)}
  .eyebrow{letter-spacing:3.5px;font-size:14px;font-weight:600;text-transform:uppercase;color:${COLORS.eyebrow}}
  h1{font-weight:800;line-height:1.08;letter-spacing:-1px}
  .sub{color:${COLORS.subText};line-height:1.5}
  .pill{display:inline-block;padding:8px 16px;border-radius:999px;font-size:14px;font-weight:600;
        color:${COLORS.pillText};border:1px solid ${COLORS.pillBorder};background:${COLORS.pillBg}}
  .pills{display:flex;gap:10px;flex-wrap:wrap}
  .browser{background:#0b0b14;border-radius:14px;overflow:hidden;
        box-shadow:0 30px 80px rgba(0,0,0,.55),0 0 0 1px rgba(255,255,255,.09)}
  .browser-bar{height:46px;background:#171522;display:flex;align-items:center;gap:8px;padding:0 18px;
        border-bottom:1px solid rgba(255,255,255,.07)}
  .dot{width:13px;height:13px;border-radius:50%}
  .url{margin-left:14px;background:rgba(255,255,255,.06);border-radius:8px;padding:7px 16px;
        font-size:13px;color:#a9a1c2;letter-spacing:.2px}
  .browser img{display:block;width:100%}
  .paper{background:#fff;border-radius:6px;overflow:hidden;
        box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.12)}
  .paper img{display:block;width:100%;height:100%;object-fit:cover;object-position:top center}
  .phone{background:#0b0b14;border-radius:38px;padding:10px;
        box-shadow:0 30px 80px rgba(0,0,0,.6),0 0 0 1px rgba(255,255,255,.12)}
  .phone .screen{border-radius:28px;overflow:hidden}
  .phone img{display:block;width:100%}
`;

function posterHTML({width, height, inner}) {
    return `<!doctype html>
<html><head><meta charset="utf-8"><style>${BASE_CSS}
body{width:${width}px;height:${height}px}
#poster{width:${width}px;height:${height}px}
${inner.css}
</style></head>
<body><div id="poster">${inner.html}</div></body></html>`;
}

// --- Poster layouts ---------------------------------------------------------

function heroPoster() {
    const img = `<img src="raw/desktop-light.png" alt="">`;
    const css = `
    .text{position:absolute;left:80px;top:0;height:100%;width:500px;display:flex;flex-direction:column;justify-content:center;gap:26px}
    .text h1{font-size:62px}
    .text .sub{font-size:21px;max-width:440px}
    .browser{position:absolute;left:660px;top:185px}
    .browser img{width:860px;height:484px;object-fit:cover;object-position:top center}`;
    const html = `
    <div class="text">
      <div class="eyebrow">Astro theme &middot; Free &amp; open source</div>
      <h1>Minimalist CV</h1>
      <div class="sub">A print-ready developer CV template. One config file, zero JavaScript, dark mode included.</div>
      <div class="pills">${pill("Zero JavaScript")}${pill("Print to PDF")}${pill("Single config file")}</div>
    </div>
    ${browserFrame("cv.dzhuk.com", img, 860)}`;
    return {width: SHOT.width, height: SHOT.height, inner: {css, html}};
}

function darkPoster() {
    const img = `<img src="raw/desktop-dark.png" alt="">`;
    const css = `
    .text{position:absolute;left:80px;top:0;height:100%;width:500px;display:flex;flex-direction:column;justify-content:center;gap:26px}
    .text h1{font-size:56px}
    .text .sub{font-size:21px;max-width:440px}
    .browser{position:absolute;left:660px;top:185px}
    .browser img{width:860px;height:484px;object-fit:cover;object-position:top center}`;
    const html = `
    <div class="text">
      <div class="eyebrow">Dark mode &middot; automatic</div>
      <h1>Dark mode,<br>zero JavaScript</h1>
      <div class="sub">Follows the system theme via prefers-color-scheme. No toggle script, no flash of wrong theme.</div>
      <div class="pills">${pill("prefers-color-scheme")}${pill("No flash")}${pill("Zero JS")}</div>
    </div>
    ${browserFrame("cv.dzhuk.com", img, 860)}`;
    return {width: SHOT.width, height: SHOT.height, inner: {css, html}};
}

function printPoster() {
    const css = `
    .text{position:absolute;left:80px;top:0;height:100%;width:520px;display:flex;flex-direction:column;justify-content:center;gap:26px}
    .text h1{font-size:56px}
    .text .sub{font-size:21px;max-width:460px}
    .paper-back{position:absolute;left:712px;top:118px;width:520px;height:735px;background:#3c2b52;border-radius:6px;
        box-shadow:0 0 0 1px rgba(255,255,255,.08)}
    .paper{position:absolute;left:690px;top:96px;width:520px;height:735px}`;
    const html = `
    <div class="text">
      <div class="eyebrow">Print to PDF</div>
      <h1>Recruiter-ready PDF,<br>built in</h1>
      <div class="sub">A dedicated print stylesheet turns the page into a clean one-column resume. Press Ctrl+P — no extensions, no extra tools.</div>
      <div class="pills">${pill("Ctrl + P ready")}${pill("Print-optimized styles")}${pill("Contact links inline")}</div>
    </div>
    <div class="paper-back"></div>
    <div class="paper"><img src="raw/print-full.png" alt=""></div>`;
    return {width: SHOT.width, height: SHOT.height, inner: {css, html}};
}

function responsivePoster() {
    const desktop = `<img src="raw/desktop-light.png" alt="">`;
    const css = `
    .head{position:absolute;left:80px;top:88px;width:720px}
    .head h1{font-size:48px;margin-top:14px}
    .browser{position:absolute;left:80px;top:310px}
    .browser img{width:880px;height:495px;object-fit:cover;object-position:top center}
    .phone{position:absolute;left:1080px;top:200px}
    .phone img{width:300px;height:640px;object-fit:cover;object-position:top center}
    .pills{position:absolute;left:80px;top:856px}`;
    const html = `
    <div class="head">
      <div class="eyebrow">Responsive</div>
      <h1>Looks right on every screen</h1>
    </div>
    ${browserFrame("cv.dzhuk.com", desktop, 880)}
    <div class="phone"><div class="screen"><img src="raw/mobile.png" alt=""></div></div>
    <div class="pills">${pill("Mobile-first")}${pill("Tailwind CSS")}${pill("Static HTML")}</div>`;
    return {width: SHOT.width, height: SHOT.height, inner: {css, html}};
}

function ogPoster() {
    const img = `<img src="raw/desktop-light.png" alt="">`;
    const css = `
    .text{position:absolute;left:64px;top:0;height:100%;width:400px;display:flex;flex-direction:column;justify-content:center;gap:20px}
    .text h1{font-size:52px}
    .text .sub{font-size:18px;max-width:380px}
    .text .pill{font-size:13px;padding:7px 13px}
    .browser{position:absolute;left:500px;top:115px}
    .browser-bar{height:40px}
    .browser img{width:640px;height:360px;object-fit:cover;object-position:top center}`;
    const html = `
    <div class="text">
      <div class="eyebrow">Astro theme &middot; Free</div>
      <h1>Minimalist CV</h1>
      <div class="sub">Print-ready CV template. One config file, zero JavaScript, dark mode included.</div>
      <div class="pills">${pill("Zero JavaScript")}${pill("Print to PDF")}</div>
    </div>
    ${browserFrame("cv.dzhuk.com", img, 640)}`;
    return {width: 1200, height: 630, inner: {css, html}};
}

function personalPoster(personal) {
    const css = `
    body{color:#18181b;background:#fff}
    #poster{background:#fff}
    .wrap{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:70px;padding:0 110px}
    .avatar{width:210px;height:210px;border-radius:26px;object-fit:cover;flex-shrink:0;
        box-shadow:0 14px 36px rgba(0,0,0,.12),0 0 0 1px rgba(0,0,0,.07)}
    .info{display:flex;flex-direction:column;gap:18px;min-width:0}
    .info .eyebrow{color:#a1a1aa}
    .info h1{font-size:58px;font-weight:400;letter-spacing:-.5px;color:#27272a}
    .tag{font-size:21px;color:#52525b;line-height:1.5;max-width:660px}
    .site{margin-top:4px;font-size:15px;color:#71717a}`;
    const html = `
    <div class="wrap">
      <img class="avatar" src="raw/avatar.webp" alt="">
      <div class="info">
        <div class="eyebrow">${personal.jobTitle}</div>
        <h1>${personal.name}</h1>
        <div class="tag">${personal.about}</div>
        <span class="site">${personal.url}</span>
      </div>
    </div>`;
    return {width: 1200, height: 630, inner: {css, html}};
}

// --- Helpers ----------------------------------------------------------------

async function waitForServer(url, timeoutMs = 60000) {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
        try {
            const res = await fetch(url);
            if (res.ok) return;
        } catch {
            // server not up yet
        }
        await new Promise((r) => setTimeout(r, 500));
    }
    throw new Error(`Server at ${url} did not start within ${timeoutMs}ms`);
}

function startPreview() {
    const child = spawn("npx", ["astro", "preview", "--port", String(PORT)], {
        cwd: ROOT,
        shell: true,
        stdio: "ignore",
    });
    return child;
}

function stopPreview(child) {
    if (process.platform === "win32") {
        spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {shell: true});
    } else {
        child.kill("SIGTERM");
    }
}

async function renderPoster(browser, poster, outPath) {
    const htmlPath = path.join(OUT, path.basename(outPath, ".png") + ".html");
    await writeFile(htmlPath, posterHTML(poster));
    const page = await browser.newPage({viewport: {width: poster.width, height: poster.height}});
    await page.goto("file:///" + htmlPath.replace(/\\/g, "/"));
    await page.waitForLoadState("networkidle");
    await page.waitForFunction(
        () => [...document.images].every((img) => img.complete && img.naturalWidth > 0),
        undefined,
        {timeout: 15000},
    );
    const posterEl = page.locator("#poster");
    await posterEl.screenshot({path: outPath, type: "png"});
    await page.close();
    await writeFile(htmlPath, ""); // keep the repo clean — html is regenerable
    await rm(htmlPath, {force: true});
    console.log(`  wrote ${path.relative(ROOT, outPath)}`);
}

// --- Main -------------------------------------------------------------------

async function main() {
    await mkdir(RAW, {recursive: true});

    const preview = startPreview();
    try {
        await waitForServer(BASE);
        console.log(`Preview server up at ${BASE}`);

        const browser = await chromium.launch({channel: CHROME_CHANNEL});

        // Raw shots -----------------------------------------------------------
        // Hide the fixed "Press Ctrl+P" hint bar for clean desktop shots.
        const HIDE_HINT_CSS = "main > p.fixed{display:none !important}";

        const light = await browser.newContext({
            viewport: SHOT, colorScheme: "light", deviceScaleFactor: 1,
        });
        const lp = await light.newPage();
        await lp.goto(DEMO_URL, {waitUntil: "networkidle"});
        await lp.addStyleTag({content: HIDE_HINT_CSS});
        await lp.screenshot({
            path: path.join(RAW, "desktop-light.png"),
            clip: {x: 350, y: 0, width: 900, height: 506},
        });

        const dark = await browser.newContext({
            viewport: SHOT, colorScheme: "dark", deviceScaleFactor: 1,
        });
        const dp = await dark.newPage();
        await dp.goto(DEMO_URL, {waitUntil: "networkidle"});
        await dp.addStyleTag({content: HIDE_HINT_CSS});
        await dp.screenshot({
            path: path.join(RAW, "desktop-dark.png"),
            clip: {x: 350, y: 0, width: 900, height: 506},
        });

        const mobile = await browser.newContext({
            viewport: {width: 390, height: 844}, colorScheme: "light",
            deviceScaleFactor: 2, isMobile: true,
        });
        const mp = await mobile.newPage();
        await mp.goto(DEMO_URL, {waitUntil: "networkidle"});
        await mp.screenshot({
            path: path.join(RAW, "mobile.png"),
            clip: {x: 0, y: 0, width: 390, height: 844},
        });

        const print = await browser.newContext({
            viewport: SHOT, deviceScaleFactor: 1,
        });
        const pp = await print.newPage();
        await pp.goto(DEMO_URL, {waitUntil: "networkidle"});
        await pp.emulateMedia({media: "print"});
        await pp.screenshot({path: path.join(RAW, "print-top.png")});
        await pp.screenshot({path: path.join(RAW, "print-full.png"), fullPage: true});

        await light.close();
        await dark.close();
        await mobile.close();
        await print.close();
        console.log("Raw shots done");

        // Personal data (real CV, root page) for the og-image card
        const rootCtx = await browser.newContext({
            viewport: {width: 1200, height: 630}, colorScheme: "light", deviceScaleFactor: 1,
        });
        const rp = await rootCtx.newPage();
        await rp.goto(BASE + "/", {waitUntil: "networkidle"});
        const personal = await rp.evaluate(() => {
            const ld = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent);
            const m = ld.mainEntity;
            const avatar = document.querySelector("header img");
            return {
                name: m.name,
                jobTitle: m.jobTitle,
                about: m.description,
                url: m.url,
                avatar: avatar ? (avatar.currentSrc || avatar.src) : null,
            };
        });
        await rootCtx.close();
        if (!personal.avatar) throw new Error("Avatar image not found on the root page");
        const avatarRes = await fetch(personal.avatar);
        if (!avatarRes.ok) throw new Error(`Failed to fetch avatar: ${avatarRes.status}`);
        await writeFile(path.join(RAW, "avatar.webp"), Buffer.from(await avatarRes.arrayBuffer()));
        console.log(`Personal card data: ${personal.name} — ${personal.jobTitle}`);

        // Posters --------------------------------------------------------------
        console.log("Rendering posters:");
        await renderPoster(browser, heroPoster(), path.join(OUT, "poster-1-hero.png"));
        await renderPoster(browser, darkPoster(), path.join(OUT, "poster-2-dark.png"));
        await renderPoster(browser, printPoster(), path.join(OUT, "poster-3-print.png"));
        await renderPoster(browser, responsivePoster(), path.join(OUT, "poster-4-responsive.png"));
        await renderPoster(browser, personalPoster(personal), path.join(OUT, "og-image.png"));
        await renderPoster(browser, ogPoster(), path.join(OUT, "og-demo.png"));

        await browser.close();

        // og-images → public/
        await copyFile(path.join(OUT, "og-image.png"), path.join(ROOT, "public", "og-image.png"));
        console.log("  copied og-image.png → public/og-image.png");
        await copyFile(path.join(OUT, "og-demo.png"), path.join(ROOT, "public", "og-demo.png"));
        console.log("  copied og-demo.png → public/og-demo.png");
    } finally {
        stopPreview(preview);
        console.log("Preview server stopped");
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
