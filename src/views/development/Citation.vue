<template>
  <div>
    <section id="citation">
      <div >
        <header class="fixed-top">
          <NavDarkExternal />
        </header>
      </div>
      <div class="margin-top-page">
        
        <div class="container">
          <h1>Citation</h1>
          <p>
            <strong>Catalogue participatif</strong>, ce site offre aux internautes inscrit la possibilité d'enregistrer leurs citations préférées via un back-office. Un système de rôle permet à un administrateur de modérer le contenu.
          </p>
          <p>
            Citation est un site réalisé en <strong>PHP fonctionnel</strong>, c'est-à-dire sans framework, code externe ou Objets, <strong>seulement avec des fonctions</strong>, cela n'empêche pas les bonnes pratiques : j'ai suivi les <strong>standards PSR-4</strong> et la <strong>structure MVC</strong>.
          </p>
          <p>
            Nous sommes aujourd'hui <strong>inondé de librairie, framework, builder WYSIWYG et autres aides</strong>, personne ne peut nier leurs avantages, démocratisation du métier, gain de productivité et valeur ajoutée au code final (lisibilité, maintenabilité etc...), il n'en reste qu'entreprendre un tel projet permet d'<strong>apprendre énormément sur le flux de données</strong>, <strong>la gestion de la sécurité</strong>, <strong>l'optimisation du code</strong> et souligne aussi les limites tant organisationnelles qu’évolutive d’un tel choix technique !
          </p>
          <p>Et puis comment faisait on avant ?</p>
          <p>
            J'ai présenté ce projet durant mon oral de fin de formation Bac+2 Développeur PHP web / mobile au côté du site <router-link to="/developpement/coaventure" class="">
              CoAventure
            </router-link>.
          <div class="row">
            <div class="text-center mx-right" v-for="(icon, index) in this.citationIcone" :key="index">
              <li>
                <SkillItem
                  class="small-icon"
                  :iconName="icon"
                  :iconWrapperClass="'p-3 fit-content mx-right'"
                />
              </li>
            </div>
          </div>
          <div class="row">
            <a class="mx-2" href="http://www.citation.developpeur-metatidj.fr/public/">
              <button class="btn purple-btn rounded-50 mt-3 px-5">
                Visiter
              </button>
            </a>
            <a href="https://github.com/True-Slimen/quote">
              <button class="btn purple-btn rounded-50 mt-3 px-5">
                Inspecter le code
              </button>
            </a>
          </div>
          <div>
            <article class="mt-5">
              <div class="row">
                <article class="col-md-6 mb-3 mx-auto text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/citation/home.jpg"
                    alt="Page d'accueil Citation"
                    @click="openModal('image/portfolio/developpement/citation/home.jpg')"
                  />
                  <small><i>Haut de la page d'accueil</i></small>
                </article>
                <div class="col-md-6">
                  <p><strong>Ayant deux semaines de délai</strong> j'ai dû optimiser chaque étape. J'ai utilisé Bootstrap au maximum de mes connaissances, la plupart des éléments sont natifs, peu ou pas modifié, j'ai rajouté une légère couche de css pour obtenir un <strong>design me semblant sobre mais éléguant rapidement</strong>.</p>
                  <p>Je n'ai pas perdu de temps sur le logo en utilisant la typo à serif <a href="https://fonts.google.com/specimen/EB+Garamond?query=garamon">Eb Garamond</a> que nous retrouvons dans les titres avec des points de ponctuations.</p>
                  <p>Un fichier index.php fait office de routeur, il appel le controlleur selon les parametres d'url. Se dernier fait appel aux models afin d'envoyer ou récuperer les données, ensuite le controller fait appel à la vue au sein d'un <a href="https://www.php.net/manual/fr/function.ob-start.php">buffer</a> (qui permet d'enregistrer en cache sur le serveur de grande portion d'html), la vue est hydraté avec les informations puis le controller renvoie la vue au fichier racine.</p>
                  <p>Finalement il m'aura fallut une semaine pour arriver à la mise en production du site.</p>
                </div>
                
                <div class="col-md-6 mt-4">
                  <h5>Back office administrateur</h5>
                  <p>Le back office se compose d'un formulaire d'ajout, citation, auteur et checkbox afin de le publier sur la page d'accueil ou non.</p>
                  <p>L'administrateur est omniscient, il peut supprimer, publier et dépublier tout le contenu du site. Il peut jouer un jeu de fixtures pour remplir la base ou la purger.</p>
                </div>
                <article class="col-md-6 mb-3 mx-auto mt-4 text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/citation/back-office-admin.jpg"
                    alt="Back office admin Citation"
                    @click="openModal('image/portfolio/developpement/citation/back-office-admin.jpg')"
                  />
                  <small><i>Back office administrateur</i></small>
                </article>
                
                <article class="col-md-6 mb-3 mx-auto mt-4 text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/citation/back-office-user.jpg"
                    alt="Back office utilisateur Citation"
                    @click="openModal('image/portfolio/developpement/citation/back-office-user.jpg')"
                  />
                  <small><i>Back office utilisateur</i></small>
                </article>
                <div class="col-md-6 mt-4">
                  <h5>Back office utilisateur</h5>
                  <p>Pour l'utilisateur l'interface ne diffère presque pas, il n'y a pas les options de fixtures et seulement les citations de l'utilisateur sont visibles.</p>
                  <p>
                    Nous pouvons noter que l'utilisateur sur la capture d'écran a tenté d'<strong>exploiter la faille <a href="https://fr.wikipedia.org/wiki/Cross-site_scripting">XSS</a></strong> en vain. Le message est <strong>parfaitement restitué</strong> mais en base le code Javascript est <strong>bien échappé</strong>. Grâce aux fonctions natives <strong>trim()</strong>, <strong>stripslashes()</strong> et <strong>htmlspecialchars()</strong> un sérieux premier nettoyage est effectué. <br>
                    Désolé Morpheus.
                  </p>
                  
                </div>
              </div>
            </article>
            <div class="row my-5 justify-content-center">
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer w-100"
                  src="image/portfolio/developpement/citation/mcd-citation.jpg"
                  alt="Mcd Citation"
                  @click="openModal('image/portfolio/developpement/citation/mcd-citation.jpg')"
                />
                <small><i>MCD Citation</i></small>
              </div>
              <div class="col-md-4 px-2 mb-3 text-center">
                <img
                  class="cursor-pointer w-100"
                  src="image/portfolio/developpement/citation/dico-bdd.jpg"
                  alt="Dictionnaire de la base de données de Citation"
                  @click="openModal('image/portfolio/developpement/citation/dico-bdd.jpg')"
                />
                <small><i>Dictionnaire de la base de données</i></small>
              </div>
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
        sql: {
          name: 'sql',
          displayName: 'My Sql',
          alt: 'My Sql'
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
