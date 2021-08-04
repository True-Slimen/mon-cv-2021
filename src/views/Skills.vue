<template>
    <section id="skills">
            <div class="cha-header-clip" aria-hidden="true">
              <header class="cha-header">
                <NavDark/>
              </header>
              <div class="cha-header-section">
                <NavSectionDarkTwins
                  :linkUp="'#'"
                  :linkDown="'#portfolio'"
                />
              </div>
            </div>
        <div class="container padding-top">
            <div class="mt-5">
              <h2>Compétences</h2>
             <p class="col-md-8 pl-0">Outre l'inséparable trio que forment <strong>Html</strong>, <strong>Css</strong> et <strong>Javascript</strong> je travail actuellement sur un stack full js avec Node et Vue en particulier. Cela ne veut pas dire que je ne connais pas le Php, avec qui j'ai réalisé en grande partie ma formation Concepteur logiciel.
             </p>
             <div>
               <ul class="row col-md-5 mx-auto text-center">
                 <div v-for="(icon, index) in this.iconBasicSkillArray" :key="index" class="mx-auto">
                   <li>
                    <SkillItem
                      :iconName="icon"
                    />
                  </li>
                 </div>
               </ul>
             </div>
              <div class="row smooth-card">
                <ul class="col-4 list-group text-center">
                  <h5>Je travail avec au quotidient</h5>
                  <div v-for="(icon, index) in this.iconDailySkillArray" :key="index">
                    <li>
                      <SkillItem
                        :height="50"
                        :iconName="icon"
                      />
                    </li>
                  </div>
                </ul>
                <ul class="col-4 list-group text-center">
                  <h5>J'ai eu à faire</h5>
                  <div v-for="(icon, index) in this.iconOftenSkillArray" :key="index">
                    <li>
                      <SkillItem
                        :iconName="icon"
                      />
                    </li>
                  </div>
                </ul>
                <ul class="col-4 list-group text-center">
                  <h5>J'aime particulièrement</h5>
                  <div v-for="(icon, index) in this.iconPassionSkillArray" :key="index">
                    <li>
                      <SkillItem
                        :iconName="icon"
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    
</style>

<script>
    import NavDark from '@/components/Layouts/Navdark'
    import NavSectionDarkTwins from '@/components/Layouts/NavSectionDarkTwins'
    import SkillItem from '@/components/SkillItem'

    export default {
        components: {
            NavDark,
            NavSectionDarkTwins,
            SkillItem
        },
        props: {
        },
        data() {
            return {
              iconBasicSkillArray: {
                boostrap: {
                  name: 'bootstrap',
                  displayName: 'Bootstrap',
                  alt: 'Bootstrap'
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
              iconDailySkillArray: {
                nodejs: {
                  name: 'nodejs',
                  displayName: 'Node js',
                  alt: 'Node Js'
                },
                git: {
                  name: 'git',
                  displayName: 'Git',
                  alt: 'Git, Github & Gitlab'
                },
                vue: {
                  name: 'vue',
                  displayName: 'Vue Js',
                  alt: 'Vue js'
                },
                docker: {
                  name: 'docker',
                  displayName: 'Docker',
                  alt: 'Docker'
                },
                sql: {
                  name: 'sql',
                  displayName: 'My Sql',
                  alt: 'My Sql'
                },
              },
              iconOftenSkillArray: {
                php: {
                  name: 'php',
                  displayName: 'Php',
                  alt: 'Php'
                },
                symfony: {
                  name: 'symfony',
                  displayName: 'Symfony',
                  alt: 'Symfony'
                },
                laravel: {
                  name: 'laravel',
                  displayName: 'Laravel',
                  alt: 'Laravel'
                },
                wordpress: {
                  name: 'wordpress',
                  displayName: 'Wordpress',
                  alt: 'Wordpress'
                },
                prestashop: {
                  name: 'prestashop',
                  displayName: 'Prestashop',
                  alt: 'Prestashop'
                },
              },
              iconPassionSkillArray: {
                blender: {
                  name: 'blender',
                  displayName: 'Blender',
                  alt: 'Blender'
                },
                photoshop: {
                  name: 'photoshop',
                  displayName: 'Photoshop',
                  alt: 'Photoshop'
                },
                illustrator: {
                  name: 'illustrator',
                  displayName: 'Illustrator',
                  alt: 'Illustrator'
                },
                xd: {
                  name: 'xd',
                  displayName: 'Xd',
                  alt: 'Xd'
                },
                
              },
              
            }
        },
        methods:{
            displayExperience(){
                let switchButton = document.getElementsByClassName('switch-btn');
                console.log(switchButton);
                switchButton.forEach(element => {
                    element.classList.toggle("switch-outline-btn");
                    element.classList.toggle("switch-full-btn");
                });

                if(this.timelineState == true){
                    this.timelineState = false;
                }else if(this.timelineState == false){
                    this.timelineState = true;
                }
            }
        }

    }

</script>
