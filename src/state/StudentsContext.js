// NPM packages
import React, { createContext, useContext, useState } from "react";

const StudentsContext = createContext(null);

export function StudentsProvider({ children }) {
	const [students, setStudents] = useState([]);

	return (
		<StudentsContext.Provider value={{ students, setStudents }}>
			{children}
		</StudentsContext.Provider>
	);
}

export function useStudents() {
	return useContext(StudentsContext);
}
