import * as S from "./styles";

export const Subtitle = ({ children }) => {
	return (
		<S.Subtitle>
			{children}
			<span>.</span> {/* Decorative dot in the subtitle */}
		</S.Subtitle>
	);
};
