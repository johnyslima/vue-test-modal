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
// import Menu from './Menu';
// import SearchBar from './SearchBar';

export default {
  components: {
    HeaderLogo,
    Navbar,
    // Menu,
    // SearchBar
  }
}
</script>
<style lang="scss">
  .menu-bar {
    margin-top: 25px;
  }
</style>