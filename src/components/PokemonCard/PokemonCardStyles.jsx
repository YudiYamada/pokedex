import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.backgroundTwo};
  border: none;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  }

  h3,
  p {
    color: ${({ theme }) => theme.text};
  }

  h3::first-letter {
    text-transform: uppercase;
  }

  img {
    width: 120px;
    height: 120px;
  }
`;
