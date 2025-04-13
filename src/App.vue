<script setup lang="ts">
import { RouterView } from 'vue-router';
import Nav from './components/Nav.vue';
import FooterSite from './components/Footer.vue';
</script>

<template>
  <header>
    <Nav />
  </header>

  <main id="main">
    <RouterView />
  </main>

  <footer>
    <FooterSite />
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
}
main {
  width: 100%;
}
</style>
