<script setup lang="ts">
const story = await useAsyncStoryblok("dernieres-realisations", {
  version: "published",
});

const leftArrowRef = ref<HTMLButtonElement | null>(null);
const rightArrowRef = ref<HTMLButtonElement | null>(null);
const showArrows = ref(false);
const scrollableContainerRef = ref<HTMLDivElement | null>(null);
const scrollAmount = 300;

const scroll = (direction: "left" | "right") => {
  if (scrollableContainerRef.value) {
    if (direction === "left") {
      scrollableContainerRef.value.scrollTo({
        left: scrollableContainerRef.value.scrollLeft - scrollAmount,
        behavior: "smooth",
      });
    } else {
      scrollableContainerRef.value.scrollTo({
        left: scrollableContainerRef.value.scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  }
};
</script>
<template>
  <section class="carousel">
    <SideText>
      <template #default>Dernières réalisations</template>
    </SideText>

    <Transition>
      <button
        class="carousel__button"
        ref="leftArrowRef"
        v-show="
          showArrows &&
          story.content.slides.length > 4 &&
          scrollableContainerRef.scrollLeft > 0
        "
        @click="scroll('left')"
        @mouseenter="showArrows = true"
      >
        <IconComponent icon="caret_left_bold" /></button
    ></Transition>

    <div
      class="carousel__container"
      ref="scrollableContainerRef"
      @mouseenter="showArrows = true"
      @mouseleave="showArrows = false"
    >
      <NuxtLink
        class="carousel__container__slide"
        :to="`/${slide.path}`"
        v-for="slide in story.content.slides"
        :key="slide.image.filename"
      >
        <img
          class="carousel__container__slide__img fading"
          :src="slide.image.filename"
          :alt="`${slide.name} ébénisterie savoie`"
        />

        <span class="carousel__container__slide__name">{{ slide.name }}</span>
      </NuxtLink>
    </div>
    <Transition>
      <button
        class="carousel__button"
        ref="rightArrowRef"
        v-show="showArrows && story.content.slides.length > 4"
        @click="scroll('right')"
        @mouseenter="showArrows = true"
      >
        <IconComponent icon="caret_right_bold" /></button
    ></Transition>
  </section>
</template>
<style lang="scss" scoped>
.carousel {
  display: flex;
  padding: 2rem 0 2rem 1rem;
  overflow-x: hidden;
  width: 100%;
  position: relative;
  align-items: center;
  gap: 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    padding-right: 0;
  }

  &__container {
    display: flex;
    gap: 1rem;
    width: fit-content;
    overflow-x: scroll;

    @media (min-width: $big-tablet-screen) {
      &:hover &__slide__img:not(:hover) {
        filter: brightness(0.8);
      }
    }

    &::-webkit-scrollbar {
      display: none;
    }

    &__slide {
      display: flex;
      flex-direction: column;

      &:nth-of-type(odd) .carousel__container__slide__img {
        border-radius: 0 130px 0 0;
        min-width: 300px;
        width: 300px;
      }
      &:nth-of-type(even) .carousel__container__slide__img {
        border-radius: 130px 0 130px 0;
        width: 500px;
        min-width: 500px;
      }

      &__img {
        height: 300px;
        object-fit: cover;
        object-position: center;

        @media (min-width: $big-tablet-screen) {
          transition: filter 0.3s linear;
        }
      }

      &__label {
        width: 300px;
        padding: 1rem 0 0 0;
        display: inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
  }

  &__button {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 12rem;
    margin: auto;
    width: 40px;
    height: 40px;
    padding: 20px;
    background-color: $primary-color;
    z-index: 1;
    border: none;
    display: none;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    cursor: pointer;

    & img {
      transform: rotate(90deg);
      width: 1rem;
    }

    @media (min-width: $big-tablet-screen) {
      display: flex;
    }

    &:nth-of-type(2) {
      left: auto;
      right: 12rem;

      & img {
        transform: rotate(-90deg);
      }
    }
  }
}
</style>
