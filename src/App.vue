<template>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
import Header from './components/Header/index';

export default {
  name: 'App',

  components: {
    Header
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
body {
  font-size: 13px;
}
.header {
  height: 40px;
}
</style>
