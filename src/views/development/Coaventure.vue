<template>
  <div>
    <section id="coaventure">
      <div >
        <header class="fixed-top">
          <NavDarkExternal />
        </header>
      </div>
      <div class="margin-top-page">
        
        <div class="container">
          <h1>Coaventure</h1>
          <p>
            CoAventure est une marketplace proposant à des prestataires d'activités de groupe <strong>à faible impact écologique</strong> de vendre des réservations.
          </p>
          <p>
            Réalisé durant le stage de la formation Développeur d'application PHP web / mobile avec <a href="https://celia-gretillat.com/">une seconde stagiaire</a>, le défi était de remplir le cahier des charges avec les deux mois disponibles.
          </p>
          <p>
            Nous avons opté pour une méthode itérative très proche de la méthode AGILE, avec réunion hebdomadaire pour présenter et valider les avancées et définir les priorités.
          </p>
          <div class="row">
            <div class="text-center mx-right" v-for="(icon, index) in this.coaventureIcone" :key="index">
              <li>
                <SkillItem
                  class="small-icon"
                  :iconName="icon"
                  :iconWrapperClass="'p-3 fit-content mx-right'"
                />
              </li>
            </div>
          </div>
          <a href="https://9b58paelgq.preview.infomaniak.website/">
            <button class="btn purple-btn rounded-50 mt-3 px-5">
              Visiter
            </button>
          </a>
          <div>
            <article class="mt-5">
              <div class="row">
                <article class="col-md-8 mb-3 mx-auto text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/coaventure/home.jpg"
                    alt="Page d'accueil CoAventure"
                    @click="openModal('image/portfolio/developpement/coaventure/home.jpg')"
                  />
                  <small><i>Haut de la page d'accueil</i></small>
                </article>
                <div class="col-12">
                  <p>
                    Au vu du délai nous sommes parties sur un stack <strong>Wordpress/WooCommerce</strong> avec création d'un <strong>thème enfant</strong> et utilisation de plugin de réservation.
                  </p>
                  <p>
                    Nous avons apporté beaucoup de modifications, tant à Wordpress (surchargeage du function.php, <strong>création de hook custom</strong>, <strong>modification du back-office</strong>) qu'aux plugins (modifications du code pour adapter le comportement, retrait des parties inutilisées, <strong>ajout de fonctionnalités personnalisé</strong> ...)
                  </p>
                  <p>
                    J'ai pu <strong>créer des plugins de toutes pièces</strong> ( afin de structurer de l'information côté front ou encore de rendre disponibles des <strong>shortcodes custom</strong> ), l'avantage est aussi au niveau de la lisibilité et maintenabilité, on évite de trop ajouter de code dans les fichiers Wordpress tout en étant moins soumis aux mises à jour qui suppriment le code de certains fichiers.
                  </p>
                </div>
              </div>
            </article>
            <div class="row my-5">
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer w-100"
                  src="image/portfolio/developpement/coaventure/home-bottom.jpg"
                  alt="Bas de la page d'accueil CoAventure"
                  @click="openModal('image/portfolio/developpement/coaventure/home-bottom.jpg')"
                />
                <small><i>Bas de la page accueil</i></small>
              </div>
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer w-100"
                  src="image/portfolio/developpement/coaventure/espace-client.jpg"
                  alt="Accueil de l'espace client CoAventure"
                  @click="openModal('image/portfolio/developpement/coaventure/espace-client.jpg')"
                />
                <small><i>Accueil de l'espace client</i></small>
              </div>
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer w-100"
                  src="image/portfolio/developpement/coaventure/aventure.jpg"
                  alt="Page des aventures de l'Hérault CoAventure"
                  @click="openModal('image/portfolio/developpement/coaventure/aventure.jpg')"
                />
                <small><i>Page des activités de l'Hérault</i></small>
              </div>
            </div>
            <div class="col-12 px-2 mb-3 text-center">
              <img
                class="cursor-pointer col-md-8"
                src="image/portfolio/developpement/coaventure/plugin-custom.jpg"
                alt="Bas de la page d'accueil CoAventure"
                @click="openModal('image/portfolio/developpement/coaventure/plugin-custom.jpg')"
              />
              <p><small><i>Plugin custom</i></small></p>
            </div>
          </div>
          <div class="row my-5 justify-content-center">
              <div class="col-md-1 col-3 px-2 mb-3 text-center">
                <img
                  class="w-100"
                  src="image/portfolio/developpement/coaventure/icon/ant-knight-1.svg"
                  alt="Bas de la page d'accueil CoAventure"
                />
              </div>
              <div class="col-md-1 col-3 px-2 mb-3 text-center">
                <img
                  class="w-100"
                  src="image/portfolio/developpement/coaventure/icon/pigeon-plorateur2.svg"
                  alt="Bas de la page d'accueil CoAventure"
                />
              </div>
              <div class="col-md-1 col-3 px-2 mb-3 text-center">
                <img
                  class="w-100"
                  src="image/portfolio/developpement/coaventure/icon/explo-verified-bleu.svg"
                  alt="Bas de la page d'accueil CoAventure"
                />
              </div>
            </div>
            <div class="row my-5 justify-content-around wireframe">
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer"
                  src="image/portfolio/developpement/coaventure/wireframe-desktop.jpg"
                  alt="Wireframe de la page d'accueil - format large"
                  @click="openModal('image/portfolio/developpement/coaventure/wireframe-desktop.jpg')"
                />
                <p><small><i>Wireframe de la page d'accueil - format large</i></small></p>
              </div>
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer"
                  src="image/portfolio/developpement/coaventure/wireframe-mobile.jpg"
                  alt="Wireframe de la page d'accueil - format mobile"
                  @click="openModal('image/portfolio/developpement/coaventure/wireframe-mobile.jpg')"
                />
                <p><small><i>Wireframe de la page d'accueil - format mobile</i></small></p>
              </div>
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
        javascript: {
          name: 'javascript',
          displayName: 'Javascript',
          alt: 'Javascript'
        },
        php: {
          name: 'php',
          displayName: 'Php',
          alt: 'Php'
        },
        sql: {
          name: 'sql',
          displayName: 'My Sql',
          alt: 'My Sql'
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
        photoshop: {
          name: 'photoshop',
          displayName: 'Photoshop',
          alt: 'Photoshop'
        },
        illustrator: {
          name: 'illustrator',
          displayName: 'Illustrator',
          alt: 'Illustrator'
        },
        xd: {
          name: 'xd',
          displayName: 'Xd',
          alt: 'Xd'
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
