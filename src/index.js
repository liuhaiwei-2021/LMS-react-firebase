//NPM packages
import React from "react";
import ReactDOM from "react-dom/client";

//Project files
import App from "./App";
import "./styles/index.css";

import { AuthProvider } from "./state/AuthProvider";
import { UserProvider } from "./state/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<AuthProvider>
		<UserProvider>
			<App />
		</UserProvider>
	</AuthProvider>
);
