// NPM package
import { Routes, Route, Router, Navigate } from "react-router-dom";

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

// import RequireAuth from "../components/RequireAuth";
import Unauthorized from "../components/Unauthorized";
import Missing from "../components/Missing";

export default function LoggedRoutes() {
	// const ROLES = {
	// 	User: "student",
	// 	Admin: "teacher",
	// };

	const { user } = useUser();
	console.log(user);

	return (
		<>
			<Navigation />
			<Routes>
				{/* <Route path="/" element={<Home />} /> */}
				<Route exact path="/" element={<Teacher />} />
				<Route path="/login" element={<LogIn />} />
				<Route path="/signup" element={<SignUp />} />
				<Route path="/courses/:id" element={<Course />} />
				<Route path="/student" element={<Student />} />
				{/* <Route element={<RequireAuth allowedRoles={[1, 2]} />}> */}
				<Route path="/teacher" element={<Teacher />} />
				{/* </Route> */}

				<Route path="/profile" element={<Profile />} />
				<Route path="*" element={<Missing />} />
			</Routes>
		</>
	);
}
