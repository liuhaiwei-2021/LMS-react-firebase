// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Navigation from "../components/Navigation";
import Dashboard from "../components/Dashboard";
import Profile from "../components/profile/Profile";
import Student from "../pages/Student";
import LogIn from "../pages/LogIn";

export default function LoggedRoutes() {
	return (
		<div className="main">
			<Navigation />
			<div className="content container">
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="student" element={<Student />} />
					<Route path="profile" element={<Profile />} />
				</Routes>
			</div>
		</div>
	);
}
