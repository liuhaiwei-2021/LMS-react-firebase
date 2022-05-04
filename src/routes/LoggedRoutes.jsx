// NPM package
import { Routes, Route } from "react-router-dom";

// Project files
import Navigation from "../components/Navigation";
import Course from "../components/shared/Course";
import Profile from "../pages/Profile";
import Student from "../pages/Student";
import Teacher from "../pages/Teacher";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import { useUser } from "../state/UserContext";

export default function LoggedRoutes() {
	const { user, setUser } = useUser();
	return (
		<>
			<Navigation />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/courses/:id" element={<Course />} />
				<Route path="/student" element={<Student />} />
				<Route path="/teacher" element={<Teacher />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</>
	);
}
