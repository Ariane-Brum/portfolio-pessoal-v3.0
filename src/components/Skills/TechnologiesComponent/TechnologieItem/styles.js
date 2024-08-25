import styled, { keyframes } from "styled-components";

const tracking = keyframes`
	0% {
		letter-spacing: -0.5em;
		opacity: 0;
	}
	40% {
		opacity: 0.6;
	}
	100% {
		opacity: 1;
	}
`;

export const TechnologieItem = styled.li`
	background: var(--color-12);
	padding: 0.625rem;
	border-radius: 4px;
	align-items: center;
	display: flex;
	justify-content: center;
	box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);
	max-width: 80px;
	width: 100%;
	flex-direction: column;

	span {
		color: var(--color-p1);
		font: var(--roboto-14);
		font-weight: 500;
		animation: ${tracking} 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
		display: none; // Initially hidden, displayed on hover
	}

	&:hover {
		svg {
			visibility: hidden;
			max-height: 0;
			height: 0;
		}

		span {
			display: flex; // Show the text when hovered
			padding: 0.5rem;
		}
	}

	svg {
		filter: drop-shadow(2px 2px 1px #000);
		max-height: 100%;
		transition: max-height 0.7s;
	}
`;
