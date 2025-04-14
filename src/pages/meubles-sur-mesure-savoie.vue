<script setup lang="ts">
import bureau from "@/assets/images/bureaux-et-magasins/bureau-sur-mesure.webp";
import table from "@/assets/images/tables-et-tables-basses/table-sur-mesure-1.webp";

import { categories } from "@/utils/mockData";

const bannerElements = [
  {
    image: bureau,
    label: "Meubles pour professionnels",
    link: "/ameublement-professionnel-savoie",
  },
  {
    image: table,
    label: "Meubles pour particuliers",
    link: "/ameublement-particuliers-savoie",
  },
];

useHead({
  title: "Meuble sur mesures en Savoie | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Creation meubles sur mesures à Chambéry en Savoie. Découvrez tous nos meubles sur mesure, cuisines, bibliothèques, dressings sur mesure, maisons et bureaux sur mesure.",
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Meubles sur mesure",
    url: window.location.origin + "/meubles-sur-mesure-savoie",
  },
];
</script>
<template>
  <BannerComponent :banner-elements />
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <CategoriesList :categories />
  <ProvostTitle />
  <CarouselComponent />
  <InfoBanner />
</template>
<style lang="scss" scoped>
.categories {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 8rem 4rem;
  align-items: center;

  &__category {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      align-items: end;

      @media (min-width: $big-tablet-screen) {
        width: 500px;
        height: 490px;
      }

      &__title {
        font-size: 2.5rem;
        font-weight: $bold;
        width: 100%;
      }

      &__description {
        width: 100%;
      }
    }

    &__images {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(2, 1fr);
      gap: 1rem;
      width: 100%;
      height: 350px;

      @media (min-width: $big-tablet-screen) {
        width: 765px;
        height: 490px;
      }

      &__img {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        &:nth-of-type(1) {
          grid-column: 1 / 3;
          grid-row: 1;
        }
        &:nth-of-type(2) {
          grid-column: 1 / 3;
          grid-row: 2;
        }
        &:nth-of-type(3) {
          grid-column: 3 / 6;
          grid-row: 1 / 3;
          border-radius: 0 0 130px 0;
        }
      }
    }

    &:nth-of-type(even) {
      @media (min-width: $big-tablet-screen) {
        flex-direction: row-reverse;
      }

      .categories__category__images__img {
        &:nth-of-type(1) {
          grid-column: 4 / 6;
          grid-row: 1;
          border-radius: 0;
        }
        &:nth-of-type(2) {
          grid-column: 1 / 4;
          grid-row: 1 / 3;
          border-radius: 0 0 0 130px;
        }
        &:nth-of-type(3) {
          grid-column: 4 / 6;
          grid-row: 2;
          border-radius: 0;
        }
      }
    }
  }
}

.square-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: $secondary-color;
  border-radius: $radius;
  margin-top: auto;
}
</style>
