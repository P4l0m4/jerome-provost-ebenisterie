<template>
  <section class="pop-up">
    <span class="pop-up__message"><slot /></span>
  </section>
</template>
<style lang="scss" scoped>
.pop-up {
  position: fixed;
  inset: 0;
  margin: auto;
  z-index: 1;
  background-color: $success-color;
  border-radius: $radius;
  padding: 2rem;
  width: 100%;
  max-width: calc(100vw - 32px);
  height: 60dvh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__message {
    font-size: $medium-text-size;
  }
}
</style>
