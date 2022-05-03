// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Navigation from "../components/Navigation";
import Dashboard from "../components/Dashboard";
import Profile from "../components/profile/Profile";
import Student from "../pages/Student";
import Teacher from "../pages/Teacher";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export default function LoggedRoutes() {
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/student" element={<Student />} />
				<Route path="/teacher" element={<Teacher />} />
				<Route path="profile" element={<Profile />} />
			</Routes>
		</>
	);
}
