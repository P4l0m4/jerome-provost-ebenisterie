<script setup lang="ts">
import { colors } from "@/utils/colors";
</script>
<template>
  <section class="contact-banner">
    <div class="contact-banner__txt">
      <SideText variant="light" side="top">
        Jérôme Provost
        <template #subtitle>Ebéniste agenceur depuis 1995</template>
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
  </section>
</template>
<style lang="scss" scoped>
.contact-banner {
  height: calc(100dvh - 80px);
  width: 100%;
  background-size: cover;
  background-position: center;
  background-image:
    linear-gradient(0deg, rgba(#161616, 100%), transparent 100%),
    url("@/assets/images/jerome.jpg");
  display: flex;
  //   align-items: end;
  justify-content: end;
  gap: 2rem;
  padding: 2rem;
  flex-direction: column;

  @media (min-width: $big-tablet-screen) {
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
      gap: 2rem;

      &__element {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-size: $medium-text-size;
        font-weight: $bold;
        color: $text-color-alt;
      }
    }
  }
}

.suppliers {
  width: 100%;
  height: 100vh;
  background-color: $text-color;
  display: flex;
  gap: 2rem;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    padding: 4rem 2rem;
  }
}
</style>
