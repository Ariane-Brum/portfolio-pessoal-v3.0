import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProjectContextProvider } from "./context/ProjectContext";
import { GlobalStyle } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProjectContextProvider>
      <GlobalStyle />
      <App />
    </ProjectContextProvider>
  </React.StrictMode>
);
