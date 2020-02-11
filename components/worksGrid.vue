<template>
  <div>
    <div class="works-grid">
      <div v-for="work in works" class="work">
        <a :href="getUrl(work.url)" target="_blank">
          <img class="work-image" :src="'img/' + work.type + '/' + work.image" data-aos="fade-up" />
        </a>
        <h3 class="work-title">{{ work.title }}</h3>
        <p class="work-description">{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    works: {}
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