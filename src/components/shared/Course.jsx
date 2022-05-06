//NPM packages
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Project file
import { readDocument } from "../../scripts/fireStore";
import "../../styles/Course.css";

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

	const { name, imgURL, link } = course;

	return (
		<div className="course container">
			<img className="course-img" src={imgURL} alt="course-card" />
			<div className="course-info">
				<h3 className="course-title">{name}</h3>
				<div className="link">
					<a href={link}>{link}</a>
				</div>

				<button onClick={() => navigate(-1)} className="go-back-button">
					Go back
				</button>
			</div>
		</div>
	);
}
