<script setup>
defineProps(["error"]);
</script>

<template>
  <HeaderComponent />
  <MobileHeader />
  <div class="error">
    <div class="error__message">
      <h1 class="titles">Oops... erreur {{ error.statusCode }}</h1>

      <h2 class="subtitles">Cette page n'existe pas.</h2>
      <NuxtLink
        to="/"
        class="button-primary--dark"
        aria-label="retour à la page d'accueil"
        ><PrimaryButton>Retour à la page d'accueil</PrimaryButton></NuxtLink
      >
    </div>
  </div>
  <FooterComponent />
</template>
<style lang="scss" scoped>
.error {
  &__message {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
    padding: 4rem 1rem;
    height: 100vh;
    text-align: center;

    & h2 {
      font-weight: $regular;
      font-size: $main-text-size;
    }

    & button {
      padding: 1rem 1.75rem;
    }
  }
}
</style>
