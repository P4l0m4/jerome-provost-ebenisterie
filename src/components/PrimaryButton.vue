<script setup lang="ts">
import { computed } from "vue";
import { colors } from "@/utils/colors";

interface Props {
  variant?:
    | "chocolate-martini"
    | "mocha-mousse"
    | "cannoli-cream"
    | "nebulosity"
    | "lucent-white";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  icon?: string;
  iconSize?: string;
  fontSize?: string;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "chocolate-martini",
  direction: "row",
  fontSize: "1rem",
  radius: "",
});

const iconColor = computed(() => {
  switch (props.variant) {
    case "mocha-mousse":
      return colors["lucent-white"];
    case "cannoli-cream":
      return colors["chocolate-martini"];
    case "nebulosity":
      return colors["lucent-white"];
    case "lucent-white":
      return colors["nebulosity"];
    default:
      return colors["cannoli-cream"];
  }
});
</script>
<template>
  <button
    type="button"
    class="button noselect"
    :class="variant"
    :style="{ flexDirection: direction, fontSize }"
  >
    <IconComponent
      v-if="icon"
      :icon
      :size="iconSize || undefined"
      :color="iconColor"
    />
    <slot />
  </button>
</template>
<style scoped lang="scss">
.button {
  width: 100%;
  max-width: 375px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
}

.chocolate-martini {
  background-color: $secondary-color;
  color: $base-color;
  border: 2px solid $secondary-color;
}

.mocha-mousse {
  background-color: $tertiary-color;
  color: $primary-color;
  border: 2px solid $tertiary-color;
}

.cannoli-cream {
  background-color: $base-color;
  color: $secondary-color;
  border: 2px solid $base-color;
}

.nebulosity {
  background-color: $text-color;
  color: $primary-color;
  border: 2px solid $text-color;
}

.lucent-white {
  background-color: $primary-color;
  color: $text-color;
  border: 2px solid $primary-color;
}
</style>
