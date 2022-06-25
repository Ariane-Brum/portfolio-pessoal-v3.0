import { HashRouter, Route, Routes } from "react-router-dom";
import Project from "./pages/Project";
import Home from "./pages/Home";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:id" element={<Project />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
