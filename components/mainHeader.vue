<template>
  <header class="headroom">
    <div class="header-info">
      <nuxt-link to="/" style="text-transform:capitalize">Mathias Hammer</nuxt-link>
    </div>
    <nav>
      <nuxt-link v-for="link in links" :to="link.url" :key="link.index" class="hvr-underline-from-center">{{ link.name }}</nuxt-link>
    </nav>
  </header>
</template>

<script>
import Headroom from "headroom.js";

export default {
  data() {
    return {
      links: [
        {
          name: "Portfolio",
          url: "/"
        },
        {
          name: "Baggrund",
          url: "/baggrund"
        },
        {
          name: "Kompetencer",
          url: "/kompetencer"
        },
        {
          name: "Kontakt",
          url: "/kontakt"
        },
        
      ]
    };
  },
  mounted() {
    const header = document.querySelector("header");
    const options = {
      offset: 120,
      tolerance: {
        up: 300,
        down: 10
      }
    };
    this.headroom = new Headroom(header, options);
    this.headroom.init();
  }
};
</script>

<style>
</style>