//Project files
import StudentCard from "./StudentCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../../scripts/Loader";
import Error from "../shared/Error";
import "../../styles/CourseList.css";

export default function StudentList() {
	const { data: users, loading, error } = useFetch("users");

	const students = users.filter((item) => {
		item.roles.length = 1;
		return item;
	});

	const Students = students.map((student, index) => (
		<StudentCard key={index} student={student} />
	));
	return (
		<div className="course-list">
			{loading && <Loader />}
			{error && <Error />}
			<h1>Student List</h1>
			<div className="student-group">{Students}</div>
		</div>
	);
}
