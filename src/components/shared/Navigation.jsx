//NPM packages
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Project files
import { logOut } from "../../scripts/firebaseAuth";
import { useAuth } from "../../state/AuthContext";
import { useUser } from "../../state/UserContext";
import "../../styles/Navigation.css";

// import Loader from "../scripts/Loader";

function Navigation() {
	//Global state
	const { setLoggedIn } = useAuth();
	const { user, setUser } = useUser();

	const admin = user?.roles?.find((role) => role === 2);
	console.log(user);

	//properties
	const navigation = useNavigate();
	const toggleLabel = user ? "Log Ut" : "";
	console.log(user);

	// Methods
	async function onLogout() {
		const payload = await logOut();
		const { data, error } = payload;
		error ? onFail(data) : onSuccess(data);
	}

	function onSuccess(data) {
		setLoggedIn(false);
		setUser(null);

		alert("Log out successfully!");
		navigation("/login");
	}

	function onFail(data) {
		console.log(data);
		alert("logut failed");
	}

	return (
		<div className="nav-bar">
			<div className="nav-container">
				<div>
					<Link className="navbar-link" to="/">
						<img className="logo" src="/images/logo.png" alt="logo" />
						<span className="web-name">Mind Match</span>
					</Link>
				</div>

				<ul className="navbar-items">
					{user && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/profile" exact="true">
								Profile
							</NavLink>
						</li>
					)}
					{admin && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/management" exact="true">
								Management
							</NavLink>
						</li>
					)}
					<li>
						<span className="toggle" onClick={onLogout}>
							{toggleLabel}
						</span>
					</li>

					{!user && (
						<li>
							<NavLink className="nav-link" to="/signup" exact="true">
								Sign Up
							</NavLink>
						</li>
					)}

					{!user && (
						<li>
							<NavLink className="nav-link" to="/login" exact="true">
								Log In
							</NavLink>
						</li>
					)}
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
