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
