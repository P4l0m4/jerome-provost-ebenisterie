<script setup lang="ts">
import { ref, onMounted } from "vue";
import { isMobile } from "@/utils/functions";

import cuisine from "@/assets/images/cuisine-3.webp";
import dressing from "@/assets/images/dressing-4.webp";
import salleDeBain from "@/assets/images/salle-de-bain-4.webp";

const isMobileScreen = ref<boolean>();

const bannerElements = [
  {
    image: cuisine,
    label: "Cuisine sur mesure",
    link: "/cuisine-sur-mesure-savoie",
  },
  {
    image: dressing,
    label: "Dressings sur mesure",
    link: "/dressings-sur-mesure-savoie",
  },
  {
    image: salleDeBain,
    label: "Salle de bain sur mesure",
    link: "/salle-de-bain-sur-mesure-savoie",
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

onMounted(() => {
  isMobileScreen.value = isMobile().value;
});
</script>
<template>
  <BannerComponent :banner-elements />
  <h1>Jérôme Provost Ebénisterie</h1>
  <ThreeModel v-if="!isMobileScreen" />
  <CarouselComponent />
  <InfoBanner />
</template>
<style lang="scss" scoped>
h1 {
  font-family: "Italiana", serif;
  font-size: 8vw;
  width: 100%;
  height: 100%;
  font-weight: $regular;
  display: flex;
  justify-content: center;
  padding: 4rem;
  white-space: nowrap;

  @media (min-width: $big-tablet-screen) {
    font-size: 5.5vw;
  }
}

canvas {
  width: 100%;
  height: 100%;
  z-index: 1;
}

.point {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  padding: 1rem;
  width: 120px;
  height: 160px;
  background-color: $primary-color-faded;
  border-radius: 0 1.5rem 1.5rem 1.5rem;
  backdrop-filter: blur(4px);
  border: 1px solid $primary-color;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    left: -78px;
    width: 80px;
    height: 50px;
    background-image: url("@/assets/furniture/antenne-left.svg");
    background-repeat: no-repeat;
  }

  &__image {
    width: 100%;
    height: 52px;
    object-fit: cover;
    border-radius: 12px;
  }
}

#point-0 {
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  transform: translate(-10rem, 20rem);

  @media (min-width: $big-tablet-screen) {
    transform: translate(-20rem, 21rem);
  }

  @media (min-width: $desktop-screen) {
    transform: translate(-23rem, 25rem);
  }

  &::before {
    left: 118px;
    background-image: url("@/assets/furniture/antenne-right.svg");
  }
}
#point-1 {
  transform: translate(4rem, 16rem);

  @media (min-width: $big-tablet-screen) {
    transform: translate(6rem, 16rem);
  }

  @media (min-width: $desktop-screen) {
    transform: translate(8rem, 19rem);
  }
}

#point-2 {
  transform: translate(8rem, 18rem);

  @media (min-width: $big-tablet-screen) {
    transform: translate(22rem, 20rem);
  }

  @media (min-width: $desktop-screen) {
    transform: translate(23rem, 20rem);
  }
}

.tag {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  gap: 1rem;
  padding: 1rem;
  width: 15.25rem;
  height: fit-content;
  background-color: $primary-color-faded;
  border-radius: 1.5rem 0 1.5rem 1.5rem;
  backdrop-filter: blur(4px);
  border: 1px solid $primary-color;
  z-index: 1;
  position: absolute;
  top: 2rem;
  left: 2rem;

  @media (min-width: $desktop-screen) {
    top: 4rem;
    left: 4rem;
  }
}

.options {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 2rem;
  right: 2rem;
  gap: 1rem;
  z-index: 1;

  @media (min-width: $desktop-screen) {
    top: 4rem;
    right: 4rem;
  }

  &__option {
    width: 3rem;
    height: 3rem;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    border: 4px solid $primary-color;

    &--selected {
      transform: scale(1.2);
    }
  }
}
</style>
