<template>
  <div class="col-md-12 p-0 col-sm-12 mx-auto">
    <!-- <div class="text-center">
            <input class="mx-auto" v-model="timelineState" value="false" type="checkbox" id="switch" /><label class="mx-auto switch" for="switch">Toggle</label>
        </div> -->
    <div class="container-fluid about-card m-0 shadow overflow-hidden row pt-3">
      <div class="timelineWrapper p-0 m-0 row" :style="timelineState ? filterStyle : null">
        <div class="moveTimeline col-6 row">
          

          <!-- The Timeline -->

          <ul class="timeline">
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <div class="flag">
                    <input type="text" class="" v-model="writeFocusEffect"/>
                  </div>
                  <span class="time-wrapper"
                    ><span class="time">2021 - ?</span></span
                  >
                </div>
                <p class="timeline-sub-title mt-2 mb-1">{{ hazardRoleValue }}</p>
                <div class="desc-timeline m-0">
                  Mon profil vous intéresse t-il ?
                </div>
              </div>
            </li>
            <!-- Item 1 -->
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <p class="flag">Collège de Paris</p>
                  <span class="time-wrapper"
                    ><span class="time">2020 - 2021</span></span
                  >
                </div>
                  <p class="timeline-sub-title mt-2 mb-1">Développeur Full-Stack</p>
                <div class="desc-timeline m-0">
                  Développement en équipe d'un CRM et d'un Extranet pour la gestion des élèves.
                </div>
                <small><i>NodeJs, VueJs, Docker, Gitlab, suite Adobe</i></small>
              </div>
            </li>

            <!-- Item 2 -->
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">CoAventure</span>
                  <span class="time-wrapper"
                    ><span class="time">2020</span></span
                  >
                </div>
                <p class="timeline-sub-title mt-2 mb-1">Développeur Wordpress</p>
                <div class="desc-timeline m-0">
                  Création d'un site de réservation d'activités de groupes.
                </div>
                <small>
                  <i>Thème enfant, modification et création de plugins, modification du back-end, Mcd, Uml, maquettage, design
                  </i>
                </small>
              </div>
            </li>

            <!-- Item 3 -->
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <span class="flag">Agence Akom</span>
                  <span class="time-wrapper"
                    ><span class="time">2019</span></span
                  >
                </div>
                <p class="timeline-sub-title mt-2 mb-1">Développeur Front-end</p>
                <div class="desc-timeline m-0">
                  Création de sites vitrines et marchands, du brief client à la mise en production.
                </div>
                <small><i>Wordpress, Suite Adobe, Php, Javascript, Git, SEO, Communication</i></small>
              </div>
            </li>
          </ul>
        </div>
        <div class="moveTimeline col-6">
          <ul class="timeline">
            <!-- Item 1 -->
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <p class="flag">Bac+3 Système et réseau</p>
                  <span class="time-wrapper"
                    ><span class="time">2020 - 2021</span></span
                  >
                </div>
                  <p class="timeline-sub-title mt-2 mb-1">Keyce Informatique</p>
                <div class="desc-timeline m-0">
                  Montée en compétence sur l'écosytème informatique d'une entreprise. Gestion de projet.
                </div>
                <small><i>Cybersécurité, ITIL, Ansible, Android</i></small>
              </div>
            </li>

            <!-- Item 2 -->
            <li>
              <div class="direction-l">
                <div class="flag-wrapper">
                  <span class="flag">Bac+2 Développeur Web/Mobile</span>
                  <span class="time-wrapper"
                    ><span class="time">2019</span></span
                  >
                </div>
                <p class="timeline-sub-title mt-2 mb-1">Adrar Formation</p>
                <div class="desc-timeline m-0">
                  Apprentissage de la partie back-end, conception et développement d'application.
                </div>
                <small>
                  <i>
                    Merise, MCD, UML, Php, Symfony, Git
                  </i>
                </small>
              </div>
            </li>

            <!-- Item 3 -->
            <li>
              <div class="direction-r">
                <div class="flag-wrapper">
                  <p class="flag">Bac+2 Développeur Front-End</p>
                  <span class="time-wrapper"
                    ><span class="time">2018</span></span
                  >
                </div>
                  <p class="timeline-sub-title mt-2 mb-1">Image Formation</p>
                <div class="desc-timeline m-0">
                  Prise en main de la partie front-end d'un site. Sensibilisation à l'accéssibilité, développement des compétences d'ui/ux, de design et veille technologique.
                </div>
                <small><i>Html, Css, Boostrap, Javascript, Accessibilité, SEO, responsive</i></small>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    timelineState: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      vartest: 50,
      filterStyle: {
        left: "-100%",
      },
      index: 0,
      role:[
        'Développeur',
        'Développeur Full-stack',
        'Développeur Back-end',
        'Développeur Front-end',
        'Développeur Wordpress',
        'Webdesigner',
      ],
      hazardRoleValue: '',
      writeFocusEffect: '',
    };
  },
  mounted(){
    this.hazardRole(),
    this.writeFocusEffectFunc()
  },
  methods: {
    hazardRole(){
      setInterval(() => {
          //this.hazardRoleValue = this.role[Math.floor(Math.random()*this.role.length)]
          
          if (this.index < this.role.length) {
            this.hazardRoleValue = this.role[this.index];
            this.index ++;
          }else{
            this.index = 0;
          }
      }, 750);
    },
    writeFocusEffectFunc(){
      setInterval(() => {
          //this.writeFocusEffect == '' ? '|' : '';
          if(this.writeFocusEffect == ''){
            this.writeFocusEffect = '|'
          }else if(this.writeFocusEffect == '|'){
            this.writeFocusEffect = ''
          }
      }, 500);
    }
  },
};
</script>
