<template lang="">
  <div class="banner_info_card">
    <slot name="img"></slot>
      <div class="banner_info">
        <div class="banner_title"><slot name="title"></slot></div>
        <div class="banner_description"><slot name="description"></slot></div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'BannerCard',
}
</script>

<style lang="scss">
  .banner_info_card {
  height: 320px;

  .banner_info {
    width: 325px;
    position: relative;
    bottom: 50px;
    left: 18px;
    height: 90px;
    padding: 16px 0;

    .banner_title {
      font-size: 24px;
      font-weight: bold;
    }

    .banner_description {
      color: #888;
    }
  }
}
</style>