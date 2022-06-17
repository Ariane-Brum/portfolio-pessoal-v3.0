import styled from "styled-components";

export const Experience = styled.div`
  p {
    font: var(--roboto-16);
    color: var(--color-5);
    max-width: 55ch;

    a {
      color: var(--color-p1);
      display: inline-block;
      position: relative;

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0%;
        background: var(--color-p1);
        -webkit-transition: 0.3s;
        transition: 0.3s;
        position: absolute;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;

export const DecX = styled.img`
  position: absolute;
  bottom: -35px;
  left: 0;
`;
