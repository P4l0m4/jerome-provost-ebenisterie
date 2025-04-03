import {
  getDressingPages,
  getTablesEtTablesBassesPages,
} from "./src/utils/sitemap";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  ssr: false,
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
      const bureauxEtComptoirsPages = await getBureauxEtComptoirsPages();
      const autresMeublesPages = await getAutresMeublesPages();
      const tablesEtTablesBassesPages = await getTablesEtTablesBassesPages();
      const salonsEtSallesAMangerPages = await getSalonsEtSallesAMangerPages();
      const cavesAVinPages = await getCavesAVinPages();
      return [
        ...dressingPages,
        ...cuisinePages,
        ...salleDeBainPages,
        ...bureauxEtComptoirsPages,
        ...autresMeublesPages,
        ...tablesEtTablesBassesPages,
        ...salonsEtSallesAMangerPages,
        ...cavesAVinPages,
      ];
    },
  },

  site: {
    url: "https://jpebenisterie73.fr/",
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
});
