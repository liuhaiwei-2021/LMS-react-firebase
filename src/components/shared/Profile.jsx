import { useUser } from "../../state/UserContext";

export default function Profile({}) {
	const { user } = useUser();
	const { name, email, roles, avatar } = user;
	const Role = user.roles.includes(2) ? "Teacher" : "Student";
	return (
		<div className="container content">
			<img className="profile-img" src={avatar} alt="avatar" />
			<h1>{name}</h1>

			<p>Novare University</p>
			<p>Role:{Role}</p>
			<p>{email}</p>
		</div>
	);
}
