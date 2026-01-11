import type { ImageAsset } from "../types/design-data";

export interface ResponsiveImageProps {
  image: ImageAsset;
  className?: string;
  loading?: "lazy" | "eager";
}

/**
 * Render a responsive image with AVIF/WebP/fallback support
 */
export function ResponsiveImage({
  image,
  className,
  loading = "lazy",
}: ResponsiveImageProps) {
  return (
    <picture>
      {image.avif && <source srcSet={image.avif} type="image/avif" />}
      {image.webp && <source srcSet={image.webp} type="image/webp" />}
      <img
        src={image.src}
        alt={image.alt}
        className={className}
        loading={loading}
      />
    </picture>
  );
}
