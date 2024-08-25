import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*::after,
*::before {
	box-sizing: inherit;
}

::-webkit-scrollbar {
	width: 1rem;
}

::-webkit-scrollbar-track {
	margin: 1rem 0;
	border-radius: 1rem;
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	border-radius: 1.5rem;
	border: 0.375rem solid transparent;
	background-color: #e4a30b;
	background-clip: padding-box;
	transition: background-color 0.16s ease;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #fea;
}

:root {
	/* Color palette */
	--color-0: #fff;
	--color-1: #f7f7f7;
	--color-2: #ededed;
	--color-3: #dedede;
	--color-4: #cccccc;
	--color-5: #b2b2b2;
	--color-6: #9c9c9c;
	--color-7: #717171;
	--color-8: #595959;
	--color-9: #404040;
	--color-10: #2e2e2e;
	--color-11: #111;
	--color-12: #000;

	--color-p0: #fea;
	--color-p1: #ffbb00;
	--color-p2: #e4a30b;
	--color-p3: #a66f00;
	--color-p4: #664400;
	--color-p5: #332200;

	--gradient: linear-gradient(#ffbf00, #f2a50c);

	/* Poppins */
	--poppins-12: 400 0.75rem/1.35 "Poppins", sans-serif;
	--poppins-16: 400 1rem/1.5 "Poppins", sans-serif;
	--poppins-18: 400 1.125rem/1.35 "Poppins", sans-serif;
	--poppins-24: 400 1.5rem/1.5 "Poppins", sans-serif;
	--poppins-32: 600 2rem/1.25 "Poppins", sans-serif;
	--poppins-48: 600 3rem/1.5 "Poppins", sans-serif;
	--poppins-64: 600 4rem/1.125 "Poppins", sans-serif;

	/* Roboto */
	--roboto-14: 400 0.875rem/1.43 "Roboto", sans-serif;
	--roboto-16: 400 1rem/1.5 "Roboto", sans-serif;
	--roboto-18: 500 1.125rem/1.35 "Roboto", sans-serif;
	--roboto-24: 400 1.5rem/1.5 "Roboto", sans-serif;
	--roboto-32: 500 2rem/1.25 "Roboto", sans-serif;
}

@media (max-width: 1080px) {
	html {
		font-size: 93.75%;
	}
}

@media (max-width: 720px) {
	html {
		font-size: 87.5%;
	}
}

body {
	font-family: "Roboto", sans-serif;
	-webkit-font-smoothing: antialiased;
	background: var(--color-12);
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
	color: inherit;
}

button {
	cursor: pointer;
}

img {
	max-width: 100%;
	display: block;
	height: auto;
	border-radius: 4px;
}

/* Splide styles */

.splide {
	padding: 2.5rem;
	background: var(--color-12);
	border-radius: 4px;
	max-width: 650px;
	margin-bottom: 2.5rem;
	width: 100%;

	@media (max-width: 992px) {
		margin-bottom: 0;
	}
}

.splide__arrow svg {
	fill: var(--color-p1);
	height: 2.5rem;
	width: 2.5rem;
	transition: fill 0.2s linear;
}

@media (max-width: 800px) {
	.splide__arrow svg {
		padding: 0.5rem;
	}
}

.splide__arrow:hover:not(:disabled) svg {
	fill: var(--color-p0);
}

.splide__arrow--next {
	right: 0;
}

.splide__arrow--prev {
	left: 0;
}

.splide__slide img {
	border-radius: 4px;
}

.splide__pagination__page.is-active {
	background: var(--color-p1);
	z-index: 1;
}

.splide__pagination {
	bottom: 10px;
}
`;
