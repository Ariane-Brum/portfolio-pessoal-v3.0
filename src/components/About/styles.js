import styled from "styled-components";
import decTopRightSvg from "/dec/top-right.svg";
import decBottompRightSvg from "/dec/bottom-right.svg";

export const About = styled.article`
  background: url(${decTopRightSvg}) no-repeat top 40px right 40px,
    url(${decBottompRightSvg}) no-repeat bottom 40px right 40px, var(--color-11);
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (max-width: 78.438rem) {
    background: var(--color-11);
  }

  @media (max-width: 50rem) {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }
`;

export const AboutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 0 1.25rem;
  justify-items: center;

  @media (max-width: 78.438rem) {
    gap: 0 0;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 1.25rem;
  }
`;

export const AboutImg = styled.div`
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 450px;
    height: 450px;
    border-radius: 50%;
    position: absolute;
    left: 66px;
    top: 13px;
    background: var(--color-10);

    @media (max-width: 78.438rem) {
      width: 250px;
      height: 250px;
      left: 39px;
      top: 13px;
    }

    @media (max-width: 37.5rem) {
      width: 200px;
      height: 200px;
      left: 26px;
    }
  }

  img {
    position: relative;
    padding: 0.5rem;
    z-index: 2;
  }

  @media (max-width: 78.438rem) {
    max-width: 340px;
  }

  @media (max-width: 37.5rem) {
    max-width: 260px;
  }
`;

export const AboutContent = styled.div`
  h2 {
    margin-bottom: 2rem;

    @media (max-width: 78.438rem) {
      margin-bottom: 1rem;
    }
  }

  p {
    font: var(--roboto-24);
    color: var(--color-5);
    max-width: 60ch;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    strong {
      color: var(--color-p2);
    }

    @media (max-width: 78.438rem) {
      max-width: 40ch;
    }

    @media (max-width: 37.5rem) {
      font: var(--roboto-18);
      max-width: 35ch;
    }
  }

  @media (max-width: 50rem) {
    text-align: center;
  }
`;
