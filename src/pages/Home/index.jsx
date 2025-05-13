import { useState, useEffect } from "react";
import { getPokemonList, getPokemonDetail } from "../../axios/config";
import PokemonCard from "../../components/PokemonCard";
import { HomeContainer, PokemonGrid } from "./HomeStyles";

function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async () => {
    const list = await getPokemonList(10, offset);

    const detailedPokemon = await Promise.all(
      list.map(async (pokemon) => {
        const detail = await getPokemonDetail(pokemon.url);
        return {
          name: detail.name,
          image: detail.sprites.front_default,
          types: detail.types.map((t) => t.type.name),
          moves: detail.moves,
          abilities: detail.abilities,
        };
      })
    );

    setPokemonList((prev) => [...prev, ...detailedPokemon]);
  };

  useEffect(() => {
    fetchPokemon();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset]);

  const loadMore = () => {
    setOffset((prev) => prev + 10);
  };

  return (
    <HomeContainer>
      <h1>Pokédex</h1>
      <PokemonGrid>
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </PokemonGrid>
      <button onClick={loadMore}>Carregar mais</button>
    </HomeContainer>
  );
}

export default Home;
