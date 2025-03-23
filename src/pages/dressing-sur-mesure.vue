<script setup lang="ts">
import placeholder1 from "@/assets/images/placeholder1.jpg";
import placeholder2 from "@/assets/images/placeholder2.jpg";
import placeholder3 from "@/assets/images/placeholder3.jpg";
import placeholder4 from "@/assets/images/placeholder4.jpg";
import placeholder5 from "@/assets/images/placeholder5.jpg";

import { colors } from "@/utils/colors";

const furnitureList = [
  {
    title: "Dressing industriel",
    subTitle: "Sous titre",
    description: [
      "Structure en métal brut patiné avec aménagement sur mesure",
      "Tablettes en chêne massif",
      "Finition vernis polyuréthane satiné aspect bois naturel",
    ],
    collaboration: "Collaboration avec un ferronier",
    collaborationLink: "https://www.google.com",
    images: [
      { src: placeholder1, alt: "Meubles sur mesure" },
      { src: placeholder2, alt: "Meubles sur mesure" },
      {
        src: placeholder3,
        alt: "Meubles sur mesure",
      },
    ],
  },
  {
    title: "Dressing industriel",
    subTitle: "Sous titre",
    description: [
      "Structure en métal brut patiné avec aménagement sur mesure",
      "Tablettes en chêne massif",
      "Finition vernis polyuréthane satiné aspect bois naturel",
    ],
    collaboration: "Collaboration avec un ferronier",
    collaborationLink: "https://www.google.com",
    images: [
      { src: placeholder3, alt: "Meubles sur mesure" },
      { src: placeholder4, alt: "Meubles sur mesure" },
      {
        src: placeholder5,
        alt: "Meubles sur mesure",
      },
    ],
  },
  {
    title: "Dressing industriel",
    subTitle: "Sous titre",
    description: [
      "Structure en métal brut patiné avec aménagement sur mesure",
      "Tablettes en chêne massif",
      "Finition vernis polyuréthane satiné aspect bois naturel",
    ],
    collaboration: "Collaboration avec un ferronier",
    collaborationLink: "https://www.google.com",
    images: [
      { src: placeholder1, alt: "Meubles sur mesure" },
      { src: placeholder2, alt: "Meubles sur mesure" },
      {
        src: placeholder3,
        alt: "Meubles sur mesure",
      },
    ],
  },
  {
    title: "Dressing industriel",
    subTitle: "Sous titre",
    description: [
      "Structure en métal brut patiné avec aménagement sur mesure",
      "Tablettes en chêne massif",
      "Finition vernis polyuréthane satiné aspect bois naturel",
    ],
    collaboration: "Collaboration avec un ferronier",
    collaborationLink: "https://www.google.com",
    images: [
      { src: placeholder3, alt: "Meubles sur mesure" },
      { src: placeholder4, alt: "Meubles sur mesure" },
      {
        src: placeholder5,
        alt: "Meubles sur mesure",
      },
    ],
  },
];
</script>

<template>
  <section class="showcase">
    <div
      :id="i.toString()"
      class="slider-card"
      v-for="(furniture, i) in furnitureList"
      :key="i"
    >
      <ImageSlider />
      <div class="slider-card__text">
        <ul class="slider-card__text__description">
          <li
            class="slider-card__text__description__element"
            v-for="(element, i) in furniture.description"
            :key="i"
          >
            {{ element }}
          </li>
          <NuxtLink
            class="slider-card__text__description__collaboration"
            :to="furniture.collaborationLink"
            ><IconComponent icon="handshake" size="2rem" />{{
              furniture.collaboration
            }}</NuxtLink
          >
          <PrimaryButton style="margin-top: auto"
            >Parlons de votre projet</PrimaryButton
          >
        </ul>
        <SideText :side="i % 2 === 0 ? 'right' : 'left'"
          >{{ furniture.title }}
          <template #subtitle>{{ furniture.subTitle }}</template></SideText
        >
      </div>
    </div>
  </section>
  <ProvostTitle />
  <CarouselComponent />
</template>

<style lang="scss" scoped>
.showcase {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem;
    gap: 8rem;
  }

  .slider-card {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      gap: 2rem;
    }

    &__text {
      display: flex;
      gap: 2rem;
      width: 100%;
      height: 80dvh;
      padding: 2rem 0;
      justify-content: end;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        padding: 2rem 0;
        align-items: start;
      }

      &__description {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        min-width: 320px;
        height: 100%;

        @media (min-width: $big-tablet-screen) {
          max-width: 320px;
          width: 100%;
        }

        &__collaboration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }

    &:nth-of-type(even) {
      flex-direction: column;

      .slider-card__text {
        flex-direction: row-reverse;
        justify-content: start;
      }
      @media (min-width: $big-tablet-screen) {
        flex-direction: row-reverse;
      }
    }
  }
}
</style>
