/**
 * MAGI LP Template
 *
 * A React component library for creating landing pages from design data.
 * Import design data from Claude and generate beautiful landing pages.
 *
 * @packageDocumentation
 */

// =============================================================================
// Type Exports
// =============================================================================

export type {
  // Core types
  ImageAsset,
  CTAConfig,
  ThemeConfig,
  // Section data types
  HeaderData,
  HeroData,
  IntroData,
  PainItem,
  PainData,
  SolutionStep,
  SolutionData,
  TestimonialItem,
  TestimonialsData,
  ScheduleItem,
  EventInfoCard,
  SpecialOffer,
  OfferData,
  FAQItem,
  FAQData,
  ClosingData,
  FooterData,
  // LP structure types
  SectionType,
  SectionConfig,
  MetaConfig,
  LPDesignData,
  // Utility types
  ExtractSectionData,
  SectionProps,
} from "./types";

// =============================================================================
// Component Exports
// =============================================================================

// Main LP component
export {
  LandingPage,
  createLandingPage,
  type LandingPageProps,
} from "./components/LandingPage";

// Section components (for individual use)
export {
  HeaderSection,
  HeroSection,
  IntroSection,
  PainSection,
  SolutionSection,
  TestimonialsSection,
  OfferSection,
  FAQSection,
  ClosingSection,
  FooterSection,
  // Props types
  type HeaderSectionProps,
  type HeroSectionProps,
  type IntroSectionProps,
  type PainSectionProps,
  type SolutionSectionProps,
  type TestimonialsSectionProps,
  type OfferSectionProps,
  type FAQSectionProps,
  type ClosingSectionProps,
  type FooterSectionProps,
} from "./components/sections";

// UI components (for customization)
export {
  Button,
  buttonVariants,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/ui";

// =============================================================================
// Utility Exports
// =============================================================================

export { cn, getIconByName, isValidIconName, ResponsiveImage } from "./utils";
