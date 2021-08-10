import { loadPokemons, loadPokemonData } from "../../services/pokeApi";

export const state = {
  pokemon: [],

  nextUrl: "",
};

export const mutations = {
  SET_POKEMON(state, payLoad) {
    state.pokemon = payLoad;
  },

  SET_NEXT_URL(state, payLoad) {
    state.nextUrl = payLoad;
  },
};

export const getters = {
  pokemonList: (state) => state.pokemon,
  nextUrl: (state) => state.nextUrl,
};

export const actions = {
  async fetchPokemons({ state, commit }) {
    const data = state.nextUrl
      ? await loadPokemons(state.nextUrl)
      : await loadPokemons();
    commit("SET_NEXT_URL", data.next);

    const pokemonsDetails = await Promise.all(
      data.results.map(async (pokemon) => {
        const response = await loadPokemonData(pokemon.name);
        return response;
      })
    );

    commit("SET_POKEMON", [...state.pokemon, ...pokemonsDetails]);
  },
};
