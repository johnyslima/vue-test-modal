<template lang="">

    <v-app-bar
      app
      height="40px"
      dark
      class="header-bar"
    >
    <v-container class="d-flex">
      <div class="d-flex align-center">
        <span>г. Уфа</span>
      </div>

      <v-spacer></v-spacer>
      <div><v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        large
        text>Бесплатная доставка с примеркой!</v-btn></div>
      <div>
        <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        large
        target="_blank"
        text
      >Важно: пункты выдачи заказов
      </v-btn></div>
      <div>
        <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        large
        target="_blank"
        text
      >
        <span class="mr-2">Нам 10 лет</span>
      </v-btn>
      </div>
      </v-container>
    </v-app-bar>
</template>
<script>
export default {
  name: 'Navbar',
}
</script>
<style lang="scss">
</style>