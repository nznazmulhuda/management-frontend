import "./index.css";
import { StrictMode } from "react";
import { Route } from "./util/Route.tsx";
import { ThemeProvider } from "./provider";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./provider/auth-provider.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import axios from "axios";
import { ButtonProvider } from "./provider/all-button-provider.tsx";

// axios all defaults value
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:5000/api";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* auth provider */}
		<AuthProvider>
			{/* theme provider */}
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<ButtonProvider>
					{/* router provider */}
					<RouterProvider router={Route} />

					{/* toaster */}
					<Toaster />
				</ButtonProvider>
			</ThemeProvider>
		</AuthProvider>
	</StrictMode>,
);
