import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
	const { id, name, imgURL, createdBy, updated } = course;
	return (
		<Link to={`/courses/${id}`}>
			<div className="card">
				<img className="card-img" src={imgURL} alt="card" />
				<div className="card-info">
					<p className="card-title">{name}</p>
					<p>Created By: {createdBy}</p>
				</div>
			</div>
		</Link>
	);
}
