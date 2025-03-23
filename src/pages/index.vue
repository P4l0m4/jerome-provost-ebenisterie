<script setup lang="ts">
import cuisine from "@/assets/images/cuisine-sur-mesure.jpg";
import dressing from "@/assets/images/dressing-sur-mesure.jpg";
import salleDeBain from "@/assets/images/salle-de-bain-sur-mesure.webp";

const bannerElements = [
  {
    image: cuisine,
    label: "Cuisine sur mesure",
  },
  {
    image: dressing,
    label: "Dressing sur mesure",
  },
  {
    image: salleDeBain,
    label: "Salle de bain sur mesure",
  },
];
</script>
<template>
  <BannerComponent :banner-elements />
  <h1>Jérôme Provost Ebénisterie</h1>
  <ProvostTitle />
  <CarouselComponent />
</template>
<style lang="scss" scoped>
h1 {
  font-family: "Italiana", serif;
  font-size: 5.5vw;
  width: 100%;
  height: 100%;
  font-weight: $regular;
  display: flex;
  justify-content: center;
  padding: 4rem;
  white-space: nowrap;
}
</style>
