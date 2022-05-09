// NPM package
import { useState } from "react";

// Project files
import Error from "../components/shared/Error";
import CreateForm from "../components/teacher/CreateForm";
import EditForm from "../components/teacher/EditForm";
import { deleteFile } from "../scripts/cloudStorage";
import { deleteDocument } from "../scripts/fireStore";
import Loader from "../scripts/Loader";
import { useCourses } from "../state/CoursesContext";
import { useModal } from "../state/ModalContext";
import "../styles/Management.css";

export default function CoursesManagement() {
	//Global state
	const { courses, setCourses } = useCourses();
	const { setModal } = useModal();

	//local state
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	async function onDelete(name, id) {
		const payload = deleteDocument("courses", id);
		const { error, loading } = payload;

		if (!error) alert("Deleted successfully!");

		setError(error);
		setLoading(loading);
		await deleteFile(`/courses/${name}.png`);
		const filteredCourses = courses.filter((course) => course.id !== id);
		setCourses(filteredCourses);
	}

	const Courses = courses.map((course, index) => (
		<li key={index} className="coure-item">
			<span className="course-name">Name:{course.name}</span>
			<span className="course-name">Category:{course.category}</span>

			<button className="btn-edit" onClick={() => setModal(<EditForm course={course} />)}>
				<img src="/images/edit.png" alt="edit" />
			</button>
			<button className="btn-delete" onClick={() => onDelete(course.name, course.id)}>
				<img src="/images/delete.png" alt="delete" />
			</button>
		</li>
	));

	return (
		<div className="management container">
			{loading && <Loader />}
			{error && <Error />}
			<h1 className="tab">Courses Management</h1>
			<ul className="course-group">{Courses}</ul>
			<button className="btn-add" onClick={() => setModal(<CreateForm />)}>
				+Add a new course
			</button>
		</div>
	);
}
