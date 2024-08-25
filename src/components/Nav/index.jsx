import * as S from "./styles";
import { liValues } from "../helpers/data";
import { useState } from "react";

export const Nav = () => {
	const [activeId, setActiveId] = useState(0);

	return (
		<S.Nav>
			<S.Menu>
				{liValues.map((value) => (
					<li key={value.id}>
						<S.Anchor
							className={activeId === value.id ? "active" : undefined} // Apply "active" class if the item is active
							onClick={() => setActiveId(value.id)} // Set active item on click
							to={value.idLink}
							smooth={true}
							offset={-84}  // Offset for fixed header
							duration={500}
						>
							{value.text}
						</S.Anchor>
					</li>
				))}
			</S.Menu>
		</S.Nav>
	);
};
