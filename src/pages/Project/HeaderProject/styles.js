import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderProject = styled.header`
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
  justify-content: center;
  align-items: center;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;

  @media (max-width: 31.5rem) {
    gap: 0.625rem;
  }
`;

export const HeaderLogo = styled(Link)`
  text-align: center;
`;
