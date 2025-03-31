<script setup lang="ts">
import placeholder3 from "@/assets/images/placeholder3.jpg";
import placeholder5 from "@/assets/images/placeholder5.jpg";

import { categories } from "@/utils/mockData";

const bannerElements = [
  {
    image: placeholder5,
    label: "Meubles pour particuliers",
    link: "/ameublement-particuliers-savoie",
  },
  {
    image: placeholder3,
    label: "Tous nos meubles sur mesure",
    link: "/meubles-sur-mesure-savoie",
  },
];

const filteredCategories = categories.filter(
  (category) =>
    category.category === "bureaux et comptoirs" ||
    category.category === "autres"
);

useHead({
  title: "Meuble sur mesures en Savoie | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Creation meubles sur mesures à Chambéry en Savoie. Découvrez tous nos meubles sur mesure, cuisines, bibliothèques, dressings sur mesure, maisons et bureaux sur mesure.",
    },
  ],
});
</script>
<template>
  <BannerComponent :banner-elements />
  <CategoriesList :categories="filteredCategories" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
