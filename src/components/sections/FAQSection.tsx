import { Shield } from "lucide-react";
import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface FAQSectionProps extends SectionProps<"faq"> {}

/**
 * FAQ section component
 *
 * Displays frequently asked questions in an accordion format.
 */
export function FAQSection({ data, className }: FAQSectionProps) {
  return (
    <section
      className={cn(
        "py-20 bg-gradient-to-b from-pink-50/30 to-white",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            {data.badge && (
              <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-3 rounded-full mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <span className="text-primary">{data.badge}</span>
              </div>
            )}
            <h2 className="text-2xl sm:text-3xl mb-4 font-bold">{data.title}</h2>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Accordion type="single" collapsible className="w-full">
              {data.items.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="pr-4">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/80 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
