<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <h1>Pokedex</h1>
    </v-app-bar>

    <v-main>
      <p>stuiff goes here</p>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  created: () => {
    document.title = "Pokedex | Home";
  },
});
</script>
