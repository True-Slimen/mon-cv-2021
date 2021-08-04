import Vue from "vue";
import Router from "vue-router";

import Home from '@/views/Home.vue';
import Graphics from '@/views/Graphics.vue';

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
    ]
});
