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
    <v-snackbar
      v-model="snackbar.show"
      top
      :timeout="snackbar.timeout"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script>
import Form from './Form'
import Info from './Info'
import List from './List'
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Order',

  components: {
    Form,
    Info,
    List
  },

  computed: {
    ...mapGetters(["allClothes", "itemsInBasket", "totalPrice", "numberOrder"]),
    },

  data: () => ({
    snackbar: {
      show: false,
      text: 'Ваш заказ отправлен',
      timeout: 2000
    }
  }),

  methods: {
    ...mapActions(["buying"]),
    submitHandler(val) {
      this.snackbar.show = true
      const obj = {
        id: this.numberOrder,
        customer: val,
        items: this.itemsInBasket
      }
      this.buying(obj)
    }
  }
};
</script>

<style lang=""></style>
