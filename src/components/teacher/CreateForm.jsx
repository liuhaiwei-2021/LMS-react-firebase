//NPM packages
import { useState } from "react";
// project files

import form from "../../data/courseForm.json";
import { createFile } from "../../scripts/cloudStorage";
import { createDocument } from "../../scripts/fireStore";
import Loader from "../../scripts/Loader";
import { useCourses } from "../../state/CoursesContext";
import { useModal } from "../../state/ModalContext";
import Error from "../shared/Error";
import InputField from "../shared/InputField";
import UploadIMG from "../teacher/UploadIMG";
import UploadFile from "../teacher/UploadFile";

export default function CreateForm() {
	// Global state
	const { setModal } = useModal();
	const { courses, setCourses } = useCourses();

	// Local state
	const [name, setName] = useState("");
	const [resourseName, setResourseName] = useState("");
	const [category, setCategory] = useState("");
	const [imgURL, setImgURL] = useState("");
	const [createdBy, setCreatedBy] = useState("");

	const [imgFile, setImgFile] = useState(null);
	const [resourseFile, setResourseFile] = useState(null);

	const [message, setMessage] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	//methods
	async function onCreate(e) {
		e.preventDefault();

		const newCourse = {
			name: name,
			category: category.toLowerCase(),
			createdBy: createdBy,
			imgURL: "",
			files: [],
			updated: new Date().toLocaleDateString(),
		};

		const imgFileName = `${name}.png`;
		const imgFilePath = "/courses/img" + imgFileName;
		const imgURL = await createFile(imgFilePath, imgFile);

		const pdfFilePath = "/courses/resources" + resourseName;
		const resourseFileURL = await createFile(pdfFilePath, resourseFile);

		newCourse.imgURL = imgURL;
		newCourse.files.push({ resourseName, resourseFileURL });

		const payload = await createDocument("/courses", newCourse);

		const { message, error, loading } = payload;

		setMessage(message);
		setError(error);
		setLoading(loading);
		setCourses([...courses, newCourse]);
		alert(message);
		resetForm();
		setModal(null);
	}

	function onImageChoose(e) {
		const imgFile = e.target.files[0];
		setImgFile(imgFile);
	}

	function onFileChoose(e) {
		const file = e.target.files[0];
		const name = e.target.files[0].name;
		setResourseName(name);
		setResourseFile(file);
	}

	function resetForm() {
		setName("");
		setCategory("");
		setImgURL("");
		setCreatedBy("");
	}
	return (
		<form onSubmit={onCreate} className="add-form">
			{loading && <Loader />}
			{error && <Error />}
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.createdBy} state={[createdBy, setCreatedBy]} />
			<UploadIMG onImageChoose={onImageChoose} />
			<UploadFile onFileChoose={onFileChoose} />

			<button className="form-button">Submit</button>
			<button
				onClick={() => {
					setModal(null);
				}}
				className="form-button">
				Cancel
			</button>
		</form>
	);
}
