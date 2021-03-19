<template lang="">
  <v-container>
    <v-row>
      <!-- <div class="banner-wrapper"> -->
      <v-col cols="6" md="4">
        <v-card>
          <BannerCard>
            <a class="header__logo" href="/" slot="img">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                :src="marketing.bannerTop.img"
                transition="scale-transition"
                width="100%"
                height="290"
              >
              </v-img>
            </a>
            <span slot="title">{{ marketing.bannerTop.title }}</span>
            <span slot="description">{{ marketing.bannerTop.title }}</span>
          </BannerCard>

          <BannerCard class="mt-4">
            <a class="header__logo" href="/" slot="img">
              <v-img
                alt="Vuetify Logo"
                class="shrink mr-2"
                contain
                :src="marketing.bannerBottom.img"
                transition="scale-transition"
                width="100%"
                height="290"
              >
              </v-img>
            </a>
            <span slot="title">{{ marketing.bannerBottom.title }}</span>
            <span slot="description">{{ marketing.bannerBottom.description }}</span>
          </BannerCard>

        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="8">
        <v-card>
          <div class="mt-1 ml-2">
            <v-carousel height="620" width="778px" cycle hide-delimiters interval="3500">
              <v-carousel-item
                v-for="(banner, i) in marketing.carousel"
                :key="i"
                :src="banner.img"
                height="600"
                width="778px"
              >
                <div class="banner_carousel_info">
                  <div class="banner_carousel_title">{{ banner.title }}</div>
                  <div class="banner_carousel_description">
                    {{ banner.description }}
                  </div>
                </div>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-card>
      </v-col>
      <!-- </div> -->
    </v-row>
    <div class="banner-wrapper"></div>
  </v-container>
</template>
<script>
import { marketingBanner } from "../../mock";
import BannerCard from './BannerCard'
export default {
  components: {
    BannerCard,
  },
  data() {
    return {
      marketing: marketingBanner,
    };
  },
};
</script>
<style lang="scss" scope>

.banner_info,
.banner_carousel_info {
  text-align: center;
  background-color: #fff;
  color: black;
}

.banner_carousel_info {
  position: absolute;
  width: 429px;
  left: 152px;
  bottom: -10px;
  padding: 16px 0;


    .banner_carousel_title {
      font-size: 24px;
      font-weight: bold;
    }

}

.v-carousel__controls {
  bottom: -25px;
}

.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: none !important;
}
</style>
