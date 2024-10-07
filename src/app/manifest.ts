import { DEFAULT_LANG, getDictionary } from "@/src/lib/internationalizations";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const { t } = getDictionary(DEFAULT_LANG);
  const title = t.title;

  return {
    name: title,
    short_name: title,
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
    start_url: "/",
    icons: [
      {
        src: "/images/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
