import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEnv } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");
const buildIndexPath = path.resolve(projectRoot, "build", "index.html");

const ogpMarkerStart = "<!-- ogp:start -->";
const ogpMarkerEnd = "<!-- ogp:end -->";

const sanitize = (value) => {
  if (typeof value !== "string") {
    return "";
  }
  const trimmed = value.trim();
  return trimmed && trimmed !== "undefined" ? trimmed : "";
};

const escapeHtml = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const createOgpBlock = (env) => {
  const tags = [];

  // Basic meta tags
  const siteDescription = sanitize(env.VITE_SITE_DESCRIPTION);
  if (siteDescription) {
    tags.push(`<meta name="description" content="${escapeHtml(siteDescription)}">`);
  }

  // Open Graph tags
  const ogType = sanitize(env.VITE_OG_TYPE) || "website";
  tags.push(`<meta property="og:type" content="${escapeHtml(ogType)}">`);

  const ogTitle = sanitize(env.VITE_OG_TITLE);
  if (ogTitle) {
    tags.push(`<meta property="og:title" content="${escapeHtml(ogTitle)}">`);
  }

  const ogDescription = sanitize(env.VITE_OG_DESCRIPTION);
  if (ogDescription) {
    tags.push(`<meta property="og:description" content="${escapeHtml(ogDescription)}">`);
  }

  const ogSiteName = sanitize(env.VITE_OG_SITE_NAME);
  if (ogSiteName) {
    tags.push(`<meta property="og:site_name" content="${escapeHtml(ogSiteName)}">`);
  }

  const ogUrl = sanitize(env.VITE_OG_URL);
  if (ogUrl) {
    tags.push(`<meta property="og:url" content="${escapeHtml(ogUrl)}">`);
  }

  const ogImageUrl = sanitize(env.VITE_OG_IMAGE_URL);
  if (ogImageUrl) {
    tags.push(`<meta property="og:image" content="${escapeHtml(ogImageUrl)}">`);

    const ogImageWidth = sanitize(env.VITE_OG_IMAGE_WIDTH);
    if (ogImageWidth) {
      tags.push(`<meta property="og:image:width" content="${escapeHtml(ogImageWidth)}">`);
    }

    const ogImageHeight = sanitize(env.VITE_OG_IMAGE_HEIGHT);
    if (ogImageHeight) {
      tags.push(`<meta property="og:image:height" content="${escapeHtml(ogImageHeight)}">`);
    }
  }

  const ogLocale = sanitize(env.VITE_OG_LOCALE) || "ja_JP";
  tags.push(`<meta property="og:locale" content="${escapeHtml(ogLocale)}">`);

  // Twitter Card tags
  const twitterCard = sanitize(env.VITE_TWITTER_CARD) || "summary_large_image";
  tags.push(`<meta name="twitter:card" content="${escapeHtml(twitterCard)}">`);

  const twitterSite = sanitize(env.VITE_TWITTER_SITE);
  if (twitterSite) {
    tags.push(`<meta name="twitter:site" content="${escapeHtml(twitterSite)}">`);
  }

  const twitterCreator = sanitize(env.VITE_TWITTER_CREATOR);
  if (twitterCreator) {
    tags.push(`<meta name="twitter:creator" content="${escapeHtml(twitterCreator)}">`);
  }

  // Twitter uses og:title, og:description, og:image if not specified
  if (ogTitle) {
    tags.push(`<meta name="twitter:title" content="${escapeHtml(ogTitle)}">`);
  }
  if (ogDescription) {
    tags.push(`<meta name="twitter:description" content="${escapeHtml(ogDescription)}">`);
  }
  if (ogImageUrl) {
    tags.push(`<meta name="twitter:image" content="${escapeHtml(ogImageUrl)}">`);
  }

  return tags.length > 0 ? tags.join("\n") : "";
};

const updateTitle = (html, env) => {
  const ogTitle = sanitize(env.VITE_OG_TITLE);
  if (!ogTitle) {
    return html;
  }

  // <title>タグを更新
  return html.replace(/<title>[^<]*<\/title>/i, `<title>${escapeHtml(ogTitle)}</title>`);
};

const injectOgp = async () => {
  try {
    await fs.access(buildIndexPath);
  } catch {
    console.log("build/index.html not found, skipping OGP injection.");
    return;
  }

  const mode = process.env.NODE_ENV || "production";
  const env = loadEnv(mode, projectRoot, "");

  const ogpBlock = createOgpBlock(env);

  let html = await fs.readFile(buildIndexPath, "utf-8");

  // 既存のOGPマーカーを削除
  const markerPattern = new RegExp(`${ogpMarkerStart}[\\s\\S]*?${ogpMarkerEnd}\\n?`, "g");
  html = html.replace(markerPattern, "");

  // タイトルを更新
  html = updateTitle(html, env);

  if (ogpBlock) {
    const fullBlock = [ogpMarkerStart, ogpBlock, ogpMarkerEnd].join("\n");

    // </title>の後に挿入
    if (html.includes("</title>")) {
      html = html.replace("</title>", `</title>\n${fullBlock}`);
    } else if (html.includes("</head>")) {
      html = html.replace("</head>", `${fullBlock}\n</head>`);
    }
  }

  await fs.writeFile(buildIndexPath, html, "utf-8");
  console.log("Injected OGP/meta tags into build/index.html");
};

injectOgp().catch((error) => {
  console.error("[meta] Failed to inject tags:", error);
  process.exitCode = 1;
});
