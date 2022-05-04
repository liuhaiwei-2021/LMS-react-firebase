// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import RecoverPassword from "../pages/RecoverPassword";
import SignUp from "../pages/SignUp";
// import NotFound from "../pages/NotFound";

export default function UnloggedRoutes() {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/recover" element={<RecoverPassword />} />
				<Route path="/signup" element={<SignUp />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</div>
	);
}
