import styled from "styled-components";
import { keyframes } from "styled-components";

const animateHover = keyframes`
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -100%, 0);
  }
  51% {
    transform: translate3d(0, 100%, 0);
  }
`;

export const Techs = styled.ul`
  background: var(--color-12);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: var(--color-0);
  gap: 1rem;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 2.5rem;

  li {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.625rem 1rem;
    border-radius: 4px;
    background: var(--color-11);
    border: 2px solid var(--color-12);
    font: var(--roboto-16);
    font-size: 0.875rem;
    color: var(--color-5);
    font-weight: 500;

    &::before {
      content: "";
      display: block;
      position: absolute;
      background: var(--gradient);
      width: 3px;
      height: 2.3rem;
      left: 3px;
      border-radius: 4px;
      z-index: 100;
    }

    &:hover::before {
      will-change: transform;
      animation: ${animateHover} 0.5s forwards;
    }
  }

  @media (max-width: 31.5rem) {
    grid-template-columns: 1fr;
  }
`;
