// NPM packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Project files
import { createDocument, createDocumentWithId } from "../scripts/fireStore";
import { createUser } from "../scripts/firebaseAuth";

import form from "../data/signUpForm.json";
import InputField from "../components/authentication/InputField";
import "../styles/SignUp.css";

export default function SignUp({ uidState }) {
	// const { setUID } = useUID();
	const navigation = useNavigate();

	const [name, setName] = useState("");
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

	async function createUID() {
		const payload = await createUser(email, password);
		const { data, error } = payload;

		if (error) {
			onFailure(data);
			return;
		} else return data;
	}

	async function createDocument(uid) {
		const user = { name: name };
		const payload = await createDocumentWithId("users", uid, user);
		const { data, error } = payload;

		if (error) {
			onFailure(data);
			return;
		} else return data;
	}

	function onFailure(errorText) {
		console.error(errorText);
		alert(`Sorry something happened: ${errorText}`);
	}

	return (
		<div className="sign-up">
			<h1>Sign Up</h1>
			<h2>Start choose your future today!</h2>
			<form>
				<InputField setup={form.name} state={[name, setName]} />
				<InputField setup={form.email} state={[email, setEmail]} />
				<InputField setup={form.password} state={[password, setPassword]} />
				<button className="btn-sign-up">SIGN UP</button>
			</form>
			<p>
				<Link to="/login">
					Do you already have an account? <span className="log-in">Log in</span>
				</Link>
			</p>
		</div>
	);
}
