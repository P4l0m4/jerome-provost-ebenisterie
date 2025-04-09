<script setup lang="ts">
import { ref, watch } from "vue";
import { colors } from "@/utils/colors";
import { onClickOutside } from "@vueuse/core";
import { useTemplateRef } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);

const target = useTemplateRef<HTMLElement>("target");
onClickOutside(target, () => (isMenuOpen.value = false));

const route = useRoute();

watch(
  () => route.fullPath,
  () => {
    setTimeout(() => {
      isMenuOpen.value = false;
    }, 400);
  }
);
</script>
<template>
  <header class="header">
    <nav class="header__nav">
      <ul class="header__nav__links">
        <li class="header__nav__links__link">
          <NuxtLink to="/cuisine-sur-mesure-savoie" class="nuxt-link" exact
            >Cuisine<span class="line"></span
          ></NuxtLink>
        </li>
        <li class="header__nav__links__link">
          <NuxtLink to="/dressings-sur-mesure-savoie" class="nuxt-link" exact
            >Dressing<span class="line"></span
          ></NuxtLink>
        </li>
        <li class="header__nav__links__link">
          <NuxtLink
            to="/salle-de-bain-sur-mesure-savoie"
            class="nuxt-link"
            exact
            >Salle de bain<span class="line"></span
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
      </ul>
    </nav>
    <NuxtLink to="/" class="logo noselect"
      ><img
        src="@/assets/images/jp-logo.svg"
        alt="logo jerome provost ebenisterie"
    /></NuxtLink>
    <div class="right-links">
      <NuxtLink to="/contact-ebeniste-savoie" class="nuxt-link" exact
        >Contact<span class="line"></span
      ></NuxtLink>
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
        <nav class="right-links__nav" v-if="isMenuOpen" ref="target">
          <ul class="right-links__nav__links">
            <li class="right-links__nav__links__link">
              <NuxtLink to="/cave-a-vin-sur-mesure" class="nuxt-link" exact
                >Caves à vin<span class="line"></span
              ></NuxtLink>
            </li>
            <li class="right-links__nav__links__link">
              <NuxtLink
                to="/bureaux-et-comptoirs-sur-mesure"
                class="nuxt-link"
                exact
                >Bureaux et comptoirs<span class="line"></span
              ></NuxtLink>
            </li>
            <li class="right-links__nav__links__link">
              <NuxtLink
                to="/salons-et-salles-a-manger-sur-mesure"
                class="nuxt-link"
                exact
                >Salons et salles à manger<span class="line"></span
              ></NuxtLink>
            </li>
            <li class="right-links__nav__links__link">
              <NuxtLink
                to="/buanderie-sur-mesure-savoie"
                class="nuxt-link"
                exact
                >Buanderies<span class="line"></span
              ></NuxtLink>
            </li>
            <li class="right-links__nav__links__link">
              <NuxtLink to="/autres-meubles-sur-mesure" class="nuxt-link" exact
                >Autres meubles sur mesure<span class="line"></span
              ></NuxtLink>
            </li>
            <li class="right-links__nav__links__link">
              <NuxtLink to="/meubles-sur-mesure-savoie" class="nuxt-link" exact
                >Toutes les réalisations sur mesure<span class="line"></span
              ></NuxtLink>
            </li>
          </ul>
        </nav>
      </Transition>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  display: none;

  @media (min-width: $laptop-screen) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 4rem;
    width: 100%;
    position: relative;
    box-shadow: $shadow;
    height: 80px;
  }

  &__nav {
    &__links {
      list-style: none;
      display: flex;
      gap: 1rem;
    }
  }

  .logo {
    position: absolute;
    width: fit-content;
    inset: 2rem 4rem;
    margin: auto;
  }
}

.nuxt-link {
  text-decoration: none;
  color: $text-color;
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

.right-links {
  display: flex;
  gap: 1rem;
  align-items: center;

  .menu-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: $secondary-color;
    z-index: 1;
    border-radius: 0;
    cursor: pointer;
  }

  &__nav {
    position: fixed;
    top: 15px;
    right: 4rem;
    z-index: 1;
    background-color: $secondary-color;

    &__links {
      list-style: none;
      display: flex;
      flex-direction: column;

      & .nuxt-link {
        color: $text-color-alt;
        padding: 0.75rem 1rem;
        .line {
          display: none;
        }

        &:hover {
          background-color: $tertiary-color;
        }

        &.router-link-exact-active {
          background-color: $tertiary-color;

          .line {
            display: none;
          }
        }
      }
    }
  }
}
</style>
