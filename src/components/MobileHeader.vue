<script setup lang="ts">
import { ref } from "vue";
import { colors } from "@/utils/colors";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";

const isMenuOpen = ref(false);

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => (isMenuOpen.value = false));
</script>
<template>
  <header class="header" ref="target">
    <NuxtLink to="/" class="logo noselect" @click="isMenuOpen = false"
      ><img
        src="@/assets/images/jp-logo.svg"
        alt="logo jerome provost ebenisterie"
    /></NuxtLink>
    <button
      type="button"
      class="menu-button noselect"
      @click="isMenuOpen = !isMenuOpen"
      aria-label="menu"
    >
      <IconComponent
        :icon="isMenuOpen ? 'xx' : 'list'"
        size="2rem"
        :color="colors['cannoli-cream']"
      />
    </button>
    <Transition>
      <nav class="header__nav" v-if="isMenuOpen">
        <ul class="header__nav__links">
          <li class="header__nav__links__link">
            <NuxtLink to="/cuisine-sur-mesure-savoie" class="nuxt-link" exact
              >Cuisines<span class="line"></span
            ></NuxtLink>
          </li>
          <li class="header__nav__links__link">
            <NuxtLink to="/dressings-sur-mesure-savoie" class="nuxt-link" exact
              >Dressings<span class="line"></span
            ></NuxtLink>
          </li>
          <li class="header__nav__links__link">
            <NuxtLink
              to="/salle-de-bain-sur-mesure-savoie"
              class="nuxt-link"
              exact
              >Salles de bain<span class="line"></span
            ></NuxtLink>
          </li>
          <li class="header__nav__links__link">
            <NuxtLink
              to="/bureaux-et-magasins-sur-mesure"
              class="nuxt-link"
              exact
              >Bureaux et magasins<span class="line"></span
            ></NuxtLink>
          </li>
          <li class="header__nav__links__link">
            <NuxtLink to="/cave-a-vin-sur-mesure" class="nuxt-link" exact
              >Caves à vin<span class="line"></span
            ></NuxtLink>
          </li>
          <li class="header__nav__links__link">
            <NuxtLink
              to="/ameublement-professionnel-savoie"
              class="nuxt-link"
              exact
              >Ameublement professionnel<span class="line"></span
            ></NuxtLink>
          </li>

          <li class="header__nav__links__link">
            <NuxtLink
              to="/salons-et-salles-a-manger-sur-mesure"
              class="nuxt-link"
              exact
              >Salons et salles à manger<span class="line"></span
            ></NuxtLink>
          </li>

          <li class="header__nav__links__link">
            <NuxtLink to="/meubles-sur-mesure-savoie" class="nuxt-link" exact
              >Toutes les réalisations sur mesure<span class="line"></span
            ></NuxtLink>
          </li>
          <li class="header__nav__links__link">
            <NuxtLink
              to="/contact-ebeniste-savoie"
              class="nuxt-link"
              style="text-decoration: underline"
              exact
              >Devis et contact<span class="line"></span
            ></NuxtLink>
          </li>
        </ul>
      </nav>
    </Transition>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  position: relative;
  padding: 1.5rem;
  background-color: $base-color;
  box-shadow: $shadow;

  @media (min-width: $laptop-screen) {
    display: none;
  }

  &__nav {
    position: fixed;
    top: 0.75rem;
    right: 1rem;
    z-index: 2;

    &__links {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: $secondary-color;
      padding: 1rem;
    }
  }

  .menu-button {
    position: fixed;
    right: 1rem;
    top: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $secondary-color;
    z-index: 3;
    border-radius: 0;
  }
}

.nuxt-link {
  text-decoration: none;
  color: $text-color-alt;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  gap: 2px;

  .line {
    width: 0px;
    height: 2px;
    background-color: transparent;
    transition:
      width 0.3s ease,
      background-color 0.3s ease;
  }
}

.router-link-exact-active {
  .line {
    width: 100%;
    background-color: $tertiary-color;
  }
}
</style>
