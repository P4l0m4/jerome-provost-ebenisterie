import { stringToSlug } from "./slugify";

import StoryblokClient from "storyblok-js-client";

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_KEY,
  cache: {
    clear: "auto",
    type: "memory",
  },
  region: "fr",
});

export async function getDressingPages() {
  const response = await Storyblok.get("cdn/stories/dressings", {});
  const dressingsSections = response.data.story.content.sections;
  return dressingsSections.map((furniture: any) => ({
    loc: `/dressings-sur-mesure-savoie/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getCuisinePages() {
  const response = await Storyblok.get("cdn/stories/cuisines", {});
  const cuisineSections = response.data.story.content.sections;
  return cuisineSections.map((furniture: any) => ({
    loc: `/cuisine-sur-mesure-savoie/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getSalleDeBainPages() {
  const response = await Storyblok.get("cdn/stories/salles-de-bain", {});
  const salleDeBainSections = response.data.story.content.sections;
  return salleDeBainSections.map((furniture: any) => ({
    loc: `/salle-de-bain-sur-mesure-savoie/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getBureauxEtMagasinsPages() {
  const response = await Storyblok.get("cdn/stories/bureaux-et-magasins", {});
  const bureauxEtMagasinsSections = response.data.story.content.sections;
  return bureauxEtMagasinsSections.map((furniture: any) => ({
    loc: `/bureaux-et-magasins-sur-mesure/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getAutresMeublesPages() {
  const response = await Storyblok.get("cdn/stories/autres-meubles", {});
  const autresMeublesSections = response.data.story.content.sections;
  return autresMeublesSections.map((furniture: any) => ({
    loc: `/autres-meubles-sur-mesure/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getTablesEtTablesBassesPages() {
  const response = await Storyblok.get(
    "cdn/stories/tables-et-tables-basses",
    {}
  );
  const tablesEtTablesBassesSections = response.data.story.content.sections;
  return tablesEtTablesBassesSections.map((furniture: any) => ({
    loc: `/tables-et-tables-basses-sur-mesure/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}

export async function getSalonsEtSallesAMangerPages() {
  const response = await Storyblok.get(
    "cdn/stories/salons-et-salles-a-manger",
    {}
  );
  const salonsEtSallesAMangerSections = response.data.story.content.sections;
  return salonsEtSallesAMangerSections.map((furniture: any) => ({
    loc: `/salons-et-salles-a-manger-sur-mesure/${stringToSlug(furniture.subtitle)}`,
  }));
}

export async function getCavesAVinPages() {
  const response = await Storyblok.get("cdn/stories/caves-a-vin", {});
  const cavesAVinSections = response.data.story.content.sections;
  return cavesAVinSections.map((furniture: any) => ({
    loc: `/caves-a-vin-sur-mesure/${stringToSlug(furniture.subtitle)}`,
    changefreq: "daily",
    priority: 0.9,
  }));
}
