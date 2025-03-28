<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";

interface Props {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  icon?: string;
  required?: boolean;
  autofocus?: boolean;
  error?: string;
  name: string;
  autocomplete?: "on" | "off";
}

withDefaults(defineProps<Props>(), {
  type: "text",
  required: true,
  autofocus: false,
  autocomplete: "on",
});

const model = defineModel<string | number>();
const inputRef = ref<HTMLInputElement | null>(null);
</script>
<template>
  <div class="input-field">
    <label class="input-field__label sr-only" :for="id">
      {{ label }}
    </label>

    <IconComponent
      v-if="icon"
      :icon
      size="1.5rem"
      :color="colors['chocolate-martini']"
    />

    <input
      v-model="model"
      ref="inputRef"
      :id="id"
      class="input-field__input"
      :class="{ 'input-field__input--error': error }"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :aria-label="label"
      :aria-labelledby="label"
      :title="label"
      :aria-placeholder="placeholder"
      :name="name"
      :value="model"
    />
  </div>
</template>
<style lang="scss" scoped>
.input-field {
  display: flex;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  background-color: $base-color;
  border-radius: $radius;
  padding: 0.25rem 0.75rem;
  overflow: hidden;

  &__label {
    font-size: $main-text-size;
    font-weight: $regular;
    white-space: nowrap;
    width: fit-content;
    margin-left: 0.75rem;
  }

  &__icon {
    width: 1rem;
    height: 1rem;
  }

  input {
    font-size: 1rem;
    padding: 0.65rem 0;
    padding-top: 0.75rem;
    border: none;
    color: $text-color;
    width: 100% !important;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;

    &::placeholder {
      color: $text-color-faded;
      font-size: 1rem;
      font-weight: $regular;
    }
  }
}
</style>
