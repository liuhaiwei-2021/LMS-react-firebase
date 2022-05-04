import StudentCard from "./StudentCard";
import useFetch from "../../hooks/useFetch";
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
			<h1>Course List</h1>
			<div className="course-group">{Students}</div>
		</div>
	);
}
