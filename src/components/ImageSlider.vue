<script setup lang="ts">
import { ref } from "vue";
import placeholder1 from "@/assets/images/placeholder1.jpg";
import placeholder2 from "@/assets/images/placeholder2.jpg";
import placeholder3 from "@/assets/images/placeholder3.jpg";
import { colors } from "@/utils/colors";

interface SliderImage {
  src: string;
  alt: string;
}

const props = withDefaults(defineProps<{ images?: SliderImage[] }>(), {
  images: () => [
    { src: placeholder1, alt: "Meubles sur mesure" },
    { src: placeholder2, alt: "Meubles sur mesure" },
    { src: placeholder3, alt: "Meubles sur mesure" },
  ],
});

const currentIndex = ref(0);

function next() {
  currentIndex.value = (currentIndex.value + 1) % props.images.length;
}

function prev() {
  currentIndex.value =
    (currentIndex.value - 1 + props.images.length) % props.images.length;
}
</script>

<template>
  <section class="slider">
    <span class="icon-circle noselect" @click="prev">
      <IconComponent
        icon="caret-left-bold"
        size="1rem"
        :color="colors['nebulosity']"
      />
    </span>

    <img
      class="slider__img"
      v-for="(img, index) in images"
      :key="index"
      :src="img.src"
      :alt="img.alt"
      v-show="index === currentIndex"
    />
    <span class="icon-circle noselect" @click="next">
      <IconComponent
        icon="caret-right-bold"
        size="1rem"
        :color="colors['nebulosity']"
      />
    </span>
  </section>
</template>

<style lang="scss" scoped>
.slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 760px;
  height: 80dvh;
  padding: 1.5rem;

  @media (min-width: $laptop-screen) {
    // height: 630px;
    padding: 2rem;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    inset: 0;
  }
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
  z-index: 1;
  cursor: pointer;
}
</style>
