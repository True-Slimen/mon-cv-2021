<template>
  <div>
    <section id="logos">
      <div >
        <header class="fixed-top">
          <NavDarkExternal />
        </header>
      </div>
      <div class="padding-top">
        <div class="container mt-5">
          <h1>Logotypage</h1>
          <p class="mb-5 col-md-8 p-0">
            Concevoir et créer une identité est un travail passionnant. Définir les valeurs de l'entreprise pour les transmettres le plus fidèlement possible au public est un travail de longue haleine.
          </p>
          <article class="m-0 mt-4 mb-5 col-12 p-0 row">
            <h4 class="col-12 p-0">Progeny</h4>
            <div class="col-md-6">
              <img
                class="cursor-pointer w-100 p-0"
                src="image/portfolio/graphics/logo/progeny.png"
                alt="Logo progeny contour."
                @click="openModal('image/portfolio/graphics/logo/progeny.png')"
              />
              <img
                class="cursor-pointer w-100 p-0"
                src="image/portfolio/graphics/logo/progeny-pleins.png"
                alt="Logo progeny pleins."
                @click="openModal('image/portfolio/graphics/logo/progeny-pleins.png')"
              />
            </div>
            <div class="col-md-6 p-0">
              <p class="p-0">Au travers de Progeny j'ai tenté de laisser ressortir l'affection qui nous composent envers nos progénitures.</p>
              <p class="p-0">Un logo minimaliste qui repose sur la confiance et la bienveillance.</p>
              <div class="row">
                <div class="text-center mx-right" v-for="(icon, index) in this.progenyIcon" :key="index">
                  <li>
                    <SkillItem
                      class="small-icon"
                      :iconName="icon"
                      :iconWrapperClass="'p-3 fit-content mx-right'"
                    />
                  </li>
                </div>
              </div>
            </div>
          </article>
          <article class="m-0 mt-4 mb-5 col-12 p-0 row">
            <h4 class="col-12 p-0">Garde Le Smile</h4>
            <div class="col-md-6 p-0">
              <p class="p-0">Garde Le Smile est une application pensé par un étudiant en informatique. Son but est de proposer une appli rassemblant planning, objectif, gestion de budget et d'hygiène de vie. Un lieu unique où chaque jeune pourrait visualiser, améliorer et gérer son quotidien</p>
              <p class="p-0">Le créateur de l'application souhaitait un Logo dynamique et parlant aux utilisateurs cible.</p>
              <p class="p-0">J'ai tenté de transmettre sa demande de dynamisme au travers des couleurs et de créer un sentiment d'audace avec un sourire généreux et légèrement insolent.</p>
              <div class="row">
                <div class="text-center mx-right" v-for="(icon, index) in this.progenyIcon" :key="index">
                  <li>
                    <SkillItem
                      class="small-icon"
                      :iconName="icon"
                      :iconWrapperClass="'p-3 fit-content mx-right'"
                    />
                  </li>
                </div>
              </div>
            </div>
            <div class="col-md-6 row">
              <img
                class="cursor-pointer w-50 mx-auto height-content"
                src="image/portfolio/graphics/logo/logo-gls.png"
                alt="Logo progeny contour."
                @click="openModal('image/portfolio/graphics/logo/logo-gls.png')"
              />
            </div>
          </article>
      </div>
      </div>
      <VsPopupPicture classContent="pictureModal" class="" :active.sync="popupActivo2">
        <img
          :src="picturePath"
          alt="Dessin numérique d'une montagne extra-terrestre."
          class=""
        />
      </VsPopupPicture>
    </section>
    <Footer/>
  </div>
</template>

<style scoped>
</style>

<script>
import NavDarkExternal from "@/components/Layouts/NavDarkExternal";
import VsPopupPicture from '@/components/vuesax/VsPopupPicture/VsPopupPicture'
import SkillItem from '@/components/SkillItem'
import Footer from '@/views/Footer'

export default {
  components: {
    NavDarkExternal,
    VsPopupPicture,
    SkillItem,
    Footer
  },
  props: {},
  data() {
    return {
      progenyIcon: {
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
</style>
