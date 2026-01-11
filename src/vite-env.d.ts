/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_GA_ADS_ID?: string;
  readonly VITE_META_PIXEL_ID?: string;
  readonly VITE_META_APP_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
