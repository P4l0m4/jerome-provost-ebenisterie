<script setup lang="ts">
import { colors } from "@/utils/colors";

useHead({
  title:
    "Obtenir un devis pour meuble sur mesures | Jérôme Provost Ebénisterie",
  meta: [
    {
      name: "description",
      content:
        "Obtenez un devis pour votre meuble sur mesure. Jérôme Provost Ebénisterie, ébéniste agenceur à Chambéry en Savoie, réalise tous vos projets de meubles sur mesure.",
    },
  ],
});
</script>
<template>
  <section class="contact-banner">
    <div class="contact-banner__txt">
      <SideText variant="light" side="top">
        Jérôme Provost
        <template #subtitle>Ebéniste agenceur en Savoie</template>
      </SideText>

      <div class="contact-banner__txt__info">
        <a class="contact-banner__txt__info__element" href="tel:0623041637">
          <IconComponent
            icon="phone"
            size="2rem"
            :color="colors['lucent-white']"
          />06 23 04 16 37
        </a>
        <a
          class="contact-banner__txt__info__element"
          href="mailto:jp.ebenisterie73@gmail.com"
        >
          <IconComponent
            icon="envelope-1"
            size="2rem"
            :color="colors['lucent-white']"
          />jp.ebenisterie73@gmail.com
        </a>
      </div>
    </div>
    <FormComponent />
  </section>
  <section class="suppliers">
    <SideText variant="light" side="top">
      Fournisseurs
      <template #subtitle>Tous les fournisseurs partenaires</template>
    </SideText>
    <div class="suppliers__materials">
      <div class="suppliers__materials__column">
        <div class="suppliers__materials__column__img bois">
          <ul class="suppliers__materials__column__img__links">
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
          </ul>
          <span class="suppliers__materials__column__img__title">Bois</span>

          <hr />
        </div>
        <div class="suppliers__materials__column__img verrerie">
          <ul class="suppliers__materials__column__img__links">
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
          </ul>
          <span class="suppliers__materials__column__img__title">Verrerie</span>

          <hr />
        </div>
      </div>
      <div class="suppliers__materials__column">
        <div class="suppliers__materials__column__img marbre">
          <ul class="suppliers__materials__column__img__links">
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
          </ul>
          <span class="suppliers__materials__column__img__title">Marbre</span>

          <hr />
        </div>
        <div class="suppliers__materials__column__img visserie">
          <ul class="suppliers__materials__column__img__links">
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
            <li class="suppliers__materials__column__img__links__link">
              <a href="/">Link</a>
            </li>
          </ul>
          <span class="suppliers__materials__column__img__title">Visserie</span>

          <hr />
        </div>
        <NuxtLink to="/outil-materiaux-meubles-sur-mesure"
          ><PrimaryButton variant="mocha-mousse"
            >Trouver les matériaux pour votre projet</PrimaryButton
          ></NuxtLink
        >
      </div>
    </div>
  </section>
  <KnowHow />
  <InfoBanner />
  <FAQ />
  <ProvostTitle />
  <CarouselComponent />
</template>
<style lang="scss" scoped>
.contact-banner {
  min-height: calc(100dvh - 80px);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(0deg, rgba($text-color, 100%), transparent 100%),
    url("@/assets/images/jerome.jpg");
  display: flex;
  justify-content: end;
  gap: 2rem;
  padding: 2rem 1rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }

  @media (min-width: $laptop-screen) {
    padding: 4rem;
  }

  &__txt {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: $big-tablet-screen) {
      gap: 4rem;
    }

    &__info {
      display: flex;
      gap: 0.5rem;
      flex-direction: column;
      width: fit-content;

      @media (min-width: $big-tablet-screen) {
        flex-direction: row;
        gap: 2rem;
      }

      &__element {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: $main-text-size;
        font-weight: $regular;
        color: $text-color-alt;
        width: fit-content;
        text-shadow: $shadow-text;

        @media (min-width: $big-tablet-screen) {
          font-size: $medium-text-size;
        }
      }
    }
  }

  & .wrapper {
    &:deep(.line) {
      max-width: 300px;
    }
  }
}

.suppliers {
  width: 100%;
  min-height: 100dvh;
  background-color: $text-color;
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
    flex-direction: row;
    gap: 4rem;
  }

  &__materials {
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
    }

    &__column {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      &__img {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        justify-content: end;
        height: fit-content;
        min-height: 100dvh;
        width: 100%;

        max-width: 560px;
        padding: 1rem;

        @media (min-width: $big-tablet-screen) {
          height: 100dvh;
          padding: 2rem;
          gap: 4rem;
        }

        &__title {
          color: $text-color-alt;
          font-size: 7rem;
          text-transform: uppercase;
          width: 100%;
          word-break: break-all;
          text-wrap: balance;
          font-weight: $bold;

          @media (min-width: $big-tablet-screen) {
            font-size: $big-title-size;
          }
        }

        &__links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;

          &__link {
            & a {
              color: $text-color-alt;
              font-size: $main-text-size;
            }
          }
        }

        & hr {
          color: $primary-color;
        }
      }
    }
  }
}

.bois {
  background-image:
    linear-gradient(90deg, rgba($text-color, 80%), transparent 100%),
    url("@/assets/images/bois.jpg");
  background-size: cover;
  background-position: center;
}
.verrerie {
  background-image:
    linear-gradient(90deg, rgba($text-color, 80%), transparent 100%),
    url("@/assets/images/verrerie.jpg");
  background-size: cover;
  background-position: center;
}
.marbre {
  background-image:
    linear-gradient(90deg, rgba($text-color, 80%), transparent 100%),
    url("@/assets/images/marbre.jpg");
  background-size: cover;
  background-position: center;
}
.visserie {
  background-image:
    linear-gradient(90deg, rgba($text-color, 80%), transparent 100%),
    url("@/assets/images/visserie.jpg");
  background-size: cover;
  background-position: center;
  border-radius: 0 0 130px 0;
  overflow: hidden;
}
</style>
