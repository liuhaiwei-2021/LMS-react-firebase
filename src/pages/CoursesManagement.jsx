// NPM package
import { useEffect } from "react";

// Project files
import CourseCard from "../components/shared/CourseCard";
import Error from "../components/shared/Error";
import CreateForm from "../components/teacher/CreateForm";
import EditForm from "../components/teacher/EditForm";
import AddResourceForm from "../components/teacher/AddResourceForm";
import useFetch from "../hooks/useFetch";
import Loader from "../scripts/Loader";
import { useCourses } from "../state/CoursesContext";
import { useModal } from "../state/ModalContext";
import "../styles/Management.css";

export default function CoursesManagement() {
	//Global state
	const { courses, setCourses, courseDelete } = useCourses();
	const { setModal } = useModal();

	//properties
	const { data, loading, error } = useFetch("courses");

	//methods
	useEffect(() => {
		setCourses(data);
	}, [data]);

	const Courses = courses.map((course, index) => (
		<div key={index} className="management-item">
			<CourseCard course={course} />
			<div className="btn-group">
				<button className="btn-edit" onClick={() => setModal(<EditForm course={course} />)}>
					<img src="/images/edit.png" alt="edit" />
				</button>
				<button
					className="btn-edit"
					onClick={() => setModal(<AddResourceForm course={course} />)}>
					<img src="/images/edit.png" alt="edit" />
				</button>
				<button className="btn-delete" onClick={() => courseDelete(course.id)}>
					<img src="/images/delete.png" alt="delete" />
				</button>
			</div>
		</div>
	));

	return (
		<div className="management container">
			{loading && <Loader />}
			{error && <Error />}

			<div className="management-group">{Courses}</div>
			<div>
				<button className="btn-add" onClick={() => setModal(<CreateForm />)}>
					+Add a new course
				</button>
			</div>
		</div>
	);
}
