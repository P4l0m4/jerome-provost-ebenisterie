<script setup lang="ts">
const story = await useAsyncStoryblok("bureaux-et-magasins", {
  version: "published",
});

useHead({
  title:
    "Amenagement bureau et magasins sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Amenagement bureau, magasin et magasins sur mesure à Chambéry en Savoie. Découvrez tous nos bureaux, magasins et comptoirs sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Bureaux et magasins",
    url: window.location.origin + "/bureaux-et-magasins-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/bureaux-et-magasins-sur-mesure" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
