import { Button } from "./ui/button";
import logoAvif from "../assets/b29d72b932bc03012c283d26e62b9d662d1c5861.avif";
import logoWebp from "../assets/b29d72b932bc03012c283d26e62b9d662d1c5861.webp";
import logoPng from "../assets/b29d72b932bc03012c283d26e62b9d662d1c5861.png";

interface HeaderProps {
  onCTAClick: (ctaType: string) => void;
}

export function Header({ onCTAClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <picture>
              <source srcSet={logoAvif} type="image/avif" />
              <source srcSet={logoWebp} type="image/webp" />
              <img 
                src={logoPng} 
                alt="I be connect" 
                className="h-8 md:h-10 w-auto"
              />
            </picture>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="hidden sm:inline-flex border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => onCTAClick('diagnosis')}
            >
              診断する
            </Button>
            <Button
              className="bg-accent hover:bg-accent/90 text-white"
              onClick={() => onCTAClick('counseling')}
            >
              無料相談
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
