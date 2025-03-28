<script setup lang="ts">
const story = await useAsyncStoryblok("salles-de-bain", {
  version: "published",
});

useHead({
  title: "Salle de bain sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de salles de bain sur mesure à Chambéry en Savoie. Découvrez tous nos salles de bain sur mesure.",
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
