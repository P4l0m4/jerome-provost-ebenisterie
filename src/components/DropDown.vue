<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";

const emit = defineEmits(["optionSelected"]);

const optionSelected = ref("");
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

function selectOption(option: string) {
  optionSelected.value = option;
  isDropdownOpen.value = false;
  emit("optionSelected", option);
}
</script>
<template>
  <div class="dropdown">
    <span class="dropdown__selected" @click="toggleDropdown">
      <IconComponent
        icon="rows"
        size="1.5rem"
        :color="colors['chocolate-martini']" />

      {{ optionSelected.length > 0 ? optionSelected : "Type de meuble" }}
      <span style="opacity: 0.6; margin-left: auto">
        <IconComponent
          :icon="isDropdownOpen ? 'caret-up-bold' : 'caret-down-bold'"
          size="1.5rem"
          color="currentColor" /></span
    ></span>
    <div class="dropdown__content" v-if="isDropdownOpen">
      <span class="dropdown__content__option" @click="selectOption('Option 1')"
        >Option 1</span
      >
      <span class="dropdown__content__option" @click="selectOption('Option 2')"
        >Option 2</span
      >
      <span class="dropdown__content__option" @click="selectOption('Option 3')"
        >Option 3</span
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.dropdown {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  &__selected {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem;
    width: 100%;
    background-color: $base-color;
    border-radius: $radius;
  }

  &__content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    background-color: $base-color;
    border-radius: $radius;
    width: 100%;
    overflow: hidden;

    &__option {
      padding: 1rem;
      width: 100%;
      cursor: pointer;

      &:hover {
        background-color: $base-color-darker;
      }
    }
  }
}
</style>
