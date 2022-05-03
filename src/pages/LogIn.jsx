// NPM packages
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

// Project files
import { loginUser } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthProvider";
import { useUser } from "../state/UserProvider";
import { readDocument } from "../scripts/fireStore";

import form from "../data/loginForm.json";
import InputField from "../components/authentication/InputField";
import firebaseErrors from "../data/firebaseErrors.json";
import Loader from "../scripts/Loader";
import "../styles/SignUp.css";

export default function SignUp({}) {
	//Global state
	const { setUser } = useUser();
	const { setLoggedIn, uid } = useAuth();

	// Local state
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const [status, setStatus] = useState(0);

	//properties
	const navigation = useNavigate();

	// Method
	async function onLogin(e) {
		e.preventDefault();
		const uid = await loginUser(email, password).catch(onFail);
		if (uid) onSucess(uid);
	}

	async function onSucess(data) {
		const payload = await readDocument("users", uid);
		setUser(payload.data);
		setLoggedIn(true);

		navigation("/teacher");
	}

	function onFail(error) {
		const message = firebaseErrors[error.code] || firebaseErrors["default"];
		console.log(error.code);

		alert(message);
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
