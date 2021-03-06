// NPM packages
import { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// Project files
import { loginUser } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthContext";
import { useUser } from "../state/UserContext";
import { readDocument } from "../scripts/fireStore";

import form from "../data/loginForm.json";
import InputField from "../components/shared/InputField";
import "../styles/SignUp.css";

export default function LogIn() {
	//Global state
	const { setUID, setLoggedIn } = useAuth();
	const { setUser } = useUser();

	// Local state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//properties
	const navigation = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || "/";

	// Method
	async function onLogin(e) {
		e.preventDefault();
		const payload = await loginUser(email, password);
		const { uid, errMessage } = payload;
		setUID(uid);
		if (uid) onSucess(uid);
		if (errMessage !== "") onFail(errMessage);
	}

	async function onSucess(uid) {
		const payload = await readDocument("users", uid);

		setUser(payload.data);
		setLoggedIn(true);
		setEmail("");
		setPassword("");
		navigation("/dashboard");
	}

	function onFail(errMessage) {
		alert(errMessage); //need transform to friend word
	}

	return (
		<div className="sign-up">
			<h1>Log In</h1>
			<h2>Start choose your future today!</h2>
			<form onSubmit={onLogin}>
				<InputField setup={form.email} state={[email, setEmail]} />
				<InputField setup={form.password} state={[password, setPassword]} />
				<button className="btn-sign-up">LOG IN</button>
			</form>
			<p>
				<Link to="/recover">Forget your password?</Link>
			</p>
			<p>
				<Link to="/signup">Creat a new account</Link>
			</p>
		</div>
	);
}
