<script setup lang="ts">
import { onMounted, ref } from "vue";
import { stringToSlug } from "@/utils/slugify";
const story = await useAsyncStoryblok("autres-meubles", {
  version: "published",
});
const route = useRoute();
const furnitureSlug = route.params.slug;
const furniture = story.value.content.sections.find(
  (f: any) => stringToSlug(f.subtitle) === furnitureSlug
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

const breadcrumbs = ref();

onMounted(() => {
  breadcrumbs.value = [
    {
      name: "Accueil",
      url: "/",
    },
    {
      name: "Tous les meubles sur mesure",
      url: "/meubles-sur-mesure-savoie",
    },
    {
      name: "Autres meubles",
      url: "/autres-meubles-sur-mesure",
    },
    {
      name: furniture.subtitle,
      url: "/autres-meubles-sur-mesure",
    },
  ];
});
</script>
<template>
  <JsonldBreadcrumbs v-if="breadcrumbs" :links="breadcrumbs" />
  <section class="furniture-page">
    <div class="furniture-page__txt">
      <h1 class="furniture-page__txt__title">
        {{ furniture.title }}
      </h1>
      <h2 class="furniture-page__txt__subtitle">
        {{ furniture.subtitle }}
      </h2>
      <div
        class="furniture-page__txt__richtext"
        v-html="renderRichText(furniture.description)"
      ></div>
      <NuxtLink
        v-if="furniture.collaborationText && furniture.collaborationLink"
        class="furniture-page__txt__collaboration"
        :to="furniture.collaborationLink"
        ><IconComponent icon="handshake" size="2rem" />{{
          furniture.collaborationText
        }}</NuxtLink
      >
      <ReferencesComponent :references="furniture.references" />
    </div>
    <ImageSlider :images="furniture.images" />
  </section>
</template>
<style lang="scss" scoped>
.furniture-page {
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  flex-direction: column;
  height: fit-content;

  @media (min-width: $big-tablet-screen) {
    padding: 2rem 4rem;
    gap: 4rem;
    flex-direction: row;
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;

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
</style>
