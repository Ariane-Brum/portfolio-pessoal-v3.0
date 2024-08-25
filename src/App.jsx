import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { NotFound } from "./pages/NotFound";
import { Loading } from "./components/helpers/Loading";

const Home = lazy(() => import("./pages/Home"));
const Project = lazy(() => import("./pages/Project"));

function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="project/:id" element={<Project />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

export default App;
