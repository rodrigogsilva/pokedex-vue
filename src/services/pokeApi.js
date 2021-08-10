export async function loadPokemon(offset = 0, limit = 18) {
  const { data } = await api.get(`?offset=${offset}&limit=${limit}`);

  return data;
}

export async function loadPokemonData(pokemonName) {
  const { data } = await api.get(`/${pokemonName}`);

  return data;
}
