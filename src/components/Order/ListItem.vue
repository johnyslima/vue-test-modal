<template lang="">
  <div class="mt-6">
    <v-row no-gutters class="mb-8">
      <v-col cols="12" sm="6" md="6" class="d-flex">
        <div class="mr-6">
          <v-img height="115" width="80" :src="item.imgs[0]"></v-img>
        </div>
        <div class="list-item-title">
          <div class="mb-3">
            {{ item.title }}<b> {{ item.brand }}</b>
          </div>
          <div class="mb-12">
            Размер: <b> {{ item.size }}</b>
          </div>
          <div class="red-text">Осталось в наличии: {{ countStock }}</div>
        </div>
      </v-col>
      <v-col cols="6" md="4" class="column-count">
        <div class="mr-8">
          <v-btn
            elevation="2"
            icon
            x-small
            @click="minusCount"
            :disabled="item.count === 1"
            ><v-icon dark>
              mdi-minus
            </v-icon></v-btn
          >
          {{ item.count }} шт.
          <v-btn
            elevation="2"
            icon
            x-small
            @click="plusCount"
            :disabled="item.count === countStock"
          >
            <v-icon dark>
              mdi-plus
            </v-icon></v-btn
          >
        </div>
        <div class="mt-16">
          <v-btn
            icon
            color="blue"
            x-small
            @click="remove"
            :disabled="item.count === countStock"
          >
            <v-icon dark> mdi-cart-off </v-icon>Удалить</v-btn
          >
        </div>
      </v-col>
      <v-col cols="6" md="2" class="list-item-price">
        <div class="mr-8">{{ item.price.toLocaleString() }} ₽</div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'ListItem',
  props: ["item"],
  computed: {
    ...mapGetters(["counstItemsInBasket", "allClothes", "itemsInBasket"]),

    countStock() {
      const idCloth = this.allClothes.find((i) => i.id === this.item.id);
      const idClothSize = idCloth.sizes.find((s) => s.size === this.item.size);
      return idClothSize.count;
    },
  },

  methods: {
    ...mapActions(["addItems", "changeCount", "removeFromBasket"]),

    minusCount: function() {
      this.changeCount({
        id: this.item.id,
        size: this.item.size,
        type: "minus",
      });
    },

    plusCount() {
      this.changeCount({
        id: this.item.id,
        size: this.item.size,
        type: "plus",
      });
    },

    remove() {
      this.removeFromBasket({
        id: this.item.id,
        size: this.item.size,
      });
    },
  },
};
</script>
<style lang="scss">
.list-item-price {
  font-size: 16px;
  font-weight: 600;
  text-align: right;
}
.list-item-title {
  font-size: 12px;
}

.red-text {
  color: red;
}
</style>
