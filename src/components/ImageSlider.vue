<script setup lang="ts">
import { ref } from "vue";
import placeholder1 from "@/assets/images/placeholder1.jpg";
import { colors } from "@/utils/colors";

interface SliderImage {
  src: string;
  alt: string;
}

interface SliderImage {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: string;
  meta_data: Object;
}

const props = withDefaults(defineProps<{ images?: SliderImage[] }>(), {
  images: () => [
    {
      id: 21583098,
      alt: "",
      name: "",
      focus: "",
      title: "",
      source: "",
      filename: placeholder1,
      copyright: "",
      fieldtype: "asset",
      meta_data: {},
    },
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
        icon="caret_left_bold"
        size="1rem"
        :color="colors['nebulosity']"
      />
    </span>

    <img
      class="slider__img"
      v-for="(img, index) in images"
      :key="index"
      :src="img.filename"
      :alt="img.alt"
      v-show="index === currentIndex"
    />
    <span class="icon-circle noselect" @click="next">
      <IconComponent
        icon="caret_right_bold"
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
  height: 80vh;
  padding: 1.5rem;

  @media (min-width: $laptop-screen) {
    padding: 2rem;
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    inset: 0;
    z-index: -1;
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
