import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
	const { id, name, imgURL, createdBy, updated } = course;
	return (
		<Link to={`/courses/${id}`}>
			<div className="course-card">
				<img className="course-card-img" src={imgURL} alt="course-card" />
				<div className="course-card-info">
					<h3 className="course-card-title">{name}</h3>
					<p>Created By: {createdBy}</p>
				</div>
			</div>
		</Link>
	);
}
