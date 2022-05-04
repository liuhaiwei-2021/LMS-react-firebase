//Project files
import StudentCard from "./StudentCard";
import useFetch from "../../hooks/useFetch";
import Loader from "../../scripts/Loader";
import Error from "../shared/Error";
import "../../styles/CourseList.css";

export default function StudentList() {
	const { data: users, loading, error } = useFetch("users");

	const students = users.filter((item) => {
		return item.isTeacher === false;
	});

	const Students = students.map((student, index) => (
		<StudentCard key={index} student={student} />
	));
	return (
		<div className="course-list">
			{loading && <Loader />}
			{error && <Error />}
			<h1>Student List</h1>
			<div className="course-group">{Students}</div>
		</div>
	);
}
