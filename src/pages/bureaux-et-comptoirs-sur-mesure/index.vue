<script setup lang="ts">
const story = await useAsyncStoryblok("bureaux-et-comptoirs", {
  version: "published",
});

useHead({
  title:
    "Amenagement bureau et comptoirs sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Amenagement bureau, magasin et comptoirs sur mesure à Chambéry en Savoie. Découvrez tous nos bureaux, magasins et comptoirs sur mesure.",
    },
  ],
});
</script>

<template>
  <FurnitureShowcase :story parent-slug="/bureaux-et-comptoirs-sur-mesure" />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
