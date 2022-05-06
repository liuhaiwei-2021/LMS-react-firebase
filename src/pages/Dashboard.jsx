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
			<div className="side-bar">
				<div className="links">
					<a href="https://calendar.google.com/calendar/u/0/r?tab=rc">
						<img src="/images/google-calendar.png" alt="" />
					</a>
					<a href="https://slack.com/get-started#/landing">
						<img src="/images/slack.png" alt="" />
					</a>
				</div>
			</div>
			<div>
				<CourseList />
				{admin && <StudentList />}
			</div>
		</div>
	);
}
