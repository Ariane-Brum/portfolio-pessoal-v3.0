import styled from "styled-components";
import { keyframes } from "styled-components";
import decBottomLeftSvg from "/dec/bottom-left.svg";
import decTopRightSvg from "/dec/top-right.svg";

const moveUpDown = keyframes`
    0%,
  100% {
    top: 0vh;
  }
  50% {
    top: 1vh;
  }
`;

export const Intro = styled.section`
  background: url(${decBottomLeftSvg}) no-repeat bottom 40px left 40px,
    url(${decTopRightSvg}) no-repeat top 140px right 40px, var(--color-12);
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (max-width: 50rem) {
    background: var(--color-12);
    padding-top: 6.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const IntroWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0 2.5rem;
  padding-top: 10.75rem;
  padding-bottom: 5rem;

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding-bottom: 1.125rem;
    padding-top: 5.125rem;
  }

  @media (max-width: 31.5rem) {
    padding-bottom: 1rem;
  }
`;

export const IntroContent = styled.div`
  align-self: center;

  @media (max-width: 50rem) {
    text-align: center;
  }
`;

export const IntroName = styled.div`
  margin-bottom: 1.25rem;
  span {
    font: var(--roboto-24);
    color: var(--color-5);

    @media (max-width: 37.5rem) {
      font: var(--roboto-18);
    }
  }

  @media (max-width: 37.5rem) {
    margin-bottom: 1rem;
  }
`;

export const Title = styled.h1`
  font: var(--poppins-64);
  color: var(--color-0);

  span {
    color: var(--color-p1);
    font: inherit;
  }

  @media (max-width: 50rem) {
    margin-bottom: 1rem;
  }

  @media (max-width: 37.5rem) {
    font-size: 2.25rem;
    max-width: 20ch;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
`;
export const IntroCv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font: var(--poppins-16);
    color: var(--color-5);

    &:hover {
      color: var(--color-0);
    }

    svg {
      color: var(--color-p1);
    }
  }

  @media (max-width: 50rem) {
    justify-content: center;
  }
`;
export const IntroImg = styled.div`
  position: relative;
  max-width: 350px;
	justify-self: center;
  border-radius: 50%;
  animation: ${moveUpDown} 4s linear infinite;

  img {
    border-radius: 50%;
  }

  @media (max-width: 50rem) {
    grid-row: 1;
    margin: 0 auto;
  }

  @media (max-width: 37.5rem) {
    max-width: 250px;
  }

  @media (max-width: 31.5rem) {
    max-width: 200px;
  }
`;
