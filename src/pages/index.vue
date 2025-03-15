<script setup lang="ts">
import { colors } from "@/utils/colors";
</script>
<template>
  <section class="banner">
    <div class="banner__img">
      <div class="banner__img__txt">
        <h2>0.1 Cuisine sur mesure</h2>
        <span class="icon-circle">
          <IconComponent
            icon="caret-right-bold"
            size="1rem"
            :color="colors['nebulosity']"
        /></span>
      </div>
    </div>
    <div class="banner__img">
      <div class="banner__img__txt">
        <h2>0.2 Dressing sur mesure</h2>
        <span class="icon-circle">
          <IconComponent
            icon="caret-right-bold"
            size="1rem"
            :color="colors['nebulosity']"
        /></span>
      </div>
    </div>
    <div class="banner__img">
      <div class="banner__img__txt">
        <h2>0.3 Salle de bain sur mesure</h2>
        <span class="icon-circle">
          <IconComponent
            icon="caret-right-bold"
            size="1rem"
            :color="colors['nebulosity']"
        /></span>
      </div>
    </div>
  </section>
  <h1>Jérôme Provost Ebénisterie</h1>
  <ProvostTitle />
  <CarouselComponent />
</template>
<style lang="scss" scoped>
.banner {
  display: flex;
  flex-wrap: wrap;

  @media (min-width: $big-tablet-screen) {
    &:hover &__img:not(:hover) {
      filter: brightness(0.8);
    }
  }

  &__img {
    height: 64dvh;
    width: 100%;
    display: flex;
    padding: 1.5rem;
    align-items: flex-end;
    background-size: cover;
    cursor: pointer;
    background-position: center;
    background-repeat: no-repeat;

    @media (min-width: $big-tablet-screen) {
      max-width: 33.3333%;
      transition: filter 0.3s linear;
    }

    @media (min-width: $laptop-screen) {
      padding: 2rem;
    }

    &:nth-of-type(1) {
      background-image: linear-gradient(
          90deg,
          rgba(#161616, 60%),
          transparent 60%
        ),
        url("@/assets/images/cuisine-sur-mesure.jpg");
    }
    &:nth-of-type(2) {
      background-image: linear-gradient(
          90deg,
          rgba(#161616, 60%),
          transparent 60%
        ),
        url("@/assets/images/dressing-sur-mesure.jpg");
    }
    &:nth-of-type(3) {
      background-image: linear-gradient(
          90deg,
          rgba(#161616, 60%),
          transparent 60%
        ),
        url("@/assets/images/salle-de-bain-sur-mesure.webp");
    }

    &__txt {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      color: $text-color-alt;
      gap: 1rem;

      h2 {
        font-size: $main-text-size;
        font-weight: $regular;
        white-space: nowrap;
      }

      .icon-circle {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        min-width: 2rem;
        height: 2rem;
        min-height: 2rem;
        border-radius: 50%;
        background-color: $primary-color;
      }
    }
  }
}

h1 {
  font-family: "Italiana", serif;
  font-size: 5.5vw;
  width: 100%;
  height: 100%;
  font-weight: $regular;
  display: flex;
  justify-content: center;
  padding: 4rem;
  white-space: nowrap;
}
</style>
