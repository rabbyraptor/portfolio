<template>
  <div>
    <div class="bg uddannelser">
        <ul>
          <li class="uddannelse" v-for="entry in background">
            <a :href="getUrl(entry.url)" target="_blank">
              <img v-if="entry.placeLogo != ''" :src="'@/img/baggrund/' + entry.placeLogo" data-aos="fade-right" data-aos-offset="100">
            </a>
            <div data-aos="fade-left" data-aos-offset="100">
              <h3>{{ entry.title }}</h3>
              <p>{{ entry.year }}</p>
              <h4>{{ entry.place }}</h4>
              <p class="bg-description" v-html="entry.description" />
            </div>
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    background: {}
  },
  methods: {
    getUrl(url) {
      if (url != "") {
        return "https://" + url;
      }
    }
  }
};
</script>

<style>
</style>