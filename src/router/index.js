import Vue from "vue";
import Router from "vue-router";

import Home from '@/views/Home.vue';
import Graphics from '@/views/Graphics/Graphics.vue';
import Illustration from '@/views/Graphics/Illustration.vue';
import Parallax from '@/views/Graphics/Parallax.vue';
import Logos from '@/views/Graphics/Logo.vue';
// import Photography from '@/views/Graphics/Photography.vue';
import Development from '@/views/development/Development.vue';
import Coaventure from '@/views/development/Coaventure.vue';
import Citation from '@/views/development/Citation.vue';
import AlmaMater from '@/views/development/AlmaMater.vue';

import NotFound from '@/views/NotFound.vue';

Vue.use(Router);

export const router = new Router({
    //mode: "history",
    
    history: true,
    root: "/index.js",
    routes: [
      { name: 'Home',
        path: '/', 
        component: Home 
      },

      // Portfolio

        //Graphisme

      { 
        name: 'Graphics',
        path: '/graphisme', 
        component: Graphics 
      },
      { 
        name: 'Illustration',
        path: '/illustration', 
        component: Illustration
      },
      { 
        name: 'Parallax',
        path: '/parallax', 
        component: Parallax 
      },
      { 
        name: 'Logos',
        path: '/logo', 
        component: Logos 
      },
      // { 
      //   name: 'Photography',
      //   path: '/photographie', 
      //   component: Photography
      // },

        //Développement

      { 
        name: 'Development',
        path: '/developpement', 
        component: Development
      },
      { 
        name: 'Coaventure',
        path: '/developpement/coaventure', 
        component: Coaventure
      },
      { 
        name: 'Citation',
        path: '/developpement/citation', 
        component: Citation
      },
      { 
        name: 'Alma-Mater',
        path: '/developpement/alma-mater', 
        component: AlmaMater
      },
      {
        name: 'NotFound',
        path: '/404',
        component: NotFound
      },
      { path: '*', redirect: '/404' },
    ],
    scrollBehavior: function (to) {
      if (to.hash) {
        return {
          selector: to.hash
        }
      }
    },
});

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next('/notFound');
  } else {
    next();
  }
});