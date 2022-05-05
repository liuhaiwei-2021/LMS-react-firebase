import { BrowserRouter, Routes, Route } from "react-router-dom";

// import LoggedRoutes from "./routes/LoggedRoutes";
// import UnloggedRoutes from "./routes/UnloggedRoutes";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import RecoverPassword from "./pages/RecoverPassword";
import SignUp from "./pages/SignUp";
import Missing from "./components/Missing";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Layout from "./components/Layout";
import Course from "./components/shared/Course";
import Student from "./pages/Student";

import Navigation from "./components/Navigation";
import Profile from "./components/shared/Profile";
import Management from "./pages/Management";
import "./styles/App.css";
import DashBoard from "./pages/Dashboard";

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
					<Route path="unauthorized" element={<Unauthorized />} />

					{/* we want to protect these routes */}
					<Route element={<RequireAuth allowedRoles={[ROLES.Student, ROLES.Teacher]} />}>
						<Route path="/dashboard" element={<DashBoard />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/courses/:id" element={<Course />} />

						<Route path="/student" element={<Student />} />
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
