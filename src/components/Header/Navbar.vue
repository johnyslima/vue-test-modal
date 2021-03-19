<template lang="">
  <v-app-bar app height="40px" dark class="header-bar">
    <v-container class="d-flex">
      <div class="d-flex align-center">
        <span>г. Уфа</span>
      </div>

      <v-spacer></v-spacer>
      <div class="navbar_btn">
        <v-btn
          href="https://www.lamoda.ru/lp/safe_delivery/"
          target="_blank"
          large
          text
          >
          <v-icon dark color="white" class="mr-3">mdi-car</v-icon>Бесплатная доставка с примеркой!</v-btn
        >
      </div>
      <div class="navbar_btn">
        <v-btn
          href="https://www.lamoda.ru/lp/pvz_temp/"
          large
          target="_blank"
          text
          >
          <v-icon dark color="white" class="mr-3">mdi-information-outline</v-icon>Важно: пункты выдачи заказов
        </v-btn>
      </div>
      <div class="navbar_btn btn_orange">
        <v-btn
          href="https://www.lamoda.ru/lp/la10/"
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
  name: "Navbar",
};
</script>

<style lang="scss">
.navbar_btn {
  a {
    font-size: 12px !important;
    font-weight: 100;
    height: 40px !important;
    border-radius: 0px;

    &:hover {
      background-color: #2796FF;
    }
  }
}

.btn_orange {
  background-color: #f93c00;
}
</style>
