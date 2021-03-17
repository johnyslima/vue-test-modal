<template>
  <v-app>
    <Header />
    <MainContent />
  </v-app>
</template>

<script>
import Header from './components/Header/index';
import MainContent from './components/MainContent/index';

export default {
  name: 'App',

  components: {
    Header,
    MainContent
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.header {
  height: 40px;
}
</style>
