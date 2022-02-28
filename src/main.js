import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Vuesax from 'vuesax'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(Vuesax, {
  // options here
})

// components
import BaseCarousel from './components/BaseCarousel.vue'

import vuetify from './plugins/vuetify'


Vue.use('BaseCarousel',BaseCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
