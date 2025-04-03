<script setup lang="ts">
const breadcrumbs = [
  {
    name: "Accueil",
    url: window.location.origin,
  },
  {
    name: "Stage ebenisterie",
    url: window.location.origin + "/stage-ebenisterie-formation-savoie",
  },
];
</script>
<template>
  <JsonldBreadcrumbs :links="breadcrumbs" />
  <InfoBanner />
</template>
