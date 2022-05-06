//NPM packages
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import App from "./App";
import "./styles/index.css";

import { AuthProvider } from "./state/AuthContext";
import { UserProvider } from "./state/UserContext";

import { CoursesProvider } from "./state/CoursesContext";
import { StudentsProvider } from "./state/StudentsContext";
import { ModalProvider } from "./state/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<UserProvider>
				<CoursesProvider>
					<StudentsProvider>
						<ModalProvider>
							<Routes>
								<Route path="/*" element={<App />} />
							</Routes>
						</ModalProvider>
					</StudentsProvider>
				</CoursesProvider>
			</UserProvider>
		</AuthProvider>
	</BrowserRouter>
);
