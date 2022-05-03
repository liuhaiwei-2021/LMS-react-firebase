import { useCourses } from "../../state/CoursesContext";
import CourseCard from "./CourseCard";
import "../../styles/CourseList.css";

export default function CourseList() {
	// Global state
	const { courses } = useCourses();

	const Courses = courses.map((course, index) => <CourseCard key={index} course={course} />);
	return (
		<div className="course-list">
			<h1>Course List</h1>
			<div className="course-group">{Courses}</div>
		</div>
	);
}
