<script setup lang="ts">
const story = await useAsyncStoryblok("buanderies", { version: "published" });

useHead({
  title: "Buanderie sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Votre buanderie sur mesure à Chambéry en Savoie. Découvrez toutes nos buanderies sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Buanderies",
    url: window.location.origin + "/buanderie-sur-mesure-savoie",
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
