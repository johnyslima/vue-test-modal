<template>
  <div class="text-center" v-if="show">
    <v-dialog v-model="show" width="754" height="660">
      <v-card>
        <div class="d-flex">
          <div>
            <v-img height="590" width="400" :src="item.img"></v-img>
          </div>
          <div class="ma-5 mt-8 product-title">
            <h1 class="product-title-wrapper">
              <a :href="item.src" class="product-title__brand-name">{{
                item.brand
              }}</a>
              <span class="product-title__model-name">{{ item.title }}</span>
            </h1>

            <div>
              <span
                aria-label="Итоговая цена"
                class="product-title__model-price"
                style="white-space: nowrap;"
                >{{ item.price.toLocaleString() }} ₽</span
              >
            </div>

            <div class="btns mb-8">
              <v-btn class="product__cart-add-button" elevation="7" large @click="addToBasket(item)">
                Добавить в корзину
              </v-btn>
            </div>

            <div class="ii-product__description">
              <div class="heading_s">О товаре</div>
              <div class="ii-product__description-text">
                <div class="ii-product__attributes" v-for="desc in item.description" :key="desc.id">
                <div class="ii-product__attribute">
                  <span class="ii-product__attribute-label">
                    {{desc.title}}
                  </span>
                  <span class="ii-product__attribute-value">
                    {{desc.value}}
                  </span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <v-card-title class="headline grey lighten-2">
          {{item.title}}
        </v-card-title> -->

        <!-- <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text> -->

        <!-- <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <button @click="closeModal">wqeqfv</button>
          <v-btn color="primary" text @click="closeModal">
            I accept
          </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["dialog"],
  data() {
    return {
      show: false,
      item: null,
    };
  },

  mounted() {
  },

  methods: {
    ...mapActions(['addItems']),
    closeModal: function() {
      this.show = false;
    },
    addToBasket(item) {
      this.addItems(item)
    }
  },
};
</script>
<style lang="scss">
.product-title {
  width: 100%;
  .product-title-wrapper {
    margin: 0 0 12px;
    font-weight: 200;
    line-height: 32px;

    .product-title__brand-name {
      display: inline-block;
      margin-bottom: 0;
      font-size: 24px;
      color: #000 !important;
      text-decoration: none;
    }

    .product-title__model-name {
      margin-top: 8px;
      font-size: 13px;
      font-weight: 400;
      display: flex;
    }

    .product-title__model-price {
      font-size: 16px;
    }
  }
  .btns {
    .product__cart-add-button {
      width: 224px;
      color: #fff;
      font-size: 13px;
      background-color: #2796ff;
      box-shadow: 0 2px 8px 0 rgb(39 150 255 / 60%);
    }
  }

  .ii-product__description {
    margin: 0 0 32px;
    color: #000;
    padding-top: 0;
    border-top: none;

    .heading_s {
      font-size: 24px;
      letter-spacing: 0.5px;
      color: #000;
      font-weight: 400;
      margin: 0 0 16px;
    }

    .ii-product__description-text {
      margin: 0;
      font-size: 13px;
      overflow: hidden;

      .ii-product__attributes {
        margin: 0;

        .ii-product__attribute {
          margin: 0 0 8px;
          line-height: 1;
          color: #000;

          .ii-product__attribute-label {
            color: #888;
          }

          .ii-product__attribute-value {
            font-weight: 700;
            color: #000;
          }
        }
      }
    }
  }
}
</style>
