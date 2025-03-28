<script setup lang="ts">
const story = await useAsyncStoryblok("dressings", { version: "published" });

useHead({
  title: "Dressings sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Création de dressings sur mesure à Chambéry en Savoie. Découvrez tous nos dressings sur mesure.",
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
