<script setup lang="ts">
import { colors } from "@/utils/colors";

interface Props {
  side?: "left" | "right" | "top";
  variant?: "dark" | "light";
}

withDefaults(defineProps<Props>(), {
  side: "left",
  variant: "dark",
});
</script>
<template>
  <div class="wrapper" :class="{ small: !$slots.subtitle }">
    <div class="side-text" :class="side">
      <h3
        class="side-text__title"
        :style="{
          fontSize: $slots.subtitle ? '3.5rem' : '2rem',
          color:
            variant === 'dark' ? colors['nebulosity'] : colors['cannoli-cream'],
        }"
      >
        <slot></slot>
      </h3>
      <span class="line" v-if="$slots.subtitle"></span>
      <p
        class="side-text__subtitle"
        :style="{
          color:
            variant === 'dark' ? colors['nebulosity'] : colors['cannoli-cream'],
        }"
      >
        <slot name="subtitle"></slot>
      </p>
      <span class="line" v-if="!$slots.subtitle"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 110px;
  height: 500px;

  &.small {
    width: 80px;
    height: 340px;
  }

  &:has(.top) {
    width: 500px;
    height: 110px;

    &.small {
      width: 340px;
      height: 80px;
    }
  }

  .side-text {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: fit-content;
    width: fit-content;

    &__title {
      font-weight: $bold;
      white-space: nowrap;

      font-size: 2.5rem !important;
      @media (min-width: $big-tablet-screen) {
        font-size: 3.5rem !important;
      }
    }

    &__subtitle {
      font-weight: $bold;
      white-space: nowrap;
    }

    .line {
      width: 100%;
      height: 2px;
      background-color: $tertiary-color;
    }
  }
}

.left {
  transform: rotate(-90deg) translate(-100%, 0%);
  transform-origin: top left;
}

.right {
  transform: rotate(90deg) translate(100%, 310%);
  transform-origin: top right;
}

.top {
  //dynamic font size (percentage of the viewport width)
  .side-text__title {
    white-space: wrap !important;
    font-size: 2.5rem !important;
    @media (min-width: $big-tablet-screen) {
      font-size: 3.5rem !important;
    }
  }
}
</style>
