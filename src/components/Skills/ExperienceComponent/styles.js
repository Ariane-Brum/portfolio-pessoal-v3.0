import styled from "styled-components";

export const Experience = styled.div`
	display: flex;
	gap: 1.25rem;

	@media (max-width: 37.5rem) {
		flex-direction: column;
		max-width: 400px;
	}
`;

export const DecX = styled.img`
	position: absolute;
	bottom: -35px;
	left: 0;
`;
