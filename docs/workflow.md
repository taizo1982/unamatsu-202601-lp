# ワークフロー

HTML&CSSからSSG形式のLPを制作し、本番環境にデプロイするまでのワークフローです。

## Claude Code用プロンプト

各ステップのClaude Code用プロンプトは[step/](step/)ディレクトリにあります。

| ステップ | プロンプト |
|---------|----------|
| 1. デザイン配置 | [01-setup-design.md](step/01-setup-design.md) |
| 2. 環境変数設定 | [02-setup-env.md](step/02-setup-env.md) |
| 3. 画像最適化 | [03-optimize-images.md](step/03-optimize-images.md) |
| 4. 本番ビルド | [04-build-production.md](step/04-build-production.md) |
| 5. PageSpeed確認 | [05-pagespeed-check.md](step/05-pagespeed-check.md) |

## 制作フロー

```
design/（HTML&CSS）
    ↓
1. 画像を自動検出して最適化（PNG/JPG → AVIF/WebP）
    ↓
2. <img>タグを<picture>タグに変換
    ↓
3. SSG形式でビルド
    ↓
4. .envからOGP/meta/CVタグを注入
    ↓
5. PageSpeed対応（最終チェック）
    ↓
納品
```

## ステップ詳細

### 1. デザインの配置

`design/`ディレクトリに初期デザインのHTML&CSSを配置します。

```
design/
├── index.html
├── css/
│   └── style.css
└── images/
    ├── hero.png
    ├── logo.png
    └── ...
```

### 2. 環境変数の設定

`.env`ファイルを作成し、必要な情報を設定します。

```bash
cp .env.example .env
```

**.env設定項目:**

```bash
# ベースパス（サブディレクトリにデプロイする場合）
VITE_BASE_PATH=/example

# Google Analytics
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_GA_ADS_ID=AW-XXXXXXXXXX

# Meta Pixel
VITE_META_PIXEL_ID=XXXXXXXXXXXXXXX
VITE_META_APP_ID=XXXXXXXXXXXXXXX

# OGP設定
VITE_OG_TYPE=website
VITE_SITE_DESCRIPTION=サイトの説明
VITE_OG_TITLE=ページタイトル
VITE_OG_DESCRIPTION=OGP用の説明
VITE_OG_SITE_NAME=サイト名
VITE_OG_URL=https://example.com/
VITE_OG_IMAGE_URL=https://example.com/og-image.jpg
VITE_OG_IMAGE_WIDTH=1200
VITE_OG_IMAGE_HEIGHT=630

# Twitter Card
VITE_TWITTER_CARD=summary_large_image
VITE_TWITTER_SITE=@username
VITE_TWITTER_CREATOR=@username
```

### 3. 画像の最適化

`design/`、`src/assets/`、`public/`内の画像を自動検出し、AVIF/WebP形式に変換します。

```bash
npm run optimize:images
```

**対象拡張子:** `.png`, `.jpg`, `.jpeg`

**出力:**
- `image.png` → `image.avif`, `image.webp`
- 元ファイルと同じディレクトリに出力

### 4. 本番ビルド

すべてのステップを一括実行します。

```bash
npm run build:production
```

このコマンドは以下を順番に実行します：

1. `optimize:images` - 画像最適化 (PNG/JPG → AVIF/WebP)
2. `build:ssg` - SSGビルド
   - `build:demo` - Viteビルド + タグ注入
     - `vite build` - Reactアプリをビルド
     - `inject:all` - メタ情報注入
       - `inject:meta` - OGP/metaタグ注入
       - `inject:analytics` - GA/Meta Pixelタグ注入
       - `convert:images` - `<img>`→`<picture>`変換
   - `build:ssr` - SSRビルド
   - `prerender.mjs` - HTMLプリレンダリング

### 5. ビルド成果物

ビルド後、`build/`ディレクトリに成果物が出力されます。

```
build/
├── index.html      # プリレンダリング済みHTML
├── assets/         # バンドル済みJS/CSS
└── images/         # 最適化済み画像
```

## スクリプト一覧

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run optimize:images` | 画像をAVIF/WebPに変換 |
| `npm run convert:images` | `<img>`を`<picture>`に変換 |
| `npm run inject:meta` | OGP/metaタグを注入 |
| `npm run inject:analytics` | GA/Meta Pixelタグを注入 |
| `npm run inject:all` | meta + analytics + 画像変換を一括実行 |
| `npm run build:demo` | デモサイトビルド |
| `npm run build:ssg` | SSGビルド |
| `npm run build:production` | **本番ビルド（推奨）** |

## `<picture>`タグ変換

変換前：
```html
<img src="hero.png" alt="Hero" class="w-full" loading="lazy">
```

変換後：
```html
<picture>
  <source srcset="hero.avif" type="image/avif">
  <source srcset="hero.webp" type="image/webp">
  <img src="hero.png" alt="Hero" class="w-full" loading="lazy">
</picture>
```

## OGP/metaタグ注入

`.env`の設定から以下のタグが自動生成されます：

```html
<!-- ogp:start -->
<meta name="description" content="サイトの説明">
<meta property="og:type" content="website">
<meta property="og:title" content="ページタイトル">
<meta property="og:description" content="OGP用の説明">
<meta property="og:site_name" content="サイト名">
<meta property="og:url" content="https://example.com/">
<meta property="og:image" content="https://example.com/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="ja_JP">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@username">
<meta name="twitter:title" content="ページタイトル">
<meta name="twitter:description" content="OGP用の説明">
<meta name="twitter:image" content="https://example.com/og-image.jpg">
<!-- ogp:end -->
```

## PageSpeed対応チェックリスト

本番デプロイ前に以下を確認してください：

### パフォーマンス
- [ ] 画像がAVIF/WebP形式に変換されている
- [ ] `<picture>`タグでフォールバックが設定されている
- [ ] `loading="lazy"`が画像に設定されている
- [ ] CSSがバンドル・圧縮されている
- [ ] JavaScriptがバンドル・圧縮されている

### SEO
- [ ] `<title>`タグが設定されている
- [ ] `<meta name="description">`が設定されている
- [ ] OGPタグが正しく設定されている
- [ ] Twitter Cardタグが設定されている
- [ ] canonical URLが設定されている（必要な場合）

### アクセシビリティ
- [ ] 画像に`alt`属性が設定されている
- [ ] フォームにラベルが設定されている
- [ ] 色のコントラスト比が十分である

### ベストプラクティス
- [ ] HTTPSが有効である
- [ ] コンソールエラーがない
- [ ] 適切なキャッシュヘッダーが設定されている

## トラブルシューティング

### 画像が最適化されない

`design/`、`src/assets/`、`public/`のいずれかに画像を配置してください。

### OGPタグが反映されない

1. `.env`ファイルが存在するか確認
2. `npm run inject:meta`を実行
3. `build/index.html`を確認

### ベースパスが反映されない

1. `.env`の`VITE_BASE_PATH`を確認
2. 先頭に`/`を付けてください（例：`/example`）
