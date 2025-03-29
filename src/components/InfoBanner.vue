<script setup lang="ts">
import { colors } from "@/utils/colors";
</script>
<template>
  <section class="info-mini-banner">
    <p class="info-mini-banner__headline">
      Un projet d’ébénisterie ou un besoin d'agencement sur-mesure ?
    </p>
    <div class="info-mini-banner__info">
      <span class="info-mini-banner__info__contact-me">
        <IconComponent
          icon="phone"
          size="1.5rem"
          :color="colors['nebulosity']"
        />Contactez-moi</span
      >
      <a href="tel:0623041637" class="info-mini-banner__info__tel"
        >06 23 04 16 37</a
      >
      <PrimaryButton variant="chocolate-martini"
        >Obtenir un devis</PrimaryButton
      >
    </div>
  </section>
</template>
<style lang="scss" scoped>
.info-mini-banner {
  display: flex;
  gap: 2rem;
  background-color: $secondary-color;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    height: 303px;
  }

  @media (min-width: $laptop-screen) {
    gap: 4rem;
  }

  &__headline {
    font-size: $huge-text-size;
    color: $primary-color;
    font-weight: $bold;
    text-wrap: balance;
    max-width: 1000px;
    padding: 2rem;

    @media (min-width: $laptop-screen) {
      font-size: 3rem;
      padding: 4rem;
    }
  }

  &__info {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: end;
    background-color: $primary-color;
    padding: 2rem;
    height: 100%;

    @media (min-width: $big-tablet-screen) {
      width: fit-content;
      border-radius: 0 130px 0 130px;
      position: relative;
      gap: 2rem;
      padding: 4rem;

      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -100px;
        width: 100px;
        height: 100px;
        background-color: $secondary-color;
        border-radius: 0 130px 0 0;
        z-index: 1;
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: -100px;
        width: 100px;
        height: 100px;
        background-color: $primary-color;
      }
    }

    @media (min-width: $laptop-screen) {
      flex-direction: column;
    }

    &__contact-me {
      font-family: "Italiana", sans-serif;
      font-size: $medium-text-size;
      color: $text-color;
      font-weight: $bold;
      display: flex;
      gap: 0.5rem;
      align-items: center;
      width: fit-content;
      margin-bottom: -1rem;
    }

    &__tel {
      font-size: $big-text-size;
      color: $text-color;
      font-weight: $bold;
      display: flex;
      gap: 1rem;
      align-items: center;
      white-space: nowrap;

      @media (min-width: $desktop-screen) {
        font-size: $huge-text-size;
      }
    }
  }
}
</style>
