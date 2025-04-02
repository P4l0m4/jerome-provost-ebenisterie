<script setup lang="ts">
import { colors } from "@/utils/colors";

const props = defineProps<{
  categories: {
    title: string;
    description: string;
    category: string;
    images: string[];
    link: string;
  }[];
}>();
</script>
<template>
  <section class="categories-list">
    <NuxtLink
      class="categories-list__category"
      v-for="category in categories"
      :to="category.link"
      :key="category.category"
    >
      <div class="categories-list__category__text">
        <h2 class="categories-list__category__text__title">
          {{ category.title }}
        </h2>
        <p class="categories-list__category__text__description">
          {{ category.description }}
        </p>
        <span class="square-button">
          <IconComponent
            icon="caret-right-bold"
            size="1rem"
            :color="colors['cannoli-cream']"
        /></span>
      </div>
      <div class="categories-list__category__images">
        <div
          class="categories-list__category__images__img"
          v-for="(image, index) in category.images"
          :key="index"
          :style="{
            backgroundImage: `linear-gradient(45deg, rgba(22, 22, 22, 0.8), transparent 60%), url(${image})`,
          }"
        ></div>
      </div>
    </NuxtLink>
  </section>
</template>
<
<style lang="scss" scoped>
.categories-list {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 2rem 1rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  @media (min-width: $desktop-screen) {
    padding: 8rem 4rem;
  }

  &__category {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: $laptop-screen) {
      flex-direction: row;
    }

    &__text {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      align-items: end;

      @media (min-width: $laptop-screen) {
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
        filter: contrast(1.1) saturate(1.2);

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

      .categories-list__category__images__img {
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
