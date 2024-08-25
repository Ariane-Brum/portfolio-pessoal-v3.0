import styled, { keyframes } from "styled-components";

// Animation to slide the content from left to right with a fade-in effect
const slide = keyframes`
	0% {
		transform: translateX(-1000px);
		opacity: 0;
	}
	100% {
		transform: translateX(0);
		opacity: 1;
	}
`;

export const MainContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	animation: ${slide} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	p {
		color: var(--color-0);
		font: var(--poppins-18);
		margin-bottom: 1rem;
	}

	a {
		color: var(--color-p1);
		font: var(--poppins-18);
		text-decoration: none;

		&:hover {
			color: var(--color-p3);
		}
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
