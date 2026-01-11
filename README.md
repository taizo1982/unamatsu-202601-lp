# MAGI LP Template

HTML&CSSからSSG形式のランディングページを制作するためのテンプレートです。

## 使い方

### GitHub Templateから作成（推奨）

1. このリポジトリページで「Use this template」→「Create a new repository」をクリック
2. 新しいリポジトリをclone
3. `npm install`

### degitを使用

```bash
npx degit aivec/magi-lp-template my-new-lp
cd my-new-lp
npm install
```

### 手動clone

```bash
git clone https://github.com/aivec/magi-lp-template.git my-new-lp
cd my-new-lp
rm -rf .git
git init
npm install
```

## 技術スタック

| カテゴリ | 技術 |
|---------|------|
| フレームワーク | React 18/19 |
| 言語 | TypeScript 5.6+ |
| スタイリング | Tailwind CSS |
| ビルドツール | Vite |
| 画像最適化 | Sharp (AVIF/WebP変換) |

## ワークフロー

```
design/（HTML&CSS配置）
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

詳細は [docs/workflow.md](./docs/workflow.md) を参照してください。

## クイックスタート

```bash
# 1. 環境変数を設定
cp .env.example .env
# .envを編集

# 2. design/にHTML&CSSを配置

# 3. 本番ビルド
npm run build:production

# 4. 確認
npx serve build
```

## 利用可能なセクション

| セクション | 説明 |
|-----------|------|
| `HeaderSection` | 固定ヘッダー（ロゴ・CTA） |
| `HeroSection` | ヒーローセクション（背景画像・タイトル・CTA） |
| `IntroSection` | イントロセクション（パートナーシップ・キャッチコピー） |
| `PainSection` | ペインポイント（課題・悩み） |
| `SolutionSection` | ソリューション（ステップ形式） |
| `TestimonialsSection` | お客様の声 |
| `OfferSection` | イベント詳細・スケジュール |
| `FAQSection` | よくある質問（アコーディオン） |
| `ClosingSection` | クロージング（最終CTA） |
| `FooterSection` | フッター |

## スクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバー起動 |
| `npm run build:production` | **本番ビルド（推奨）** |
| `npm run optimize:images` | 画像をAVIF/WebPに変換 |
| `npm run convert:images` | `<img>`を`<picture>`に変換 |
| `npm run inject:meta` | OGP/metaタグを注入 |
| `npm run inject:analytics` | GA/Meta Pixelタグを注入 |
| `npm run typecheck` | TypeScript型チェック |

## ドキュメント

- [ワークフロー](./docs/workflow.md) - HTML&CSSからSSG形式への制作フロー
- [アーキテクチャ](./docs/architecture.md) - プロジェクト構造と設計パターン
- [型定義](./docs/types.md) - TypeScript型定義の詳細
- [コンポーネント](./docs/components.md) - セクション・UIコンポーネント一覧
- [設定](./docs/configuration.md) - 設定ファイルの説明

## ライセンス

MIT
