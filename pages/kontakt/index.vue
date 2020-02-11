<template>
  <div class="container">
    <div class="hero-image bg-hero">
      <div class="hero-title">
        <h1 class="title">Kontakt</h1>
      </div>
    </div>
    <section class="bg-section">
      <contact-form/>
    </section>
  </div>
</template>

<script>
import contactForm from "../../components/contactForm"
export default {
  components:{
    contactForm
  }
};
</script>

<style>
</style>
