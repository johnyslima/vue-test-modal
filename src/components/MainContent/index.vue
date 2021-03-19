<template lang="">
<v-container>
    <div>
        <Banner />
        <Popular />
    </div>
    </v-container>
</template>
<script>
import Popular from './Popular';
import Banner from './Banner';
export default {
  components: {
    Popular,
    Banner
  }
}
</script>
<style lang="">
    
</style>