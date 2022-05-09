import { deleteDocument } from "../../scripts/fireStore";
import { useCourses } from "../../state/CoursesContext";
import { useModal } from "../../state/ModalContext";
function DeleteForm({ course }) {
	const { courses, setCourses } = useCourses();
	const { id } = course;
	const { modal, setModal } = useModal();

	//local state
	console.log("current test before delete", courses);

	async function onDelete(id) {
		await deleteDocument("courses", id);
	}
	// 	console.log("current test", result);
	// 	console.log("current test after delete", courses);

	// 	setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));

	// if (result) {
	// 	const filteredCourses = courses.filter((course) => course.id !== id);
	// 	console.log(filteredCourses);
	// 	setCourses(filteredCourses);
	// } else {
	// 	console.log(error);
	// 	alert("Could not delete a document, try it again later.");
	// }
	// }

	return (
		<form onSubmit={onDelete}>
			<button>you want to delete this course</button>
			<button
				onClick={() => {
					setModal(null);
				}}>
				cancel
			</button>
		</form>
	);
}

export default DeleteForm;
