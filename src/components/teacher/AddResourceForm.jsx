// NPM packages
import { useState } from "react";
// Project files
import { useModal } from "../../state/ModalContext";
import { useCourses } from "../../state/CoursesContext";
import { updateDocument } from "../../scripts/fireStore";
import { createFile } from "../../scripts/cloudStorage";
import Loader from "../../scripts/Loader";
import Error from "../shared/Error";

export default function AddResourceForm({ course }) {
	// Global state
	const { setModal } = useModal();
	const [resourseName, setResourseName] = useState("");
	const [resourseFile, setResourseFile] = useState(null);

	const { courses, setCourses, updateCourses } = useCourses();
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
		const pdfFilePath = "/courses/resources" + resourseName;
		const resourseFileURL = await createFile(pdfFilePath, resourseFile);

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
			<label className="custom-file-upload" htmlFor="file-upload">
				Resources:
			</label>

			<input
				onChange={onFileChoose}
				id="file-upload"
				className="file-upload"
				type="file"
				accept=".pdf"
				required
			/>

			<button className="form-button">Submit</button>
			<button onClick={() => setModal(null)}>Cancel</button>
		</form>
	);
}
