<template>
  <v-app>
    <Layout>
        <Order />
    </Layout>
  </v-app>
</template>

<script>
import Layout from '../components/Layout'
import Order from '../components/Order';

export default {
  name: 'OrderPage',

  components: {
    Layout,
    Order
  }
};
</script>

<style lang="scss">
.header {
  height: 40px;
}
</style>
