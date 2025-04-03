<script setup lang="ts">
const story = await useAsyncStoryblok("caves-a-vin", {
  version: "published",
});

useHead({
  title: "Caves à vin sur mesure | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Agencement de cave a vin sur mesure, cave a vin en bois, cave a vin haut de gamme.",
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
