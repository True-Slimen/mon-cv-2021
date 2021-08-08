<template>
    <section id="illustration">
      <div class="margin-60-bottom">
        <div class="container">
          <h3 class="mt-5">
            Logo
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
        <article class="mx-auto">
          <img
            class="cursor-pointer"
            src="image/portfolio/graphics/logo/progeny.jpg"
            alt="Dessin numérique d'un homme perdue dans le desert"
            @click="openModal('image/portfolio/illustration/flat-scape/portrait/desert-alone.jpg')"
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
</template>

<style scoped>
</style>

<script>
  import VsPopupPicture from '@/components/vuesax/VsPopupPicture/VsPopupPicture'
  import SkillItem from '@/components/SkillItem'

export default {
  components: {
    VsPopupPicture,
    SkillItem
  },
  props: {
  },
  data() {
    return {
      illustrator: {
        illustrator: {
          name: 'illustrator',
          displayName: 'Illustrator',
          alt: 'Illustrator'
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