<template lang="">
  <div>
    <Header />
    <slot />
  </div>
</template>
<script>
import Header from '../Header';
export default {
  name: 'Layout',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
}
</script>
<style lang="">
  
</style>