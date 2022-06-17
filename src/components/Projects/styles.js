import styled from "styled-components";
import decTopRightSvg from "/dec/top-right.svg";

export const Projects = styled.article`
  background: url(${decTopRightSvg}) no-repeat top 40px right 40px,
    var(--color-10);
  padding-top: 5rem;
  padding-bottom: 5rem;
  height: auto;

  h2 {
    color: var(--color-0);
    margin-bottom: 2rem;

    @media (max-width: 60.938rem) {
      text-align: center;
    }
  }

  @media (max-width: 61.938rem) {
    background: var(--color-10);
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  @media (max-width: 50rem) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const Project = styled.ul`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 69.438rem) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
