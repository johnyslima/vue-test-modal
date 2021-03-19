<template lang="">
  <div class="mt-8">
    <div v-if="itemsInBasket.length === 0">Ваша корзина пуста</div>
    <div v-else>
      <h2>Посылка № {{ numberOrder }}</h2>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="6" class="column-title">
          <div class="mr-8">
            {{ _affixToItem }}
          </div>
        </v-col>
        <v-col cols="6" md="4" class="column-header column-count">
          <div class="mr-8">
            Количество
          </div>
        </v-col>
        <v-col cols="6" md="2" class="column-header column-price">
          <div class="mr-8">
            Цена
          </div>
        </v-col>
      </v-row>
      <v-divider class="mt-4"></v-divider>
      <div v-for="item in items" :key="item.id">
        <ListItem :item="item" />
      </div>
    </div>
  </div>
</template>
<script>
import ListItem from "./ListItem";
import { mapGetters } from "vuex";
import { affixToItem } from '../../helpers'
export default {
  props: ["items"],
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters([
      "counstItemsInBasket",
      "totalPrice",
      "numberOrder",
      "itemsInBasket",
    ]),
    _affixToItem() {
      return affixToItem(this.counstItemsInBasket)
    },
  },
};
</script>
<style lang="scss">
.column-header {
  font-size: 13px;
  color: #888;
}

.column-title {
  text-align: left;
  font-size: 18px;
  font-weight: 400;
}

.column-count {
  text-align: center;
}

.column-price {
  text-align: right;
}
</style>
