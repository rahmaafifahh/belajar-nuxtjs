import { defineNuxtConfig } from 'nuxt3';

export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
      ],
    },
  },
  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@pinia/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  pwa: {
    manifest: {
      "theme_color": "#8936FF",
      "background_color": "#2EC6FE",
      "icons": [
        {
          "purpose": "maskable",
          "sizes": "512x512",
          "src": "icon512_maskable.png",
          "type": "image/png"
        },
        {
          "purpose": "any",
          "sizes": "512x512",
          "src": "icon512_rounded.png",
          "type": "image/png"
        }
      ],
      "orientation": "any",
      "display": "standalone",
      "dir": "rtl",
      "lang": "id-ID",
      "name": "smkcoding",
      "short_name": "smkcoding"
    },
    devOptions: {
      enabled: true,
    }
  }
});
