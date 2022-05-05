// NPM packages
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
	const [user, setUser] = useState({});

	const storageKey = "user";

	// Methods
	function loadData() {
		const rawData = localStorage.getItem(storageKey);
		const parsedData = JSON.parse(rawData) || [];
		console.log(parsedData);

		setUser(parsedData);
	}

	function saveData() {
		const data = JSON.stringify(user);
		localStorage.setItem(storageKey, data);
	}
	useEffect(() => loadData(), []);
	useEffect(() => saveData(), [user]);

	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
	return useContext(UserContext);
}
