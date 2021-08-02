<template>
    <div class="col-md-8 p-0 col-sm-12 mx-auto timeline">
        <!-- <div class="text-center">
            <input class="mx-auto" v-model="timelineState" value="false" type="checkbox" id="switch" /><label class="mx-auto switch" for="switch">Toggle</label>
        </div> -->
        <div class="container-fluid timelineCard shadow overflow-hidden row pt-3">
            <div class="timelineWrapper" :style="timelineState ? filterStyle : null">
                <div class="moveTimeline">
                
                <div class="row">
                    <div id="timeline">
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2021</p>
                            </div>
                        </div>
                        <div class="row timeline-movement">
                            <div class="timeline-badge center-right">
                            
                            </div>
                            <div class="offset-sm-6 col-sm-6  timeline-item">
                                <div class="row">
                                    <div class="offset-sm-1 col-sm-11">
                                        <div class="timeline-panel debits  anim animate  fadeInRight">
                                            <ul class="timeline-panel-ul">
                                                <div class="righting-wrap">
                                                    <li><a href="#" class="importo">Keyce Informatique</a></li>
                                                    <li><strong class="causale">Bachelor Système et réseau</strong> </li>
                                                    <li><span class="causale">Montée en compétence sur l'écosytème informatique d'une entreprise. Gestion de projet.</span> </li>
                                                    <li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Cybersécurité, ITIL, Ansible, Android</small></p> </li>
                                                </div>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>             
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2020</p>
                            </div>
                        </div>
                        <div class="row timeline-movement">
                            <div class="timeline-badge center-left">
                                
                            </div>
                            <div class="col-sm-6  timeline-item">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="timeline-panel credits  anim animate  fadeInLeft">
                                            <ul class="timeline-panel-ul">
                                                <div class="righting-wrap">
                                                    <li><a href="#" class="importo">Adrar Formation</a></li>
                                                    <li><strong class="causale" >Bac +2 Concepteur logiciel</strong> </li>
                                                    <li><span class="causale">Apprentissage de la partie back-end, conception et développement d'application.</span> </li>
                                                    <!-- <li><span class="causale">Participer à un projet dès ses débuts. Être force de propositions.</span> </li> -->
                                                    <li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Merise, MCD, UML, Php, Symfony, Git</small></p> </li>
                                                </div>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2019</p>
                            </div>
                        </div>
                        <div class="row timeline-movement">
                            <div class="timeline-badge center-middle">
                            
                            </div>
                            <div class="offset-sm-6 col-sm-6  timeline-item">
                                <div class="row">
                                    <div class="offset-sm-1 col-sm-11">
                                        <div class="timeline-panel burnit  anim animate  fadeInRight">
                                            <ul class="timeline-panel-ul">
                                                <div class="righting-wrap">
                                                    <li><a href="#" class="importo">Image Formation</a></li>
                                                    <li><strong class="causale">Bac +2 Webdesigner Développeur Front-End</strong> </li>
                                                    <li><span class="causale">Prise en main de la partie front-end d'un site. Sensibilisation à l'accéssibilité, développement des compétences d'ui/ux, de design et veille technologique.</span> </li>
                                                    <!-- <li><span class="causale">J'ai découvert l'effervescence d'une agence de communication !</span> </li> -->
                                                    <li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Html, Css, Boostrap, Javascript, Accessibilité</small></p> </li>
                                                </div>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2018</p>
                            </div>
                        </div>                       
                    </div>
                </div>
                
            </div>
            <div class="moveTimeline col-6">
                <h5 class="text-center">Études</h5>
                <div class="row">
                    <div id="timeline">
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2021</p>
                            </div>
                        </div>
                        <div class="row timeline-movement">
                            <div class="timeline-badge center-right">
                            
                            </div>
                            <div class="offset-sm-6 col-sm-6  timeline-item">
                                <div class="row">
                                    <div class="offset-sm-1 col-sm-11">
                                        <div class="timeline-panel debits  anim animate  fadeInRight">
                                            <ul class="timeline-panel-ul">
                                                <div class="righting-wrap">
                                                    <li><a href="#" class="importo">Collège de Paris</a></li>
                                                    <li><strong class="causale">Développeur</strong> </li>
                                                    <li><span class="causale">Développement en équipe d'un CRM et d'un Extranet pour la gestion des élèves.</span> </li>
                                                    <li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>NodeJs, VueJs, Docker, Gitlab, suite Adobe</small></p> </li>
                                                </div>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row timeline-movement">
                            <div class="timeline-badge center-left">
                                
                            </div>
                            <div class="col-sm-6  timeline-item">
                                <div class="row">
                                    <div class="col-sm-11">
                                        <div class="timeline-panel credits  anim animate  fadeInLeft">
                                            <ul class="timeline-panel-ul">
                                                <div class="righting-wrap">
                                                    <li><a href="#" class="importo">CoAventure</a></li>
                                                    <li><strong class="causale" >Développeur</strong> </li>
                                                    <li><span class="causale">Création d'un site de réservation d'activités de groupes.</span> </li>
                                                    <!-- <li><span class="causale">Participer à un projet dès ses débuts. Être force de propositions.</span> </li> -->
                                                    <li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Wordpress, Suite Adobe, Php, Js, Jquery, SQL, Git</small></p> </li>
                                                </div>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>             
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2020</p>
                            </div>
                        </div>
                        <div class="row timeline-movement">
                            <div class="timeline-badge center-middle">
                            
                            </div>
                            <div class="offset-sm-6 col-sm-6  timeline-item">
                                <div class="row">
                                    <div class="offset-sm-1 col-sm-11">
                                        <div class="timeline-panel burnit  anim animate  fadeInRight">
                                            <ul class="timeline-panel-ul">
                                                <div class="righting-wrap">
                                                    <li><a href="#" class="importo">Agence Akom</a></li>
                                                    <li><strong class="causale">Développeur Front-End</strong> </li>
                                                    <li><span class="causale">Maquettage, développement, brief client. </span> </li>
                                                    <!-- <li><span class="causale">J'ai découvert l'effervescence d'une agence de communication !</span> </li> -->
                                                    <li><p><small class="text-muted"><i class="glyphicon glyphicon-time"></i>Wordpress, Suite Adobe, Php, Git</small></p> </li>
                                                </div>
                                                <div class="clear"></div>
                                            </ul>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        
                        <div class="row timeline-movement timeline-movement-top">
                            <div class="timeline-badge timeline-future-movement">
                                    <p>2019</p>
                            </div>
                        </div>                       
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
        components: {
        },
        props: {
          timelineState:{
            type: Boolean,
            default: false
          }
        },
        data() {
            return {
                vartest: 50,
                filterStyle: {
                    left: "-100%"
                },
            }
        },
        methods:{
        }

    }

</script>
