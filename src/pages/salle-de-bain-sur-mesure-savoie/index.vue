<script setup lang="ts">
const story = await useAsyncStoryblok("salles-de-bain", {
  version: "published",
});

useHead({
  title: "Salle de bain sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de salles de bain sur mesure à Chambéry en Savoie. Découvrez tous nos salles de bain sur mesure.",
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
    name: "Salles de bain",
    url: "/salle-de-bain-sur-mesure-savoie",
  },
];
</script>
<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/salle-de-bain-sur-mesure-savoie" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
