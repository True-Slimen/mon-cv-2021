<template>
  <div>
    <section id="parallax">
      <div >
        <header class="fixed-top">
          <NavDarkExternal />
        </header>
      </div>
      <div class="margin-top-page">
        <div class="container">
          <article class="col-md-7 col-sm-12 mb-5">
            <h3 class="mt-5">
              Parallax
            </h3>
            <p>
              Les possibilités offertent par les parallaxs sont infinis.
            </p>
            <p>
              Avec des visuels fort et bien placés on donne de la profondeur au site tout en offrant une touche d'interactivité à l'utilisateur, le tout au service du contenu.
            </p>
            <div class="row">
              <div class="text-center mx-right" v-for="(icon, index) in this.illustrator" :key="index">
                <li>
                  <SkillItem
                    class="small-icon"
                    :iconName="icon"
                    :iconWrapperClass="'p-3 fit-content mx-right'"
                  />
                </li>
              </div>
            </div>
          </article>
        </div>
      </div>
      <Monolith/>
      <PurpleDesest class="mb-5"/>
    </section>
    <Footer/>
  </div>
</template>

<style scoped>
</style>

<script>
import NavDarkExternal from "@/components/Layouts/NavDarkExternal";
import SkillItem from '@/components/SkillItem'
import Monolith from '@/components/graphics/parallax/Monolith'
import PurpleDesest from '@/components/graphics/parallax/PurpleDesert'
// import LostDesert from '@/components/graphics/parallax/LostDesert'

import Footer from '@/views/Footer'

export default {
  components: {
    NavDarkExternal,
    SkillItem,
    Monolith,
    PurpleDesest,
    
    //LostDesert,
    Footer
  },
  props: {},
  data() {
    return {
      illustrator: {
        illustrator: {
          name: 'illustrator',
          displayName: 'Illustrator',
          alt: 'Illustrator'
        },
        photoshop: {
          name: 'photoshop',
          displayName: 'Photoshop',
          alt: 'Photoshop'
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

.monolithSection{
    height: 100vh;
  }

  .monolithWrap{
    height: 100%;
  }

  .monolithContainer{
    position: relative;
  }


.monolithImg{
    position: absolute;
  }

  .monolithImg img{
    height: 100%;
  }

  .shadowmonolith{
    top: 0;
  }

@keyframes moveMonolith {
    from {
      top : 0px
    }
  
    to {
      top: 20px
    }
  }

  .monolith{
    
    animation: moveMonolith 3s alternate infinite ease-in-out
    
  }

  @keyframes moveMediumMonolith {
    from {
      top : 15px
    }
  
    to {
      top: 0px
    }
  }

  .moveMediumMonolith{
    animation: moveMediumMonolith 2s alternate infinite ease-in-out
    
  }

  @keyframes moveLightMonolith {
    from {
      top : 10px
    }
  
    to {
      top: 0px
    }
  }

  .lightMonolith{
    animation: moveLightMonolith 1s alternate infinite ease-in-out
    
  }

  @keyframes moveVeryLightMonolith {
    from {
      top : 5px
    }
  
    to {
      top: 0px
    }
  }

  .veryLightMonolith{
    animation: moveVeryLightMonolith 0.5s alternate infinite ease-in-out
    
  }

  @media (min-width: 1520px){
    .container, .container-sm, .container-md, .container-lg, .container-xl {
    max-width: 1480px;
    }

  }


  @media (max-width: 768px){
    .monolithContainer{
      height: 50vh;
    }

    @keyframes moveMonolith {
      from {
        top : 0px
      }
    
      to {
        top: 10px
      }
    }
  
    @keyframes moveMediumMonolith {
      from {
        top : 7px
      }
    
      to {
        top: 0px
      }
    }
   
    @keyframes moveLightMonolith {
      from {
        top : 5px
      }
    
      to {
        top: 0px
      }
    }
  
    @keyframes moveVeryLightMonolith {
      from {
        top : 5px
      }
    
      to {
        top: 0px
      }
    }
  }
</style>