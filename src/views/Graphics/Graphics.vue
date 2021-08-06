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
      <div class="container-large">
        <div class="row justify-content-between">
          <article class="col-md-4 col-12">
            <h3 class="text-center mt-5 mb-3">Illustration</h3>
            <div class="img-card-wrapper">
              <a href="/illustration">
                <img
                  class="img-card"
                  src="image/purple-desert-thumbnail.jpg"
                  alt=""
                />
              </a>
            </div>
          </article>
          <article class="col-md-4 col-12">
            <h3 class="text-center mt-5 mb-3">Parallax</h3>
            <div class="img-card-wrapper">
              <a href="/parallax">
                <img
                  class="img-card"
                  src="image/purple-desert-thumbnail.jpg"
                  alt=""
                />
              </a>
            </div>
          </article>
          <article class="col-md-4 col-12">
            <h3 class="text-center mt-5 mb-3">Logos</h3>
            <div class="img-card-wrapper">
              <a href="/logo">
                <img
                  class="img-card"
                  src="image/progenythumbnail.jpg"
                  alt=""
                />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<style scoped>
</style>

<script>
import NavDarkExternal from "@/components/Layouts/NavDarkExternal";
import NavSectionDarkDown from "@/components/Layouts/NavSectionDarkDown";
import Footer from '@/views/Footer'


export default {
  components: {
    NavDarkExternal,
    NavSectionDarkDown,
    Footer
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

  .container-large{
    max-width: 1440px;
    width: 90%;
    margin: 0 auto;
  }
</style>
