import "./index.css";
import { StrictMode } from "react";
import { Route } from "./util/Route.tsx";
import { ThemeProvider } from "./provider";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* theme provider */}
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{/* router provider */}
			<RouterProvider router={Route} />
		</ThemeProvider>
	</StrictMode>,
);
