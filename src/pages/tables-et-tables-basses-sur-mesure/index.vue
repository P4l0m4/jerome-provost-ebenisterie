<script setup lang="ts">
const story = await useAsyncStoryblok("tables-et-tables-basses", {
  version: "published",
});

useHead({
  title: "Tables et tables basses sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de tables sur mesure et de tables basses sur mesure à Chambéry en Savoie. Création de tables haut de gamme sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Tables et tables basses",
    url: window.location.origin + "/tables-et-tables-basses-sur-mesure",
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
