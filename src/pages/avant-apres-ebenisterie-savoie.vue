<script setup lang="ts">
import { ref, onMounted } from "vue";

const story = ref();

const breadcrumbs = ref();

onMounted(async () => {
  story.value = await useAsyncStoryblok("avant-apres", {
    version: "published",
  });

  breadcrumbs.value = [
    {
      name: "Accueil",
      url: "/",
    },
    {
      name: "Avant-après",
      url: window.location.href,
    },
  ];
});
</script>
<template>
  <JsonldBreadcrumbs :links="breadcrumbs" v-if="breadcrumbs" />
  <section class="befores-and-afters" v-if="story">
    <div class="befores-and-afters__headlines">
      <h1 class="befores-and-afters__headlines__title">
        Aménagement et meubles sur mesures
      </h1>
      <h2 class="befores-and-afters__headlines__subtitle">
        Transformation du bois grâce à un savoir-faire artisanal.
        <NuxtLink
          class="befores-and-afters__headlines__subtitle__link"
          to="/contact-ebeniste-savoie"
          >Trouver un ébéniste autour de moi</NuxtLink
        >
      </h2>
    </div>
    <div
      class="befores-and-afters__gallery"
      v-for="(gallery, i) in story.value.content.galleries"
      :key="i"
    >
      <img
        class="befores-and-afters__gallery__image"
        v-for="image in gallery.images"
        :src="image.filename"
        :alt="gallery.keyword"
      />
    </div>
  </section>
  <InfoBanner />
</template>
<style lang="scss" scoped>
.befores-and-afters {
  display: flex;
  flex-direction: column;
  gap: 8rem;
  padding: 2rem 1rem;
  align-items: center;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  @media (min-width: $desktop-screen) {
    padding: 4rem 4rem 8rem 4rem;
  }

  &__headlines {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    margin-bottom: -4rem;

    &__title {
      font-size: 2.5rem;
      font-weight: $bold;
      width: 100%;
      text-wrap: balance;
    }

    &__subtitle {
      width: 100%;
      font-size: 1rem;
      font-weight: $regular;
      color: $secondary-color;
      display: flex;
      flex-direction: column;
      gap: 1rem;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
      }

      &__link {
        color: $tertiary-color;
        text-decoration: underline;
      }
    }
  }

  &__gallery {
    display: grid;
    gap: 1rem;
    width: 100%;
    height: fit-content;
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 250px;

    @media (min-width: $big-tablet-screen) {
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(5, 120px);
    }

    &__image {
      width: 100%;
      object-fit: cover;
      object-position: center;
      height: 100%;
      border-radius: $radius;

      @media (min-width: $big-tablet-screen) {
        &:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        &:nth-child(2) {
          grid-column: span 2;
          grid-row: span 2;
        }

        &:nth-child(3) {
          grid-column: span 3;
          grid-row: span 3;
        }
        &:nth-child(4) {
          grid-column: span 4;
          grid-row: span 3;
        }
        &:nth-child(5) {
          grid-column: span 3;
          grid-row: span 2;
        }
      }
    }
  }
}
</style>
