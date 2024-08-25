import React, { useEffect } from "react";

const Head = ({ title, description }) => {
	useEffect(() => {
		document.title = `${title} | Portfólio`;
		document
			.querySelector("meta[name='description']")
			.setAttribute("content", description || "");
	}, [title, description]);

	return null;
};

export default Head;
