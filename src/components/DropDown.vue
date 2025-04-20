<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { onClickOutside } from "@vueuse/core";

const target = ref();
const options = ref([
  "Cuisine",
  "Dressing",
  "Meuble de salle de bain",
  "Bibliothèque",
  "Table et table basse",
  "Bureau",
  "Armoire",
  "Meuble TV",
  "Autre",
]);

onClickOutside(target, () => {
  isDropdownOpen.value = false;
});

const emit = defineEmits(["optionSelected"]);
defineProps({
  errors: String,
});

const optionSelected = ref("");
const isDropdownOpen = ref(false);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

function selectOption(option: string) {
  if (optionSelected.value === option) {
    optionSelected.value = "";
    emit("optionSelected", "");
  } else {
    optionSelected.value = option;
    emit("optionSelected", option);
  }
  isDropdownOpen.value = false;
}
</script>
<template>
  <div class="dropdown" ref="target">
    <span
      class="dropdown__selected"
      @click="toggleDropdown"
      :style="{
        borderLeft: errors
          ? `4px solid ${colors['error']}`
          : `0px solid transparent`,
      }"
    >
      <IconComponent
        icon="rows"
        size="1.5rem"
        :color="colors['chocolate-martini']" />

      {{ optionSelected.length > 0 ? optionSelected : "Type de meuble" }}
      <span style="opacity: 0.6; margin-left: auto">
        <IconComponent
          :icon="isDropdownOpen ? 'caret_up_bold' : 'caret_down_bold'"
          size="1.5rem"
          color="currentColor" /></span
    ></span>
    <div class="dropdown__content" v-if="isDropdownOpen">
      <span
        class="dropdown__content__option"
        v-for="option in options"
        :key="option"
        @click="selectOption(option)"
        :style="{
          opacity: optionSelected === option ? 0.6 : 1,
          backgroundColor:
            optionSelected === option ? colors['cannoli-cream-darker'] : '',
        }"
        >{{ option }}</span
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
    padding: 0.75rem 1rem;
    width: 100%;
    background-color: $base-color;
    border-radius: $radius;
    cursor: pointer;
    white-space: nowrap;
    max-height: 50px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: -256px;
    background-color: $base-color;
    border-radius: $radius;
    width: 100%;
    overflow-y: scroll;
    max-height: 240px;
    border: 1px solid rgba($tertiary-color, 0.2);
    box-shadow: $shadow;

    @media (min-width: $big-tablet-screen) {
      max-height: 400px;
      top: -416px;
      overflow: hidden;
    }

    &__option {
      padding: 0.75rem 1rem;
      width: 100%;
      height: fit-content;
      min-height: 40px;
      cursor: pointer;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: inline-block;

      &:hover {
        background-color: $base-color-darker;
      }
    }
  }
}
</style>
