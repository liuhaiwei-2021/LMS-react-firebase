// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import NotLogged from "../pages/NotLogged";
import RecoverPassword from "../pages/RecoverPassword";
import SignUp from "../pages/SignUp";

export default function UnloggedRoutes() {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/recover" element={<RecoverPassword />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="*" element={<NotLogged />} />
			</Routes>
		</div>
	);
}
