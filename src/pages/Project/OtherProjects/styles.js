import styled from "styled-components";

export const OtherProjects = styled.div`
	background: var(--color-12);
	color: var(--color-5);
	padding: 1rem;

	@media (max-width: 61.938rem) {
		margin-bottom: 1rem;
	}
`;

export const NavigationProjects = styled.nav`
	background: var(--color-11);
	border-radius: 4px;
	overflow: hidden;

	ul {
		@media (max-width: 61.938rem) {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 1rem;
		}
	}

	li {
		&:hover {
			background: var(--color-p1);
		}

		&:last-child a::after {
			background: transparent;
		}
	}

	a {
		font: var(--poppins-18);
		padding: 0.9375rem 0.625rem 0 0.625rem;
		display: block;
		color: var(--color-0);
		text-decoration: none; // Garantindo que os links não tenham sublinhado

		&:hover {
			color: var(--color-p5);
		}

		&::before {
			content: "";
			display: inline-block;
			width: 10px;
			height: 10px;
			background: var(--gradient);
			border-radius: 50%;
			border: 2px solid var(--color-12);
			margin-right: 6px;
		}

		&::after {
			content: "";
			width: 100%;
			height: 2px;
			background: var(--color-12);
			display: block;
			margin-top: 0.9375rem;
			transition: background 0.3s ease;
		}

		&:hover::after {
			background: var(--gradient);
		}
	}
`;
