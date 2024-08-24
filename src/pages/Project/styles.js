import { Link } from "react-scroll";
import styled from "styled-components";
import { keyframes } from "styled-components";

const slide = keyframes`
  0% {
    -webkit-transform: translateX(-1000px);
            transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`;

export const ProjectContainer = styled.article`
  background: var(--color-11);
  min-height: 100vh;
  padding-top: 5.081rem;
  padding-bottom: 3.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 61.938rem) {
    padding-bottom: 2.75rem;
  }
`;

export const Project = styled.div`
  padding-top: 2.75rem;
  h2 {
    color: var(--color-0);
    margin-bottom: 2.5rem;

    @media (max-width: 61.938rem) {
      text-align: center;
      margin-bottom: 1.5rem;
    }
  }

  @media (max-width: 61.938rem) {
    padding-top: 1.75rem;
  }
`;

export const ProjectSpan = styled.span`
  color: var(--color-5);
  font: var(--roboto-18);
  font-weight: 500;
  letter-spacing: 0.015em;
  text-transform: uppercase;

  @media (max-width: 61.938rem) {
    display: block;
    text-align: center;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2.5rem;
  align-items: flex-start;
  animation: ${slide} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  h3 {
    font: var(--poppins-24);
    color: var(--color-p1);
    margin-bottom: 1rem;
  }

  @media (max-width: 61.938rem) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ProjectWrapper = styled.div`
  @media (max-width: 61.938rem) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Up = styled(Link)`
  align-self: flex-end;
`;