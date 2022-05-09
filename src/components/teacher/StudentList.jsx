//NPM packages
import { useEffect } from "react";

//Project files
import { useStudents } from "../../state/StudentsContext";
import useFetch from "../../hooks/useFetch";
import Loader from "../../scripts/Loader";
import Error from "../shared/Error";
import StudentCard from "./StudentCard";

export default function StudentList() {
	//Global state
	const { students, setStudents } = useStudents();
	const { data: users, loading, error } = useFetch("users");

	//properties
	const studentsArr = users.filter((user) => user.isTeacher === false);

	const Students = studentsArr.map((student, index) => (
		<StudentCard key={index} student={student} />
	));

	return (
		<div className="list">
			{loading && <Loader />}
			{error && <Error />}
			<h4>Student List</h4>
			<div className="card-group">{Students}</div>
		</div>
	);
}
