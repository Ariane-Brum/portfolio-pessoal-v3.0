import styled from "styled-components";

export const CoursesItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font: var(--roboto-16);
  color: var(--color-4);
  border-bottom: 1px solid var(--color-11);
  padding: 0.375rem 0;

  @media (max-width: 20rem) {
    font: var(--roboto-14);
  }

  &:last-child {
    margin-bottom: 0px;
    border-bottom: 0;
  }

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: linear-gradient(#ffbf00, #f2a50c);
  }

  span {
    color: var(--color-6);
    text-align: right;
    flex: 1;
  }
`;
