<template>
  <section class="know-how">
    <SideText side="left">
      Savoir-faire
      <template #subtitle>Complémentaires</template></SideText
    >

    <div class="know-how__bubbles">
      <div class="know-how__bubbles__bubble"><span>Sculpture</span></div>
      <div class="know-how__bubbles__bubble"><span>Métallurgie</span></div>
      <div class="know-how__bubbles__bubble"><span>Tapisserie</span></div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.know-how {
  display: flex;
  gap: 2rem;
  height: fit-content;
  flex-direction: column;
  padding: 2rem 1rem;

  @media (min-width: $big-tablet-screen) {
    gap: 4rem;
    flex-direction: row;
    padding: 8rem 4rem;
    align-items: end;
  }

  &__bubbles {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    width: 100%;

    @media (min-width: $big-tablet-screen) {
      flex-direction: row;
      align-items: center;
    }

    &__bubble {
      display: flex;
      justify-content: center;
      align-items: center;
      background-size: cover;
      background-position: center;
      width: 100%;
      border-radius: 130px 130px 130px 0;
      height: 350px;
      padding: 8rem 4rem;

      @media (min-width: $big-tablet-screen) {
        padding: 4rem 2rem;
      }

      @media (min-width: $desktop-screen) {
        padding: 8rem 4rem;
      }

      &:nth-of-type(1) {
        background-image:
          linear-gradient(90deg, rgba($text-color, 100%), transparent 100%),
          url("@/assets/images/sculpture.jpg");
      }
      &:nth-of-type(2) {
        background-image:
          linear-gradient(90deg, rgba($text-color, 100%), transparent 100%),
          url("@/assets/images/metallurgie.jpg");
      }
      &:nth-of-type(3) {
        background-image:
          linear-gradient(90deg, rgba($text-color, 100%), transparent 100%),
          url("@/assets/images/tapisserie.jpg");
      }

      & span {
        text-transform: uppercase;
        font-weight: $bold;
        font-size: 4rem;
        text-wrap: wrap;
        text-transform: uppercase;
        width: fit-content;
        word-break: break-all;
        text-wrap: balance;
        color: $text-color-alt;
        text-align: right;

        @media (min-width: $big-tablet-screen) {
          font-size: 3rem;
        }

        @media (min-width: $desktop-screen) {
          font-size: 5rem;
        }
      }
    }
  }

  & .wrapper {
    height: 304px;
  }
}
</style>
