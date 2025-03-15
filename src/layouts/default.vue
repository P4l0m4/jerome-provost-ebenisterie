<template>
  <HeaderComponent />
  <MobileHeader />
  <main>
    <slot />
    <!-- Google Tag Manager (noscript) -->
    <!-- <noscript
      ><iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-NJGG6P35"
        height="0"
        width="0"
        style="display: none; visibility: hidden"
        title="Google Tag Manager"
      ></iframe
    ></noscript> -->
    <!-- End Google Tag Manager (noscript) -->
  </main>
  <FooterComponent />
</template>
<style lang="scss">
main {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  margin: auto;
}
.v-enter-active,
.v-leave-active {
  transition: transform 0.3s linear;
  transform-origin: top right;
}

.v-enter-from,
.v-leave-to {
  transform: scale(0);
}
</style>
