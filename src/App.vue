<template>
  <v-app
    id="inspire"
    style="background: linear-gradient(to bottom left, #90caf9, #eeff41)"
  >
    <Header />
    <poke-list />
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";

import PokeList from "./components/PokeList.vue";

export default {
  name: "App",

  components: { Header, PokeList },
};
</script>

<style></style>
