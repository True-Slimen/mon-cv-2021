<template>
  <div>
    <section id="notFound">
      <div class="cha-header-clip">
        <header class="cha-header">
          <NavlightExternal/>
        </header>
      </div>
      <div class="container padding-top">
        <h1 class="white-text">Page 404</h1>
        <h3 class="white-text">Le chemin indiqué ne mène nulle part...</h3>
        <router-link
          to="/"
          class="btn btn-outline-light rounded-50 mt-3 px-5"
        >
          Retrouver votre route ?
        </router-link>
      </div>
    </section>
    <Footer/>
  </div>
</template>

<style scoped>
    
</style>

<script>
  import NavlightExternal from '@/components/Layouts/NavlightExternal'
  import Footer from './Footer'

  export default {
    components: {
      NavlightExternal,
      Footer
    },
    data() {
      return {
      }
    },
    mounted(){
    },
    methods:{

    }

  }

</script>
