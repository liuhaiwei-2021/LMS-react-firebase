//NPM packages
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//Project files
import { logOut } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthProvider";
import { useUser } from "../state/UserProvider";
import "../styles/Navigation.css";

function Navigation() {
	//Global state
	const { loggedIn, setLoggedIn, uid } = useAuth();
	const { setUser } = useUser();

	//Local state
	const [status, setStatus] = useState(0);

	//properties
	const navigation = useNavigate();
	const toggleLabel = loggedIn ? "LOG UT" : "LOG IN";

	// Methods
	async function onLogout() {
		const payload = await logOut();
		const { data, error } = payload;
		error ? onFail(data) : onSuccess(data);
	}

	function onSuccess(data) {
		setLoggedIn(false);
		setUser(null);
		alert("you log out");
		navigation("/login");
		setStatus(0);
	}

	function onFail(data) {
		console.log(data);
		setStatus(2);
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
					<li className="nav-item">
						<NavLink className="nav-link" to="/profile" exact="true"></NavLink>
					</li>
					<li>
						<button onClick={onLogout}> {toggleLabel} </button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navigation;
