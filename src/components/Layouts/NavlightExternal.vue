<template>
  <nav class="navbar navLight navbar-expand-lg col-12">
    <div class="row col-12 mx-auto">
      <div class="col-1 row">
        <a class="navbar-brand mx-auto" href="/">
          <img src="image/touche-blanc-PETIT.svg" alt="" />
        </a>
      </div>
      <button
        class="navbar-toggler ml-auto"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon">
          <img
            class="scroll-icon"
            src="image/icon/menu-white.png"
            alt="Ouvrir la navigation"
          />
        </span>
      </button>
      <div
        class="collapse navbar-collapse col-10 container"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav col-12 ml-auto">
          <li class="nav-item ml-auto active row">
            <router-link to="/#presentation" class="mx-auto">
              Accueil
            </router-link>
          </li>
          <li class="nav-item active row">
            <router-link to="/#skills" class="mx-auto">
              Mes compétences
            </router-link>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle py-0" href="/#portfolio" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Portfolio
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/graphisme" class="nav-link text-secondary">
                Graphisme
              </router-link>
              <router-link to="/illustration" class="nav-link nav-link-sub text-secondary">
                Illustrations
              </router-link>
              <router-link to="/parallax" class="nav-link nav-link-sub text-secondary">
                Parallax
              </router-link>
              <router-link to="/logo" class="nav-link nav-link-sub text-secondary">
                Logos
              </router-link>
              <router-link to="/developpement" class="nav-link text-secondary">
                Développement
              </router-link>
            </div>
          </li>
          <li class="nav-item active row">
            <router-link to="/#my-journey" class="mx-auto">
              Mon parcours
            </router-link>
          </li>
          <li class="nav-item row">
            <router-link to="/#contact" class="mx-auto">
              Contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
