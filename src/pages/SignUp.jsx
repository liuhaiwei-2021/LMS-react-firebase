// NPM packages
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Project files
import { createDocumentWithId } from "../scripts/fireStore";
import { createUser } from "../scripts/firebaseAuth";
import { useAuth } from "../state/AuthContext";

import firebaseErrors from "../data/firebaseErrors.json";
import form from "../data/signUpForm.json";
import InputField from "../components/shared/InputField";
import Loader from "../scripts/Loader";
import "../styles/SignUp.css";

export default function SignUp({}) {
	//Global state
	const { loggedIn, setLoggedIn, uid, setUID, user, setUser } = useAuth();

	//Local state
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	//properties
	const navigation = useNavigate();

	async function onSignUp(e) {
		e.preventDefault();

		const uid = await createUID().catch(onFail);
		let user;
		if (uid) user = await createDocument(uid).catch(onFail);
		if (user) onSuccess(uid);
	}

	async function createUID() {
		const result = await createUser(email, password);
		const uid = result.data;
		return uid;
	}

	async function createDocument(uid) {
		const user = { name: name, email: email, roles: "student" };
		const document = await createDocumentWithId("users", uid, user);
		return document;
	}

	function onSuccess(uid) {
		setUID(uid);
		navigation("/login");
	}

	function onFail(error) {
		const message = firebaseErrors[error.code] || firebaseErrors["default"];

		alert(message);
	}

	return (
		<div className="sign-up">
			<h1>Sign Up</h1>
			<h2>Start choose your future today!</h2>
			<form onSubmit={onSignUp}>
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
