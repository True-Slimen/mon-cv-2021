<template>
  <section id="my-journey">
    <div class="cha-header-clip" aria-hidden="true">
      <header class="cha-header">
        <NavDark />
      </header>
    </div>
    <div class="container padding-top">
      <div class="row col-12 justify-content-center">
        <a class="border-purple rounded-50 scroll-icon-wrapper up-icon" href="#portfolio">
          <img
            class="scroll-icon"
            src="image/icon/up-arrow-small-purple.png"
            alt="naviguer vers la section de portfolio"
          />
        </a>
      </div>
      <div class="row">
        <div class="text-center justify-content-center mt-4 mb-3 col-12 row">
          <!-- <input class="mx-auto" v-model="timelineState" value="false" type="checkbox" id="switch" /><label class="mx-auto switch" for="switch">Toggle</label> -->
          <button
            @click="displayExperience()"
            class=" btn col-4 col-md-2 switch-btn-left switch-btn switch-full-btn"
          >
            Expérience pro
          </button>
          <button
            @click="displayExperience()"
            class=" btn col-4 col-md-2 switch-btn-right switch-btn switch-outline-btn"
          >
            Etudes
          </button>
        </div>
        <Timeline :timelineState="timelineState" />
      </div>
      <div class="row scroll-icon-row col-12 justify-content-center">
        <a class="border-purple rounded-50 scroll-icon-wrapper" href="#contact">
          <img
            class="scroll-icon"
            src="image/icon/down-arrow-small-purple.png"
            alt="naviguer vers la section de Contact"
          />
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>

<script>
import NavDark from "@/components/Layouts/Navdark";
import Timeline from "@/components/Timeline";

export default {
  components: {
    NavDark,
    Timeline,
  },
  props: {},
  data() {
    return {
      timelineState: false,
    };
  },
  methods: {
    displayExperience() {
      let switchButton = document.getElementsByClassName("switch-btn");
      console.log(switchButton);
      switchButton.forEach((element) => {
        element.classList.toggle("switch-outline-btn");
        element.classList.toggle("switch-full-btn");
      });

      if (this.timelineState == true) {
        this.timelineState = false;
      } else if (this.timelineState == false) {
        this.timelineState = true;
      }
    },
  },
};
</script>
