import { useUser } from "../state/UserContext";

export default function Profile({}) {
	const { user } = useUser();
	console.log(user);
	const { name, email, roles } = user;

	// const role = isTeacher ? "Teacher" : "Student";
	return (
		<div className="container content">
			<h1>{name}</h1>
			<img
				src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-avatar-avatars-dreamstale-lineal-dreamstale.png"
				alt="avatar"
			/>
			<p>Novare University</p>
			<p>{roles}</p>
			<p>{email}</p>
		</div>
	);
}
