import * as S from "./styles";
import { FaHome } from "react-icons/fa";
import { Container } from "../../../components/Container";

export const HeaderProject = () => {
	return (
		<S.HeaderProject>
			<Container>
				<S.HeaderWrapper>
					<S.HeaderLogo to="/">
						<FaHome />
						Home
					</S.HeaderLogo>
				</S.HeaderWrapper>
			</Container>
		</S.HeaderProject>
	);
};
