import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";

export interface IntroSectionProps extends SectionProps<"intro"> {}

/**
 * Introduction section component
 *
 * Displays partnership info, catchcopy, and subtitle.
 */
export function IntroSection({ data, className }: IntroSectionProps) {
  return (
    <section className={cn("py-12 bg-background", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Partnership */}
          {data.partnership && (
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="px-6 py-3 bg-white rounded-full text-sm shadow-md border border-gray-100">
                {data.partnership}
              </span>
            </div>
          )}

          {/* Subtitle */}
          {data.subtitle && (
            <p className="text-lg sm:text-xl text-foreground font-bold">
              {data.subtitle}
            </p>
          )}

          {/* Catchcopy */}
          <p className="text-xl sm:text-2xl md:text-3xl text-foreground">
            {data.catchcopy}
          </p>

          {/* Subcopy */}
          {data.subcopy && (
            <p className="text-lg sm:text-xl text-foreground/80">
              {data.subcopy}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
