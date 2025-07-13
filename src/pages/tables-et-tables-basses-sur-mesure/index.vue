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
    url: "/",
  },
  {
    name: "Tous les meubles sur mesure",
    url: "/meubles-sur-mesure-savoie",
  },
  {
    name: "Tables et tables basses",
    url: "/tables-et-tables-basses-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/tables-et-tables-basses-sur-mesure" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
