/**
 * MAGI LP Template - Design Data Types
 *
 * These types define the structure of design data that can be output from Claude
 * and imported into this LP template system.
 */

// =============================================================================
// Core Types
// =============================================================================

/**
 * Image asset with multiple format support (AVIF, WebP, PNG fallback)
 */
export interface ImageAsset {
  /** AVIF format URL (highest compression) */
  avif?: string;
  /** WebP format URL (wide support) */
  webp?: string;
  /** PNG/JPG fallback URL */
  src: string;
  /** Alt text for accessibility */
  alt: string;
}

/**
 * CTA (Call to Action) button configuration
 */
export interface CTAConfig {
  /** Button text */
  text: string;
  /** Link URL */
  href: string;
  /** Button variant */
  variant?: "primary" | "secondary" | "outline";
}

/**
 * Theme color configuration
 */
export interface ThemeConfig {
  /** Primary brand color (CSS color value) */
  primary?: string;
  /** Secondary/accent color (CSS color value) */
  accent?: string;
  /** Background color */
  background?: string;
  /** Foreground/text color */
  foreground?: string;
}

// =============================================================================
// Section Data Types
// =============================================================================

/**
 * Header section data
 */
export interface HeaderData {
  /** Logo image */
  logo: ImageAsset;
  /** Optional badge text (e.g., "Winter Event") */
  badge?: string;
  /** Primary CTA button */
  cta: CTAConfig;
}

/**
 * Hero section data
 */
export interface HeroData {
  /** Background image */
  backgroundImage: ImageAsset;
  /** Title image or text */
  title: ImageAsset | string;
  /** Event date display text */
  eventDate?: string;
  /** Pricing information */
  pricing?: string;
  /** Primary CTA */
  cta: CTAConfig;
}

/**
 * Introduction section data
 */
export interface IntroData {
  /** Partnership text (e.g., "Company A x Company B") */
  partnership?: string;
  /** Subtitle text */
  subtitle?: string;
  /** Main catchcopy */
  catchcopy: string;
  /** Sub-catchcopy */
  subcopy?: string;
}

/**
 * Pain point item
 */
export interface PainItem {
  /** Pain point text */
  text: string;
}

/**
 * Pain section data
 */
export interface PainData {
  /** Section title */
  title: string;
  /** List of pain points */
  pains: PainItem[];
  /** Optional image */
  image?: ImageAsset;
  /** Empathy message */
  empathyMessage?: {
    headline: string;
    body: string;
  };
}

/**
 * Solution step item
 */
export interface SolutionStep {
  /** Lucide icon name (e.g., "UserPlus", "Heart") */
  icon: string;
  /** Step title */
  title: string;
  /** Step description */
  description: string;
}

/**
 * Solution section data
 */
export interface SolutionData {
  /** Section title */
  title: string;
  /** Section subtitle */
  subtitle?: string;
  /** Solution steps */
  steps: SolutionStep[];
}

/**
 * Testimonial item
 */
export interface TestimonialItem {
  /** Testimonial text */
  text: string;
  /** Person's age */
  age?: number;
  /** Person's gender */
  gender?: string;
  /** Person's name (optional, for privacy) */
  name?: string;
  /** Avatar image (optional) */
  avatar?: ImageAsset;
}

/**
 * Testimonials section data
 */
export interface TestimonialsData {
  /** Section title */
  title: string;
  /** Section subtitle */
  subtitle?: string;
  /** List of testimonials */
  testimonials: TestimonialItem[];
}

/**
 * Schedule item
 */
export interface ScheduleItem {
  /** Time (e.g., "13:00") */
  time: string;
  /** Activity description */
  activity: string;
}

/**
 * Event info card
 */
export interface EventInfoCard {
  /** Lucide icon name */
  icon: string;
  /** Card label */
  label: string;
  /** Main value */
  value: string;
  /** Additional note */
  note?: string;
  /** Card color theme */
  color?: "blue" | "pink" | "purple" | "green";
}

/**
 * Special offer configuration
 */
export interface SpecialOffer {
  /** Offer title */
  title: string;
  /** Offer description */
  description: string;
  /** Discount amount or value */
  discountText?: string;
}

/**
 * Offer section data
 */
export interface OfferData {
  /** Section badge text */
  badge?: string;
  /** Section title */
  title: string;
  /** Event info cards */
  infoCards: EventInfoCard[];
  /** Schedule items */
  schedule?: ScheduleItem[];
  /** Schedule section title */
  scheduleTitle?: string;
  /** Optional image */
  image?: ImageAsset;
  /** Special offer */
  specialOffer?: SpecialOffer;
  /** Primary CTA */
  cta: CTAConfig;
}

/**
 * FAQ item
 */
export interface FAQItem {
  /** Question text */
  question: string;
  /** Answer text */
  answer: string;
}

/**
 * FAQ section data
 */
export interface FAQData {
  /** Section title */
  title: string;
  /** Section badge text */
  badge?: string;
  /** FAQ items */
  items: FAQItem[];
}

/**
 * Closing section data
 */
export interface ClosingData {
  /** Main headline */
  headline: string;
  /** Body message */
  message: string;
  /** Highlight text (colored) */
  highlight?: string;
  /** Primary CTA */
  primaryCta: CTAConfig;
  /** Secondary CTA (optional) */
  secondaryCta?: CTAConfig;
}

/**
 * Footer section data
 */
export interface FooterData {
  /** Company/organization name */
  companyName?: string;
  /** Copyright text */
  copyright?: string;
  /** Footer links */
  links?: Array<{
    text: string;
    href: string;
  }>;
}

// =============================================================================
// Complete LP Design Data
// =============================================================================

/**
 * Section type identifiers
 */
export type SectionType =
  | "header"
  | "hero"
  | "intro"
  | "pain"
  | "solution"
  | "testimonials"
  | "offer"
  | "faq"
  | "closing"
  | "footer";

/**
 * Section configuration with type and data
 */
export type SectionConfig =
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

/**
 * SEO/Meta configuration
 */
export interface MetaConfig {
  /** Page title */
  title: string;
  /** Meta description */
  description: string;
  /** OG image URL */
  ogImage?: string;
  /** Canonical URL */
  canonicalUrl?: string;
  /** Schema.org structured data */
  structuredData?: Record<string, unknown>;
}

/**
 * Complete LP Design Data
 *
 * This is the main type that Claude outputs and users import.
 *
 * @example
 * ```typescript
 * import type { LPDesignData } from 'magi-lp-template';
 *
 * const myLPData: LPDesignData = {
 *   meta: {
 *     title: "My Event LP",
 *     description: "Event description",
 *   },
 *   theme: {
 *     primary: "#3b82f6",
 *     accent: "#ec4899",
 *   },
 *   sections: [
 *     { type: "hero", data: { ... } },
 *     { type: "pain", data: { ... } },
 *     // ...
 *   ],
 * };
 * ```
 */
export interface LPDesignData {
  /** SEO and meta configuration */
  meta: MetaConfig;
  /** Theme customization */
  theme?: ThemeConfig;
  /** Ordered list of sections */
  sections: SectionConfig[];
}

// =============================================================================
// Utility Types
// =============================================================================

/**
 * Extract data type for a specific section type
 */
export type ExtractSectionData<T extends SectionType> = Extract<
  SectionConfig,
  { type: T }
>["data"];

/**
 * Props type for section components
 */
export type SectionProps<T extends SectionType> = {
  data: ExtractSectionData<T>;
  className?: string;
};
