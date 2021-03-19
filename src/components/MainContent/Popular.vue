<template lang="">
  <v-container>
    <div>
      <v-sheet class="mx-auto" elevation="0" max-width="100%" height="300px">
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
              height="260"
              :img="c.imgs[0]"
              width="180"
              @click="showModal(c)"
            >
            <div class="product_info">
              <div class="product_price">{{ c.price.toLocaleString() }} ₽</div>
              <div class="product_title_brand">{{ c.brand }} <span class="product_title">/ {{ c.title }} </span></div>
              </div>
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


  computed: mapGetters(["allClothes"]),
  methods: {
    ...mapActions(["fetchClothes"]),

    showModal(val) {
      this.$refs.modal.item = val;
      this.$refs.modal.show = true;
    },
  },

  async mounted() {
    this.fetchClothes();
  }
};
</script>

<style lang="scss" scope>
.v-sheet.v-card {
  border-radius: 0px !important;
}

.product_info {
  background-color: #fff;
  width: 100%;
  padding: 5px 7px;
  font-size: 11px;
  position: absolute;
  bottom: -20px;

  .product_price {
    font-weight: bold;
  }

  .product_title_brand {
    font-size: 13px;

    .product_title{
      color: #888
    }
  }
}
</style>
