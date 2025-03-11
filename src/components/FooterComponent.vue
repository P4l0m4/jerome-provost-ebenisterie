<template>
  <footer class="footer">
    <div class="footer__text">
      <div class="footer__text__column">
        <NuxtLink to="/" class="logo noselect"
          ><img
            src="@/assets/images/jp-logo-light.svg"
            alt="logo jerome provost ebenisterie"
        /></NuxtLink>
        <p>
          Ébéniste passionné depuis 1995, je conçois et réalise tous types de
          meubles sur-mesure, en alliant tradition artisanale et modernité.
        </p>
      </div>
      <ul class="footer__text__column">
        <li class="footer__text__column__link">
          <NuxtLink to="/cuisine-sur-mesure" class="nuxt-link"
            >Cuisine sur-mesure</NuxtLink
          >
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/dressing-sur-mesure" class="nuxt-link"
            >Dressing sur-mesure</NuxtLink
          >
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/salle-de-bain-sur-mesure" class="nuxt-link"
            >Salle de bain sur-mesure</NuxtLink
          >
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/ammeublement-professionnel" class="nuxt-link"
            >Ammeublement professionnel</NuxtLink
          >
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/autes-creations-personnalisées" class="nuxt-link"
            >Autres créations personnalisées</NuxtLink
          >
        </li>
      </ul>
      <ul class="footer__text__column">
        <li class="footer__text__column__link">
          <NuxtLink to="/contact#faq" class="nuxt-link">F.A.Q.</NuxtLink>
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/contact" class="nuxt-link">Contact</NuxtLink>
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/contact#partenaires" class="nuxt-link"
            >Partenaires</NuxtLink
          >
        </li>
        <li class="footer__text__column__link">
          <NuxtLink to="/contact" class="nuxt-link"
            >Prendre rendez-vous</NuxtLink
          >
        </li>
      </ul>
    </div>
    <div class="footer__bottom">
      <span>©J.P. Ebenisterie 2025</span><span>Mentions légales</span
      ><a href="tekilawebfactory.com">By Tekila Web Factory</a>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.footer {
  background-color: $text-color;
  display: flex;
  padding: 4rem;
  flex-direction: column;
  gap: 4rem;

  &__text {
    display: flex;
    gap: 2rem;
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: end;

    &__column {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 496px;
      list-style: none;
      color: $base-color;

      &__link {
        color: $base-color;

        .nuxt-link {
          color: $base-color;
        }
      }
    }
  }

  &__bottom {
    display: flex;
    gap: 1rem;
    color: $secondary-color;

    a {
      color: $secondary-color;
      margin-left: auto;
    }
  }
}

.logo {
  margin-bottom: 1rem;
}
</style>
