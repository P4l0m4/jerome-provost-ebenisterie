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
    <div
      class="side-text"
      :class="side"
      :style="{
        width: $slots.subtitle ? '464px' : '340px',
      }"
    >
      <h3
        class="side-text__title"
        :class="{
          'side-text__title--small': !$slots.subtitle,
        }"
        :style="{
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
  min-width: 86px;
  width: 86px;
  height: 500px;
  overflow: hidden;

  @media (min-width: $big-tablet-screen) {
    min-width: 100px;
    width: 100px;
  }

  &.small {
    min-width: 60px;
    width: 60px;
    height: 340px;
  }

  &:has(.right) {
    min-width: 80px;
    width: 80px;

    @media (min-width: $big-tablet-screen) {
      min-width: 94px;
      width: 94px;
    }

    &.small {
      min-width: 60px;
      width: 60px;
      height: 340px;
    }
  }

  &:has(.top) {
    width: 500px;
    height: 86px;

    @media (min-width: $big-tablet-screen) {
      height: 124px;
    }

    &.small {
      width: 340px;
      height: 80px;
    }
  }

  .side-text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    height: fit-content;

    @media (min-width: $big-tablet-screen) {
      gap: 1rem;
    }

    &__title {
      font-weight: $bold;
      white-space: nowrap;
      font-size: 2.5rem;

      &--small {
        font-size: 2rem;
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
  transform: rotate(-90deg) translate(-100%, -4px);
  transform-origin: top left;
  max-height: 120px;
  overflow: hidden;
}

.right {
  transform: rotate(90deg) translate(100%, 375px);
  transform-origin: top right;

  @media (min-width: $big-tablet-screen) {
    transform: rotate(90deg) translate(100%, 362px);
  }
}

.top {
  .side-text__title {
    white-space: wrap !important;
    font-size: 2.5rem !important;
    @media (min-width: $big-tablet-screen) {
      font-size: 3.5rem !important;
    }
  }
}
</style>
