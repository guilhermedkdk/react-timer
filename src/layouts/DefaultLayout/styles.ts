import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 74rem;
  height: calc(100vh - 10rem);

  margin: 5rem auto;
  padding: 2.5rem;

  background: ${(props) => props.theme.colors["gray-800"]};
  border-radius: 8px;

  @media (max-width: ${(props) => props.theme.maxWidth}) {
    padding: 1.5rem;
    margin: 2rem;
  }
`;
