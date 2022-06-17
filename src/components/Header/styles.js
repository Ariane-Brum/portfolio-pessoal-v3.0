import styled from "styled-components";

export const Header = styled.header`
  background: var(--color-12);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(114, 114, 126, 0.2);
  z-index: 999;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  @media (max-width: 50rem) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const HeaderLogo = styled.div`
  @media (max-width: 30rem) {
    display: none;
  }
`;
