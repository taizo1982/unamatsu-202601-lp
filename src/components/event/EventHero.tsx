import { Button } from "../ui/button";
import { PARTY_DETAIL_URL } from "../../constants";
import heroImageAvif from "../../../design/hero-onigiri.avif";
import heroImageWebp from "../../../design/hero-onigiri.webp";
import heroImageJpg from "../../../design/hero-onigiri.jpg";
import titleImageAvif from "../../../design/unamatsu_logo_wh.avif";
import titleImageWebp from "../../../design/unamatsu_logo_wh.webp";
import titleImagePng from "../../../design/unamatsu_logo_wh.png";

export function EventHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <picture>
          <source srcSet={heroImageAvif} type="image/avif" />
          <source srcSet={heroImageWebp} type="image/webp" />
          <img 
            src={heroImageJpg}
            alt="列車で出会うカップル"
            className="w-full h-full object-cover object-top"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 flex flex-col justify-end min-h-[90vh]">
        <div className="max-w-6xl mx-auto w-full">
          {/* Desktop: Horizontal Layout, Mobile: Vertical Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12">
            {/* Left: Title */}
            <div className="flex-1 text-center lg:text-left">
              <div>
                <picture>
                  <source srcSet={titleImageAvif} type="image/avif" />
                  <source srcSet={titleImageWebp} type="image/webp" />
                  <img 
                    src={titleImagePng}
                    alt="恋するクリスマストレイン"
                    className="w-full max-w-md lg:max-w-2xl mx-auto lg:mx-0"
                  />
                </picture>
              </div>
            </div>

            {/* Right: CTA and Event Info */}
            <div className="flex-shrink-0 text-center lg:text-right flex flex-col items-center lg:items-end gap-6">
              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-10 py-7 rounded-full shadow-2xl text-xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href={PARTY_DETAIL_URL}>
                  パーティーに参加する
                </a>
              </Button>

              {/* Event Info Badge */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg">
                <p className="text-sm text-foreground/60 mb-1">2025年12月21日（日）開催</p>
                <p className="text-lg">参加費：男性6,000円／女性3,000円</p>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
