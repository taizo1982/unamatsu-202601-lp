# コンポーネント

## メインコンポーネント

### LandingPage

LPのメインレンダリングコンポーネント。

```typescript
import { LandingPage } from '@aivec/magi-lp-template';

interface LandingPageProps {
  data: LPDesignData;
  className?: string;
}

function App() {
  return <LandingPage data={myLPData} />;
}
```

**機能:**
- `LPDesignData`からLP全体を動的生成
- テーマCSS変数の適用
- セクションタイプに基づくコンポーネントディスパッチ

### createLandingPage

データを固定化したLPコンポーネントを生成するファクトリ関数。

```typescript
import { createLandingPage } from '@aivec/magi-lp-template';

const MyLP = createLandingPage(myLPData);

function App() {
  return <MyLP />;
}
```

## セクションコンポーネント

### HeaderSection

固定ヘッダー。ロゴ、バッジ、CTAボタンを表示。

```typescript
import { HeaderSection } from '@aivec/magi-lp-template';

<HeaderSection
  data={{
    logo: { src: "/logo.png", alt: "Logo" },
    badge: { text: "Limited Time" },
    cta: { text: "Apply", href: "/apply" },
    sticky: true
  }}
/>
```

### HeroSection

ヒーローセクション。フルスクリーン背景画像、タイトル、イベント情報、CTAを表示。

```typescript
import { HeroSection } from '@aivec/magi-lp-template';

<HeroSection
  data={{
    backgroundImage: { src: "/hero.jpg", alt: "Hero" },
    title: "Welcome to Our Event",
    eventInfo: {
      date: "2025年1月15日",
      price: "無料"
    },
    cta: { text: "今すぐ申し込む", href: "/apply" }
  }}
/>
```

### IntroSection

イントロダクション。パートナーシップテキストとキャッチコピーを表示。

```typescript
import { IntroSection } from '@aivec/magi-lp-template';

<IntroSection
  data={{
    partnershipText: "〇〇株式会社 × △△協会 共同開催",
    catchphrase: "あなたの人生を変える3日間"
  }}
/>
```

### PainSection

ペインポイント。課題リスト（Xアイコン付き）と共感メッセージを表示。

```typescript
import { PainSection } from '@aivec/magi-lp-template';

<PainSection
  data={{
    title: "こんなお悩みありませんか？",
    painPoints: [
      "時間がない",
      "何から始めればいいかわからない",
      "一人で続けられない"
    ],
    empathyMessage: "そのお気持ち、よくわかります。"
  }}
/>
```

### SolutionSection

ソリューション。ステップ形式で解決策を表示。

```typescript
import { SolutionSection } from '@aivec/magi-lp-template';

<SolutionSection
  data={{
    title: "3つのステップで解決",
    steps: [
      { icon: "Lightbulb", title: "学ぶ", description: "基礎知識を習得" },
      { icon: "Users", title: "実践", description: "仲間と一緒に実行" },
      { icon: "Trophy", title: "成果", description: "結果を出す" }
    ]
  }}
/>
```

### TestimonialsSection

顧客の声。テスティモニアルをカード形式で表示。

```typescript
import { TestimonialsSection } from '@aivec/magi-lp-template';

<TestimonialsSection
  data={{
    title: "参加者の声",
    testimonials: [
      {
        text: "人生が変わりました！",
        author: "田中さん",
        age: 35,
        gender: "male"
      }
    ]
  }}
/>
```

### OfferSection

イベント詳細。情報カード、スケジュール、特別オファーを表示。

```typescript
import { OfferSection } from '@aivec/magi-lp-template';

<OfferSection
  data={{
    title: "イベント詳細",
    schedule: [
      { time: "10:00", activity: "受付開始" },
      { time: "10:30", activity: "オープニング" }
    ],
    specialOffer: {
      title: "早期申込特典",
      description: "今なら50%オフ",
      originalPrice: "¥10,000",
      discountedPrice: "¥5,000"
    }
  }}
/>
```

### FAQSection

よくある質問。Radix UIアコーディオンで実装。

```typescript
import { FAQSection } from '@aivec/magi-lp-template';

<FAQSection
  data={{
    title: "よくある質問",
    badge: "FAQ",
    items: [
      { question: "参加費用はいくらですか？", answer: "無料でご参加いただけます。" },
      { question: "オンライン参加は可能ですか？", answer: "はい、Zoomで参加可能です。" }
    ]
  }}
/>
```

### ClosingSection

クロージング。最終CTAセクション。

```typescript
import { ClosingSection } from '@aivec/magi-lp-template';

<ClosingSection
  data={{
    headline: "今すぐ始めましょう",
    message: "あなたの参加をお待ちしています。",
    ctas: [
      { text: "申し込む", href: "/apply", variant: "primary" },
      { text: "詳細を見る", href: "/details", variant: "outline" }
    ]
  }}
/>
```

### FooterSection

フッター。企業情報、著作権、リンクを表示。

```typescript
import { FooterSection } from '@aivec/magi-lp-template';

<FooterSection
  data={{
    companyName: "株式会社サンプル",
    copyright: "© 2025 Sample Inc.",
    links: [
      { text: "プライバシーポリシー", href: "/privacy" },
      { text: "利用規約", href: "/terms" }
    ]
  }}
/>
```

## UIコンポーネント

基本的なUIコンポーネントはRadix UIをベースに実装されています。

### Button

```typescript
import { Button } from '@aivec/magi-lp-template';

<Button variant="primary" size="lg">
  Click me
</Button>
```

**バリアント:** `primary`, `secondary`, `outline`, `ghost`, `link`
**サイズ:** `sm`, `default`, `lg`

### Accordion

```typescript
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@aivec/magi-lp-template';

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question?</AccordionTrigger>
    <AccordionContent>Answer.</AccordionContent>
  </AccordionItem>
</Accordion>
```

## ユーティリティ

### ResponsiveImage

AVIF/WebP/PNG形式のフォールバック対応画像コンポーネント。

```typescript
import { ResponsiveImage } from '@aivec/magi-lp-template';

<ResponsiveImage
  image={{
    avif: "/image.avif",
    webp: "/image.webp",
    src: "/image.png",
    alt: "Description"
  }}
  loading="lazy"
  className="w-full"
/>
```

### getIconByName

Lucideアイコンを名前から取得。

```typescript
import { getIconByName } from '@aivec/magi-lp-template';

const Icon = getIconByName("Lightbulb");
// <Icon size={24} />
```

**対応アイコン (40+):**
- `Check`, `X`, `ArrowRight`, `ChevronDown`
- `User`, `Users`, `Mail`, `Phone`
- `Calendar`, `Clock`, `MapPin`, `Star`
- `Heart`, `Shield`, `Lightbulb`, `Trophy`
- など

### cn

クラス名を結合（tailwind-merge対応）。

```typescript
import { cn } from '@aivec/magi-lp-template';

const className = cn(
  "base-class",
  condition && "conditional-class",
  "p-4 p-8"  // → "p-8" (tailwind-mergeで解決)
);
```
