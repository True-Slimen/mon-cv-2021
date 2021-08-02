<template>
    <nav class="navbar navLight navbar-expand-lg col-12">
        <div class="row col-12 mx-auto">
            <div class="col-1 row">
                <a class="navbar-brand mx-auto" href="#">
                    <img src="image/touche-blanc-PETIT.svg" alt="">
                </a>
            </div>
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon">
                    <img class="scroll-icon" src="image/icon/menu-white.png" alt="Ouvrir la navigation">
                </span>
            </button>
            <div class="collapse navbar-collapse container" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto col-md-6 col-sm-8">
                    <li class="nav-item active col-4 row">
                        <a class="mx-auto" href="#presentation">Accueil</a>
                    </li>
                    <li class="nav-item active col-4 row">
                        <a class="mx-auto" href="#my-journey">Mon parcours</a>
                    </li>
                    <!-- <li class="nav-item dropdown col-3 border-right-white row">
                        <a class="mx-auto dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Portfolio
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">Graphisme</a>
                        <a class="dropdown-item" href="#">Développement</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li> -->
                    <li class="nav-item col-4 row">
                        <a class="mx-auto" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item col-4 row">
                        <a class="mx-auto btn rounded-50 btn-outline-light px-3 py-0" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>

    export default {
    }
</script>
