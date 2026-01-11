import { Snowflake } from "lucide-react";
import { useState, useEffect } from "react";
import type { SectionProps } from "../../types/design-data";
import { cn } from "../../utils/cn";
import { ResponsiveImage } from "../../utils/image";
import { Button } from "../ui/button";

export interface HeaderSectionProps extends SectionProps<"header"> {}

/**
 * Header section component
 *
 * Fixed header with logo, badge, and CTA button.
 * Auto-hides on scroll down, shows on scroll up.
 */
export function HeaderSection({ data, className }: HeaderSectionProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show when near top
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        // Show on scroll up
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
        // Hide on scroll down
        else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b-2 border-gradient-to-r from-primary to-accent transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ResponsiveImage
              image={data.logo}
              className="h-4 md:h-10 object-contain"
              loading="eager"
            />
            {data.badge && (
              <div className="hidden sm:flex items-center gap-2 text-sm text-foreground/60">
                <Snowflake className="w-4 h-4 text-primary" />
                <span>{data.badge}</span>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <Button
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/30 transition-all"
            asChild
          >
            <a href={data.cta.href}>{data.cta.text}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
