import type { HeroData, SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import { ResponsiveImage } from "../../utils/image";
import { Button } from "../ui/button";

export interface HeroSectionProps extends SectionProps<"hero"> {}

/**
 * Hero section component
 *
 * Displays a full-screen hero with background image, title, and CTA.
 */
export function HeroSection({ data, className }: HeroSectionProps) {
  const titleIsImage = typeof data.title !== "string";

  return (
    <section
      className={cn(
        "relative min-h-[90vh] flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <ResponsiveImage
          image={data.backgroundImage}
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 flex flex-col justify-end min-h-[90vh]">
        <div className="max-w-6xl mx-auto w-full">
          {/* Desktop: Horizontal Layout, Mobile: Vertical Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            {/* Left: Title */}
            <div className="flex-1 text-center lg:text-left">
              {titleIsImage ? (
                <div>
                  <ResponsiveImage
                    image={data.title as HeroData["backgroundImage"]}
                    className="w-full max-w-md lg:max-w-2xl mx-auto lg:mx-0"
                    loading="eager"
                  />
                </div>
              ) : (
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg">
                  {data.title as string}
                </h1>
              )}
            </div>

            {/* Right: CTA and Event Info */}
            <div className="flex-shrink-0 text-center lg:text-right flex flex-col items-center lg:items-end gap-6">
              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-7 rounded-full shadow-2xl text-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={data.cta.href}>{data.cta.text}</a>
              </Button>

              {/* Event Info Badge */}
              {(data.eventDate || data.pricing) && (
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
                  {data.eventDate && (
                    <p className="text-sm text-foreground/60 mb-1">
                      {data.eventDate}
                    </p>
                  )}
                  {data.pricing && <p className="text-lg">{data.pricing}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
