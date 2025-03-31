<script setup lang="ts">
const props = defineProps({
  links: {
    type: Array,
    required: true,
  },
})

useJsonld(() => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: props.links.map((item: any, index: any) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
}))
</script>

<template></template>
