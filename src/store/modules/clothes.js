import { clothes } from '../../mock'
import { fromStorage } from '../../helpers'
export default {
  state: {
    clothes: [],
  },

  actions: {
    fetchClothes(ctx) {
      let arrOrders = fromStorage("order")
      let boughtItems = {}
      const arrClothes = [...clothes]

      arrOrders.forEach((order) => {
        order.items.forEach((item) => {
          boughtItems = {
            ...boughtItems, 
            [item.id]: {
              [item.size]: item.count
            }
          }
        })
      })

      arrOrders.length > 0 && arrClothes.forEach((cloth) => {
        if (boughtItems[cloth.id]) {
          cloth.sizes.forEach((s) => {
            if (boughtItems[cloth.id][s.size]) {
              s.count = s.count - boughtItems[cloth.id][s.size]
            }
          })
        }
        
      })
      
      ctx.commit('updateClothes', arrClothes)
    },

    updateCountSize(ctx, payload) {
      const {id, size} = payload
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
    },
  },
}