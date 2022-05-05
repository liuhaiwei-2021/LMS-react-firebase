import CourseList from "../components/shared/CourseList";
import StudentList from "../components/teacher/StudentList";
import { useUser } from "../state/UserContext";

export default function DashBoard() {
	const { user } = useUser();
	const admin = user?.roles?.find((role) => role === 2);
	return (
		<div className="teacher container">
			<h1>teacher page</h1>
			<CourseList />
			{admin && <StudentList />}
		</div>
	);
}
