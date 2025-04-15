<script setup lang="ts">
const story = await useAsyncStoryblok("cuisines", { version: "published" });

useHead({
  title: "Cuisine sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de cuisine sur mesure à Chambéry en Savoie. Découvrez tous nos cuisines sur mesure. Réalisation de cuisines haut de gamme.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Cuisines",
    url: "/cuisine-sur-mesure-savoie",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/cuisine-sur-mesure-savoie" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
