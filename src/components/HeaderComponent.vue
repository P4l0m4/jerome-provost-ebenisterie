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

    <NuxtLink to="/contact-ebeniste-savoie" class="nuxt-link" exact
      >Contact<span class="line"></span
    ></NuxtLink>
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
</style>
