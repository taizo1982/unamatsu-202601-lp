# アーキテクチャ

## ディレクトリ構造

```
magi-lp-template/
├── src/                           # ソースコード
│   ├── components/
│   │   ├── sections/              # LPセクションコンポーネント (10個)
│   │   │   ├── HeaderSection.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── IntroSection.tsx
│   │   │   ├── PainSection.tsx
│   │   │   ├── SolutionSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── OfferSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   ├── ClosingSection.tsx
│   │   │   └── FooterSection.tsx
│   │   ├── ui/                    # UIコンポーネント (40+個)
│   │   │   ├── accordion.tsx
│   │   │   ├── button.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── form.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ...
│   │   ├── event/                 # イベント固有コンポーネント
│   │   └── LandingPage.tsx        # メインのLPコンポーネント
│   ├── types/
│   │   ├── design-data.ts         # デザインデータ型定義
│   │   └── index.ts
│   ├── utils/
│   │   ├── image.tsx              # ResponsiveImageコンポーネント
│   │   ├── icons.ts               # Lucideアイコン関数
│   │   ├── cn.ts                  # classNameユーティリティ
│   │   └── index.ts
│   ├── assets/                    # サンプル画像
│   ├── styles/                    # グローバルCSS
│   ├── index.ts                   # ライブラリエントリーポイント
│   ├── main.tsx                   # デモアプリケーション
│   ├── entry-server.tsx           # SSRエントリーポイント
│   └── vite-env.d.ts              # Vite環境型定義
├── dist/                          # ビルド出力
├── scripts/
│   ├── optimize-images.mjs        # 画像最適化スクリプト
│   ├── convert-img-to-picture.mjs # <img>→<picture>変換
│   ├── inject-meta-html.mjs       # OGP/metaタグ注入
│   ├── inject-analytics-html.mjs  # アナリティクス注入スクリプト
│   └── prerender.mjs              # SSGプリレンダリング
├── package.json
├── tsconfig.json
├── vite.config.ts                 # デモアプリ用Vite設定
├── vite.config.lib.ts             # ライブラリビルド用Vite設定
├── tailwind.preset.js             # Tailwind CSSプリセット
└── .env.example                   # 環境変数テンプレート
```

## 設計パターン

### 1. データドリブンレンダリング

Claudeが生成する`LPDesignData`オブジェクトから動的にLPを生成します。データ構造がUIの構造を決定するため、コードを変更せずにデザインを変更できます。

```typescript
// データ → UI の流れ
LPDesignData → LandingPage → SectionComponents → UIComponents
```

### 2. セクションベースアーキテクチャ

LPは10種類の標準セクションで構成されます。各セクションは独立したコンポーネントとして実装され、必要に応じて組み合わせ可能です。

| セクション | 説明 |
|-----------|------|
| Header | 固定ヘッダー (ロゴ、バッジ、CTA) |
| Hero | ヒーロー画像 (背景画像、タイトル、イベント情報) |
| Intro | イントロダクション (パートナーシップ、キャッチコピー) |
| Pain | ペインポイント (課題リスト、共感メッセージ) |
| Solution | ソリューション (ステップ、アイコン) |
| Testimonials | 顧客の声 (テスティモニアル) |
| Offer | イベント詳細 (情報カード、スケジュール) |
| FAQ | よくある質問 (アコーディオン) |
| Closing | クロージング (ヘッドライン、CTA) |
| Footer | フッター (企業名、著作権、リンク) |

### 3. 型安全なデータフロー

TypeScriptの判別ユニオン型を使用し、セクションタイプに応じたデータを型安全に処理します。

```typescript
// セクション型の判別ユニオン
type SectionConfig =
  | { type: "header"; data: HeaderData }
  | { type: "hero"; data: HeroData }
  | { type: "pain"; data: PainData }
  // ...
```

### 4. マルチ形式画像対応

AVIF → WebP → PNG/JPGの段階的フォールバックにより、最適な画像形式を配信します。

```typescript
interface ImageAsset {
  avif?: string;  // 最高圧縮
  webp?: string;  // 広サポート
  src: string;    // フォールバック
  alt: string;    // アクセシビリティ
}
```

### 5. CSS変数ベースのテーマシステム

テーマカラーはCSS変数として適用され、動的な色変更が可能です。

```typescript
const themeStyles = {
  "--primary": data.theme.primary,
  "--accent": data.theme.accent,
  "--background": data.theme.background,
  "--foreground": data.theme.foreground,
};
```

## エントリーポイント

### ライブラリ (`src/index.ts`)

パッケージとして公開されるエクスポート:

- **型エクスポート**: 全デザイン型定義 (40+型)
- **コンポーネント**: `LandingPage`、10個のセクション、UIコンポーネント
- **ユーティリティ**: `cn`, `getIconByName`, `ResponsiveImage`

### デモアプリ (`src/main.tsx`)

開発時の動作確認用アプリケーション。

### SSR (`src/entry-server.tsx`)

サーバーサイドレンダリング用エントリーポイント。

## ビルド出力

### ライブラリビルド (`npm run build`)

```
dist/
├── index.js      # ESM形式
├── index.cjs     # CommonJS形式
├── index.d.ts    # TypeScript型定義 (ESM)
├── index.d.cts   # TypeScript型定義 (CJS)
└── styles.css    # コンパイル済みCSS
```

### デモビルド (`npm run build:demo`)

```
dist/
├── index.html    # HTMLエントリーポイント
├── assets/       # バンドル済みJS/CSS
└── images/       # 最適化済み画像
```
