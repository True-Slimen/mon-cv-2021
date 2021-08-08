<template>
  <div>
    <section id="illustrations">
      <div >
        <header class="fixed-top">
          <NavDarkExternal />
        </header>
      </div>
      <div class="margin-top-page">
        <div class="container">
          <h1>Développement</h1>
          <p>Activité coeur du métier, le Développement est un vaste domaine dont il est presque impossible d'atteindre le bout.</p>
          <p>J'ai commencé par la grande porte du web-design avant de découvrir la programmation en elle même.</p>
          <p>Ma première formation m'a incqulqué les bases avec l'élaboration de maquette, </p>

          <article class="mt-5">
            <h3 class="mt-5">
              La Voile De L'Air
            </h3>
            <div class="row">
              <div class="col-md-6">
                <p>
                  Ce site propose des activités de parapente. Je souhaitais travailler le côté front en offrant une landing page original cassant les codes des sites vitrines un peu trop "sage".
                </p>
                <div class="row">
                  <div class="text-center mx-right" v-for="(icon, index) in this.laVoileDeLairIcone" :key="index">
                    <li>
                      <SkillItem
                        :height="50"
                        :iconName="icon"
                        :iconWrapperClass="'p-3 fit-content mx-right'"
                      />
                    </li>
                  </div>
                </div>
                  <a href="https://true-slimen.github.io/voile-de-lair/">
                    <button class="btn purple-btn rounded-50 mt-3 px-5">
                      Visiter
                    </button>
                  </a>
              </div>
              <article class="col-md-6">
                <img
                  class="cursor-pointer w-100"
                  src="image/screen_vdl.jpg"
                  alt="Dessin numérique d'un homme perdue dans le desert"
                  @click="openModal('image/screen_vdl.jpg')"
                />
              </article>
            </div>
          </article>
          <article class="mt-5">
            <h3 class="mt-5">
              Citation ?!
            </h3>
            <div class="row">
              <article class="col-md-6">
                <img
                  class="cursor-pointer w-100"
                  src="image/screen_vdl.jpg"
                  alt="Dessin numérique d'un homme perdue dans le desert"
                  @click="openModal('image/screen_vdl.jpg')"
                />
              </article>
              <div class="col-md-6">
                <p>
                  Citation est un site rescencant des... citations. Il offre un back office une fois inscrit qui permet à l'utilisateur d'enregistrer ses citations préférés. Un système de rôle permet à un administrateur de modérer le contenu.
                </p>
                <p>
                  Citation est un site réalisé en PHP de manière procédural (à l'aide de fonction et sans objets) en respectant au maximum la structure PSR-4 et Model/View/Controller. Cela m'a permis de connaitre précisement les rouages d'un site web, les liaisons entre le front, le back et la base de données. 
                </p>
                <p>
                  J'ai présenté ce projet durant mon oral de fin de formation Bac+2 Développeur PHP web / mobile au côté du site <a href="#">CoAventure</a>.
                </p>
                <div class="row">
                  <div class="text-center mx-right" v-for="(icon, index) in this.laVoileDeLairIcone" :key="index">
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
      laVoileDeLairIcone: {
        boostrap: {
          name: 'bootstrap',
          displayName: 'Bootstrap',
          alt: 'Bootstrap'
        },
        html: {
          name: 'html',
          displayName: 'Html 5',
          alt: 'Html 5'
        },
        css: {
          name: 'css3',
          displayName: 'Css 3',
          alt: 'Css 3'
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


</style>
