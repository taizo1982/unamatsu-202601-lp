# 設定

## package.json

### エントリーポイント

```json
{
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": { "types": "./dist/index.d.ts", "default": "./dist/index.js" },
      "require": { "types": "./dist/index.d.cts", "default": "./dist/index.cjs" }
    },
    "./styles.css": "./dist/styles.css",
    "./tailwind.preset": "./tailwind.preset.js"
  }
}
```

### ピア依存関係

```json
{
  "peerDependencies": {
    "react": "^18.0.0 || ^19.0.0",
    "react-dom": "^18.0.0 || ^19.0.0",
    "tailwindcss": "^3.0.0"
  },
  "peerDependenciesMeta": {
    "tailwindcss": { "optional": true }
  }
}
```

### 公開ファイル

```json
{
  "files": ["dist", "tailwind.preset.js"],
  "sideEffects": ["**/*.css"]
}
```

## TypeScript設定 (tsconfig.json)

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "strict": true,
    "jsx": "react-jsx",
    "declaration": true,
    "declarationDir": "./dist",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**パスエイリアス:**
- `@/` → `./src/`

## Vite設定

### ライブラリビルド (vite.config.lib.ts)

```typescript
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/index.ts', 'src/**/*.ts', 'src/**/*.tsx'],
      outDir: 'dist'
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    minify: 'esbuild'
  }
});
```

### デモアプリ (vite.config.ts)

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
```

## Tailwind CSSプリセット (tailwind.preset.js)

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "hsl(var(--primary, 221.2 83.2% 53.3%))",
        accent: "hsl(var(--accent, 330 81% 60%))",
        background: "hsl(var(--background, 0 0% 100%))",
        foreground: "hsl(var(--foreground, 222.2 84% 4.9%))",
        muted: "hsl(var(--muted, 210 40% 96.1%))",
        "muted-foreground": "hsl(var(--muted-foreground, 215.4 16.3% 46.9%))",
        border: "hsl(var(--border, 214.3 31.8% 91.4%))",
        ring: "hsl(var(--ring, 221.2 83.2% 53.3%))"
      },
      borderRadius: {
        lg: "var(--radius, 0.5rem)",
        md: "calc(var(--radius, 0.5rem) - 2px)",
        sm: "calc(var(--radius, 0.5rem) - 4px)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"]
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out"
      }
    }
  }
};
```

### 使用方法

```javascript
// tailwind.config.js (利用者側)
module.exports = {
  presets: [require('@aivec/magi-lp-template/tailwind.preset')],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@aivec/magi-lp-template/dist/**/*.js'
  ]
};
```

## 環境変数 (.env.example)

### アナリティクス

```bash
# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GA_ADS_ID=AW-XXXXXXXXXX

# Meta Pixel
VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX
VITE_META_APP_ID=XXXXXXXXXXXXXXX
```

### OGP設定

```bash
# Open Graph
VITE_OG_TYPE=website
VITE_OG_TITLE=ページタイトル
VITE_OG_DESCRIPTION=ページの説明文
VITE_OG_IMAGE_URL=https://example.com/og-image.jpg
VITE_OG_SITE_NAME=サイト名
VITE_OG_LOCALE=ja_JP
```

### Twitter Card

```bash
VITE_TWITTER_CARD=summary_large_image
VITE_TWITTER_SITE=@username
VITE_TWITTER_CREATOR=@username
```

## スクリプト

### 画像最適化 (scripts/optimize-images.mjs)

PNG画像をAVIF/WebP形式に変換。

```bash
npm run optimize:images
```

- Sharp使用
- 更新日時でインクリメンタル処理
- 元ファイルと同じディレクトリに出力

### アナリティクス注入 (scripts/inject-analytics-html.mjs)

ビルド後のHTMLにGoogle Analytics/Meta Pixelタグを注入。

```bash
npm run build:demo
# 内部で自動実行
```

### SSGプリレンダリング (scripts/prerender.mjs)

HTMLを事前レンダリング。

```bash
npm run build:ssg
```
