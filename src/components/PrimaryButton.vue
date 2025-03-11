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
}

.chocolate-martini {
  background-color: $chocolate-martini;
  color: $cannoli-cream;
  border: 2px solid $chocolate-martini;
}

.mocha-mousse {
  background-color: $mocha-mousse;
  color: $lucent-white;
  border: 2px solid $mocha-mousse;
}

.cannoli-cream {
  background-color: $cannoli-cream;
  color: $chocolate-martini;
  border: 2px solid $cannoli-cream;
}

.nebulosity {
  background-color: $nebulosity;
  color: $lucent-white;
  border: 2px solid $nebulosity;
}

.lucent-white {
  background-color: $lucent-white;
  color: $nebulosity;
  border: 2px solid $lucent-white;
}
</style>
