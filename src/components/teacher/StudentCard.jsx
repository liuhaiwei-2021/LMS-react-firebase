export default function CourseCard({ student }) {
	const { name } = student;
	return (
		<div className="course-card">
			<div className="course-card-info">
				<h3 className="course-card-title">{name}</h3>
			</div>
		</div>
	);
}
