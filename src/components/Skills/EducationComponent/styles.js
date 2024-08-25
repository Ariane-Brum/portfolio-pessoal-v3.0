import styled from "styled-components";

export const Education = styled.div`
	display: flex;
	gap: 1.25rem;

	@media (max-width: 37.5rem) {
		flex-direction: column;
		max-width: 400px;
	}
`;

export const DecX = styled.img`
	position: absolute;
	right: 0px;
	bottom: -35px;
`;

export const DecY = styled.img`
	position: absolute;
	bottom: 0px;
	right: -40px;
`;
