import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

// 対象HTMLファイル
const targetFiles = [
  path.resolve(projectRoot, "build", "index.html"),
  path.resolve(projectRoot, "dist", "index.html"),
];

// 画像拡張子のパターン
const imageExtensions = [".png", ".jpg", ".jpeg"];

/**
 * <img>タグを<picture>タグに変換
 * AVIF → WebP → 元画像 のフォールバック順
 */
function convertImgToPicture(html) {
  // <img>タグを正規表現でマッチ
  const imgTagRegex = /<img\s+([^>]*?)>/gi;

  return html.replace(imgTagRegex, (match, attributes) => {
    // src属性を抽出
    const srcMatch = attributes.match(/src=["']([^"']+)["']/i);
    if (!srcMatch) {
      return match; // src属性がない場合はそのまま返す
    }

    const src = srcMatch[1];
    const ext = path.extname(src).toLowerCase();

    // 対象外の拡張子はスキップ
    if (!imageExtensions.includes(ext)) {
      return match;
    }

    // すでにdata:URIやSVGの場合はスキップ
    if (src.startsWith("data:") || ext === ".svg") {
      return match;
    }

    // ベースパスと拡張子なしのパスを取得
    const basePath = src.substring(0, src.length - ext.length);

    // alt属性を抽出
    const altMatch = attributes.match(/alt=["']([^"']*)["']/i);
    const alt = altMatch ? altMatch[1] : "";

    // class属性を抽出
    const classMatch = attributes.match(/class=["']([^"']*)["']/i);
    const classAttr = classMatch ? ` class="${classMatch[1]}"` : "";

    // loading属性を抽出（デフォルトはlazy）
    const loadingMatch = attributes.match(/loading=["']([^"']*)["']/i);
    const loading = loadingMatch ? loadingMatch[1] : "lazy";

    // width/height属性を抽出
    const widthMatch = attributes.match(/width=["']?(\d+)["']?/i);
    const heightMatch = attributes.match(/height=["']?(\d+)["']?/i);
    const widthAttr = widthMatch ? ` width="${widthMatch[1]}"` : "";
    const heightAttr = heightMatch ? ` height="${heightMatch[1]}"` : "";

    // style属性を抽出
    const styleMatch = attributes.match(/style=["']([^"']*)["']/i);
    const styleAttr = styleMatch ? ` style="${styleMatch[1]}"` : "";

    // <picture>タグを生成
    const pictureTag = `<picture>
  <source srcset="${basePath}.avif" type="image/avif">
  <source srcset="${basePath}.webp" type="image/webp">
  <img src="${src}" alt="${alt}"${classAttr}${widthAttr}${heightAttr}${styleAttr} loading="${loading}">
</picture>`;

    return pictureTag;
  });
}

async function processFile(filePath) {
  try {
    await fs.access(filePath);
  } catch {
    // ファイルが存在しない場合はスキップ
    return false;
  }

  const html = await fs.readFile(filePath, "utf-8");
  const converted = convertImgToPicture(html);

  if (html !== converted) {
    await fs.writeFile(filePath, converted, "utf-8");
    console.log(`Converted <img> to <picture> in ${path.relative(projectRoot, filePath)}`);
    return true;
  }

  return false;
}

async function run() {
  console.log("Converting <img> tags to <picture> tags...");

  let convertedCount = 0;

  for (const filePath of targetFiles) {
    const wasConverted = await processFile(filePath);
    if (wasConverted) {
      convertedCount++;
    }
  }

  // design/内のHTMLファイルも処理
  const designDir = path.resolve(projectRoot, "design");
  try {
    const designFiles = await findHtmlFiles(designDir);
    for (const filePath of designFiles) {
      const wasConverted = await processFile(filePath);
      if (wasConverted) {
        convertedCount++;
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.warn("Warning: Could not process design directory:", error.message);
    }
  }

  if (convertedCount > 0) {
    console.log(`Done! Converted ${convertedCount} file(s).`);
  } else {
    console.log("No files needed conversion.");
  }
}

async function findHtmlFiles(dir) {
  const htmlFiles = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await findHtmlFiles(fullPath);
        htmlFiles.push(...subFiles);
      } else if (entry.isFile() && entry.name.endsWith(".html")) {
        htmlFiles.push(fullPath);
      }
    }
  } catch (error) {
    if (error.code !== "ENOENT") {
      throw error;
    }
  }

  return htmlFiles;
}

run().catch((error) => {
  console.error("Conversion failed:", error);
  process.exitCode = 1;
});
