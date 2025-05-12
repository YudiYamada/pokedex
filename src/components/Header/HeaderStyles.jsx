import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.backgroundTwo};

  img {
    max-width: 100px;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    form {
      display: flex;
      gap: 0.5rem;
    }

    input {
      padding: 0.2rem 0.8rem;
      border-radius: 4px;
      border: none;
      transition: all 0.3s ease-in-out;
    }

    button {
      background-color: ${({ theme }) => theme.primary};
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
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
