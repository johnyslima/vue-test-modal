import VueRouter from 'vue-router'
import MainPage from '../pages/MainPage.vue'
import OrderPage from '../pages/Order.vue'

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainPage
    },
    {
      path: '/checkout/cart/',
      component: OrderPage
    }
  ]
})