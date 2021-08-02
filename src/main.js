import Vue from 'vue'
import App from './App.vue'
import VueKinesis from 'vue-kinesis'
import '../public/css/newTimeline.scss'
// require('./assets/css/custom.css');

Vue.use(VueKinesis)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
