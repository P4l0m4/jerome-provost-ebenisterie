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

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: "Jérôme Provost Ebénisterie",
  address: {
    "@type": "PostalAddress",
    streetAddress: "72 rue du clos",
    addressLocality: "Saint-alban-leysse",
    addressCountry: "France",
    postalCode: "73230",
  },
  email: "jp.ebenisterie73]@gmail.com",
  telephone: "06 23 04 16 37",
  url: "https://www.jp-ebenisterie-chambery.fr",
  openingHours: [
    "Tu-Fr 09:00-12:00",
    "Tu-Fr 14:00-19:00",
    "Sa 10:00-12:00",
    "Sa 14:00-18:00",
  ],
  priceRange: "€€€",
}));

useHead({
  title: "Jérôme Provost Ebénisterie | Ébéniste agenceur en Savoie",
  meta: [
    {
      name: "description",
      content:
        "Jérôme Provost Ebénisterie, Ebéniste agenceur à Chambéry en Savoie. Conception et réalisation de meubles sur mesure, cuisines, bibliothèques, dressings sur mesure, maisons et bureaux sur mesure.",
    },
  ],
});
</script>
<template>
  <BannerComponent :banner-elements />
  <h1>Jérôme Provost Ebénisterie</h1>
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
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
