import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  gap: 0.5rem;

  input {
    padding: 0.2rem 0.8rem;
    border-radius: 4px;
    border: none;
    transition: all 0.3s ease-in-out;
  }

  button {
    border: none;
    border-radius: 4px;
    color: ${({ theme }) => theme.secondary};
    padding: 0.3rem;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    transition: 0.4s;

    &:hover {
      cursor: pointer;
      background-color: transparent;
    }
  }
`;