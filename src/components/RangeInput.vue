<script setup lang="ts">
import { ref, onMounted } from "vue";
const value = ref(10000);

const emit = defineEmits(["range"]);

onMounted(() => {
  emit("range", value.value);
});
</script>
<template>
  <div class="range-input">
    <div class="range-input__header">
      <div class="range-input__header__label">
        <IconComponent icon="coins" size="2rem" />
        <span>Budget</span>
      </div>
      <div class="range-input__header__value">
        {{ new Intl.NumberFormat("fr-FR").format(value) }} €<br />
        <small>max./unité</small>
      </div>
    </div>

    <input
      class="range-input__slider"
      type="range"
      min="100"
      max="20000"
      step="100"
      v-model="value"
      @input="emit('range', value)"
    />
  </div>
</template>
<style lang="scss" scoped>
.range-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: $base-color; /* Light beige */
  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
  width: 100%;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    justify-content: space-between;

    &__label {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: $secondary-color;
      font-weight: 600;
      font-weight: $regular;
    }

    &__value {
      color: $text-color;
      text-align: right;
      font-weight: 600;
      font-size: 1.25rem;
      font-weight: $bold;

      small {
        display: block;
        font-size: 1rem;
        margin-top: 0.25rem;
        font-weight: $regular;
      }
    }
  }

  &__slider {
    -webkit-appearance: none;
    width: 100%;
    cursor: pointer;
    background: transparent;
    border: none;

    &::-webkit-slider-runnable-track {
      height: 12px;
      background: $secondary-color;
      border-radius: 6px;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 24px;
      width: 60px;
      background: $secondary-color;
      border-radius: 20px;
      margin-top: -6px;
      border: 2px solid $primary-color;
    }

    &::-moz-range-track {
      height: 12px;
      background: $secondary-color;
      border-radius: 6px;
    }

    &::-moz-range-progress {
      height: 12px;
      border-radius: 6px;
      background-color: $base-color-darker;
    }

    &::-moz-range-thumb {
      height: 24px;
      width: 60px;
      background: $secondary-color;
      border-radius: 20px;
      border: 2px solid $primary-color;
    }
  }
}
</style>
