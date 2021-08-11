<template>
  <v-app
    id="inspire"
    style="background: linear-gradient(to bottom left, #90caf9, #eeff41)"
  >
    <Spinner v-show="show" />
    <Header />
    <poke-search style="padding-top: 3rem" />
    <poke-list />
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import Header from "./components/Header.vue";
import PokeList from "./components/PokeList.vue";
import PokeSearch from "./components/PokeSearch.vue";
import Spinner from "./components/Spinner.vue";

export default {
  name: "App",
  components: { Header, PokeList, PokeSearch, Spinner },
  methods: {
    ...mapGetters(["isLoading"]),
  },
  computed: {
    show() {
      return this.isLoading();
    },
  },
};
</script>

<style></style>
