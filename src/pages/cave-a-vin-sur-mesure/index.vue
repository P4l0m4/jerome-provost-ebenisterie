<script setup lang="ts">
const story = await useAsyncStoryblok("caves-a-vin", {
  version: "published",
});

useHead({
  title: "Caves à vin sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Agencement de cave a vin sur mesure, cave a vin en bois, cave a vin haut de gamme.",
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
    name: "Caves à vin",
    url: "/cave-a-vin-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/cave-a-vin-sur-mesure" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
