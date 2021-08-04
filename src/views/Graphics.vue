<template>
  <div>
    <section id="graphics">
      <div >
        <header class="fixed-top">
          <NavDarkExternal />
        </header>
        <div>
          <NavSectionDarkDown
            :linkDown="'#illustration'"
          />
        </div>
      </div>
      <div class="container padding-top">
        <h1 class=" mt-5">Graphisme</h1>
        <p class="col-md-8 pl-0 ">
          Comment ne pas se perdre dans les oeuvres graphiques qui nous entourent ?
        </p>
        <p class="col-md-8 pl-0 ">
          Tantôt réalistes ou complètement fantasmés, le dessin, l'illustration et même la photographie sont de ces <strong>langues universel</strong>.
        </p>
        <p class="col-md-8 pl-0 ">
          Fenêtres vers des <strong>"hauts de là"</strong> nous promettant de par leurs observations un regard sur notre monde et transportant bien souvent un message, parfois <strong>sans que l'on ne s'en rende compte</strong>.
        </p>
      </div>
    </section>
    <Illustration/>
  </div>
</template>

<style scoped>
</style>

<script>
import NavDarkExternal from "@/components/Layouts/NavDarkExternal";
import NavSectionDarkDown from "@/components/Layouts/NavSectionDarkDown";
import Illustration from '@/components/graphics/Illustration'

export default {
  components: {
    NavDarkExternal,
    NavSectionDarkDown,
    Illustration
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
<style scoped>
  NavDarkExternal{
    position: fixed;
  }
</style>
