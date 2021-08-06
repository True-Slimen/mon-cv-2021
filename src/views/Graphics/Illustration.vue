<template>
  <div>
    <section id="illustrations">
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
      <div class="margin-top-page">
        <div class="container">
          <h3 class="mt-5">
            Illustration de style "Flatscape"
          </h3>
          <p>
            De grands aplats de couleurs vives, onirique ou plus terre à terre, j'ai tenté de concevoir des visuels simple où pourtant l'oeil se perd.
          </p>
          <p class="mb-0">À télécharger sans modération.</p>
          <div class="row">
            <div class="text-center mx-right" v-for="(icon, index) in this.illustrator" :key="index">
              <li>
                <SkillItem
                  :height="50"
                  :iconName="icon"
                  :iconWrapperClass="'p-3 fit-content mx-right'"
                />
              </li>
            </div>
          </div>
        </div>
        <article class="flatscape-phone-wrapper jsutify-content-center mt-4 mb-5 col-12 mx-auto">
          <img
            class="cursor-pointer"
            src="image/portfolio/illustration/flat-scape/portrait/desert-alone.jpg"
            alt="Dessin numérique d'un homme perdue dans le desert"
            @click="openModal('image/portfolio/illustration/flat-scape/portrait/desert-alone.jpg')"
          />
          <img
            class="cursor-pointer"
            src="image/portfolio/illustration/flat-scape/portrait/purple-desert.jpg"
            alt="Dessin numérique de deux personnages admirant des étoiles filantes dans un desert extra-terrestre"
            @click="openModal('image/portfolio/illustration/flat-scape/portrait/purple-desert.jpg')"
          />
          <img
            class="cursor-pointer"
            src="image/portfolio/illustration/flat-scape/portrait/sky-cities-1.jpg"
            alt="Dessin numérique d'une ville sur un rocher flottant"
            @click="openModal('image/portfolio/illustration/flat-scape/portrait/sky-cities-1.jpg')"
          />

          <img
            class="cursor-pointer"
            src="image/portfolio/illustration/flat-scape/portrait/sunrise-beach.jpg"
            alt="Dessin numérique d'une montagne extra-terrestre."
            @click="openModal('image/portfolio/illustration/flat-scape/portrait/sunrise-beach.jpg')"
          />
          <img
            class="cursor-pointer"
            src="image/portfolio/illustration/flat-scape/portrait/sunrise-mountain-3d.jpg"
            alt="Dessin numérique d'une montagne extra-terrestre."
            @click="openModal('image/portfolio/illustration/flat-scape/portrait/sunrise-mountain-3d.jpg')"
          />
        </article>
        <article class="flatscape-landscape-wrapper jsutify-content-center mt-4 mb-5 col-12 mx-auto">
          <img
            class="cursor-pointer"
            src="image/portfolio/illustration/flat-scape/paysage/red-xeno-desert.jpg"
            alt="Dessin numérique d'une valée extra-terrestre."
            @click="openModal('image/portfolio/illustration/flat-scape/paysage/red-xeno-desert.jpg')"
          />
        </article>
        <article class="mt-4 mb-5 w-100">
          <img
            class="cursor-pointer w-100"
            src="image/portfolio/illustration/flat-scape/paysage/skyscrapper.png"
            alt="Dessin numérique d'une valée extra-terrestre."
            @click="openModal('image/portfolio/illustration/flat-scape/paysage/skyscrapper.png')"
          />
        </article>
      </div>
      <VsPopupPicture classContent="pictureModal" class="" :active.sync="popupActivo2">
        <img
          :src="picturePath"
          alt="Dessin numérique d'une montagne extra-terrestre."
          class=""
        />
      </VsPopupPicture>
    </section>
  </div>
</template>

<style scoped>
</style>

<script>
import NavDarkExternal from "@/components/Layouts/NavDarkExternal";
import NavSectionDarkDown from "@/components/Layouts/NavSectionDarkDown";
import VsPopupPicture from '@/components/vuesax/VsPopupPicture/VsPopupPicture'
import SkillItem from '@/components/SkillItem'

export default {
  components: {
    NavDarkExternal,
    NavSectionDarkDown,
    VsPopupPicture,
    SkillItem
  },
  props: {},
  data() {
    return {
      illustrator: {
        illustrator: {
          name: 'illustrator',
          displayName: 'Illustrator',
          alt: 'Illustrator'
        },
        photoshop: {
          name: 'photoshop',
          displayName: 'Photoshop',
          alt: 'Photoshop'
        },
      },
      popupActivo2: false,
      picturePath: '',
    };
  },
  methods: {
    openModal(path){
      this.popupActivo2 = true;
      this.picturePath = path;
    }
  },
};
</script>
<style>
NavDarkExternal{
  position: fixed;
}
navbar{
  background-color: #e6e6e6!important;
}

.vs-popup img{
  max-height: 80vh;
    max-width: 80vw;
}
.vs-popup--header{
  display: none!important;
}

.vs-popup--background {
    background: rgba(0,0,0,.85)!important;
}

.con-vs-popup .vs-popup {
    /* height: unset; */
}

.vs-popup {
    -webkit-transition: all .2s;
    transition: all .2s;
    z-index: 100;
    width: unset!important;
    margin: 0px!important;
    max-width: unset!important;
    max-height: unset!important;
    border-radius: 0px!important;
    box-shadow: unset!important;
    background: transparent;
    -webkit-animation: rebound .3s;
    animation: rebound .3s;
}

.vs-popup--content {
    overflow: unset!important;
}

.pictureModal{
  padding: 0!important;
  margin: 0!important;
}

.flatscape-phone-wrapper{
  text-align: center;
  width: 100%;
}

.flatscape-landscape-wrapper{
  text-align: center;
  width: 100%;
}

.flatscape-landscape-wrapper img{
  text-align: center;
  width: 1000px;

}

.flatscape-phone-wrapper img{
  display: inline-block;
  width: 16%;
  margin: 0px 2% 25px 2%;
}

@media only screen and (min-width: 1920px) {

  .flatscape-phone-wrapper{
    width: 1920px;
  }

  .flatscape-landscape-wrapper img{
    display: inline-block;
    width: 1240px;
    margin: 25px 2%;
  }
}

@media only screen and (max-width: 1200px) {

  .flatscape-phone-wrapper img{
    display: inline-block;
    width: 20%;
    margin: 25px 2%;
  }

  .flatscape-landscape-wrapper img{
    display: inline-block;
    width: 80%;
    margin: 25px 2%;
  }
}

@media only screen and (max-width: 992px) {

  .flatscape-phone-wrapper img{
    display: inline-block;
    width: 25%;
    margin: 25px 2%;
  }
}

@media only screen and (max-width: 768px) {

  .flatscape-phone-wrapper img{
    display: inline-block;
    width: 80%;
    margin: 25px auto;
  }
}
</style>
