import styled, { keyframes } from "styled-components";

const blinkTextCursor = keyframes`
	from {border-right-color: rgba(0, 0, 0, .75);}
	to {border-right-color: var(--color-p1)}
`;

export const TextCursor = styled.span`
	border-right: 2px solid var(--color-p1);
	display: inline;
	margin-left: 0.438rem;
	animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const Container = styled.p`
	display: inline-block;
	margin: 0;
	font: var(--roboto-24);
	color: var(--color-5);

	@media (max-width: 37.5rem) {
		font: var(--roboto-18);
	}
`;
