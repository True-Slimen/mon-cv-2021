<template>
  <section id="portfolio">
    <div class="cha-header-clip">
      <header class="cha-header">
        <Navlight />
      </header>
    </div>
    <div class="container padding-top">
      <div class="row col-12 justify-content-center">
        <a class="border rounded-50 scroll-icon-wrapper up-icon" href="#skills">
          <img
            class="scroll-icon"
            src="image/icon/up-arrow-small.png"
            alt="naviguer vers la section mes compétences"
          />
        </a>
      </div>

      <h2 class="white-text mt-5">Portfolio</h2>
      <p class="white-text">
        Que se soit au travers d'illustrations, d'interfaces attrayantes ou
        encore dans la conception de la logique en arrière plan j'aime mettre ma
        sensibilité et ma logique en application.
      </p>
      <p class="white-text">
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
      <div class="row scroll-icon-row col-12 justify-content-center">
        <a class="border rounded-50 scroll-icon-wrapper" href="#my-journey">
          <img
            class="scroll-icon"
            src="image/icon/down-arrow-white.png"
            alt="naviguer vers la section à propos"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

<script>
import Navlight from "@/components/Layouts/Navlight";

export default {
  components: {
    Navlight,
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
