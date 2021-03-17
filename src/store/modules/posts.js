import { clothes } from '../../mock'
export default {
  state: {
    clothes: [],
  },
  actions: {

    fetchClothes(ctx) {
      ctx.commit('updateClothes', clothes)
    },

    updateCountSize(ctx, payload) {
      const {id, size} = payload
      console.log(payload)
      const arrClothes = [...ctx.state.clothes]
      const obj = arrClothes.find((item) => item.id === id)
      const objSize = obj.sizes.find((s) => s.size === size)
      objSize.count = objSize.count - 1

      ctx.commit("updateClothes", arrClothes);
    }
  },
  mutations: {
    updateClothes(state, clothes) {
      state.clothes = clothes
    },
  },
  getters: {
    allClothes(state) {
      return state.clothes
    }
  },
}