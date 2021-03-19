import Vue from 'vue'
import App from './App.vue'
import vuetify from './vuetify'
import VueRouter from 'vue-router'
import router from './router'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
