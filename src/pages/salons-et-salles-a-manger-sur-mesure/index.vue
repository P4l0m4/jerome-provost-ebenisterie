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
    url: window.location.origin,
  },
  {
    name: "Salons et salles à manger",
    url: window.location.origin + "/salons-et-salles-a-manger-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
