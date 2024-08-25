import styled from "styled-components";

export const Features = styled.ul`
	background: var(--color-12);
	color: var(--color-0);
	border-radius: 4px;
	padding: 1rem;

	li {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		padding: 0.625rem 1rem;
		border-radius: 4px;
		box-shadow: 0 2px 3px 0px rgb(0 0 0 / 50%);
		background: var(--color-11);
		border: 2px solid var(--color-12);
		font: var(--roboto-16);
		font-size: 0.875rem;
		color: var(--color-5);
		font-weight: 500;
		border-bottom: 2px solid var(--color-11);

		&:last-of-type {
			border-bottom: 0;
		}

		@media (max-width: 31.5rem) {
			svg {
				display: none;
			}
		}
	}
`;
