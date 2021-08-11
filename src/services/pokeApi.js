import { api } from "./api";

export async function loadPokemons(nextUrl) {
  return nextUrl
    ? (await api.get(nextUrl)).data
    : (await api.get(`?offset=0&limit=30`)).data;
}

export async function loadPokemonData(pokemonName) {
  const { data } = await api.get(`/${pokemonName}`);

  return data;
}

export async function findPokemon(pokemon) {
  return (await api.get(`/${pokemon}`)).data;
}
