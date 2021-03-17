export default {
  state: {
    items: [],
  },
  actions: {
    addItems(ctx, payload) {
      const {size, item} = payload
      let arr = [];
      if (localStorage.getItem("basket") !== null) {
        arr = JSON.parse(localStorage.basket);
      }
      const obj = arr.find((_item) => _item.id === item.id && _item.size === size)
      if (obj) {
        obj.count = obj.count + 1
      } else {
        arr.push({
          id: item.id,
          title: item.title,
          brand: item.brand,
          img: item.img,
          price: item.price,
          size: size,
          count: 1
        });
      }
      
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
