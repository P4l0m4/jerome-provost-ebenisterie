<script setup lang="ts">
const story = await useAsyncStoryblok("salons-et-salles-a-manger", {
  version: "published",
});

useHead({
  title: "Salons et salles à manger sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Agencement de salons et salles à manger sur mesure, salons et salles à manger en bois, salons et salles à manger haut de gamme.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Tous les meubles sur mesure",
    url: "/meubles-sur-mesure-savoie",
  },
  {
    name: "Salons et salles à manger",
    url: "/salons-et-salles-a-manger-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase
    :story
    parent-slug="/salons-et-salles-a-manger-sur-mesure"
  />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
