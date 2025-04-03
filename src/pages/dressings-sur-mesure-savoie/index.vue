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
