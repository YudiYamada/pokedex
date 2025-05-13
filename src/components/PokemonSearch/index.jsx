import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchForm } from "./PokemonSearchStyles";
import { BiSearchAlt2 } from "react-icons/bi";

const PokemonSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchValue.trim() !== "") {
      navigate(`/pokemon/${searchValue.toLowerCase()}`);
      setSearchValue("");
    }
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Pesquise por nome ou ID"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </SearchForm>
  );
};

export default PokemonSearch;
