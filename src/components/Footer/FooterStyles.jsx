import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 1em;
  text-align: center;
  background-color: ${({ theme }) => theme.backgroundTwo};

  ul {
    display: flex;
    justify-content: center;
  }

  a {
    margin: 0 1em;
    font-size: 1.5em;
    transition: 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
    }
  }
`;
