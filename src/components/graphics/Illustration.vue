<template>
    <section id="illustration">
      <div class="flatscape-phone-wrapper jsutify-content-center mt-5 col-12 mx-auto">
        <img
          src="image/portfolio/illustration/flat-scape/portrait/desert-alone.jpg"
          alt="Dessin numérique d'un homme perdue dans le desert"
          @click="openModal('image/portfolio/illustration/flat-scape/portrait/desert-alone.jpg')"
        />
        <img
          src="image/portfolio/illustration/flat-scape/portrait/purple-desert.jpg"
          alt="Dessin numérique de deux personnages admirant des étoiles filantes dans un desert extra-terrestre"
          @click="openModal('image/portfolio/illustration/flat-scape/portrait/purple-desert.jpg')"
        />
        <img
          src="image/portfolio/illustration/flat-scape/portrait/sky-cities-1.jpg"
          alt="Dessin numérique d'une ville sur un rocher flottant"
          @click="openModal('image/portfolio/illustration/flat-scape/portrait/sky-cities-1.jpg')"
        />
        <img
          src="image/portfolio/illustration/flat-scape/portrait/sunrise-beach.png"
          alt="Dessin numérique d'une plage terrestre"
           @click="openModal('image/portfolio/illustration/flat-scape/portrait/sunrise-beach.png')" 
        />
        <img
          src="image/portfolio/illustration/flat-scape/portrait/sunrise-mountain-3d.jpg"
          alt="Dessin numérique d'une montagne extra-terrestre."
          @click="openModal('image/portfolio/illustration/flat-scape/portrait/sunrise-mountain-3d.jpg')"
        />
      </div>

      <VsPopupPicture classContent="pictureModal" class="h-100" :active.sync="popupActivo2">
        <img
          :src="picturePath"
          alt="Dessin numérique d'une montagne extra-terrestre."
          class="h-100"
        />
      </VsPopupPicture>
    </section>
</template>

<style scoped>
</style>

<script>
  import VsPopupPicture from '@/components/vuesax/VsPopupPicture/VsPopupPicture'

export default {
  components: {
    VsPopupPicture
  },
  props: {
  },
  data() {
    return {
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
.vs-popup{
  height: 100%;
}
.vs-popup--header{
  display: none!important;
}

.vs-popup--background {
    background: rgba(0,0,0,.85)!important;
}

.con-vs-popup .vs-popup {
    width: fit-content!important;
    height: 90%;
}

.vs-popup--content {
    width: inherit!important;
    overflow: hidden!important;
    height: 100%;
}

.pictureModal{
  padding: 0!important;
  margin: 0!important;
}

.flatscape-phone-wrapper{
  text-align: center;
  width: 100%;
}

.flatscape-phone-wrapper img{
  display: inline-block;
  width: 16%;
  margin: 25px 2%;
}

@media only screen and (min-width: 1920px) {

  .flatscape-phone-wrapper{
    width: 1920px;
  }
}

@media only screen and (max-width: 1200px) {

  .flatscape-phone-wrapper img{
    display: inline-block;
    width: 20%;
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