import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import VueKinesis from 'vue-kinesis';
import '../public/css/newTimeline.scss';
import axios from 'axios'
// require('./assets/css/custom.css');

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'

Vue.prototype.$http = axios

Vue.use(Vuesax)
Vue.use(VueKinesis);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
