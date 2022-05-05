// NPM packages
import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export function UserProvider({ children }) {
	const [user, setUser] = useState({});

	const storageKey = "user";

	let person = localStorage.getItem(storageKey);
	console.log();

	function saveData() {
		const data = JSON.stringify(user);
		localStorage.setItem(storageKey, data);
	}

	useEffect(() => saveData());

	// Methods
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

export function useUser() {
	return useContext(UserContext);
}
