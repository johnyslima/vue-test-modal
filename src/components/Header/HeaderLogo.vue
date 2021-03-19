<template lang="">
  <v-main>
    <div
      class="logo-line-wrapper d-flex justify-space-between mt-4 align-center"
    >
      <nav role="menubar" class="d-header-genders">
        <v-tabs>
          <v-tab>Женщинам</v-tab>
        </v-tabs>
      </nav>

      <a class="header__logo" href="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://a.lmcdn.ru/django/d/ru/21.03.11/i/global/header__logo.svg"
          transition="scale-transition"
          width="160"
          height="32"
        >
        </v-img>
      </a>

      <div class="d-flex buy-basket">
        <a href="/checkout/cart/" role="link" class="d-flex buy-basket-link">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://a.lmcdn.ru/static/21.03.11/img/307d4ad2de375b510f76764183b286e2.svg"
            transition="scale-transition"
            width="24"
            height="24"
          >
            <!---->
          </v-img>
          <span v-if="this.counstItemsInBasket === 0">Корзина</span>
          <span v-else>{{ _affixToItem }}</span>
        </a>
      </div>
    </div>
  </v-main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { affixToItem } from '../../helpers'
export default {
  data() {
    return {
      countItems: null,
    };
  },
  mounted() {
    this.loadItemsFromStorage();
  },

  computed: {
    ...mapGetters(["itemsInBasket", "counstItemsInBasket"]),
    _affixToItem() {
      return affixToItem(this.counstItemsInBasket)
    },
    },

  methods: {
    ...mapActions(["addItems", "loadItemsFromStorage"]),
  }
};
</script>
<style lang="scss">
.d-header-genders {
  .v-tab {
    font-size: 13px !important;
    padding: 0px 10px;
  }

  .v-tab--active {
    color: black !important;
  }

  .v-tabs-slider-wrapper {
    color: black;
  }
}
.logo-line-wrapper {
  min-height: 32px;
}

.buy-basket {
  font-size: 16px;

  &-link {
    color: black !important;
    text-decoration: none;
  }

  .sign-in-btn {
    margin-right: 12px;
    color: #888;
  }
}

.header-logo {
  margin-top: 32px;
}
</style>
