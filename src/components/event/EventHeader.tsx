import { Button } from "../ui/button";
import { Snowflake } from "lucide-react";
import { useState, useEffect } from "react";
import { PARTY_DETAIL_URL } from "../../constants";
import logoAvif from "../../../design/unamatsu_logo.avif";
import logoWebp from "../../../design/unamatsu_logo.webp";
import logoPng from "../../../design/unamatsu_logo.png";

export function EventHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // スクロール位置が50px以下の場合は常に表示
      if (currentScrollY <= 50) {
        setIsVisible(true);
      } else {
        // 上方向にスクロール（逆スクロール）で表示
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } 
        // 下方向にスクロールで非表示
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
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b-2 border-gradient-to-r from-primary to-accent transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <picture>
              <source srcSet={logoAvif} type="image/avif" />
              <source srcSet={logoWebp} type="image/webp" />
              <img 
                src={logoPng} 
                alt="I be connect" 
                className="h-4 md:h-10 object-contain"
                style={{ aspectRatio: 'auto' }}
              />
            </picture>
            <div className="hidden sm:flex items-center gap-2 text-sm text-foreground/60">
              <Snowflake className="w-4 h-4 text-primary" />
              <span>冬限定イベント</span>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-lg hover:shadow-red-500/30 transition-all"
            asChild
          >
            <a href={PARTY_DETAIL_URL}>
              パーティーに参加する
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
