// NPM package
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

// Project files
import Error from "../components/shared/Error";
import CreateForm from "../components/teacher/CreateForm";
import EditForm from "../components/teacher/EditForm";
import { deleteFile } from "../scripts/cloudStorage";
import { deleteDocument } from "../scripts/fireStore";
import Loader from "../scripts/Loader";
import { useCourses } from "../state/CoursesContext";
import { useModal } from "../state/ModalContext";
import { useStudents } from "../state/StudentsContext";
import "../styles/Management.css";

export default function Management() {
	//Global state
	const { students, setStudents } = useStudents();
	const { courses, setCourses } = useCourses();
	const { setModal } = useModal();

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

	async function onDeleteStudent(name, id) {
		const payload = deleteDocument("users", id);
		const { error, loading } = payload;

		if (!error) alert("Deleted successfully!");

		setError(error);
		setLoading(loading);
		await deleteFile(`/users/${name}.png`);
		const filteredStudents = students.filter((student) => student.id !== id);
		setStudents(filteredStudents);
	}

	const Courses = courses.map((course, index) => (
		<li key={index} className="coure-item">
			<span className="course-name">{course.name}</span>
			<span className="course-name">{course.category}</span>
			<button className="btn-edit" onClick={() => setModal(<EditForm course={course} />)}>
				<img src="/images/edit.png" alt="edit" />
			</button>
			<button className="btn-delete" onClick={() => onDelete(course.name, course.id)}>
				<img src="/images/delete.png" alt="delete" />
			</button>
		</li>
	));

	const Students = students.map((student, index) => (
		<li key={index} className="coure-item">
			<span className="course-name">{student.name}</span>
			<button
				className="btn-delete"
				onClick={() => onDeleteStudent(student.name, student.id)}>
				<img src="/images/delete.png" alt="delete" />
			</button>
		</li>
	));
	return (
		<div className="management container">
			{loading && <Loader />}
			{error && <Error />}
			<Tabs className="tabs" defaultIndex={1}>
				<TabList className="tab-list">
					<Tab className="tab">Courses Management</Tab>
					<Tab className="tab">Student Management</Tab>
				</TabList>

				<TabPanel>
					<ul className="course-group">{Courses}</ul>
					<button className="btn-add" onClick={() => setModal(<CreateForm />)}>
						+Add a new course
					</button>
				</TabPanel>
				<TabPanel>
					<ul className="course-group">{Students}</ul>
				</TabPanel>
			</Tabs>
		</div>
	);
}
