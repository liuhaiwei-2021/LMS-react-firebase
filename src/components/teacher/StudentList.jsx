//Project files
import StudentCard from "./StudentCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../../scripts/Loader";
import Error from "../shared/Error";
import "../../styles/CourseList.css";

export default function StudentList() {
	const { data: users, loading, error } = useFetch("users");

	const students = users;
	// filter((item) => {});
	// console.log(students);

	const Students = students.map((student, index) => (
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
