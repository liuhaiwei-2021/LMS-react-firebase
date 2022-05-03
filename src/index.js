//NPM packages
import React from "react";
import ReactDOM from "react-dom/client";

//Project files
import App from "./App";
import "./styles/index.css";

import { AuthProvider } from "./state/AuthContext";
import { UserProvider } from "./state/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthProvider>
		<UserProvider>
			<App />
		</UserProvider>
	</AuthProvider>
);
