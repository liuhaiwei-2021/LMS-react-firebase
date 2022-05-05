//NPM packages
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Project files
import { logOut } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthContext";
import { useUser } from "../state/UserContext";

// import Loader from "../scripts/Loader";
import "../styles/Navigation.css";

function Navigation() {
	//Global state
	const { setLoggedIn } = useAuth();
	const { user, setUser } = useUser();
	console.log("navigation", user?.roles);
	const admin = user?.roles.find((role) => role === 2);

	//properties
	const navigation = useNavigate();
	const toggleLabel = user ? "LOG UT" : "";

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
					<li className="nav-item">
						<NavLink className="nav-link" to="/profile" exact="true">
							Profile
						</NavLink>
					</li>
					{admin && (
						<li className="nav-item">
							<NavLink className="nav-link" to="/management" exact="true">
								Management
							</NavLink>
						</li>
					)}
					<li>
						<img src={user?.avatar} alt="" />
					</li>
					<li>
						<span className="toggle" onClick={onLogout}>
							{toggleLabel}
						</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
