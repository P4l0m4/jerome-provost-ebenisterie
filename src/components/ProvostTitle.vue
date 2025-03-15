<template>
  <section class="provost"><slot /></section>
</template>
<style lang="scss" scoped>
.provost {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem;
  min-height: calc(8vw + 8rem);
  position: relative;

  &::before {
    content: "PROVOST";
    font-size: 8vw;
    width: fit-content;
    height: fit-content;
    font-weight: $bold;
    white-space: nowrap;
    position: absolute;
    inset: 0;
    margin: auto;
    color: rgba($text-color, 10%);
  }
}
</style>
