// NPM packages
import { useState } from "react";

// Project files
import { createFile } from "../../scripts/cloudStorage";
import { updateDocument } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useCourses } from "../../state/CoursesContext";
import { useModal } from "../../state/ModalContext";
import Error from "../shared/Error";
import UploadFile from "./UploadFile";
import "../../styles/AddResourceForm.css";

export default function AddResourceForm({ course }) {
	// Global state
	const { setModal } = useModal();
	const [resourseName, setResourseName] = useState("");
	const [resourseFile, setResourseFile] = useState(null);
	const { courses, setCourses } = useCourses();

	//Local state
	const [files, setFiles] = useState(course.files);
	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	async function onSubmit(e) {
		e.preventDefault();
		const editedCourse = {
			...course,
			files: files,
		};
		const filePath = "/courses/resources" + resourseName;
		const resourseFileURL = await createFile(filePath, resourseFile);
		editedCourse.files.push({ resourseName, resourseFileURL });

		const { message, error, loading } = await updateDocument("courses", editedCourse);

		const clonedCourses = [...courses];
		const index = clonedCourses.findIndex((course) => course.id === editedCourse.id);
		clonedCourses[index] = editedCourse;
		setCourses(clonedCourses);

		setMessage(message);
		setError(error);
		setLoading(loading);
		alert(message);
		setModal(null);
	}

	function onFileChoose(e) {
		const file = e.target.files[0];
		const name = e.target.files[0].name;
		setResourseName(name);
		setResourseFile(file);
	}

	return (
		<form className="add-resource-form" onSubmit={onSubmit}>
			{loading && <Loader />}
			{error && <Error />}
			<h1>Add a resource</h1>

			<UploadFile onFileChoose={onFileChoose} />

			<button className="form-button">Submit</button>
			<button className="form-button" onClick={() => setModal(null)}>
				Cancel
			</button>
		</form>
	);
}
