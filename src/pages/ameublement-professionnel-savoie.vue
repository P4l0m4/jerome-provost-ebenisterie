<script setup lang="ts">
import cuisine from "@/assets/images/cuisines/cuisine-sur-mesure-1.webp";
import table from "@/assets/images/tables-et-tables-basses/table-sur-mesure-1.webp";

import { categories } from "@/utils/mockData";

const bannerElements = [
  {
    image: cuisine,
    label: "Tous nos meubles sur mesure",
    link: "/meubles-sur-mesure-savoie",
  },
  {
    image: table,
    label: "Meubles pour particuliers",
    link: "/ameublement-particuliers-savoie",
  },
];

const filteredCategories = categories.filter(
  (category) =>
    category.category === "bureaux et magasins" ||
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

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Ameublement professionnel",
    url: window.location.origin + "/ameublement-professionnel-savoie",
  },
];
</script>
<template>
  <BannerComponent :banner-elements />
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <CategoriesList :categories="filteredCategories" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
