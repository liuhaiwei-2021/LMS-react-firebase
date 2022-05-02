// NPM packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Project files

import form from "../data/loginForm.json";
import InputField from "../components/authentication/InputField";
import "../styles/SignUp.css";

export default function SignUp({ uidState }) {
	// const { setUID } = useUID();
	const navigation = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	// async function onSignUp(event) {
	// 	event.preventDefault();

	// 	const uid = await createUID();
	// 	let user = null;

	// 	if (uid) {
	// 		user = await createDocument(uid);
	// 	}

	// 	if (user) {
	// 		setUID(uid);
	// 		navigation("/dashboard");
	// 	}
	// }

	return (
		<div className="sign-up">
			<h1>Log In</h1>
			<h2>Start choose your future today!</h2>
			<form>
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
