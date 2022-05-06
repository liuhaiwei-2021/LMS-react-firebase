// NPM package
import { limit } from "firebase/firestore";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

// Project files
import { useCourses } from "../state/CoursesContext";
import { useStudents } from "../state/StudentsContext";
import "../styles/Management.css";

export default function Management() {
	//Global state
	const { students, setStudents } = useStudents();
	const { courses, setCourses } = useCourses();

	const Courses = courses.map((course, index) => (
		<li key={index} className="coure-item">
			<span className="course-name">{course.name}</span>
			<button className="btn-edit">Edit</button>
			<button className="btn-delete">Delete</button>
		</li>
	));

	const Students = students.map((student, index) => (
		<li key={index} className="coure-item">
			<span className="course-name">{student.name}</span>
			<button className="btn-delete">Active</button>
		</li>
	));
	return (
		<div className="management container">
			<Tabs className="tabs" defaultIndex={1}>
				<TabList className="tab-list">
					<Tab className="tab">Courses Management</Tab>
					<Tab className="tab">Student Management</Tab>
				</TabList>

				<TabPanel>
					<ul className="course-group">{Courses}</ul>
					<button className="btn-add">+Add a new course</button>
				</TabPanel>
				<TabPanel>
					<ul className="course-group">{Students}</ul>
				</TabPanel>
			</Tabs>
		</div>
	);
}
