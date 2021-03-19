<template lang="">
  <div>
    <Navbar />
    <v-container>
    <HeaderLogo />
    </v-container>
  </div>
</template>


<script>
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';

export default {
  components: {
    HeaderLogo,
    Navbar
  }
}
</script>
<style lang="scss">
  .menu-bar {
    margin-top: 25px;
  }
</style>