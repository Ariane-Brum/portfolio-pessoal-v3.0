import styled, { keyframes } from "styled-components";

const iconMove = keyframes`
	0% {
		transform: translate3d(0, 0, 0);
	}
	100% {
		transform: translate3d(10px, -40px, 0);
	}
`;

export const Icon = styled.div`
	background: var(--color-12);
	max-width: 70px;
	max-height: 70px;
	border-radius: 4px;
	position: absolute;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem;
	box-shadow: 0 2px 3px 0 rgb(0 0 0 / 50%);

	svg {
		font-size: 70px;
		color: var(--color-p1);
		filter: drop-shadow(2px 2px 1px #000);

		@media (max-width: 78.438rem) {
			font-size: 2.813rem;
		}

		@media (max-width: 37.5rem) {
			font-size: 1.875rem;
		}
	}

	&.iconJS {
		bottom: 165px;
		left: 26px;
		animation: ${iconMove} 3s ease 0.6s infinite alternate;

		@media (max-width: 78.438rem) {
			bottom: 62px;
			left: -32px;
		}

		@media (max-width: 50rem) {
			left: -16px;
			bottom: 81px;
		}

		@media (max-width: 37.5rem) {
			bottom: 31px;
		}
	}

	&.iconHTML {
		top: 52px;
		left: 48px;
		animation: ${iconMove} 3s ease 2.9s infinite alternate;

		@media (max-width: 78.438rem) {
			left: -23px;
			top: 20px;
		}

		@media (max-width: 50rem) {
			left: 27px;
			top: 16px;
		}

		@media (max-width: 37.5rem) {
			left: 2px;
			top: 16px;
		}
	}

	&.iconCSS {
		top: 48px;
		left: 446px;
		animation: ${iconMove} 3s ease 1.9s infinite alternate;

		@media (max-width: 78.438rem) {
			top: 16px;
			left: 267px;
		}

		@media (max-width: 50rem) {
			left: 260px;
		}

		@media (max-width: 37.5rem) {
			left: 195px;
		}
	}
`;
