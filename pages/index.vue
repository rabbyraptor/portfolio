<template>
  <div class="container">
    <div class="hero-image fp-hero">
      <div class="hero-title">
        <h1 class="title" style="line-height:0.6;">Mathias Hammer <br> <span style="font-size:26px;">Multimediedesigner</span></h1>
      </div>
      <div class="title" style="font-size:26px; font-style:italic; position:absolute; bottom:0; left:50%; transform: translateX(-50%);">
        Se mit arbejde herunder!<br/>
        <svg style="margin:8px 0;" height="42px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path style="fill: white;" d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-143.6-28.9L288 302.6V120c0-13.3-10.7-24-24-24h-16c-13.3 0-24 10.7-24 24v182.6l-72.4-75.5c-9.3-9.7-24.8-9.9-34.3-.4l-10.9 11c-9.4 9.4-9.4 24.6 0 33.9L239 404.3c9.4 9.4 24.6 9.4 33.9 0l132.7-132.7c9.4-9.4 9.4-24.6 0-33.9l-10.9-11c-9.5-9.5-25-9.3-34.3.4z"/></svg>
      </div>
    </div>
    <section class="fp-section">
      <h2>Websites</h2>
      <works-grid :works="websiteWorks" class="website-grid"/>
      <h2>Logoudvikling</h2>
      <works-grid :works="logoWorks" />
    </section>
  </div>
</template>

<script>
import worksGrid from "~/components/worksGrid.vue";

export default {
  components: {
    worksGrid
  },
  data() {
    return {
      websiteWorks: [
        {
          title: "Arctic Sounds, 2020",
          type: "website",
          image: "arctic-sounds.jpg",
          description: "VueJS/NuxtJS",
          url: "arcticsounds-dev.netlify.com"
        },
        {
          title: "Jonas Hammer, 2019",
          type: "website",
          image: "jonashammer.jpg",
          description: "VueJS/NuxtJS",
          url: "jonashammer.netlify.com"
        },
        {
          title: "Fyens Forum (Skoleprojekt), 2019",
          type: "website",
          image: "fyens-forum.jpg",
          description: "HTML/CSS/PHP",
          url: "mmd.mathiashammer.dk/fyensforum/"
        },
        {
          title: "Kroppens Dag (Skoleprojekt), 2019",
          type: "website",
          image: "kroppensdag.jpg",
          description: "HTML/CSS/JS",
          url: "mmd.mathiashammer.dk/kroppensdag/"
        },
        {
          title: "Serravik, 2019",
          type: "website",
          image: "serravik.jpg",
          description: "WordPress",
          url: "serravik.gl"
        },
        {
          title: "Als og Sundeveds Kattefond (Skoleprojekt), 2017",
          type: "website",
          image: "kattefond.jpg",
          description: "HTML/CSS",
          url: "mmd.mathiashammer.dk/kattefond/"
        },
        {
          title: "Paprika Aalborg, 2017",
          type: "website",
          image: "paprikaaalborg.jpg",
          description: "WordPress",
          url: "paprikaaalborg.dk"
        },
        {
          title: "Qimusseq Sisimiut, 2017",
          type: "website",
          image: "qimusseq.jpg",
          description: "WordPress",
          url: "qimusseq.org"
        }
      ],
      logoWorks: [
        {
          title: "Tolkeservice Sisimiut, 2019",
          type: "logo",
          image: "ts-logo.png",
          description: "",
          url: ""
        },
        {
          title: "Als og Sundeveds Kattefond (Skoleprojekt), 2017",
          type: "logo",
          image: "alsogsundeved-logo.png",
          description: "",
          url: ""
        },
        {
          title: "Huset Appel (Skoleprojekt), 2017",
          type: "logo",
          image: "husetappel-logo.png",
          description: "",
          url: ""
        },
        {
          title: "Gabemedia, 2017",
          type: "logo",
          image: "gabemedia-logo.png",
          description: "",
          url: ""
        },
        {
          title: "Cleangum (Skoleprojekt), 2017",
          type: "logo",
          image: "cleangum-logo.png",
          description: "",
          url: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>
