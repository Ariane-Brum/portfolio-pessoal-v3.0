import styled from "styled-components";

export const Footer = styled.footer`
	background: var(--color-11);
	color: #fff;
	padding-top: 5rem;
	padding-bottom: 5rem;

	p {
		grid-column: 1/-1;
		font: var(--roboto-18);
		color: var(--color-6);
		display: flex;
		align-items: center;
		gap: 0.375rem;
		margin-top: 2.5rem;

		@media (max-width: 37.5rem) {
			margin-top: 1rem;
		}
	}

	@media (max-width: 50rem) {
		padding-top: 2.5rem;
		padding-bottom: 2.5rem;
	}
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: 3fr 5fr 4fr;
	gap: 2.5rem;

	h3 {
		margin-bottom: 2rem;
		text-transform: uppercase;
		letter-spacing: 0.015em;
		font: var(--roboto-24);
		color: var(--color-0);

		@media (max-width: 37.5rem) {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: 50rem) {
		grid-template-columns: 1fr 1fr;
	}

	@media (max-width: 37.5rem) {
		grid-template-columns: 1fr;
		gap: 1rem;
	}
`;

export const FooterLogo = styled.div`
	@media (max-width: 50rem) {
		display: none;
	}
`;

export const FooterContact = styled.div``;

export const ContactList = styled.ul`
	margin-bottom: 2rem;
	font: var(--roboto-18);
	color: var(--color-5);
	
	li {
		margin-bottom: 1rem;

		a:hover {
			color: var(--color-0);
		}

		&:nth-child(2):after {
			content: "";
			display: block;
			max-width: 360px;
			height: 2px;
			background: var(--color-10);
			margin-top: 1rem;
		}
	}
`;

export const FooterSocial = styled.div``;

export const SocialList = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;

	a {
		transition: 0.3s;
		
		&:hover svg {
			fill: var(--color-p0);
		}
	}
`;
