import { clothes } from '../../mock'
export default {
  state: {
    posts: [],
    clothes: [],
  },
  actions: {
    async fetchPosts(ctx, limit = 3) {
      let posts
      await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + limit)
      .then((response) => response.json())
      .then((json) => posts = json);

      ctx.commit('updatePosts', posts)
    },

    fetchClothes(ctx) {
      ctx.commit('updateClothes', clothes)
    },

    updateCountSize(ctx, id, size, count) {
      ctx.commit("updateCount", id,  size, count);
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },

    updateClothes(state, clothes) {
      state.clothes = clothes
    },

    // updateCountSize(state, id, size, count) {
    //   state.clothes
    // }
  },
  getters: {
    allPosts(state) {
      return state.posts
    },

    postsCount(state) {
      return state.posts.length
    },

    allClothes(state) {
      return state.clothes
    }
  },
}