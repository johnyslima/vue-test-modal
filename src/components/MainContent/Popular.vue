<template lang="">
  <v-container>
    <div>
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
      dialog: false,
    };
  },
  // computed: {
  //   allPosts() {
  //     return this.$store.getters.allPosts;
  //   },
  // },

  computed: mapGetters(["allClothes"]),
  methods: {
    ...mapActions(["fetchClothes"]),
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
    this.fetchClothes();
  },
};
</script>
<style lang=""></style>
