<script setup lang="ts">
import { colors } from "@/utils/colors";

interface BannerElement {
  image: string;
  label: string;
  link: string;
}

interface Props {
  bannerElements?: BannerElement[];
}

withDefaults(defineProps<Props>(), {
  bannerElements: () => [
    {
      image: "/assets/images/cuisine-sur-mesure.jpg",
      label: "Cuisine sur mesure",
      link: "/",
    },
    {
      image: "/assets/images/dressing-sur-mesure.jpg",
      label: "Dressing sur mesure",
      link: "/",
    },
    {
      image: "/assets/images/salle-de-bain-sur-mesure.webp",
      label: "Salle de bain sur mesure",
      link: "/",
    },
  ],
});
</script>

<template>
  <section class="banner">
    <NuxtLink
      :to="slide.link"
      :aria-label="slide.label"
      class="banner__img"
      v-for="(slide, index) in bannerElements"
      :key="index"
      :style="{
        backgroundImage: `linear-gradient(90deg, rgba(22, 22, 22, 0.6), transparent 60%), url(${slide.image})`,
      }"
    >
      <div class="banner__img__txt">
        <h2>0.{{ index + 1 }} {{ slide.label }}</h2>
        <span class="icon-circle">
          <IconComponent
            icon="caret-right-bold"
            size="1rem"
            :color="colors['nebulosity']"
        /></span>
      </div>
    </NuxtLink>
  </section>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    flex-direction: row;

    &:hover &__img:not(:hover) {
      filter: brightness(0.8);
    }
  }

  &__img {
    height: 64vh;
    width: 100%;
    display: flex;
    padding: 1.5rem;
    align-items: flex-end;
    background-size: cover;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: $big-tablet-screen) {
      transition: filter 0.3s linear;
    }

    @media (min-width: $laptop-screen) {
      padding: 2rem;
    }

    &:nth-of-type(1) {
      background-image:
        linear-gradient(90deg, rgba($text-color, 60%), transparent 60%),
        url("@/assets/images/cuisine-sur-mesure.jpg");
    }
    &:nth-of-type(2) {
      background-image:
        linear-gradient(90deg, rgba($text-color, 60%), transparent 60%),
        url("@/assets/images/dressing-sur-mesure.jpg");
    }
    &:nth-of-type(3) {
      background-image:
        linear-gradient(90deg, rgba($text-color, 60%), transparent 60%),
        url("@/assets/images/salle-de-bain-sur-mesure.webp");
    }

    &__txt {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      color: $text-color-alt;
      gap: 1rem;

      h2 {
        font-size: $main-text-size;
        font-weight: $regular;
        white-space: nowrap;
      }

      .icon-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        min-width: 2rem;
        height: 2rem;
        min-height: 2rem;
        border-radius: 50%;
        background-color: $primary-color;
      }
    }
  }
}
</style>
