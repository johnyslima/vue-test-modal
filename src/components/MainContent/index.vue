<template lang="">
  <v-container>
      <div class="mb-10">
          <Banner />
          <Popular />
      </div>
    </v-container>
</template>

<script>
import Popular from './Popular';
import Banner from './Banner';
export default {
  name: 'MainContent',
  components: {
    Popular,
    Banner
  }
}
</script>

<style lang="">
    
</style>