// NPM packages
import { Link } from "react-router-dom";

export default function NotLogged() {
	return (
		<div id="not-logged">
			<h1> You are not login</h1>
			<p>Please don't forget to login or create an account to access our content</p>
			<Link to="/signup">Sign up</Link>
			<br />
			<Link to="/login">Login</Link>
		</div>
	);
}
