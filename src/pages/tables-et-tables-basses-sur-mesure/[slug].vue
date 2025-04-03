<script setup lang="ts">
import { stringToSlug } from "~/utils/slugify";
const story = await useAsyncStoryblok("tables-et-tables-basses", {
  version: "published",
});
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
    url: window.location.origin,
  },
  {
    name: "Tables et tables basses",
    url: window.location.origin + "/tables-et-tables-basses-sur-mesure",
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

    <div class="furniture-page__illustrations">
      <div
        class="furniture-page__illustrations__references"
        v-if="furniture.references?.length > 0"
      >
        <div
          class="furniture-page__illustrations__references__reference"
          v-for="reference in furniture.references"
        >
          <img
            class="furniture-page__illustrations__references__reference__img"
            :src="reference.image.filename"
            :alt="reference.name"
          />
          <div
            class="furniture-page__illustrations__references__reference__txt"
          >
            <span>{{ reference.name }}</span
            ><span>{{ reference.reference }}</span>
          </div>
        </div>
        <SecondaryButton
          ><NuxtLink to="/materiaux"
            >Voir d'autres références</NuxtLink
          ></SecondaryButton
        >
      </div>
    </div>
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

  &__illustrations {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

    &__references {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      width: 100%;
      gap: 1rem;

      &__reference {
        display: flex;
        align-items: center;
        font-size: $main-text-size;
        font-weight: $regular;
        background-color: $base-color-darker;
        padding: 1rem;
        gap: 1rem;
        border-radius: $radius;

        &__img {
          width: 60px;
          height: 60px;
          object-fit: cover;
          object-position: center;
          border-radius: calc($radius / 2);
        }

        &__txt {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          & span {
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
