import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { HeaderContainer } from "./HeaderStyles";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to={`/`}>
        <img src={logo} alt="Logo do Pokémon" />
      </Link>
      <nav>
        <form>
          <input type="text" placeholder="Busque um filme" />
          <button type="submit">
            <BiSearchAlt2 />
          </button>
        </form>
        <ThemeToggleButton />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
