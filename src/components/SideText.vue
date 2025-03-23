<script setup lang="ts">
interface Props {
  side?: "left" | "right";
}

withDefaults(defineProps<Props>(), {
  side: "left",
});
</script>
<template>
  <div class="wrapper" :class="{ small: !$slots.subtitle }">
    <div class="side-text" :class="side">
      <h3
        class="side-text__title"
        :style="{ fontSize: $slots.subtitle ? '4rem' : '2rem' }"
      >
        <slot></slot>
      </h3>
      <span class="line" v-if="$slots.subtitle"></span>
      <p class="side-text__subtitle">
        <slot name="subtitle"></slot>
      </p>
      <span class="line" v-if="!$slots.subtitle"></span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.wrapper {
  width: 140px;
  height: 580px;
  position: relative;

  &.small {
    width: 80px;
    height: 340px;
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

      @media (min-width: $big-tablet-screen) {
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
</style>
