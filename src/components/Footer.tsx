import logoAvif from "../../design/unamatsu_logo_wh.avif";
import logoWebp from "../../design/unamatsu_logo_wh.webp";
import logoPng from "../../design/unamatsu_logo_wh.png";

export function Footer() {
  return (
    <footer className="bg-stone-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <div>
            <picture>
              <source srcSet={logoAvif} type="image/avif" />
              <source srcSet={logoWebp} type="image/webp" />
              <img
                src={logoPng}
                alt="うな松"
                className="h-12 w-auto"
              />
            </picture>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/60">
            © 2025 うな松. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
