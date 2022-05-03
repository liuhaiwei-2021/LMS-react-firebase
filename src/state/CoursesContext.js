// NPM packages
import React, { createContext, useContext, useState, useEffect } from "react";

import { readCollection } from "../scripts/fireStore";

const CoursesContext = createContext(null);

export function CoursesProvider({ children }) {
	const [courses, setCourses] = useState([]);
	useEffect(() => {
		async function loadData() {
			const payload = await readCollection("courses");
			const { data, error } = payload;
			error ? loadFail(data) : loadSucceed(data);
		}
		loadData();
	}, []);

	function loadSucceed(data) {
		setCourses(data);
	}

	function loadFail(data) {
		console.log(data);
	}

	return (
		<CoursesContext.Provider value={{ courses, setCourses }}>
			{children}
		</CoursesContext.Provider>
	);
}

export function useCourses() {
	return useContext(CoursesContext);
}
