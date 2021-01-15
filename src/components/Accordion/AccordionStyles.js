import styled from "styled-components";

// We will have a card that is wide
// We will have them stacked on top of each other
  // This card will have 2 parts
  // Title and a description. Description will appear and disappear when the title is clicked

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid #000000;
  max-width: 1200px;
  width: 300px;

  &:first-child {
    margin-top: 3rem;
  }

  @media screen and (min-width: 1440px) {
    width: 500px;
  }
`;

export const CardTitle = styled.h3`
  margin: 1rem;
`;

export const CardDescription = styled.p`
  margin: 0 1rem 1rem 1rem;
`;
