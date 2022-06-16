// NPM packages
import React, { createContext, useContext, useState } from "react";

import { deleteDocument } from "../scripts/fireStore";

const CoursesContext = createContext(null);

export function CoursesProvider({ children }) {
	const [courses, setCourses] = useState([]);

	async function courseDelete(id) {
		await deleteDocument("courses", id);
		setCourses((prevCourses) => prevCourses.filter((course) => course.id !== id));
	}

	const updateCourses = (newCourses) => {
		setCourses(newCourses);
	};

	const values = { courses, setCourses, courseDelete, updateCourses };

	return <CoursesContext.Provider value={values}>{children}</CoursesContext.Provider>;
}

export function useCourses() {
	return useContext(CoursesContext);
}
