<script setup lang="ts">
import placeholder3 from "@/assets/images/placeholder3.jpg";
import placeholder5 from "@/assets/images/placeholder5.jpg";
import salleDeBain from "@/assets/images/salle-de-bain.webp";

import { categories } from "@/utils/mockData";

const bannerElements = [
  {
    image: salleDeBain,
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
