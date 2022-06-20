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

export default function CreateForm() {
	// Global state
	const { setModal } = useModal();
	const { courses, setCourses } = useCourses();

	// Local state
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [createdBy, setCreatedBy] = useState("");

	const [imgFile, setImgFile] = useState(null);

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
		newCourse.imgURL = imgURL;

		const { message, error, loading } = await createDocument("/courses", newCourse);

		setMessage(message);
		setError(error);
		setLoading(loading);
		setCourses([...courses, newCourse]);
		alert(message);
		setModal(null);
	}

	function onImageChoose(e) {
		const imgFile = e.target.files[0];
		setImgFile(imgFile);
	}

	return (
		<form onSubmit={onCreate} className="add-form">
			{loading && <Loader />}
			{error && <Error />}
			<InputField setup={form.category} state={[category, setCategory]} />
			<InputField setup={form.name} state={[name, setName]} />
			<InputField setup={form.createdBy} state={[createdBy, setCreatedBy]} />
			<UploadIMG onImageChoose={onImageChoose} />

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
