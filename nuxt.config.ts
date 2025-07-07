import {
  getDressingPages,
  getTablesEtTablesBassesPages,
  getSalonsEtSallesAMangerPages,
  getCavesAVinPages,
  getCuisinePages,
  getSalleDeBainPages,
  getBureauxEtMagasinsPages,
  getAutresMeublesPages,
} from "./src/utils/sitemap";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "netlify",
  },

  srcDir: "src",
  css: ["@/styles/global.scss"],
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/sitemap",
    "nuxt-jsonld",
    "dayjs-nuxt",
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_KEY,
        cacheProvider: "memory",
        apiOptions: { region: "fr" },
      },
    ],
  ],
  sitemap: {
    urls: async () => {
      const dressingPages = await getDressingPages();
      const cuisinePages = await getCuisinePages();
      const salleDeBainPages = await getSalleDeBainPages();
      const bureauxEtMagasinsPages = await getBureauxEtMagasinsPages();
      const autresMeublesPages = await getAutresMeublesPages();
      const tablesEtTablesBassesPages = await getTablesEtTablesBassesPages();
      const salonsEtSallesAMangerPages = await getSalonsEtSallesAMangerPages();
      const cavesAVinPages = await getCavesAVinPages();
      return [
        ...dressingPages,
        ...cuisinePages,
        ...salleDeBainPages,
        ...bureauxEtMagasinsPages,
        ...autresMeublesPages,
        ...tablesEtTablesBassesPages,
        ...salonsEtSallesAMangerPages,
        ...cavesAVinPages,
      ];
    },
  },

  site: {
    url: "https://jpebenisterie73.fr/",
    name: "JP Ébénisterie",
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/styles/_variables.scss";',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      STORYBLOK_KEY: process.env.STORYBLOK_KEY,
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "shortcut icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", href: "/favicon.ico" },
      ],
    },
  },
});
