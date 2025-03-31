<script setup lang="ts">
const story = await useAsyncStoryblok("fauteuils-canapes-et-chaises", {
  version: "published",
});

useHead({
  title: "Fauteuils canapés et chaises sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de fauteuils sur mesure, canapés sur mesure et chaises sur mesure à Chambéry en Savoie. Découvrez tous nos fauteuils, canapés et chaises sur mesure.",
    },
  ],
});
</script>

<template>
  <FurnitureShowcase
    :story
    parent-slug="/fauteuils-canapes-et-chaises-sur-mesure"
  />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
