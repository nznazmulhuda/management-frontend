import { PrimaryLayout } from "@/layouts";
import ErrorPage from "@/pages/error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { Analytics, Notifications, Overview, Reports } from "@/pages/overview";

export const Route = createBrowserRouter([
	{
		path: "/",
		element: <PrimaryLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Overview />,
			},
			{
				path: "/analytics",
				element: <Analytics />,
			},
			{
				path: "/notifications",
				element: <Notifications />,
			},
			{
				path: "/reports",
				element: <Reports />,
			},
		],
	},
]);
