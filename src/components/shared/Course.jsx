//NPM packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Project file
import { readDocument, deleteDocument } from "../../scripts/fireStore";
// import { deleteFile } from "../scripts/cloudStorage";
// import Loader from "../scripts/Loader";
// import "../styles/Dish.css";

export default function Course() {
	//properties
	const { id } = useParams();
	const navigate = useNavigate();

	// Local state
	const [course, setCourse] = useState({});

	// Methods
	useEffect(() => {
		async function loadData() {
			const payload = await readDocument("courses", id);
			const { data, error } = payload;
			error ? loadFail(data) : loadSucceed(data);
		}
		loadData();
	}, []);
	function loadSucceed(data) {
		setCourse(data);
	}

	function loadFail(data) {
		console.log(data);
	}

	const { name, imgURL } = course;

	// async function onDelete() {
	// 	deleteDocument(`categories/${category}/content`, id);
	// 	await deleteFile(`/categories/${category}/content/${category}-${name}.png`);
	// 	navigate(-1);
	// }

	return (
		<div className="course">
			<img className="course-img" src={imgURL} alt="course-card" />
			<div className="course-info">
				<h3 className="course-title">{name}</h3>

				<button onClick={() => navigate(-1)} className="go-back-button">
					Go back
				</button>
				{/* <button className="delete-button" onClick={onDelete}>
					DELETE
				</button> */}
			</div>
		</div>
	);
}
