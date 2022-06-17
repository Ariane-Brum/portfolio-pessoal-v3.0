import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  color: var(--color-0);
  font: var(--poppins-18);

  @media (max-width: 50rem) {
    gap: 1.25rem;
  }

  @media (max-width: 30rem) {
    display: none;
  }
`;

export const Anchor = styled(Link)`
  display: inline-block;
  padding: 1rem 0;
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--color-p0);
  }

  &.active {
    color: var(--color-p1);
  }

  @media (max-width: 50rem) {
    background: var(--color-11);
    padding: 0.75rem 1rem;
    border-radius: 4px;

    &:hover {
      background: var(--color-10);
    }
  }

  @media (max-width: 40.063rem) {
    padding: 0.5rem 0.75rem;
    font-size: var(--poppins-16);
  }
`;
