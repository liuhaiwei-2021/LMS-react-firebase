//NPM packages
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

//Project file
import FileCard from "../components/shared/FileCard";
import { readDocument } from "../scripts/fireStore";
import "../styles/Course.css";

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
	}, [id]);
	function loadSucceed(data) {
		setCourse(data);
	}

	function loadFail(data) {
		console.log(data);
	}

	const { name, imgURL, category, updated, files } = course;
	console.log(files);
	// const Files = files.map((file, index) => <FileCard key={index} file={file} />);

	return (
		<div className="course container">
			<img className="course-img" src={imgURL} alt="course-card" />
			<div className="course-info">
				<h3 className="course-title">{name}</h3>
				<p>Category: {category}</p>
				<p>Updated: {updated}</p>
				{/* <div className="files">{files.length > 0 && Files}</div> */}
			</div>
			<button onClick={() => navigate(-1)} className="go-back-btn">
				Go back
			</button>
		</div>
	);
}
