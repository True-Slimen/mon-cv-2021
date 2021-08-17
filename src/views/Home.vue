<template>
  <div>
    <section id="presentation">
      <div class="cha-header-clip">
          <header class="cha-header">
            <Navlight/>
          </header>
          <div class="cha-header-section">
            <NavSectionLightDown
              :linkDown="'#skills'"
            />
          </div>
      </div>
      <kinesis-container class="h-100">
        <div class="container padding-top">
            <div class="row pt-5">
              <article class="z-index-100 white-text col-md-7 col-sm-12 mt-5">
                  <h1 class="mb-3">À la recherche d'un Développeur ?</h1>
                  <p>Me voici ! Quelque peu numérisé, mais pas minimisé !</p>
                  <p>Fervent concepteur logiciel, adepte de design et stratège en base de données, rare sont les limites à ma curiosité.</p>
                  <p>Côderons-nous un bout de chemin ensemble ?</p>
                  <a href="#portfolio">
                    <button class="btn btn-outline-light rounded-50 mt-3 px-5">
                      Portfolio
                    </button>
                  </a>
              </article>
            </div>
            <div class="absolute-top-0">
                <kinesis-element :strength="10" type="depth">
                <img class="" src="image/3d-ui-2.png" />
              </kinesis-element>
              <div class="absolute-top-0">
                <kinesis-element :strength="20" type="depth">
                <img class="" src="image/3d-ui-1.png" />
              </kinesis-element>
              </div>
              
              </div>
            <img src="image/me-4k-smile-no-bg-cropped.png" class="autoportrait" alt="Avatar en 3d de Slimen">
        </div>
      </kinesis-container>
    </section>
    <Skills/>
    <Portfolio/>
    <MyJourney/>
    <Contact/>
    <Footer/>
  </div>

</template>

<style scoped>
    
</style>

<script>
  import Navlight from '@/components/Layouts/Navlight'
  import NavSectionLightDown from '@/components/Layouts/NavSectionLightDown'
  import MyJourney from '@/views/MyJourney.vue'
  import Skills from '@/views/Skills.vue'
  import Portfolio from '@/views/Portfolio'
  import Contact from '@/views/Contact'
  import Footer from './Footer'

  export default {
    components: {
      Navlight,
      NavSectionLightDown,
      Skills,
      MyJourney,
      Portfolio,
      Contact,
      Footer
    },
    data() {
      return {
        vartest: 50,
        zizi: ""
      }
    },
    mounted(){
    },
    methods:{

    }

  }

</script>
