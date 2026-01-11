import { Heart, MessageCircle } from "lucide-react";
import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import { Button } from "../ui/button";

export interface ClosingSectionProps extends SectionProps<"closing"> {}

/**
 * Closing section component
 *
 * Displays a closing message with CTA buttons.
 */
export function ClosingSection({ data, className }: ClosingSectionProps) {
  return (
    <section
      className={cn(
        "py-20 bg-gradient-to-b from-white via-blue-50/50 to-pink-50/50 relative overflow-hidden",
        className
      )}
    >
      {/* Decorative hearts */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Heart
          className="absolute top-10 left-10 w-12 h-12 text-accent/10 animate-pulse"
        />
        <Heart
          className="absolute top-32 right-20 w-8 h-8 text-primary/10 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <Heart
          className="absolute bottom-20 left-1/4 w-10 h-10 text-accent/10 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <Heart
          className="absolute bottom-32 right-1/3 w-6 h-6 text-primary/10 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-8 leading-tight font-bold">
            {data.headline}
          </h2>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl mb-12">
            <p className="text-lg sm:text-xl mb-6 leading-relaxed">
              {data.message}
            </p>
            {data.highlight && (
              <p className="text-xl sm:text-2xl text-primary leading-relaxed">
                <span className="text-accent">{data.highlight}</span>
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-[#ff84b2] hover:bg-[#ff6ba3] text-white px-12 py-8 rounded-full shadow-2xl text-xl hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a href={data.primaryCta.href}>{data.primaryCta.text}</a>
            </Button>
            {data.secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-12 py-8 rounded-full shadow-lg text-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <a
                  href={data.secondaryCta.href}
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-6 h-6" />
                  {data.secondaryCta.text}
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
