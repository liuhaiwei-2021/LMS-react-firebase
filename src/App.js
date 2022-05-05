import { Route, Routes } from "react-router-dom";
import RequireAuth from "./components/authentication/RequireAuth";
import Unauthorized from "./components/authentication/Unauthorized";
import Layout from "./components/Layout";
import Navigation from "./components/shared/Navigation";
import Course from "./components/shared/Course";
import Profile from "./components/shared/Profile";
import DashBoard from "./pages/Dashboard";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Management from "./pages/Management";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";
import "./styles/App.css";

function App() {
	const ROLES = {
		Teacher: 2,
		Student: 1,
	};

	return (
		<>
			{<Navigation />}
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* public routes */}
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<LogIn />} />
					<Route path="/recover" element={<RecoverPassword />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/unauthorized" element={<Unauthorized />} />

					{/* I want to protect these routes */}
					<Route element={<RequireAuth allowedRoles={[ROLES.Student, ROLES.Teacher]} />}>
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/courses/:id" element={<Course />} />
					</Route>

					<Route element={<RequireAuth allowedRoles={[ROLES.Teacher]} />}>
						<Route path="/management" element={<Management />} />
					</Route>

					{/* catch all */}
					{/* <Route path="*" element={<Missing />} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
