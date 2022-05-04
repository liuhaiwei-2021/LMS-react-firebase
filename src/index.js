//NPM packages
import React from "react";
import ReactDOM from "react-dom/client";

//Project files
import App from "./App";
import "./styles/index.css";

import { AuthProvider } from "./state/AuthContext";
import { UserProvider } from "./state/UserContext";

import { CoursesProvider } from "./state/CoursesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthProvider>
		<UserProvider>
			<CoursesProvider>
				<App />
			</CoursesProvider>
		</UserProvider>
	</AuthProvider>
);
