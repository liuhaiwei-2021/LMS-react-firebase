export default function CourseCard({ course }) {
	const { name, imgURL, createdBy, updated } = course;
	return (
		<div className="course-card">
			<img className="course-card-img" src={imgURL} alt="course-card" />
			<div className="course-card-info">
				<h3 className="course-card-title">{name}</h3>

				<a href="https://www.youtube.com/watch?v=j1pa36PK14E">web design</a>
			</div>
		</div>
	);
}
