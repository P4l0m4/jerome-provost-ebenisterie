<script setup lang="ts">
const story = await useAsyncStoryblok("autres-meubles", {
  version: "published",
});

useHead({
  title: "Autres meubles sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Découvrez les meubles sur mesure hors catégories. Claustra en bois, coffres de lit sur mesure, encastrement en bois, etc. ",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Autres meubles",
    url: "/autres-meubles-sur-mesure",
  },
];
</script>

<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <FurnitureShowcase :story parent-slug="/autres-meubles-sur-mesure" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
