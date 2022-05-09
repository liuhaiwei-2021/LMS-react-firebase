// NPM package
import { useState } from "react";

// Project files
import Error from "../components/shared/Error";
import { deleteDocument } from "../scripts/fireStore";
import Loader from "../scripts/Loader";
import { useStudents } from "../state/StudentsContext";
import "../styles/Management.css";

export default function StudentsManagement() {
	//Global state
	const { students, setStudents } = useStudents();

	//local state
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	async function onDeleteStudent(name, id) {
		const payload = deleteDocument("users", id);
		const { error, loading } = payload;

		if (!error) alert("Deleted successfully!");

		setError(error);
		setLoading(loading);
		const filteredStudents = students.filter((student) => student.id !== id);
		setStudents(filteredStudents);
	}

	const Students = students.map((student, index) => (
		<li key={index} className="coure-item">
			<span className="course-name">{student.name}</span>
			<button
				className="btn-delete"
				onClick={() => onDeleteStudent(student.name, student.id)}>
				<img src="/images/delete.png" alt="delete" />
			</button>
		</li>
	));

	return (
		<div className="management container">
			{loading && <Loader />}
			{error && <Error />}

			<h1 className="tab">Student Management</h1>

			<ul className="course-group">{Students}</ul>
		</div>
	);
}
