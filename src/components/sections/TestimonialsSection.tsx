import { Quote } from "lucide-react";
import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";

export interface TestimonialsSectionProps extends SectionProps<"testimonials"> {}

/**
 * Testimonials section component
 *
 * Displays user testimonials in a grid layout.
 */
export function TestimonialsSection({
  data,
  className,
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "py-20 bg-gradient-to-b from-blue-50/30 to-pink-50/30",
        className
      )}
    >
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

          <div className="grid md:grid-cols-3 gap-8">
            {data.testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 w-12 h-12 text-primary/10" />
                <div className="relative z-10">
                  <p className="text-lg mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
                      {testimonial.gender === "female" ||
                      testimonial.gender === "女性"
                        ? "F"
                        : "M"}
                    </div>
                    <div>
                      {testimonial.name && (
                        <p className="font-medium">{testimonial.name}</p>
                      )}
                      <p className="text-sm text-foreground/60">
                        {testimonial.age && `${testimonial.age}歳`}
                        {testimonial.age && testimonial.gender && "・"}
                        {testimonial.gender}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
