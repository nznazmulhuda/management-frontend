import { PrimaryLayout } from "@/layouts";
import ErrorPage from "@/pages/error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { Analytics, Notifications, Overview, Reports } from "@/pages/overview";
import Login from "@/pages/auth/Login";
import AuthLayout from "@/layouts/auth-layouts";
import Register from "@/pages/auth/Register";

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
	{
		path: "/authentication",
		element: <AuthLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/authentication/login",
				element: <Login />,
			},
			{
				path: "/authentication/register",
				element: <Register />,
			},
		],
	},
]);
