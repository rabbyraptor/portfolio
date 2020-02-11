<template>
  <div class="container">
    <div class="hero-image bg-hero">
      <div class="hero-title">
        <h1 class="title">Kompetencer</h1>
      </div>
    </div>
    <section class="bg-section">
      <div class="bg-grid">
        <h2>Mine kompetencer</h2>
        <background-grid :background="skillset" />
      </div>
    </section>
  </div>
</template>

<script>
import backgroundGrid from "../components/backgroundGrid.vue";

export default {
  data() {
    return {
      skillset: [
        {
          title: "HTML",
          placeLogo: "html.png",
          url: "",
          description:
            "Jeg stiftede bekendtskab med HTML for mere end 10 år siden, og har altid godt kunne lide sproget. I HTML5 forsøger jeg altid at holde mig til de semantiske tags."
        },
        {
          title: "CSS/SCSS",
          placeLogo: "css.png",
          url: "",
          description:
            "CSS er et interessant sprog, og overraskende mange ting kan laves i ren CSS. SCSS/SASS er relativt nyt for mig, men jeg forudser at jeg snart ikke vil kunne undvære variabler, nesting, osv."
        },
        {
          title: "JavaScript",
          placeLogo: "javascript.png",
          url: "",
          description:
            "JavaScript har været igennem enorme ændringer de sidste par år, og mit syn på sproget har derfor også ændret sig radikalt – til det bedre. Med Node, API’er, open-source frameworks og packages står JavaScript stærkere end nogensinde."
        },
        {
          title: "NodeJS + NPM",
          placeLogo: "npm.png",
          url: "",
          description:
            "At kunne styre sine pakker/moduler og nemt dele sine projekter i forbindelse med arbejde i hold giver et eminent workflow, og jeg er meget taknemmelig for at have lært dette at kende."
        },
        {
          title: "Vue",
          placeLogo: "vue.png",
          url: "",
          description:
            "Jeg er blevet vild med Vue, og har brugt det i flere projekter. Siden jeg lærte Vue har jeg brugt det de steder, hvor jeg har kunne slippe afsted med det."
        },
        {
          title: "Nuxt",
          placeLogo: "nuxt.png",
          url: "",
          description:
            "Nuxt er mit go-to når jeg laver sider i JAMstack. Med kendskab til Vue er Nuxt intet mindre end en drøm at arbejde i. Denne side er udviklet i Nuxt."
        },
        {
          title: "JAMstack/Serverless (via Netlify)",
          placeLogo: "jamstack.png",
          url: "",
          description:
            "Jeg er blevet grebet af JAMstack/serverless sites siden jeg hørte om det første gang. Jeg har bl.a. lavet statiske sider med headless CMS, der kører gennem Contentful via API-kald."
        },
        {
          title: "Adobe (Photoshop + Illustrator + InDesign)",
          placeLogo: "adobecc.png",
          url: "",
          description:
            "Jeg har brugt Adobe CC siden 2016, og har modtaget undervisning i flere af programmerne, herunder fritlægning, vektorgrafik, logoudvikling, og opsætning af diverse tryksager, samt preflight heraf."
        },
        {
          title: "WordPress",
          placeLogo: "wordpress.png",
          url: "",
          description:
            "Jeg har stået bag udviklingen af flere WordPress-sider, og brugt forskellige multi-purpose themes som Divi og Hind samt child themes og naturligvis diverse plugins."
        },
        {
          title: "PHP",
          placeLogo: "php.png",
          url: "",
          description:
            "Selvom mine evner er bedst givet ud på frontend-siden, kan jeg ikke se bort fra min fortid med PHP. Jeg stiftede bekendtskab til PHP for ca. 10 år siden (omkring ver. 5.2), og PHP vil altid blive husket som det første programmeringssprog jeg skrev i."
        },
        {
          title: "GitHub",
          placeLogo: "github.png",
          url: "",
          description:
            "Versionering og versionskontrol er et af mine vigtigste værktøjer, når jeg arbejder med noget, hvor kodning indgår. Det kan næsten altid betale sig at bruge Git, uanset om man arbejder i hold eller alene."
        },
        {
          title: "Trello/Scrum",
          placeLogo: "trello.png",
          url: "",
          description:
            "Når jeg bruger Trello, bliver alting mere overskueligt og effektivt. Jeg lærte at bruge og arbejde med Scrum på GameIT College i 2011, hvor det blev brugt i forbindelse med udvikling af computerspil."
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
