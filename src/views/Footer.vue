<template>
  <section id="footer">
    <footer class="container">
      <div class="row">
        <div class="col-md-4">
          <h5>One Page</h5>
          <ul class="footer-nav col-12 mb-0">
            <li class="footer-nav-item  active row">
              <small><a class="" href="#presentation">Accueil</a></small>
            </li>
            <li class="footer-nav-item active row">
              <small><a class="" href="#skills">Mes compétences</a></small>
            </li>
            <li class="footer-nav-item row">
              <small><a class="" href="#portfolio">Portfolio</a></small>
            </li>
            <li class="footer-nav-item active row">
              <small><a class="" href="#my-journey">Mon parcours</a></small>
            </li>
            <li class="footer-nav-item row">
              <small><a class="" href="#contact">Contact</a></small>
            </li>
          </ul>
        </div>

        <div class="justify-content-center footer-hr col-12">
          <hr>
        </div>

        <div class="col-md-4 portfolio-footer">
          <h5>Portfolio</h5>
          <h6 class="mt-3">Graphisme</h6>
          <ul class="footer-nav col-12">
            <li class="footer-nav-item  active row">
              <router-link to="/illustration" class="p-0">
                <small class="white-text">Illustration</small>
              </router-link>
            </li>
            <li class="footer-nav-item  active row">
              <router-link to="/parallax" class="p-0">
                <small>Parallax</small>
              </router-link>
            </li>
            <li class="footer-nav-item active row">
              <router-link to="/logo" class="p-0">
                <small class="white-text">Logo</small>
              </router-link>
            </li>
          </ul>
          <h6 class="mt-3">Développement</h6>
          <ul class="footer-nav col-12">
            <li class="footer-nav-item active row">
              <router-link to="/developpement" class="p-0">
                <small class="white-text">Développement</small>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="justify-content-center footer-hr col-12">
          <hr>
        </div>

        <div class="col-md-4 row footer-icon-wrapper">
          <kinesis-container class="col-12 height-content footer-icon">
          <p class="p-0 m-0 height-content">Visiter mon Git ?
             <kinesis-element :strength="15" type="depth">
              <a href="https://github.com/True-Slimen">
                <img class="h-10 mx-auto" src="image/icon/skills/v2/git-white.png" alt="Lien vers le github de Slimen Metatidj" />
              </a>
            </kinesis-element>
          </p>
           
          </kinesis-container>
          
          <kinesis-container class="col-12 footer-icon">
            <p class="p-0 m-0 height-content">Me follow sur insta ?
              <kinesis-element :strength="15" type="depth" class="">
                <a href="https://www.instagram.com/slmnmetatidj/">
                  <img class="h-10 mx-auto" src="image/icon/skills/v2/insta-white.png" alt="Lien vers la page instagram de Slimen Metatidj" />
                </a>
              </kinesis-element>
            </p>
            
          </kinesis-container>
        </div>
      </div>
      <div class="text-center mt-3">
        <small>Powered by Vue Js - Slimen Metatidj 2021</small>
      </div>
    </footer>
  </section>
</template>

<style scoped>
</style>

<script>

export default {
  components: {
    },
  props: {},
  data() {
    return {};
  },
  methods: {
    test() {
      alert("win win win");
    },
  },
};
</script>
