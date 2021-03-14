<template lang="">
  <div>
    <Navbar />
    <v-container>
    <HeaderLogo />
    <div class="d-flex">
      <Menu />
      <SearchBar />
    </div>
    </v-container>
  </div>
</template>


<script>
import HeaderLogo from './HeaderLogo';
import Navbar from './Navbar';
import Menu from './Menu';
import SearchBar from './SearchBar';

export default {
  components: {
    HeaderLogo,
    Navbar,
    Menu,
    SearchBar
  }
}
</script>
<style lang="scss">
  
</style>