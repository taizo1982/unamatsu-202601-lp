import path from "path";
import { fileURLToPath } from "url";
import { stat, writeFile, readdir } from "fs/promises";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 対象ディレクトリ（design/, src/assets/, public/）
const targetDirs = [
  path.resolve(__dirname, "../design"),
  path.resolve(__dirname, "../src/assets"),
  path.resolve(__dirname, "../public"),
];

// 対応する画像拡張子
const imageExtensions = [".png", ".jpg", ".jpeg"];

async function findImages(dir) {
  const images = [];

  try {
    const entries = await readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // 再帰的にサブディレクトリを検索
        const subImages = await findImages(fullPath);
        images.push(...subImages);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (imageExtensions.includes(ext)) {
          images.push(fullPath);
        }
      }
    }
  } catch (error) {
    // ディレクトリが存在しない場合はスキップ
    if (error.code !== "ENOENT") {
      console.warn(`Warning: Could not read directory ${dir}:`, error.message);
    }
  }

  return images;
}

async function needsUpdate(inputPath, outputPath) {
  try {
    const [inputStat, outputStat] = await Promise.all([
      stat(inputPath),
      stat(outputPath),
    ]);
    return inputStat.mtimeMs > outputStat.mtimeMs;
  } catch (error) {
    // If the output does not exist yet, we need to create it.
    if (error.code === "ENOENT") {
      return true;
    }
    throw error;
  }
}

async function convertImage(imagePath) {
  const dir = path.dirname(imagePath);
  const ext = path.extname(imagePath);
  const baseName = path.basename(imagePath, ext);

  const targets = [
    {
      format: "webp",
      output: path.join(dir, `${baseName}.webp`),
      options: { quality: 80 },
    },
    {
      format: "avif",
      output: path.join(dir, `${baseName}.avif`),
      options: { quality: 60 },
    },
  ];

  const image = sharp(imagePath);
  let converted = false;

  for (const target of targets) {
    if (!(await needsUpdate(imagePath, target.output))) {
      continue;
    }

    let buffer;
    if (target.format === "webp") {
      buffer = await image.clone().webp(target.options).toBuffer();
    } else if (target.format === "avif") {
      buffer = await image.clone().avif(target.options).toBuffer();
    } else {
      continue;
    }

    await writeFile(target.output, buffer);
    console.log(
      `Optimized ${path.relative(process.cwd(), imagePath)} -> ${path.basename(target.output)} (${target.format})`,
    );
    converted = true;
  }

  return converted;
}

async function run() {
  console.log("Scanning for images...");

  let allImages = [];
  for (const dir of targetDirs) {
    const images = await findImages(dir);
    allImages.push(...images);
  }

  if (allImages.length === 0) {
    console.log("No images found to optimize.");
    return;
  }

  console.log(`Found ${allImages.length} image(s). Optimizing...`);

  let optimizedCount = 0;
  for (const imagePath of allImages) {
    try {
      const wasConverted = await convertImage(imagePath);
      if (wasConverted) {
        optimizedCount++;
      }
    } catch (error) {
      console.error(`Error optimizing ${imagePath}:`, error.message);
    }
  }

  if (optimizedCount > 0) {
    console.log(`Done! Optimized ${optimizedCount} image(s).`);
  } else {
    console.log("All images are up to date.");
  }
}

run().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
