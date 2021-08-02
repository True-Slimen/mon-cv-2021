<template>
    <section id="about">
        <div class="cha-header-clip" aria-hidden="true">
            <header class="cha-header">
                <NavDark/>
            </header>
        </div>
        <div class="container padding-top">
            <div class="row col-12 justify-content-center">
                <a class="border-purple rounded-50 scroll-icon-wrapper up-icon" href="#">
                    <img class="scroll-icon" src="image/icon/up-arrow-small-purple.png" alt="naviguer vers la section de présentation">
                </a>
            </div>
            <div class="row">
                <article class="col-md-4 col-sm-12 mt-5">
                    <h2 class="mb-3">Mon parcours</h2>
                    <p>Me voici ! Quelque peu numérisié, mais pas minimisé !</p>
                    <p>Fervent concepteur logiciel, adepte de design et stratège en base de données, rare sont le slimites à ma curiosité.</p>
                    <p>Coderons-nous un bout de chemin ensemble ?</p>
                    <button class="btn btn-outline-light rounded-50 mt-3 px-5">Portfolio</button>
                </article>
                    
                    <Timeline/>
            </div>
            <div class="row scroll-icon-row col-12 justify-content-center">
                <a class="border-purple rounded-50 scroll-icon-wrapper" href="#portfolio">
                    <img class="scroll-icon" src="image/icon/down-arrow-small-purple.png" alt="naviguer vers la section de présentation">
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    
</style>

<script>
    import NavDark from '@/components/Layouts/Navdark'
    import Timeline from '@/components/Timeline'

    export default {
        components: {
            NavDark,
            Timeline
        },
        props: {
        },
        data() {
            return {

            }
        },
        methods:{
            test(){
                alert("win win win")
            }
        }

    }

</script>
