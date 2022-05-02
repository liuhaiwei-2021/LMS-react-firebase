// NPM package
import { Routes, Route } from "react-router-dom";

// Project files

import TeacherDashboard from "../components/teacher/TeacherDashboard";
import Students from "../pages/Students";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import RecoverPassword from "../pages/RecoverPassword";
import SignUp from "../pages/SignUp";
import Profile from "../components/profile/Profile";

export default function LoggedRoutes() {
	return (
		<div className="content">
			<Routes>
				<Route path="/" element={<Home />} />

				<Route path="dashboard" element={<TeacherDashboard />} />
				<Route path="students" element={<Students />} />
				<Route path="login" element={<LogIn />} />
				<Route path="recover-password" element={<RecoverPassword />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="profile" element={<Profile />} />
			</Routes>
		</div>
	);
}
