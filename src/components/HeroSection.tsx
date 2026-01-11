import { Button } from "./ui/button";
import { Heart, CheckCircle } from "lucide-react";
import heroImageAvif from "../assets/7c2373c068f4d4ae4b150044e0aa9c6cbb95cbab.avif";
import heroImageWebp from "../assets/7c2373c068f4d4ae4b150044e0aa9c6cbb95cbab.webp";
import heroImagePng from "../assets/7c2373c068f4d4ae4b150044e0aa9c6cbb95cbab.png";

interface HeroSectionProps {
  onCTAClick: (ctaType: string) => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <picture className="block h-full w-full">
          <source srcSet={heroImageAvif} type="image/avif" />
          <source srcSet={heroImageWebp} type="image/webp" />
          <img
            src={heroImagePng}
            alt="婚活イベントのイメージ"
            className="h-full w-full object-cover"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            半年以内に"本気の出会い"を<br />叶えるあなたへ
          </h1>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-8">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-accent" />
              <span className="text-lg md:text-xl">成婚実績 12,000件</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-lg md:text-xl">満足度 97%</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full shadow-lg min-w-[280px]"
              onClick={() => onCTAClick('counseling')}
            >
              無料カウンセリングを予約する
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/95 hover:bg-white text-primary border-2 border-white px-8 py-6 rounded-full shadow-lg min-w-[280px]"
              onClick={() => onCTAClick('diagnosis')}
            >
              理想の相手を診断する（3分で完了）
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
