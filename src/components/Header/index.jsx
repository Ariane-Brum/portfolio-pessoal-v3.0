import * as S from "./styles";
import logo from "/logo.svg";
import { Container } from "../Container";
import { Nav } from "../Nav";
import { MenuMobile } from "../Nav/MenuMobile";
import useMedia from "../../hooks/useMedia";

export const Header = () => {
	const mobile = useMedia("(max-width: 30rem)");

	return (
		<S.Header>
			<Container>
				<S.HeaderWrapper>
					<S.HeaderLogo to="/">
						<img src={logo} alt="Logo do meu site" width={157} height={33} />
					</S.HeaderLogo>
					{mobile ? <MenuMobile /> : <Nav />}
				</S.HeaderWrapper>
			</Container>
		</S.Header>
	);
};
