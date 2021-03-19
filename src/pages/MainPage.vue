<template>
  <v-app>
    <Layout>
        <MainContent />
    </Layout>
  </v-app>
</template>

<script>
import Layout from '../components/Layout'
import MainContent from '../components/MainContent/index';

export default {
  name: 'MainPage',

  components: {
    Layout,
    MainContent
  }
};
</script>

<style lang="scss">
.header {
  height: 40px;
}
</style>
