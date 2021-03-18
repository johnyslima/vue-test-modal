<template lang="">
  <v-container>
    <div>
      <h2>Оформление заказа</h2>
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="8">
          <div class="mr-8">
            <Form @submit="submitHandler" />
            <h2 class="mt-2">Итого: {{ totalPrice.toLocaleString() }} ₽</h2>
            <List :items="itemsInBasket" />
          </div>
        </v-col>
        <v-col cols="6" md="4">
            <Info />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import Form from './Form'
import Info from './Info'
import List from './List'
import { mapGetters } from "vuex";
export default {
  name: 'Order',

  components: {
    Form,
    Info,
    List
  },

  computed: {
    ...mapGetters(["allClothes", "itemsInBasket", "totalPrice"]),
    },

  data: () => ({
    //
  }),

  methods: {
    submitHandler(val) {
      console.log(val)
    }
  }
};
</script>
<style lang=""></style>
