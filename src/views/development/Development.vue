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

          <div class="row justify-content-between">
            <article class="col-md-3 col-sm-6 col-12">
              <h3 class="text-center mt-5 mb-3">CoAventure</h3>
              <div class="img-card-wrapper mb-5">
                <router-link to="/developpement/coaventure">
                  <img
                    class="img-card"
                    src="image/portfolio/developpement/coaventure/home.jpg"
                    alt="Page d'accueil CoAventure"
                  />
                </router-link>
              </div>
            </article>
            <article class="col-md-3 col-sm-6 col-12">
              <h3 class="text-center mt-5 mb-3">C!tation ?</h3>
              <div class="img-card-wrapper">
                <router-link to="/developpement/citation">
                  <img
                    class="img-card"
                    src="image/portfolio/developpement/citation/home.jpg"
                    alt="Page d'accueil Citation"
                  />
                </router-link>
              </div>
            </article>
            <article class="col-md-3 col-sm-6 col-12">
              <h3 class="text-center mt-5 mb-3">Alma Mater</h3>
              <div class="img-card-wrapper">
                <router-link to="/developpement/alma-mater">
                  <img
                    class="img-card"
                    src="image/portfolio/developpement/alma-mater/cdp-thumbnail.jpg"
                    alt="Logo Collège de Paris"
                  />
                </router-link>
              </div>
            </article>
            <article class="col-md-3 col-sm-6 col-12">
              <h3 class="text-center mt-5 mb-3">Site Cv</h3>
              <div class="img-card-wrapper">
                <router-link to="/developpement/alma-mater">
                  <img
                    class="img-card"
                    src="image/portfolio/developpement/alma-mater/cdp-thumbnail.jpg"
                    alt="Logo Collège de Paris"
                  />
                </router-link>
              </div>
            </article>
          </div>
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
    <Footer
      class="mt-5"
    />
  </div>
</template>

<style scoped>
</style>

<script>
import NavDarkExternal from "@/components/Layouts/NavDarkExternal";
import VsPopupPicture from '@/components/vuesax/VsPopupPicture/VsPopupPicture'
import Footer from '@/views/Footer'

export default {
  components: {
    NavDarkExternal,
    VsPopupPicture,
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
      citationIcone: {
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
        php: {
          name: 'php',
          displayName: 'Php',
          alt: 'Php'
        },
      },
      coaventureIcone: {
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
        php: {
          name: 'php',
          displayName: 'Php',
          alt: 'Php'
        },
        wordpress: {
          name: 'wordpress',
          displayName: 'Wordpress',
          alt: 'Wordpress'
        },
        divi: {
          name: 'divi',
          displayName: 'Divi Builder',
          alt: 'Divi Builder'
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

.wireframe img{
  max-height: 250px;
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
