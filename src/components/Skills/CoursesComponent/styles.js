import styled from "styled-components";

export const Courses = styled.ul`
  max-width: 585px;
  padding: 1.25rem;
  border-radius: 4px;
  background: var(--color-12);

  @media (max-width: 50rem) {
    max-width: unset;
  }
`;
export const DecY = styled.img`
  position: absolute;
  top: 0px;
  right: -40px;
`;
