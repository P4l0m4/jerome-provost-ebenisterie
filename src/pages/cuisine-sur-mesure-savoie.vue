<script setup lang="ts">
const story = await useAsyncStoryblok("cuisines", { version: "published" });

useHead({
  title: "Cuisine sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de cuisine sur mesure à Chambéry en Savoie. Découvrez tous nos cuisines sur mesure. Réalisation de cuisines haut de gamme.",
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
