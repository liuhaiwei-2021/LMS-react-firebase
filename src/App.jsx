import { BrowserRouter } from "react-router-dom";

import LoggedRoutes from "./routes/LoggedRoutes";
import UnloggedRoutes from "./routes/UnloggedRoutes";
import { useAuth } from "./state/AuthProvider";
import "./styles/App.css";

function App() {
	// Global state
	const { uid } = useAuth();
	return (
		<div className="main">
			<BrowserRouter>
				{uid && <LoggedRoutes />}
				{!uid && <UnloggedRoutes />}
			</BrowserRouter>
		</div>
	);
}

export default App;
