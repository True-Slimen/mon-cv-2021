import Vue from "vue";
import Router from "vue-router";

import Home from '@/views/Home.vue';
import Graphics from '@/views/Graphics/Graphics.vue';
import Illustration from '@/views/Graphics/Illustration.vue';
// import Parallax from '@/views/Graphics/Parallax.vue';
// import Logos from '@/views/Graphics/Logos.vue';
// import Photography from '@/views/Graphics/Photography.vue';
// import Development from '@/views/Graphics/Development.vue';

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes: [
      { name: 'Home',
        path: '/', 
        component: Home 
      },
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
      // { 
      //   name: 'Parallax',
      //   path: '/parallax', 
      //   component: Parallax 
      // },
      // { 
      //   name: 'Logos',
      //   path: '/logo', 
      //   component: Logos 
      // },
      // { 
      //   name: 'Photography',
      //   path: '/photographie', 
      //   component: Photography
      // },
      // { 
      //   name: 'Development',
      //   path: '/developpement', 
      //   component: Development
      // },
    ]
});
