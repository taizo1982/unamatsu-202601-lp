# 型定義

`src/types/design-data.ts`で定義される型システムは、Claudeが出力するLP設計データを型安全に処理する体系的な設計を提供します。

## コアタイプ

### ImageAsset

複数形式対応の画像アセット。

```typescript
interface ImageAsset {
  avif?: string;  // 最高圧縮 (オプション)
  webp?: string;  // 広サポート (オプション)
  src: string;    // PNG/JPGフォールバック (必須)
  alt: string;    // アクセシビリティ用alt属性 (必須)
}
```

### CTAConfig

Call-To-Actionボタンの設定。

```typescript
interface CTAConfig {
  text: string;    // ボタンテキスト
  href: string;    // リンク先URL
  variant?: "primary" | "secondary" | "outline";  // スタイル
}
```

### ThemeConfig

テーマカラー設定。

```typescript
interface ThemeConfig {
  primary?: string;     // プライマリカラー
  accent?: string;      // アクセントカラー
  background?: string;  // 背景色
  foreground?: string;  // 前景色（テキスト）
}
```

### MetaConfig

SEO・メタデータ設定。

```typescript
interface MetaConfig {
  title: string;        // ページタイトル
  description: string;  // メタディスクリプション
  ogImage?: string;     // OGP画像URL
  canonical?: string;   // 正規URL
}
```

## セクションデータタイプ

### HeaderData

```typescript
interface HeaderData {
  logo?: ImageAsset;           // ロゴ画像
  badge?: {
    text: string;
    variant?: string;
  };
  cta?: CTAConfig;             // ヘッダーCTA
  sticky?: boolean;            // 固定表示
}
```

### HeroData

```typescript
interface HeroData {
  backgroundImage?: ImageAsset;     // 背景画像
  title: string | ImageAsset;       // タイトル（テキストまたは画像）
  subtitle?: string;                // サブタイトル
  eventInfo?: {
    date: string;
    price?: string;
    location?: string;
  };
  cta: CTAConfig;                   // メインCTA
}
```

### IntroData

```typescript
interface IntroData {
  partnershipText?: string;   // パートナーシップテキスト
  catchphrase: string;        // キャッチコピー
  description?: string;       // 説明文
}
```

### PainData

```typescript
interface PainData {
  title?: string;                    // セクションタイトル
  painPoints: string[];              // 課題リスト
  image?: ImageAsset;                // 関連画像
  empathyMessage?: string;           // 共感メッセージ
}
```

### SolutionData

```typescript
interface SolutionData {
  title?: string;
  steps: Array<{
    icon?: string;       // Lucideアイコン名
    title: string;
    description: string;
  }>;
}
```

### TestimonialsData

```typescript
interface TestimonialsData {
  title?: string;
  testimonials: Array<{
    text: string;
    author?: string;
    age?: number;
    gender?: "male" | "female" | "other";
    avatar?: ImageAsset;
  }>;
}
```

### OfferData

```typescript
interface OfferData {
  title?: string;
  infoCards?: Array<{
    icon?: string;
    title: string;
    content: string;
  }>;
  schedule?: Array<{
    time: string;
    activity: string;
  }>;
  specialOffer?: {
    title: string;
    description: string;
    originalPrice?: string;
    discountedPrice?: string;
  };
}
```

### FAQData

```typescript
interface FAQData {
  title?: string;
  badge?: string;
  items: Array<{
    question: string;
    answer: string;
  }>;
}
```

### ClosingData

```typescript
interface ClosingData {
  headline: string;
  message?: string;
  ctas: CTAConfig[];    // 複数CTAボタン
}
```

### FooterData

```typescript
interface FooterData {
  companyName: string;
  copyright?: string;
  links?: Array<{
    text: string;
    href: string;
  }>;
}
```

## トップレベル型

### LPDesignData

LPデータのルート型。

```typescript
interface LPDesignData {
  meta: MetaConfig;           // SEO・メタデータ
  theme?: ThemeConfig;        // テーマ設定 (オプション)
  sections: SectionConfig[];  // セクション配列
}
```

### SectionConfig

判別ユニオン型によるセクション設定。

```typescript
type SectionConfig =
  | { type: "header"; data: HeaderData }
  | { type: "hero"; data: HeroData }
  | { type: "intro"; data: IntroData }
  | { type: "pain"; data: PainData }
  | { type: "solution"; data: SolutionData }
  | { type: "testimonials"; data: TestimonialsData }
  | { type: "offer"; data: OfferData }
  | { type: "faq"; data: FAQData }
  | { type: "closing"; data: ClosingData }
  | { type: "footer"; data: FooterData };
```

### SectionType

セクションタイプのリテラル型。

```typescript
type SectionType = SectionConfig["type"];
// = "header" | "hero" | "intro" | "pain" | "solution" | "testimonials" | "offer" | "faq" | "closing" | "footer"
```

## ユーティリティ型

### ExtractSectionData

セクションタイプからデータ型を抽出。

```typescript
type ExtractSectionData<T extends SectionType> = Extract<
  SectionConfig,
  { type: T }
>["data"];

// 使用例
type HeroDataType = ExtractSectionData<"hero">;  // = HeroData
type FAQDataType = ExtractSectionData<"faq">;    // = FAQData
```

### SectionProps

セクションコンポーネントのプロップ型。

```typescript
type SectionProps<T extends SectionType> = {
  data: ExtractSectionData<T>;
  className?: string;
};

// 使用例
type HeroSectionProps = SectionProps<"hero">;
// = { data: HeroData; className?: string }
```

## 型の使用例

```typescript
import type {
  LPDesignData,
  SectionConfig,
  ExtractSectionData
} from '@aivec/magi-lp-template';

// LPデータの定義
const lpData: LPDesignData = {
  meta: {
    title: "Winter Event",
    description: "Limited time event"
  },
  theme: {
    primary: "#3b82f6",
    accent: "#ec4899"
  },
  sections: [
    {
      type: "hero",
      data: {
        title: "Welcome",
        cta: { text: "Apply Now", href: "/apply" }
      }
    }
  ]
};

// 特定セクションのデータ取得（型安全）
function getHeroData(sections: SectionConfig[]): ExtractSectionData<"hero"> | undefined {
  const hero = sections.find(s => s.type === "hero");
  return hero?.data as ExtractSectionData<"hero"> | undefined;
}
```
