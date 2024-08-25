import styled from "styled-components";
import decTopRightSvg from "/dec/top-right.svg";
import decBottompRightSvg from "/dec/bottom-right.svg";

export const Skills = styled.section`
	background: url(${decTopRightSvg}) no-repeat top 40px right 40px,
		url(${decBottompRightSvg}) no-repeat bottom 40px right 40px, var(--color-11);
	padding-top: 5rem;
	padding-bottom: 5rem;

	h2 {
		margin-bottom: 2.5rem;

		@media (max-width: 50rem) {
			margin-bottom: 2rem;
		}
	}

	@media (max-width: 61.938rem) {
		background: var(--color-11);
	}

	@media (max-width: 50rem) {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}
`;

export const SkillGrid = styled.div`
	display: grid;
	grid-template-columns: 5fr 6fr;
	gap: 4.5rem;
	position: relative;

	@media (max-width: 61.938rem) {
		grid-template-columns: 1fr;
		gap: 1.25rem;
	}
`;

export const SkillItem = styled.article`
	position: relative;

	@media (max-width: 37.5rem) {
		margin-bottom: 1.25rem;
	}

	h3 {
		font: var(--poppins-16);
		color: var(--color-0);
		margin-bottom: 2rem;
		text-transform: uppercase;
		position: relative;
		display: flex;
		align-items: center;
		gap: 0.5rem;

		@media (max-width: 37.5rem) {
			margin-bottom: 1.25rem;
		}
	}

	@media (max-width: 61.938rem) {
		img {
			display: none;
		}
	}
`;
