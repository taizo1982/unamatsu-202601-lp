import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import { getIconByName } from "../../utils/icons";

export interface SolutionSectionProps extends SectionProps<"solution"> {}

const stepColors = [
  "from-primary to-blue-400",
  "from-accent to-pink-400",
  "from-purple-400 to-purple-600",
  "from-red-400 to-red-600",
  "from-yellow-400 to-yellow-600",
];

/**
 * Solution section component
 *
 * Displays a step-by-step solution flow with icons.
 */
export function SolutionSection({ data, className }: SolutionSectionProps) {
  return (
    <section className={cn("py-20 bg-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl mb-4 text-center font-bold">
            {data.title}
          </h2>
          {data.subtitle && (
            <p className="text-center text-lg text-foreground/70 mb-16">
              {data.subtitle}
            </p>
          )}

          {/* Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-yellow-500 transform -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-12">
              {data.steps.map((step, index) => {
                const Icon = getIconByName(step.icon);
                const isEven = index % 2 === 0;
                const colorClass = stepColors[index % stepColors.length];

                return (
                  <div
                    key={index}
                    className={`flex items-center gap-8 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    } flex-col`}
                  >
                    {/* Content */}
                    <div
                      className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"} text-center`}
                    >
                      <div
                        className={`inline-block bg-gradient-to-br ${colorClass} text-white rounded-2xl px-6 py-4 shadow-lg`}
                      >
                        <h3 className="text-2xl mb-2">{step.title}</h3>
                        <p className="text-sm opacity-90">{step.description}</p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-xl border-4 border-primary">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
