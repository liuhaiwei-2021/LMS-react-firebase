//NPM packages
import { useEffect } from "react";
//Project files
import { useCourses } from "../../state/CoursesContext";
import useFetch from "../../hooks/useFetch.js";
import CourseCard from "./CourseCard";
import Loader from "../../scripts/Loader";
import Error from "./Error";
import "../../styles/CourseList.css";

export default function CourseList() {
	//Global state
	const { courses, setCourses } = useCourses();

	//properties
	const { data, loading, error } = useFetch("courses");

	//methods
	useEffect(() => {
		setCourses(data);
	}, [data]);

	const Courses = courses.map((course, index) => <CourseCard key={index} course={course} />);

	return (
		<div className="course-list">
			{loading && <Loader />}
			{error && <Error />}
			<h1>Course List</h1>
			<div className="course-group">{Courses}</div>
		</div>
	);
}
