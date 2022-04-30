import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import "./styles/App.css";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import RecoverPassword from "./pages/RecoverPassword";

function App() {
	return (
		<div className="main">
			<BrowserRouter>
				<div className="content">
					<Routes>
						<Route path="/" element={<Home />} exact />
						<Route path="/signup" element={<SignUp />} exact />
						<Route path="/login" element={<LogIn />} exact />
						<Route path="/recover" element={<RecoverPassword />} exact />

						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
