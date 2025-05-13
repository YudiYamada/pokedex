import styled from "styled-components";

export const HomeContainer = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }

  button {
    padding: 10px;
    border-radius: 10px;
    border: none;
    background-color: ${({ theme }) => theme.backgroundTwo};
    transition: 0.4s;
    color: ${({ theme }) => theme.text};

    &:hover{
      cursor: pointer;
      background-color: transparent;
    }
  }
`

export const PokemonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

