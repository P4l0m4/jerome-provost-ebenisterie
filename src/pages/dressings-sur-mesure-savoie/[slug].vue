<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("dressings", { version: "published" });
const route = useRoute();
const furnitureSlug = route.params.slug;
const furniture = story.value.content.sections.find(
  (f) => stringToSlug(f.subtitle) === furnitureSlug
);

useHead({
  title: `${furniture.subtitle} | JP Ebénisterie`,
  meta: [
    {
      name: "description",
      content: furniture.description,
    },
  ],
});

const breadcrumbs = [
  {
    name: "Accueil",
    url: "/",
  },
  {
    name: "Dressings",
    url: "/dressings-sur-mesure-savoie",
  },
  {
    name: furniture.subtitle,
    url: window.location.href,
  },
];
</script>
<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <section class="furniture-page">
    <div class="furniture-page__wrapper">
      <div class="furniture-page__wrapper__txt">
        <h1 class="furniture-page__wrapper__txt__title">
          {{ furniture.title }}
        </h1>
        <h2 class="furniture-page__wrapper__txt__subtitle">
          {{ furniture.subtitle }}
        </h2>
        <div
          class="furniture-page__wrapper__txt__richtext"
          v-html="renderRichText(furniture.description)"
        ></div>
        <NuxtLink
          v-if="furniture.collaborationText && furniture.collaborationLink"
          class="furniture-page__wrapper__txt__collaboration"
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
      <ImageSlider :images="furniture.images" />
    </div>

    <ReferencesComponent :references="furniture.references" />
  </section>
</template>
<style lang="scss" scoped>
.furniture-page {
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem 4rem;
    gap: 4rem;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__txt {
      display: flex;
      flex-direction: column;
      gap: 2rem;
      width: 100%;
      max-height: 555px;

      &__title {
        font-size: $medium-title-size;
        font-weight: $bold;
      }

      &__subtitle {
        font-size: $medium-text-size;
        font-weight: $bold;
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

      &__collaboration {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
}
</style>
