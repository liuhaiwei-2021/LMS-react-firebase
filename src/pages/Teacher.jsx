import CourseList from "../components/shared/CourseList";
import StudentList from "../components/teacher/StudentList";

export default function Teacher() {
	return (
		<div className="teacher container">
			<h1>teacher page</h1>
			<CourseList />
			<StudentList />
		</div>
	);
}
