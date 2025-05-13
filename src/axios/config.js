import axios from "axios";

const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: { "Content-Type": "application/json" },
});

export const getPokemonList = async (limit = 10, offset = 0) => {
  try {
    const response = await pokeapi.get(`pokemon`, {
      params: { limit, offset },
    });
    return response.data.results;
  } catch (error) {
    console.error("Erro ao buscar a lista de Pokémon:", error);
    return [];
  }
};

export const getPokemonDetail = async (urlOrName) => {
  try {
    const response = await pokeapi.get(
      typeof urlOrName === "string" && urlOrName.includes("http")
        ? urlOrName
        : `pokemon/${urlOrName}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar detalhes do Pokémon:", error);
    return null;
  }
};