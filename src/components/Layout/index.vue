<template lang="">
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script>
import Header from "../Header";
import Footer from "../Footer";
import { mapActions } from "vuex";
export default {
  name: "Layout",

  components: {
    Header,
    Footer
  },

  methods: mapActions(["fetchClothes"]),

  async mounted() {
    this.fetchClothes();
  }
};
</script>

<style lang=""></style>
