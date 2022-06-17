import styled from "styled-components";

export const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  max-width: 585px;

  @media (max-width: 31.5rem) {
    justify-content: center;
    gap: 0.75rem;
  }
`;
