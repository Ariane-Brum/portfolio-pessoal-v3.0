import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderProject = styled.header`
	background: var(--color-12);
	box-shadow: 0 1px 1px var(--color-11);
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(24px);
	-webkit-backdrop-filter: blur(24px);
	position: fixed;
	width: 100%;
	z-index: 99;
	top: 0;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.25rem;
	justify-content: center;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;

	@media (max-width: 31.5rem) {
		gap: 0.625rem;
	}
`;

export const HeaderLogo = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--color-5);

	svg {
		color: var(--color-p2);
		font-size: 2rem;
	}
`;
