<script setup lang="ts">
interface Reference {
  image: {
    filename: string;
    alt: string;
  };
  name: string;
  color: string;
  reference: string;
}

defineProps<{
  references: Reference[];
}>();
</script>

<template>
  <div class="references-component">
    <div class="references-component__references" v-if="references?.length > 0">
      <div
        class="references-component__references__reference"
        v-for="reference in references"
      >
        <img
          v-if="reference.image.filename"
          class="references-component__references__reference__img"
          :src="reference.image.filename"
          :alt="`meuble sur mesure ${reference.name}`"
        />
        <span
          v-else
          :style="{ backgroundColor: reference.color }"
          class="references-component__references__reference__img"
        ></span>
        <div class="references-component__references__reference__txt">
          <span>{{ reference.name }}</span
          ><span>{{ reference.reference }}</span>
        </div>
      </div>
      <NuxtLink to="/outil-materiaux-meubles-sur-mesure"
        ><SecondaryButton style="height: 100% !important"
          >Voir d'autres références</SecondaryButton
        ></NuxtLink
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.references-component {
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
      gap: 1rem;
      height: 75px;
      overflow: hidden;

      &__img {
        width: 80px;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }

      &__txt {
        padding: 1rem;
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
</style>
