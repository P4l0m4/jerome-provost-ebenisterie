<script setup lang="ts">
const story = await useAsyncStoryblok("entree", {
  version: "published",
});

useHead({
  title: "Meubles d'entrée sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de meubles d'entrée sur mesure à Chambéry en Savoie. Création de meubles d'entrée haut de gamme sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Meubles d'entrée",
    url: window.location.origin + "/meubles-entree-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/meubles-entree-sur-mesure" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
