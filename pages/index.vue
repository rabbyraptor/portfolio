<template>
  <div class="container">
    <div class="hero-image fp-hero">
      <div>
      <h1 class="title">Mathias Hammer | Portfolio</h1>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/rabbyraptor" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
    </div>
    
    <works-grid />
  </div>
</template>

<script>
import worksGrid from "~/components/worksGrid.vue";

export default {
  components: {
    worksGrid
  }
};
</script>

<style>
</style>
