<template>
  <div class="container">
    <div class="hero-image bg-hero">
      <div class="hero-title">
        <h1 class="title">Baggrund</h1>
      </div>
    </div>
    <section class="bg-section">
      <div class="bg-grid">
        <h2>Uddannelse</h2>
        <background-grid :background="educations" />
        <h2>Erfaring</h2>
        <background-grid :background="experience" />
      </div>
    </section>
  </div>
</template>

<script>
import backgroundGrid from "../components/backgroundGrid.vue";

export default {
  data() {
    return {
      educations: [
        {
          title: "Multimediedesigner",
          year: "2018 - 2020",
          place: "UCL Erhvervsakademi og Professionshøjskole Odense",
          url: "ucl.dk/uddannelser/videregaaende-uddannelser/multimediedesigner",
          placeLogo: "ucl-logo.svg",
          description:
            "Valgfag: Content Development. <br/> Under uddannelsen har jeg modtaget undervisning i blandt andet <ul style='list-style-type:initial; padding:8px 0 0 20px;'><li>Brugergrænsefladeudvikling</li><li>Brugeroplevelser</li><li>Indholdsproduktion</li><li>Forretning</li><li>Teknologier</li></ul>"
        },
        {
          title: "Højere teknisk eksamen (HTX)",
          year: "2011 - 2014",
          place: "GameIT College, Viden Djurs Grenaa",
          url: "gamecollege.dk/spiludvikling/",
          placeLogo: "gamecollege-logo.png",
          description:
            "Studieretning: Kommunikation/IT A, Design B, Programmering C. <br/>Denne uddannelse har jeg taget på bla bla osv. Derudover er bla bla og osv osv osv."
        }
      ],
      experience: [
        {
          title: "Multimediedesignerpraktikant",
          year: "2019",
          place: "Edentic ApS",
          url: "edentic.dk",
          placeLogo: "edentic-logo.png",
          description:
            "I januar 2019 oprettede jeg Good Hammer Times (PMV), som jeg har drevet ved siden af mit studie. I virksomheden har jeg beskæftiget mig med forskellige opgaver, herunder websites, logoer, cover art og visitkort."
        },
        {
          title: "Selvstændig",
          year: "2019 - Nu",
          place: "Good Hammer Times",
          url: "",
          placeLogo: "",
          description:
            "I januar 2019 oprettede jeg Good Hammer Times (PMV), som jeg har drevet ved siden af mit studie. I virksomheden har jeg beskæftiget mig med forskellige opgaver, herunder websites, logoer, cover art og visitkort."
        },
        {
          title: "Webmaster",
          year: "2017 - Nu",
          place: "Arctic Sounds Festival",
          url: "arcticsounds-dev.netlify.com",
          placeLogo: "arcticsounds-logo.png",
          description:
            "Som webmaster for Arctic Sounds har jeg blandt andet stået for opsætning og vedligehold af hjemmeside. Derudover har jeg produceret festivalblad med koncertbilleder og andet grafisk arbejde, såsom navneskilte."
        },
        {
          title: "Webudvikler",
          year: "2017",
          place: "Gabemedia",
          url: "gabemedia.dk",
          placeLogo: "gabemedia-logo.png",
          description:
            "I min praktik hos Gabemedia bestod mine arbejdsopgaver hovedsageligt af at designe og udvikle hjemmesider, primært i WordPress. Jeg fik også erfaring i at arbejde med logodesign og -udvikling."
        }
      ]
    };
  },
  components: {
    backgroundGrid
  }
};
</script>

<style>
</style>
