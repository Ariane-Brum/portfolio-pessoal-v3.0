import { Link } from "react-scroll";
import styled, { keyframes } from "styled-components";

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

export const ProjectContainer = styled.article`
	background: var(--color-11);
	min-height: 100vh;
	padding-top: 5.081rem;
	padding-bottom: 3.75rem;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 61.938rem) {
		padding-bottom: 2.75rem;
	}
`;

export const Project = styled.div`
	padding-top: 3.75rem;

	h2 {
		color: var(--color-0);
		margin-bottom: 2.5rem;

		@media (max-width: 61.938rem) {
			text-align: center;
			margin-bottom: 1.5rem;
		}
	}

	@media (max-width: 61.938rem) {
		padding-top: 2.75rem;
	}
`;

export const ProjectSpan = styled.span`
	color: var(--color-5);
	font: var(--roboto-18);
	font-weight: 500;
	letter-spacing: 0.015em;
	text-transform: uppercase;

	@media (max-width: 61.938rem) {
		display: block;
		text-align: center;
	}
`;

export const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2.5rem;
	align-items: flex-start;
	animation: ${slide} 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	h3 {
		font: var(--poppins-24);
		color: var(--color-p1);
		margin-bottom: 1rem;
	}

	@media (max-width: 61.938rem) {
		grid-template-columns: 1fr;
		justify-items: center;
	}
`;

export const ProjectWrapper = styled.div`
	@media (max-width: 61.938rem) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

export const ProjectNotFound = styled.div`
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

export const Title = styled.h2`
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

export const Up = styled(Link)`
	align-self: flex-end;
`;
