import styled from "styled-components";

export const PokemonContainer = styled.div`
  h1::first-letter {
    text-transform: uppercase;
  }

  display: flex;
  flex-direction: column;
  gap: 10px;

  img {
    width: 280px;
    align-self: center;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }
`;
