import * as S from "./styles";

export const AboutIcon = ({ Icon, name }) => {
	return (
		<S.Icon className={name}>
			<Icon />
		</S.Icon>
	);
};
