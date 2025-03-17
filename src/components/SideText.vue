<script setup lang="ts">
interface Props {
  side?: "left" | "right";
}

withDefaults(defineProps<Props>(), {
  side: "left",
});
</script>
<template>
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
</template>
<style lang="scss" scoped>
.side-text {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-right: -132px;
  margin-left: -100px;

  &__title,
  &__subtitle {
    font-weight: $bold;
    white-space: nowrap;
  }

  &__subtitle {
    margin-top: -0.5rem;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: $tertiary-color;
  }
}

.left {
  transform: rotate(-90deg);
}

.right {
  transform: rotate(90deg);
}
</style>
