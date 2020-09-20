import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import VueRouter from 'vue-router'
//import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Buefy,
  // {
  //   defaultIconPack: 'mdi'
  // }
)

new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})