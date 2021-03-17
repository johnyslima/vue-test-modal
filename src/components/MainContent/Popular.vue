<template lang="">
  <v-container>
    <div>
      <!-- <div v-for="post in allPosts" :key="post.id">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
      </div> -->
      <v-sheet class="mx-auto" elevation="0" max-width="100%">
        <v-slide-group
          v-model="dialog"
          class=""
          active-class="success"
          prev-icon="mdi-arrow-left-drop-circle"
          next-icon="mdi-arrow-right-drop-circle"
          show-arrows
        >
          <v-slide-item v-for="c in allClothes" :key="c.id" v-slot="{ active }">
            <v-card
              :color="active ? undefined : 'grey lighten-1'"
              class="ma-4"
              height="250"
              :img="c.img"
              width="180"
              @click="showModal(c)"
            >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-sheet>
    </div>

    <!-- <v-menu>
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        v-on="on"
      >
        Click me
      </v-btn>
    </template>

    <v-list>
      <v-list-item @click="method">
        <v-list-item-title>Option 1</v-list-item-title>
      </v-list-item>

      <v-list-item disabled>
        <v-list-item-title>Option 2</v-list-item-title>
      </v-list-item>

      <v-list-item @click="method">
        <v-list-item-title>Option 3</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu> -->
  <Modal ref="modal" :dialog="dialog" />
  </v-container>
</template>
<script>
import Modal from "./Modal";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Popular",
  components: {
    Modal,
  },

  data() {
    return {
      posts: [],
      dialog: false,
    };
  },
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   },
  // },

  computed: mapGetters(["allPosts", "postsCount", "allClothes"]),
  methods: {
    ...mapActions(["fetchPosts", "fetchClothes"]),
    qwe(val) {
      console.log(val);
      this.dialog = true;
    },

    showModal(val) {
      console.log(val)
      this.$refs.modal.item = val;
      this.$refs.modal.show = true;
    },
  },

  async mounted() {
    this.fetchPosts();
    this.fetchClothes();
  },
};
</script>
<style lang=""></style>
