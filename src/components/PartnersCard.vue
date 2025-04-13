<script setup lang="ts">
import { colors } from "@/utils/colors";
interface Partner {
  name: string;
  logoPath: string;
  imagePath: string;
  tags: string[];
  link: string;
  color?: string;
}
defineProps<{
  partners: Partner[];
}>();
</script>
<template>
  <NuxtLink
    class="partners-card"
    :to="partner.link"
    v-for="partner in partners"
    :key="partner.name"
    :style="{ backgroundImage: `url(${partner.imagePath})` }"
  >
    <span
      class="partners-card__logo"
      :style="{
        backgroundImage: `url(${partner.logoPath})`,
        backgroundColor: partner.color ? partner.color : colors['lucent-white'],
      }"
    ></span>
    <div class="partners-card__tags">
      <span class="partners-card__tags__tag" v-for="tag in partner.tags">{{
        tag
      }}</span>
    </div>
  </NuxtLink>
</template>
<style lang="scss" scoped>
.partners-card {
  display: flex;
  height: fit-content;
  width: 100%;
  background-position: center;
  background-size: cover;
  position: relative;
  align-items: end;
  padding-top: 116px;
  height: 240px;

  @media (min-width: $big-tablet-screen) {
  }

  &__logo {
    border: 8px $primary-color solid;
    border-radius: 130px;
    height: 120px;
    min-height: 120px;
    width: 120px;
    min-width: 120px;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -20px;
    left: 0;
    right: 0;
    margin: auto;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
    height: fit-content;
    gap: 0.5rem;

    &__tag {
      display: flex;
      padding: 0.5rem 0.75rem;
      background-color: $secondary-color;
      width: fit-content;
      height: fit-content;
      color: $text-color-alt;
    }
  }
}
</style>
