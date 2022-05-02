import { useUID } from "../../state/UIDContext";
import { useState } from "react";
import { readDocument } from "../../scripts/fireStore";

function TeacherDashboard() {
	const { uid } = useUID();
	const id = uid.data;
	const [user, setUser] = useState({});
	const [status, setStatus] = useState(0); // 0: loading, 1: loaded, 2: error

	async function loadData(id) {
		const payload = await readDocument("/users", id);
		const { data, error } = payload;
		error ? loadFail(data) : loadSucceed(data);
	}

	loadData(id);

	function loadSucceed(data) {
		setUser(data);
		setStatus(1);
	}

	function loadFail(data) {
		console.log(data);
		setStatus(2);
	}

	const { name, email } = user;

	return (
		<div>
			<h1>{name}</h1>
			<h1>{email}</h1>
		</div>
	);
}

export default TeacherDashboard;
