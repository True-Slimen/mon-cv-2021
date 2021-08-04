<template>
  <section id="portfolio">
    <div class="cha-header-clip">
      <header class="cha-header">
        <Navlight />
      </header>
      <div class="cha-header-section">
        <NavSectionLightTwins
          :linkUp="'#skills'"
          :linkDown="'#my-journey'"
        />
      </div>
    </div>
    <div class="container padding-top">
      <h2 class="white-text mt-5">Portfolio</h2>
      <p class="col-md-8 pl-0 white-text">
        Que se soit au travers d'illustrations, d'interfaces attrayantes ou
        encore dans la conception de la logique en arrière plan j'aime mettre ma
        sensibilité et ma logique en application.
      </p>
      <p class="col-md-8 pl-0 white-text">
        Si il y a bien un atout dans le métier de développeur, c'est la
        possiblité de pratiquer des aspects de prime abord sans liens et qui
        pourtant, se révèlent complémentaire.
      </p>

      <div class="row white-text justify-content-between">
        <article class="col-md-5 col-12">
          <h3 class="text-center mt-5 mb-3">Graphisme</h3>
          <div class="img-card-wrapper">
            <a href="/graphisme">
              <img
                class="img-card"
                src="image/purple-desert-thumbnail.jpg"
                alt=""
              />
            </a>
          </div>
        </article>
        <article class="col-md-5 col-12">
          <h3 class="text-center mt-5 mb-3">Développement</h3>
          <div class="img-card-wrapper">
            <a href="/developpement">
              <img class="img-card" src="image/screen_vdl.jpg" alt="" />
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

<script>
import Navlight from "@/components/Layouts/Navlight";
import NavSectionLightTwins from "@/components/Layouts/NavSectionLightTwins";

export default {
  components: {
    Navlight,
    NavSectionLightTwins,
    },
  props: {},
  data() {
    return {};
  },
  methods: {
    test() {
      alert("win win win");
    },
  },
};
</script>
