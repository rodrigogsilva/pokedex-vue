<template>
  <v-form @submit.prevent="findPokemon">
    <v-container>
      <v-row>
        <v-col class="search">
          <v-text-field
            outlined
            label="Search for your Pokémon!"
            append-icon="mdi-magnify"
            v-model="pokeName"
          />
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "PokeSearch",
  data: () => ({
    pokeName: "",
  }),
  methods: {
    ...mapActions(["searchPokemon", "setLoading", "fetchPokemons"]),
    async findPokemon() {
      if (this.pokeName) {
        this.setLoading(true);
        await this.searchPokemon(this.pokeName);
        this.setLoading(false);
      } else {
        this.setLoading(true);
        await this.fetchPokemons();
        this.setLoading(false);
      }
    },
  },
};
</script>

<style scoped>
.search {
  margin-top: 3rem;
  background-color: white;
  border-radius: 1rem;
}
</style>
