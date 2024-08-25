import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
	background: rgba(0, 0, 0, 0.8);
	backdrop-filter: blur(24px);
	-webkit-backdrop-filter: blur(24px);
	box-shadow: 0 1px 1px var(--color-11);
	position: fixed;
	width: 100%;
	z-index: 99;
	top: 0;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.25rem;
	justify-content: space-between;
	align-items: center;
	padding-top: 1rem;
	padding-bottom: 1rem;

	@media (max-width: 50rem) {
		justify-content: center;
		flex-direction: column;
	}
`;

export const HeaderLogo = styled(Link)`
	img {
		height: 28px;
	}

	@media (max-width: 30rem) {
		display: none;
	}
`;
