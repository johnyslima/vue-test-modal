export default {
  state: {
    items: [],
  },
  actions: {
    addItems(ctx, item) {
      let arr = [];
      if (localStorage.getItem("basket") !== null) {
        arr = JSON.parse(localStorage.basket);
      }
      arr.push(item);
      localStorage.basket = JSON.stringify(arr);
      ctx.commit("updateBasket", item);
    },

    loadItemsFromStorage(ctx) {
      ctx.commit("loadItemsFromStorage", JSON.parse(localStorage.basket));
    },
  },
  mutations: {
    updateBasket(state, item) {
      state.items.push(item);
    },

    loadItemsFromStorage(state, items) {
      state.items = items
    }
  },
  getters: {
    itemsInBasket(state) {
      return state.items;
    },

    counstItemsInBasket(state) {
      return state.items.length;
    },
  },
};
