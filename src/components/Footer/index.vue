<template lang="">
  <div class="mb-10">
    <v-divider></v-divider>
    <v-container class="mt-6">
      <v-row no-gutters>
        <v-col cols="12" sm="3">
          <v-card class="pa-2 footer__column">
            <div>
              <div class="footer__column-header">Помощь</div>
              <div class="footer__column-link">
                <a href="https://www.lamoda.ru/help/?from=footer"
                  >Центр поддержки Lamoda</a
                >
              </div>
              <div class="footer__column-link">
                <a
                  href="https://www.lamoda.ru/help/article/oformlenie-zakaza-ru/?from=footer"
                  >Как оформить заказ</a
                >
              </div>
              <div class="footer__column-link">
                <a
                  href="https://www.lamoda.ru/about/guides/?utm=footer&from=footer"
                  >Как выбрать размер</a
                >
              </div>
              <div class="footer__column-link">
                <a href="https://www.lamoda.ru/delivery/?from=footer"
                  >Условия доставки</a
                >
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2 footer__column">
            <div>
              <div class="footer__column-header">О нас</div>
              <div class="footer__column-link">
                <a href="https://www.lamoda.ru/blog/?from=footer"
                  >Fashion-блог Lamoda</a
                >
              </div>
              <div class="footer__column-link">
                <a href="https://www.lamoda.ru/giftcertificate/?from=footer"
                  >Подарочные сертификаты Lamoda</a
                >
              </div>
              <div class="footer__column-link">
                <a href="https://job.lamoda.ru/?from=footer">Вакансии</a>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3"
          ><v-card class="pa-2 footer__column">
            <div>
              <div class="footer__column-header">Способы оплаты</div>
              <div class="footer__column-link d-flex">
                <v-img
                  alt="masterCard"
                  class="shrink mr-2"
                  contain
                  src="https://a.lmcdn.ru/django/d/ru/21.03.18_1/i/global/footer__icon-mastercard.svg"
                  transition="scale-transition"
                  width="43"
                  height="28"
                >
                </v-img>
                <v-img
                  alt="visa"
                  class="shrink mr-2"
                  contain
                  src="https://a.lmcdn.ru/django/d/ru/21.03.18_1/i/global/footer__icon-visa.svg"
                  transition="scale-transition"
                  width="43"
                  height="28"
                >
                </v-img>
                <v-img
                  alt="mir"
                  class="shrink mr-2"
                  contain
                  src="https://a.lmcdn.ru/django/d/ru/21.03.18_1/i/global/footer__icon-mir.svg"
                  transition="scale-transition"
                  width="43"
                  height="28"
                >
                </v-img>
              </div>
              <div class="footer__column-link">
                Вы можете оплатить покупки наличными при получении, либо выбрать
                <a
                  href="https://www.lamoda.ru/help/article/kak-oplatit-zakaz-ru/"
                  style="text-decoration: underline"
                  >другой способ оплаты</a
                >
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="pa-2 footer__column">
            <div>
              <div class="footer__column-header">Для мобильных устройств</div>
              <a href="https://www.lamoda.ru/apps/?from=footer#iphone">
                <v-img
                  alt="appStore"
                  class="shrink mr-2 mb-2"
                  contain
                  src="https://a.lmcdn.ru/django/d/ru/21.03.18_1/i/global/footer__icon-appstore.svg"
                  transition="scale-transition"
                  width="85"
                  height="25"
                >
                </v-img
              ></a>
              <a href="https://www.lamoda.ru/apps/?from=footer#android">
                <v-img
                  alt="googlePlay"
                  class="shrink mr-2 mb-2"
                  contain
                  src="https://a.lmcdn.ru/django/d/ru/21.03.18_1/i/global/footer__icon-googleplay.svg"
                  transition="scale-transition"
                  width="85"
                  height="25"
                >
                </v-img>
              </a>

              <a href="https://www.lamoda.ru/apps/?from=footer#huawei">
                <v-img
                  alt="huaweiStore"
                  class="shrink mr-2 mb-2"
                  contain
                  src="https://a.lmcdn.ru/django/d/ru/21.03.18_1/i/global/footer__icon-huaweistore.svg"
                  transition="scale-transition"
                  width="85"
                  height="25"
                >
                </v-img>
              </a>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer__column {
  font-size: 12px;
  width: 200px;

  .footer__column-header {
    margin-bottom: 10px;
    font-weight: bold;
  }

  .footer__column-link {
    padding: 3px 0px;
    a {
      color: black;
      text-decoration: none;

      &:hover {
        color: #888;
      }
    }
  }
}
</style>
