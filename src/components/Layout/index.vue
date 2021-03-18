<template lang="">
  <div>
    <Header />
    <slot />
  </div>
</template>
<script>
import Header from '../Header';
import { mapActions } from "vuex";
export default {
  name: 'Layout',

  components: {
    Header,
  },

  methods: mapActions(["fetchClothes"]),

  async mounted() {
    this.fetchClothes();
  },

  data: () => ({
    //
  }),
}
</script>
<style lang="">
  
</style>