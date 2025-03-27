<script setup lang="ts">
import placeholder1 from "@/assets/images/placeholder1.jpg";
import placeholder2 from "@/assets/images/placeholder2.jpg";
import placeholder3 from "@/assets/images/placeholder3.jpg";
import placeholder4 from "@/assets/images/placeholder4.jpg";
import placeholder5 from "@/assets/images/placeholder5.jpg";

import { colors } from "@/utils/colors";

const bannerElements = [
  {
    image: placeholder3,
    label: "Meubles pour professionnels",
  },
  {
    image: placeholder5,
    label: "Meubles pour particuliers",
  },
];

const categories = [
  {
    title: "Cuisines sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Cuisine",
    images: [placeholder1, placeholder1, placeholder1],
    link: "/cuisine-sur-mesure",
  },
  {
    title: "Dressings sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Dressing",
    images: [placeholder2, placeholder2, placeholder2],
    link: "/dressing-sur-mesure",
  },
  {
    title: "Salles de bain sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Salle de bain",
    images: [placeholder3, placeholder3, placeholder3],
    link: "/salle-de-bain-sur-mesure",
  },
  {
    title: "Fauteuils, canapés et chaises sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Fauteuil/canapé/chaise",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/fauteuils-canapes-chaises-sur-mesure",
  },
  {
    title: "Tables et tables basses sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Fauteuil/canapé/chaise",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/tables-sur-mesure",
  },
  {
    title: "Autres meubles sur-mesure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    category: "Fauteuil/canapé/chaise",
    images: [placeholder4, placeholder4, placeholder4],
    link: "/autres-meubles-sur-mesure",
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
</script>
<template>
  <BannerComponent :banner-elements />
  <section class="categories">
    <NuxtLink
      class="categories__category"
      v-for="category in categories"
      :to="category.link"
      :key="category.category"
    >
      <div class="categories__category__text">
        <h2 class="categories__category__text__title">{{ category.title }}</h2>
        <p class="categories__category__text__description">
          {{ category.description }}
        </p>
        <span class="square-button">
          <IconComponent
            icon="caret-right-bold"
            size="1rem"
            :color="colors['cannoli-cream']"
        /></span>
      </div>
      <div class="categories__category__images">
        <div
          class="categories__category__images__img"
          v-for="(image, index) in category.images"
          :key="index"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </div>
    </NuxtLink>
  </section>
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
