// import { useLocation, Navigate, Outlet } from "react-router-dom";
// import { useUser } from "../state/UserContext";

// function RequireAuth({ allowedRoles }) {
// 	const { user } = useUser();
// 	const location = useLocation();
// 	console.log("required", user);

// 	// return user?.roles?.find((role) => allowedRoles?.includes(role)) ? (
// 	// 	<Outlet />
// 	// ) : user ? (
// 	// 	<Navigate to="/unauthorized" state={{ from: location }} replace />
// 	// ) : (
// 	// 	<Navigate to="/login" state={{ from: location }} replace />
// 	// );
// 	user.roles === 2;

// 	return user.roles === 2 ? <Navigate to="/teacher" /> : <Navigate to="/student" />;
// }

// export default RequireAuth;
