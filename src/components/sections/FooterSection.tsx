import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";

export interface FooterSectionProps extends SectionProps<"footer"> {}

/**
 * Footer section component
 *
 * Displays company info, links, and copyright.
 */
export function FooterSection({ data, className }: FooterSectionProps) {
  return (
    <footer className={cn("py-8 bg-gray-900 text-white", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Links */}
          {data.links && data.links.length > 0 && (
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              {data.links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          )}

          {/* Company name and copyright */}
          <div className="text-center text-gray-400 text-sm">
            {data.companyName && (
              <p className="mb-2">{data.companyName}</p>
            )}
            {data.copyright && <p>{data.copyright}</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
