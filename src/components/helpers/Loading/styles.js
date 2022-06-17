import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: scale(1) rotate(360deg); 
  }
  50% { 
    transform: scale(.8) rotate(-360deg);
  }
  100% {
    transform: scale(1) rotate(360deg);     
  }
`;

export const LoaderWrapper = styled.div`
  width: 100px;
  height: 100px;

  @media (max-width: 50rem) {
    width: 60px;
    height: 60px;
  }
`;

export const Loader = styled.div`
  width: 100%;
  height: 100%;
  border: 4px solid var(--color-12);
  border-top-color: var(--color-p1);
  border-bottom-color: var(--color-p0);
  border-radius: 50%;
  animation: ${rotate} 5s linear infinite;
`;

export const LoaderInner = styled(Loader)`
  border-top-color: var(--color-p0);
  border-bottom-color: var(--color-p1);
  animation-duration: 2.5s;
`;
