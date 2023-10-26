// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link:[
        { rel: "stylesheet", href:"https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" }
      ],
    }
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],

  tailwindcss:{
    cssPath: "~/assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  pwa: {
    manifest :{"theme_color":"#8936FF",
    "background_color":"#2EC6FE",
    "icons":[
      {"purpose":"maskable",
      "sizes":"512x512",
      "src":"icon512_maskable.png",
      "type":"image/png"}
      ,{"purpose":"any",
      "sizes":"512x512",
      "src":"icon512_rounded.png",
      "type":"image/png"}],
      "orientation":"any","display":"standalone","dir":"rtl","lang":"id-ID","name":"smkcoding","short_name":"smkcoding"},
    devOptions:{
      enabled: true,
    }
  }
})
