<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";

defineProps<{ story: any; parentSlug: string }>();
</script>
<template>
  <section class="showcase">
    <div
      :id="i.toString()"
      class="slider-card"
      v-for="(furniture, i) in story.content.sections"
      :key="i"
    >
      <ImageSlider :images="furniture.images" />
      <div class="slider-card__text">
        <div class="slider-card__text__description">
          <div
            class="slider-card__text__description__richtext"
            v-html="renderRichText(furniture.description)"
          ></div>
          <NuxtLink
            :to="`${parentSlug}/${stringToSlug(furniture.subtitle)}`"
            class="slider-card__text__description__link"
            >Voir plus...</NuxtLink
          >
          <NuxtLink
            v-if="furniture.collaborationText && furniture.collaborationLink"
            class="slider-card__text__description__collaboration"
            :to="furniture.collaborationLink"
            ><IconComponent icon="handshake" size="2rem" />{{
              furniture.collaborationText
            }}</NuxtLink
          >
          <NuxtLink
            to="/contact-ebeniste-savoie"
            style="margin-top: auto"
            aria-label="Parlons de votre projet"
          >
            <PrimaryButton>Parlons de votre projet</PrimaryButton></NuxtLink
          >
        </div>
        <SideText :side="i % 2 === 0 ? 'right' : 'left'"
          >{{ furniture.title }}
          <template #subtitle>{{ furniture.subtitle }}</template></SideText
        >
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.showcase {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem 4rem;
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
      gap: 0.5rem;
      width: 100%;
      height: 80vh;
      padding: 2rem 0;
      justify-content: end;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        padding: 2rem 0;
        align-items: start;
        gap: 2rem;
      }

      &__description {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        list-style: none;
        height: 100%;

        @media (min-width: $big-tablet-screen) {
          min-width: 320px;
          max-width: 320px;
          width: 100%;
        }

        &__richtext {
          &:deep(ul) {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            list-style: none;
            height: 100%;

            @media (min-width: $big-tablet-screen) {
              min-width: 320px;
              max-width: 320px;
              width: 100%;
            }
          }
        }

        &__link {
          color: $tertiary-color;
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
