<template>
  <section id="contact">
    <div class="cha-header-clip" aria-hidden="true">
      <header class="cha-header">
        <Navlight />
      </header>
      <div class="cha-header-section">
        <NavSectionLightUp
          :linkUp="'#my-journey'"
        />
      </div>
    </div>
    <kinesis-container class="h-100">
      <div class="container padding-top">
        <div class="row">
          <article class="col-md-6 col-sm-12 mt-5 z-index-100">
            <h2 class="mb-3 white-text">Contact</h2>
            <form class="contact-form">
              <div class="form-group">
                <!-- <label class="white-text" for="name">Nom</label> -->
                <input
                  type="text"
                  class="form-control blur-3"
                  id="name"
                  placeholder="Nom"
                />
              </div>
              <div class="form-group">
                <!-- <label class="white-text" for="email">Adresse email</label> -->
                <input
                  type="email"
                  class="form-control blur-3"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <!-- <label class="white-text" for="message">Votre message</label> -->
                <textarea placeholder="Le message" class="form-control blur-3" id="message" rows="3"></textarea>
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1"
                  >Check me out</label
                >
              </div>
              <button class="btn btn-outline-light rounded-50 mt-3 px-5">Envoyer</button>
            </form>
          </article>
          <div class="absolute-top-0 ">
            <kinesis-element class="col-md-10" :strength="10" type="depth">
            <img class="overflow-hidden col-12" src="image/envelope.png" />
          </kinesis-element>
          </div>
        </div>
      </div>
    </kinesis-container>
    <Footer/>
  </section>
</template>

<style scoped>
</style>

<script>
import Navlight from "../components/Layouts/Navlight";
import NavSectionLightUp from "../components/Layouts/NavSectionLightUp";
//import Timeline from '@/Components/Timeline'
import Footer from './Footer'

export default {
  components: {
    Navlight,
    NavSectionLightUp,
    //Timeline
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
