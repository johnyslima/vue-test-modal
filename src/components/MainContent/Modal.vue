<template>
  <div class="text-center" v-if="show">
    <v-dialog v-model="show" width="754" height="660" persistent class="modal">
      <v-card>
        <div class="d-flex">
          <div>
            <v-carousel height="590" width="400">
              <v-carousel-item
                v-for="(photo, i) in item.imgs"
                :key="i"
                :src="photo"
                height="590"
                width="400"
              ></v-carousel-item>
            </v-carousel>
          </div>

          <div class="ma-5 mt-8 product-title">
            <h1 class="product-title-wrapper">
              <a :href="item.src" class="product-title__brand-name">{{
                item.brand
              }}</a>
              <span class="product-title__model-name">{{ item.title }}</span>
            </h1>

            <div class="mb-2">
              <span
                aria-label="Итоговая цена"
                class="product-title__model-price"
                style="white-space: nowrap;"
                >{{ item.price.toLocaleString() }} ₽</span
              >
            </div>

            <v-divider />

            <div class="btns my-8">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-select
                  v-model="select"
                  :items="item.sizes"
                  :hint="`Осталось на складе: ${select.count} шт.`"
                  item-text="size"
                  item-value="size"
                  label="Выберите размер"
                  return-object
                  outlined
                  :rules="[(v) => !!v || 'Item is required']"
                  required
                ></v-select>
                <v-btn
                  class="product__cart-add-button"
                  elevation="7"
                  large
                  :disabled="!valid"
                  @click="addToBasket(item)"
                >
                  Добавить в корзину
                </v-btn>
              </v-form>
            </div>

            <div class="ii-product__description">
              <div class="heading_s">О товаре</div>
              <div class="ii-product__description-text">
                <div
                  class="ii-product__attributes"
                  v-for="desc in item.description"
                  :key="desc.id"
                >
                  <div class="ii-product__attribute">
                    <span class="ii-product__attribute-label">
                      {{ desc.title }}
                    </span>
                    <span class="ii-product__attribute-value">
                      {{ desc.value }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <v-btn icon dark class="icon_close" @click="closeModal">
            <v-icon dark color="black">mdi-close</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  props: ["dialog"],
  data() {
    return {
      model: 0,
      show: false,
      item: null,
      select: {
        count: 0,
      },
    };
  },

  mounted() {
    this.select = { count: 0 };
  },

  methods: {
    ...mapActions(["addItems", "updateCountSize"]),
    closeModal: function() {
      this.show = false;
      this.select = { count: 0 };
      this.item = null;
    },
    addToBasket(item) {
      this.$refs.form.validate();
      if (this.select.size) {
        this.updateCountSize({
          id: item.id,
          size: this.select.size,
        });
        this.addItems({
          item,
          size: this.select.size,
        });
        this.closeModal();
      }
    },
  },
};
</script>

<style lang="scss">
.v-carousel__controls {
  height: 25px !important;
  background: #0000000a !important;
}

.modal {
  overflow-y: hidden !important;
}

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
