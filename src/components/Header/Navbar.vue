<template lang="">

    <v-app-bar
      app
      height="40px"
      dark
      class="header-bar"
    >
    <v-container class="d-flex">
      <div class="d-flex align-center">
        <!-- <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        /> -->

        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
        <span>г. Уфа</span>
      </div>

      <v-spacer></v-spacer>

      <!-- <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn> -->
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
        <!-- <v-icon>mdi-open-in-new</v-icon> -->
      </v-btn>
      </div>
      </v-container>
    </v-app-bar>
</template>
<script>
export default {
  
}
</script>
<style lang="scss">
.header-bar {
  // background-color: #000 !important;
  // color: #fff !important
}
</style>