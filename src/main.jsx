import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProjectContextProvider } from "./context/ProjectContext";
import { GithubContextProvider } from "./context/GithubContext";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ProjectContextProvider>
			<GithubContextProvider>
				<GlobalStyle />
				<App />
			</GithubContextProvider>
		</ProjectContextProvider>
	</React.StrictMode>
);
