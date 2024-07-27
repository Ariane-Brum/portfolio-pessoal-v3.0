import styled from "styled-components";

export const ExperienceItem = styled.div`
  background: var(--color-12);
  padding: 1.25rem;
  border-radius: 4px;
  position: relative;
	max-width: 282px;

  &::before {
    content: "";
    width: 4px;
    height: 20px;
    background: linear-gradient(#ffbf00, #f2a50c);
    position: absolute;
    left: -4px;
    top: 50px;
  }

  span {
    font: var(--roboto-14);
    color: var(--color-5);
    &:first-child {
      text-transform: uppercase;
      margin-bottom: 0.5rem;
      display: inline-block;
    }
  }

  h4 {
    margin-bottom: 2rem;
    font: var(--poppins-18);
    color: var(--color-0);
  }

	@media (max-width: 61.938rem) {
    max-width: 100%;
  }
`;