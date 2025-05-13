import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { HeaderContainer } from "./HeaderStyles";
import ThemeToggleButton from "../ThemeToggleButton";
import PokemonSearch from "../PokemonSearch";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={`/`}>
        <img src={logo} alt="Logo do Pokémon" />
      </Link>
      <nav>
        <PokemonSearch />
        <ThemeToggleButton />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
