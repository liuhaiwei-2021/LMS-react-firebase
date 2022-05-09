// NPM package
import { useState } from "react";

// Project files
import Error from "../components/shared/Error";
import StudentCard from "../components/teacher/StudentCard";
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
		<div key={index} className="management-item">
			<StudentCard student={student} />

			<p className="course-name">{student.email}</p>
			<button
				className="btn-delete"
				onClick={() => onDeleteStudent(student.name, student.id)}>
				<img src="/images/delete.png" alt="delete" />
			</button>
		</div>
	));

	return (
		<div className="management container">
			{loading && <Loader />}
			{error && <Error />}
			<div className="management-group">{Students}</div>
		</div>
	);
}
