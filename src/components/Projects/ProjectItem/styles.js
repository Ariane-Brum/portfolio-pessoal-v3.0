import styled from "styled-components";
import { Link } from "react-router-dom";

export const Card = styled.li`
	padding: 1rem;
	background: var(--color-11);
	box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
	border: 1px solid var(--color-12);
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	max-width: 450px;

	img {
		border-radius: 4px;
		width: 100%;
		object-fit: cover;
		margin-bottom: 1rem;
		filter: drop-shadow(2px 2px 1px #000);
	}

	@media (max-width: 60.938rem) {
		max-width: 500px;
	}
`;

export const ProjectTitle = styled.h3`
	font: var(--poppins-24);
	font-weight: 600;
	color: var(--color-p1);
	display: flex;
	align-items: center;
	margin-bottom: 0.5rem;

	&::before {
		content: "";
		display: inline-block;
		height: 8px;
		width: 12px;
		margin-right: 8px;
		background-color: var(--color-p1);
		transition: width 0.2s;
		border-radius: 1px;
	}
`;

export const ProjectDescription = styled.p`
	color: var(--color-5);
	font: var(--roboto-14);
	margin-bottom: 1.25rem;
`;

export const LinkDetails = styled(Link)`
	color: var(--color-p1);

	&:hover {
		color: var(--color-0);
	}

	&:hover ${ProjectTitle}::before {
		width: 24px;
	}
`;

export const TechList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	flex: 1;
	gap: 0.5rem;
	align-items: center;
	margin-bottom: 1rem;
`;

export const Tech = styled.li`
	padding: 0.5rem;
	background: var(--color-10);
	border-radius: 5px;
	font: var(--poppins-12);
	color: var(--color-4);
	border: 1px solid var(--color-10);

	&:hover {
		background: var(--color-9);
		border-color: var(--color-9);
	}
`;

export const CallToAction = styled.span`
	padding: 0.5rem 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 0.5rem;
	font: var(--roboto-16);
	color: var(--color-p1);

	svg {
		color: var(--color-p2);
	}
`;
