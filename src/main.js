import Vue from 'vue'
import App from './App.vue'
import Vuerouter from "@/router"


Vue.config.productionTip = false

new Vue({
  Vuerouter,
  render: h => h(App),
}).$mount('#app')
