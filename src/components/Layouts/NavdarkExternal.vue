<template>
  <nav class="navbar navDark navbar-expand-lg col-12">
    <div class="row col-12 mx-auto">
      <div class="col-1 row">
        <a class="navbar-brand mx-auto" href="#">
          <img src="image/touche-purple-PETIT.svg" alt="" />
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
            src="image/icon/menu-purple.png"
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
            <a class="mx-auto" href="#presentation">Accueil</a>
          </li>
          <li class="nav-item active row">
            <a class="mx-auto" href="#skills">Mes compétences</a>
          </li>
          <li class="nav-item active row">
            <a class="mx-auto" href="/#my-journey">Mon parcours</a>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle py-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Portfolio
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/graphisme" class="nav-link text-secondary">
                Graphisme
              </router-link>
              <router-link to="/developpement" class="nav-link text-secondary">
                Développement
              </router-link>
            </div>
          </li>
          <li class="nav-item row">
            <a class="mx-auto purple-btn btn-outline px-3 py-0"
              href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
