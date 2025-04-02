<script setup lang="ts">
const story = await useAsyncStoryblok("tables-et-tables-basses", {
  version: "published",
});

useHead({
  title: "Tables et tables basses sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de tables sur mesure et de tables basses sur mesure à Chambéry en Savoie. Création de tables haut de gamme sur mesure.",
    },
  ],
});
</script>

<template>
  <FurnitureShowcase :story />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
