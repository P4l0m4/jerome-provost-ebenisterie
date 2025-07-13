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
    url: "/",
  },
  {
    name: "Tous les meubles sur mesure",
    url: "/meubles-sur-mesure-savoie",
  },
  {
    name: "Bureaux et magasins",
    url: "/buanderie-sur-mesure-savoie",
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
