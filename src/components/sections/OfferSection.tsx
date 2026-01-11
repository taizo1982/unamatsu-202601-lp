import { Clock, Gift } from "lucide-react";
import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import { getIconByName } from "../../utils/icons";
import { ResponsiveImage } from "../../utils/image";
import { Button } from "../ui/button";

export interface OfferSectionProps extends SectionProps<"offer"> {}

const cardColors = {
  blue: "from-blue-50 to-blue-100/50",
  pink: "from-pink-50 to-pink-100/50",
  purple: "from-purple-50 to-purple-100/50",
  green: "from-green-50 to-green-100/50",
};

const iconColors = {
  blue: "bg-primary",
  pink: "bg-accent",
  purple: "bg-purple-500",
  green: "bg-green-500",
};

/**
 * Offer section component
 *
 * Displays event details, schedule, and special offers.
 */
export function OfferSection({ data, className }: OfferSectionProps) {
  return (
    <section
      className={cn("py-20 bg-white relative overflow-hidden", className)}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            {data.badge && (
              <div className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-2 rounded-full mb-4 shadow-lg">
                {data.badge}
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold">{data.title}</h2>
          </div>

          {/* Event Info Cards */}
          {data.infoCards.length > 0 && (
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {data.infoCards.map((card, index) => {
                const Icon = getIconByName(card.icon);
                const color = card.color || "blue";

                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${cardColors[color]} rounded-2xl p-6 shadow-lg`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-12 h-12 ${iconColors[color]} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">
                          {card.label}
                        </p>
                        <p className="text-xl">{card.value}</p>
                        {card.note && (
                          <p className="text-sm text-foreground/80 mt-1">
                            {card.note}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Schedule */}
          {data.schedule && data.schedule.length > 0 && (
            <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-2xl p-8 shadow-xl mb-12">
              <h3 className="text-2xl sm:text-3xl mb-8 text-center flex items-center justify-center gap-2 font-bold">
                <Clock className="w-8 h-8 text-primary" />
                {data.scheduleTitle || "Schedule"}
              </h3>
              <div className="space-y-4">
                {data.schedule.map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-4 items-start bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-xl text-primary flex-shrink-0 w-16">
                      {item.time}
                    </div>
                    <div className="flex-1">
                      <p className="text-foreground/90">{item.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Image */}
          {data.image && (
            <div className="rounded-2xl overflow-hidden shadow-2xl mb-12 bg-white">
              <ResponsiveImage
                image={data.image}
                className="w-full h-auto object-contain"
              />
            </div>
          )}

          {/* Special Offer */}
          {data.specialOffer && (
            <div className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 rounded-2xl p-8 shadow-2xl text-white text-center mb-12">
              <Gift className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl sm:text-3xl mb-4">
                {data.specialOffer.title}
              </h3>
              <p className="text-xl">
                {data.specialOffer.description}
                {data.specialOffer.discountText && (
                  <span className="text-3xl mx-2">
                    {data.specialOffer.discountText}
                  </span>
                )}
              </p>
            </div>
          )}

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-12 py-8 rounded-full shadow-2xl text-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href={data.cta.href}>{data.cta.text}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
