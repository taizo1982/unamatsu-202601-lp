import { X } from "lucide-react";
import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import { ResponsiveImage } from "../../utils/image";

export interface PainSectionProps extends SectionProps<"pain"> {}

/**
 * Pain points section component
 *
 * Displays user pain points with optional image and empathy message.
 */
export function PainSection({ data, className }: PainSectionProps) {
  return (
    <section
      className={cn(
        "py-20 bg-gradient-to-b from-white to-blue-50/30",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl mb-12 font-bold">{data.title}</h2>

          <div
            className={cn(
              "gap-8 items-center mb-12",
              data.image ? "grid md:grid-cols-2" : ""
            )}
          >
            {/* Pain points */}
            <div className="space-y-4">
              {data.pains.map((pain, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm border border-red-100"
                >
                  <X className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <p className="text-left">{pain.text}</p>
                </div>
              ))}
            </div>

            {/* Image */}
            {data.image && (
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <ResponsiveImage
                  image={data.image}
                  className="w-full h-64 object-cover"
                />
              </div>
            )}
          </div>

          {/* Empathy message */}
          {data.empathyMessage && (
            <div className="bg-gradient-to-r from-pink-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <p className="text-xl sm:text-2xl mb-4">
                {data.empathyMessage.headline}
              </p>
              <p className="text-lg text-foreground/80">
                {data.empathyMessage.body}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
