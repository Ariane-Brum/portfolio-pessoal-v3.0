import * as S from "./styles";

export const TechnologieItem = ({ icon, techName }) => {
	return (
		<S.TechnologieItem>
			{icon}
			<span>{techName}</span> {/* Display the technology name */}
		</S.TechnologieItem>
	);
};
