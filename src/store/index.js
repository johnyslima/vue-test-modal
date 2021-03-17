import Vue from 'vue'
import Vuex from 'vuex'
import post from './modules/posts'
import basket from './modules/basket'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    post,
    basket
  }
})