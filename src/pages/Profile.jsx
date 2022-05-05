import { useUser } from "../state/UserContext";

export default function Profile({}) {
	const { user } = useUser();
	console.log(user);
	const { name, email, roles } = user;

	// const role = isTeacher ? "Teacher" : "Student";
	return (
		<div className="container content">
			<h1>{name}</h1>
			<p>Novare University</p>
			<span>Role: {roles}</span>
			<p>{email}</p>
		</div>
	);
}
