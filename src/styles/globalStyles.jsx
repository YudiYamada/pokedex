import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    font-family: "Blinker", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

body {
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
}

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }
`;

export default GlobalStyles;
