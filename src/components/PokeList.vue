<template>
  <v-main>
    <v-container>
      <div class="list__main">
        <v-row>
          <card v-for="poke in pokemonList()" :key="poke.id" :pokemon="poke" />
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import Card from "./Card.vue";

export default {
  name: "PokeList",
  components: { Card },
  async beforeMount() {
    await this.fetchPokemons();
    console.log(this.pokemonList());
  },
  mounted() {
    this.getNextPokemon();
  },
  methods: {
    ...mapGetters(["nextUrl", "pokemonList"]),
    ...mapActions(["fetchPokemons"]),
    getNextPokemon() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;
        if (bottomOfWindow) {
          this.fetchPokemons();
        }
      };
    },
  },
};
</script>
<style scoped>
.list__main {
  padding-top: 5rem;
}
</style>
