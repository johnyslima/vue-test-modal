<template lang="">
<v-container>
    <div>
        <v-sheet
        class="mx-auto"
        elevation="0"
        max-width="100%"
  >
    <v-slide-group
      v-model="model"
      class=""
      active-class="success"
      prev-icon="mdi-arrow-left-drop-circle"
      next-icon="mdi-arrow-right-drop-circle"
      show-arrows
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? undefined : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="100"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
    </div>
    </v-container>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>