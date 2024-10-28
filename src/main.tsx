import "./index.css";
import { StrictMode } from "react";
import { Route } from "./util/Route.tsx";
import { ThemeProvider } from "./provider";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./provider/auth-provider.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* auth provider */}
		<AuthProvider>
			{/* theme provider */}
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				{/* router provider */}
				<RouterProvider router={Route} />
			</ThemeProvider>
		</AuthProvider>
	</StrictMode>,
);
