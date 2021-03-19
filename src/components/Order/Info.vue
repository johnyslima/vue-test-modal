<template lang="">
  <div>
    <div class="banner-container">
      <div class="ibanner" data-id="security">
        <v-img
          src="https://a.lmcdn.ru/bs2/4/17/our-service__icon_security.svg"
          width="50"
          height="50"
          class="ibanner__icon"
        ></v-img>
        <div class="ibanner__title">Безопасность</div>
        <div class="ibanner__description">
          Безопасность платежей гарантируется использованием SSL протокола.
          <br />Данные вашей банковской карты надежно защищены при оплате
          онлайн.
        </div>
      </div>
      <div class="ibanner" data-id="delivery">
        <v-img
          src="https://a.lmcdn.ru/bs2/8/56/our-service__icon_delivery.svg"
          width="50"
          height="50"
          class="ibanner__icon"
        ></v-img>
        <div class="ibanner__title">
          Бесплатная бесконтактная доставка по всей России
        </div>
        <div class="ibanner__description">
          У вас всегда есть возможность получить бесплатную доставку товаров
          Lamoda. Бесконтактная доставка - предупредите нас, и мы оставим заказ
          у двери. Это безопасно!
        </div>
      </div>
      <div class="ibanner" data-id="trying">
        <v-img
          src="https://a.lmcdn.ru/bs2/2/40/our-service__icon_trying.svg"
          width="50"
          height="50"
          class="ibanner__icon"
        ></v-img>
        <div class="ibanner__title">Примерка</div>
        <div class="ibanner__description">
          Примеряйте и оплачивайте только подходящие товары. Вы можете примерить
          вещи перед покупкой и взять лишь те, которые вам подошли.
        </div>
      </div>
      <div class="ibanner" data-id="velocity">
        <v-img
          src="https://a.lmcdn.ru/bs2/1/57/our-service__icon_velocity.svg"
          width="50"
          height="50"
          class="ibanner__icon"
        ></v-img>
        <div class="ibanner__title">
          Доставка на следующий день
        </div>
        <div class="ibanner__description">
          Доставка на следующий день в 60 городах России. Доступно при
          использовании курьерского сервиса Lamoda Express и пунктов самовывоза.
        </div>
      </div>
    </div>
    <div class="banner-container"></div>
  </div>
</template>


<style lang="scss" scope>
.banner-container {
  padding: 5px 10px;
  font-size: 13px;

  .ibanner {
    margin-bottom: 20px;

    .ibanner__title {
      font-weight: bold;
      margin-top: 10px;
    }

    .ibanner__description {
      margin-top: 14px;
    }
  }
}
</style>
