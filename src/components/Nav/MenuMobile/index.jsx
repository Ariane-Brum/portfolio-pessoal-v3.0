import * as S from "./styles";
import { useState } from "react";
import { liValues } from "../../helpers/data";

export const MenuMobile = () => {
	const [activeId, setActiveId] = useState(0);

	return (
		<S.Navigation>
			<ul>
				{liValues.map((value) => (
					<S.Li
						className={activeId === value.id ? "active" : undefined}
						key={value.id}
					>
						<S.Anchor
							activeClass="active"
							to={value.idLink}
							onClick={() => setActiveId(value.id)}
							className={activeId === value.id ? "active" : undefined}
							smooth={true}
							offset={-128}
							duration={500}
						>
							<S.Icon>{<value.icon />}</S.Icon>
							<S.Text>{value.text}</S.Text>
						</S.Anchor>
					</S.Li>
				))}
				<S.Indicator></S.Indicator>
			</ul>
		</S.Navigation>
	);
};
