<script setup lang="ts">
import { colors } from "@/utils/colors";
</script>
<template>
  <section class="info-mini-banner">
    <p class="info-mini-banner__headline">
      Un projet d’ébénisterie ou un besoin d'agencement sur-mesure ?
    </p>
    <div class="info-mini-banner__info">
      <a href="tel:0623041637" class="info-mini-banner__info__tel"
        ><IconComponent
          icon="phone-fill"
          size="2.5rem"
          :color="colors['lucent-white']"
        />0623041637</a
      >
      <PrimaryButton variant="mocha-mousse">Obtenir un devis</PrimaryButton>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.info-mini-banner {
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  background-color: $secondary-color;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }

  @media (min-width: $laptop-screen) {
    padding: 4rem;
    gap: 4rem;
  }

  &__headline {
    font-size: $huge-text-size;
    color: $primary-color;
    font-weight: $regular;
    text-wrap: balance;
    max-width: 800px;
  }

  &__info {
    display: flex;
    gap: 1rem;
    flex-direction: column;

    @media (min-width: $tablet-screen) {
      flex-direction: row;
    }

    @media (min-width: $big-tablet-screen) {
      gap: 2rem;
    }

    @media (min-width: $laptop-screen) {
      flex-direction: column;
    }

    &__tel {
      font-size: $big-text-size;
      color: $primary-color;
      font-weight: $bold;
      display: flex;
      gap: 1rem;
      align-items: center;

      @media (min-width: $desktop-screen) {
        font-size: $huge-text-size;
      }
    }
  }
}
</style>
