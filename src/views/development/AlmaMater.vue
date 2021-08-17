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
          <h1>Alma-Mater</h1>
          <p>
            Après l'obtention de mon Bac+2 Développeur d'application web / mobile PHP j'ai souhaité poursuivre mes études pour parfaire tant ma théorie que ma technique.
          </p>
          <p>
            Recherchant une alternance <strong>j'ai pu intégrer l'école <a href="#">Keyce Informatique</a></strong> et <strong>être recruté par le Groupe <a href="#">Collège de Paris</a></strong> afin de renforcer les équipes sur <strong>le développement d'un ERP/CRM en déploiement sur toutes les écoles du groupes</strong>.
          </p>
          <p>
            Et quelle étape ! Plus grand projet auquel j'ai pu participer, Alma Mater m'a permis de pratiquer tous les aspects théoriques vus durant mes apprentissages. Que ce soi sur le plan technique ou encore l'intégration d'un projet en cours de route, l'écosystème, les rapports humains... une mise en situation réelle des plus appréciés.
          </p>
          <p>
            A l'heure actuelle se sont plus de 30 écoles qui utilisent l'application et plusieurs milliers d'élèves qui peuplent nos bases de données.
          </p>
          <p><strong>Dans un souci de vie privée, de non-divulgation et d'informations propriétaire certaines parties des captures d'écran sont volontairement obfusqué.</strong></p>
          <div class="row">
            <div class="text-center mx-right" v-for="(icon, index) in this.almaMaterIcone" :key="index">
              <li>
                <SkillItem
                  class="small-icon"
                  :iconName="icon"
                  :iconWrapperClass="'p-3 fit-content mx-right'"
                />
              </li>
            </div>
          </div>
          <div>
            <article class="mt-5">
              <div class="row">
                <article class="col-md-6 mb-3 mx-auto text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/alma-mater/accueil.jpg"
                    alt="Page d'accueil Citation"
                    @click="openModal('image/portfolio/developpement/alma-mater/accueil.jpg')"
                  />
                  <small><i>Haut de la page d'accueil</i></small>
                </article>
                <div class="col-md-6">
                  <p>
                    L'application tourne sur un <strong>back-end NodeJs</strong> couplé à un <strong>front-end Vu Js</strong>, MySql et Min.io sont utilisés pour les fichiers et images. Le tout est dockerisé et répartit sur des serveurs dédiés.
                  </p>
                  <p>
                    Le <strong>versioning est assurée par un Git Lab</strong>, pull/merge request, tests, branches dédiées, gestion des tâches et <strong>"mises à jour à chaud"</strong> sont au rendez-vous.
                  </p>
                  <p>
                    L'équipe fondatrice a fait un <strong>véritable travail de fonds pour maximiser la qualité du code</strong>, EsLint et Prettier sont des outils puissants qui assurent <strong>une homogénéité dans le formatage et les pratiques du code</strong>.
                    Des <strong>"bonnes pratiques" sont mises en place</strong>, tel que l'utilisation de statuts et format de réponses formalisées.
                    Des <strong> conventions sont aussi définies</strong> pour les noms de fonctions, le nommage des fichiers, les id et class css et plus largement la façon de structurer le back-end.
                  </p>
                </div>
                
                <div class="col-md-6 mt-4">
                  <h5>Candidature</h5>
                  <p>
                    Peu après mes débuts, une tâche très intéressante fût de <strong>créer la nouvelle version des candidatures</strong>.
                  </p>
                  <p>
                    La volonté était de concevoir un <strong>système flexible</strong>, <strong>évolutif</strong> et dont le code serait <strong>réutilisable</strong>.
                  </p>
                  <p>
                    Pour se faire nous avons découpé les candidatures des différentes écoles en <strong>"bloc type"</strong>, ces blocs sont <strong>dépourvues de données et de structure</strong> propres mais possèdent de la logique conditionnelle et des boucles. <strong>Un JSON enregistré en base</strong> et propre à chaque école définit quel bloc afficher et de quelles données l'alimenter.
                  </p>
                  <p>
                    Petit à petit nous avons conçu une <strong>véritable bibliothèque de composants</strong> répondant à la plupart des situations, il est ainsi rapide de mettre en place de nouvelles candidatures. En réutilisant les mêmes composants nous savons que <strong>le code est conforme</strong>, <strong>la charte graphique respectée</strong> et pour autant le JSON nous permet de <strong>personnaliser à souhait le contenu</strong>.
                  </p>
                </div>
                <article class="col-md-6 mb-3 mx-auto mt-4 text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/alma-mater/top-candidacy.jpg"
                    alt="Candidature pour une école test - Alma Mater"
                    @click="openModal('image/portfolio/developpement/alma-mater/top-candidacy.jpg')"
                  />
                  <small><i>Candidature pour une école test - Alma Mater</i></small>
                </article>
                
                <article class="col-md-6 mb-3 mx-auto mt-4 text-center">
                  <img
                    class="cursor-pointer w-100"
                    src="image/portfolio/developpement/alma-mater/interview-equivalence.jpg"
                    alt="Back office utilisateur Citation"
                    @click="openModal('image/portfolio/developpement/alma-mater/interview-equivalence.jpg')"
                  />
                  <small><i>Tableau d'équivalence - Alma Mater</i></small>
                </article>
                <div class="col-md-6 mt-4">
                  <h5>Tableau généré</h5>
                  <p>
                    Récemment j'ai pu travailler en autonomie sur l'intégration de tableau d'équivalence. La problématique était que plusieurs tableaux, avec des nombres variables de colonne ou d'en-tête devait être codée pour plusieurs écoles.
                  </p>
                  <p>
                    En m'inspirant des candidatures <strong>j'ai proposé d'enregistrer le contenu des tableaux dans des JSON d'array</strong>. Ces <strong>JSON contiennent les titres</strong>, <strong>les sous-titres</strong>, <strong>les lignes et leur identifiant unique</strong> mais aussi des paramètres pour appliquer du style ou scinder/fusionner des cellules.
                  </p>
                  <p>
                    <strong>Une seule vue reçoit donc le JSON</strong> et via des boucles et de la logique conditionnelle s'occupe de générer le tableau final propre à chaque formation.
                  </p>
                  <p>
                    Les avantages sont nombreux, en plus de ceux cités pour les candidatures ici nous n'avons qu'un seul fichier front à maintenir, le back reste inchhangé et est commun aux système. Le changement dans un tableau se résume à l'ajout ou suppréssion d'une ligne dans le JSON.
                  </p>
                </div>
              </div>
            </article>
            <p class="mt-3">Vous l'aurez compris, <strong>au sein de Collège de Paris j'ai beaucoup appris et j'apprends encore</strong>. J'ai aussi <strong></strong> et <strong>de travailler avec une équipe passionnée</strong> où je peux apporter ma pierre à l'édifice de façon tangible</p>
            <p>L'histoire continue, jour après jour, ligne après ligne.</p>
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
    <Footer class="mt-5"/>
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
      almaMaterIcone: {
        tailwind: {
          name: 'tailwind',
          displayName: 'Tailwind',
          alt: 'Tailwind'
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
        vue: {
          name: 'vue',
          displayName: 'Vue',
          alt: 'Vue'
        },
        nodejs: {
          name: 'nodejs',
          displayName: 'Node js',
          alt: 'Node Js'
        },
        npm: {
          name: 'npm',
          displayName: 'Npm',
          alt: 'Npm'
        },
        git: {
          name: 'git',
          displayName: 'Git',
          alt: 'Git, Github & Gitlab'
        },
        docker: {
          name: 'docker',
          displayName: 'Docker',
          alt: 'Docker'
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
