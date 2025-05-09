<script setup lang="ts">
import { colors } from "@/utils/colors";

const props = defineProps({
  links: {
    type: Array as PropType<{ name: string; url: string }[]>,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: colors["chocolate-martini"],
  },
});

useJsonld(() => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: props.links.map((item: any, index: any) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
}));
</script>

<template>
  <section class="breadcrumbs">
    <NuxtLink
      :to="link.url"
      class="breadcrumbs__breadcrumb"
      v-for="(link, i) in links"
      :key="link.name"
      :style="{
        color: color,
        pointerEvents: i === links.length - 1 ? 'none' : 'auto',
      }"
      >{{ link.name }}
      <IconComponent
        v-if="i !== links.length - 1"
        icon="caret_right_bold"
        :color
        size="0.75rem"
    /></NuxtLink>
  </section>
</template>
<style lang="scss" scoped>
.breadcrumbs {
  padding: 1rem 1rem 0 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: $big-tablet-screen) {
    padding: 1rem 2rem 0 4rem;
    flex-wrap: nowrap;
  }

  &__breadcrumb {
    font-weight: $regular;
    font-size: $main-text-size;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    white-space: nowrap;
  }
}
</style>
