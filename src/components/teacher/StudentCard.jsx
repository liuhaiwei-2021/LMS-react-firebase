export default function CourseCard({ student }) {
	const { name, avatar } = student;
	return (
		<div className="card">
			<div className="card-info">
				<img className="student-card-avatar" src={avatar} alt="" />
				<p className="card-title">{name}</p>
			</div>
		</div>
	);
}
