import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getPokemonDetail } from "../../axios/config";
import { PokemonContainer } from "./PokemonStyles";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [abilitiesDetails, setAbilitiesDetails] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const detail = await getPokemonDetail(name);

        if (!detail || detail.error) {
          setError(true);
          return;
        }

        setPokemon(detail);
        setError(false);

        const abilities = await Promise.all(
          detail.abilities.map(async (abilityObj) => {
            const abilityRes = await axios.get(abilityObj.ability.url);
            const effectEntry = abilityRes.data.effect_entries.find(
              (entry) => entry.language.name === "en"
            );
            return {
              name: abilityRes.data.name,
              description: effectEntry
                ? effectEntry.short_effect
                : "No description available",
            };
          })
        );
        setAbilitiesDetails(abilities);
      } catch (err) {
        setError(true, err);
      }
    };

    fetchDetail();
  }, [name]);

  if (error) return <div>Pokémon não encontrado.</div>;
  if (!pokemon) return <div>Carregando...</div>;

  return (
    <PokemonContainer>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>
        <strong>Tipo:</strong>{" "}
        {pokemon.types.map((t) => t.type.name).join(", ")}
      </p>

      <h2>Movimentos</h2>
      <ul>
        {pokemon.moves.slice(0, 10).map((moveObj) => (
          <li key={moveObj.move.name}>{moveObj.move.name}</li>
        ))}
      </ul>

      <h2>Habilidades</h2>
      <ul>
        {abilitiesDetails.map((ability) => (
          <li key={ability.name}>
            <strong>{ability.name}</strong>: {ability.description}
          </li>
        ))}
      </ul>
    </PokemonContainer>
  );
};

export default Pokemon;
