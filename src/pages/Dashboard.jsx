import CourseList from "../components/shared/CourseList";
import StudentList from "../components/teacher/StudentList";
import Profile from "../components/shared/Profile";
import { useUser } from "../state/UserContext";
import "../styles/Dashboard.css";

export default function DashBoard() {
	const { user } = useUser();
	const admin = user?.roles?.find((role) => role === 2);
	return (
		<div className="dashboard">
			<div>
				<Profile />
			</div>
			<div>
				<CourseList />
				{admin && <StudentList />}
			</div>
			{/* <div>
				<h1>teacher page</h1>
				<CourseList />
				{admin && <StudentList />}
			</div> */}
		</div>
	);
}
