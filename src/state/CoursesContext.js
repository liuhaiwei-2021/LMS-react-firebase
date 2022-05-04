// NPM packages
import React, { createContext, useContext, useState } from "react";

const CoursesContext = createContext(null);

export function CoursesProvider({ children }) {
	const [courses, setCourses] = useState([]);

	return (
		<CoursesContext.Provider value={{ courses, setCourses }}>
			{children}
		</CoursesContext.Provider>
	);
}

export function useCourses() {
	return useContext(CoursesContext);
}
