// NPM package
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "../components/shared/Modal";
import CreateForm from "../components/teacher/CreateForm";

// Project files
import { useCourses } from "../state/CoursesContext";
import { useStudents } from "../state/StudentsContext";
import { useModal } from "../state/ModalContext";
import "../styles/Management.css";

export default function Management() {
	//Global state
	const { students, setStudents } = useStudents();
	const { courses, setCourses } = useCourses();
	const { setModal } = useModal();

	//Local state
	const { isOpen, setIsOpen } = useState();

	const Courses = courses.map((course, index) => (
		<li key={index} className="coure-item">
			{/* <img classname="course-li-img" src={course.imgURL} alt="course-name" /> */}
			<span className="course-name">{course.name}</span>
			<button className="btn-edit">
				<img src="/images/edit.png" alt="edit" />
			</button>
			<button className="btn-delete">
				<img src="/images/delete.png" alt="delete" />
			</button>
		</li>
	));

	const Students = students.map((student, index) => (
		<li key={index} className="coure-item">
			{/* <img classname="course-img" src={student.avatar} alt="student-name" /> */}
			<span className="course-name">{student.name}</span>
			<button className="btn-active">Active</button>
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
