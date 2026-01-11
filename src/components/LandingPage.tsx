import type { LPDesignData, SectionConfig } from "../types/design-data";
import {
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
} from "./sections";

export interface LandingPageProps {
  /** LP design data from Claude or manual configuration */
  data: LPDesignData;
  /** Additional CSS class name */
  className?: string;
}

/**
 * Render a section based on its type
 */
function renderSection(section: SectionConfig, index: number) {
  const key = `section-${section.type}-${index}`;

  switch (section.type) {
    case "header":
      return <HeaderSection key={key} data={section.data} />;
    case "hero":
      return <HeroSection key={key} data={section.data} />;
    case "intro":
      return <IntroSection key={key} data={section.data} />;
    case "pain":
      return <PainSection key={key} data={section.data} />;
    case "solution":
      return <SolutionSection key={key} data={section.data} />;
    case "testimonials":
      return <TestimonialsSection key={key} data={section.data} />;
    case "offer":
      return <OfferSection key={key} data={section.data} />;
    case "faq":
      return <FAQSection key={key} data={section.data} />;
    case "closing":
      return <ClosingSection key={key} data={section.data} />;
    case "footer":
      return <FooterSection key={key} data={section.data} />;
    default:
      console.warn(`Unknown section type: ${(section as SectionConfig).type}`);
      return null;
  }
}

/**
 * LandingPage component
 *
 * Renders a complete landing page from design data.
 *
 * @example
 * ```tsx
 * import { LandingPage } from 'magi-lp-template';
 * import myDesignData from './my-design-data';
 *
 * function App() {
 *   return <LandingPage data={myDesignData} />;
 * }
 * ```
 */
export function LandingPage({ data, className }: LandingPageProps) {
  // Apply theme CSS variables if provided
  const themeStyles = data.theme
    ? ({
        "--primary": data.theme.primary,
        "--accent": data.theme.accent,
        "--background": data.theme.background,
        "--foreground": data.theme.foreground,
      } as React.CSSProperties)
    : undefined;

  return (
    <div className={className} style={themeStyles}>
      {data.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
}

/**
 * Create a LandingPage component from design data
 *
 * @example
 * ```tsx
 * import { createLandingPage } from 'magi-lp-template';
 * import myDesignData from './my-design-data';
 *
 * const MyLP = createLandingPage(myDesignData);
 *
 * function App() {
 *   return <MyLP />;
 * }
 * ```
 */
export function createLandingPage(data: LPDesignData) {
  return function GeneratedLandingPage({
    className,
  }: {
    className?: string;
  }) {
    return <LandingPage data={data} className={className} />;
  };
}
