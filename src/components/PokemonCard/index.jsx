import { Link } from "react-router-dom";
import { CardContainer } from "./PokemonCardStyles";

function PokemonCard({ pokemon }) {
  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <CardContainer>
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <p>{pokemon.types.join(", ")}</p>
      </CardContainer>
    </Link>
  );
}

export default PokemonCard;
