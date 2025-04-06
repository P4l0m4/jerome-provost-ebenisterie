<script setup lang="ts">
const story = await useAsyncStoryblok("dressings", { version: "published" });

useHead({
  title: "Dressings sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de dressings sur mesure à Chambéry en Savoie. Découvrez tous nos dressings sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Dressings",
    url: window.location.origin + "/dressings-sur-mesure-savoie",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/buanderie-sur-mesure-savoie" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
