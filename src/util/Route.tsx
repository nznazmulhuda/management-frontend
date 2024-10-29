import { PrimaryLayout } from "@/layouts";
import ErrorPage from "@/pages/error/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import { Analytics, Notifications, Overview, Reports } from "@/pages/overview";
import Login from "@/pages/auth/Login";
import AuthLayout from "@/layouts/auth-layouts";
import Register from "@/pages/auth/Register";
import PrivateRoute from "./PrivateRoute";
import IsNotLogin from "./isLogin";

export const Route = createBrowserRouter([
	{
		path: "/",
		element: <PrimaryLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: (
					<>
						<PrivateRoute>
							<Overview />
						</PrivateRoute>
					</>
				),
			},
			{
				path: "/analytics",
				element: (
					<PrivateRoute>
						<Analytics />
					</PrivateRoute>
				),
			},
			{
				path: "/notifications",
				element: (
					<PrivateRoute>
						<Notifications />
					</PrivateRoute>
				),
			},
			{
				path: "/reports",
				element: (
					<PrivateRoute>
						<Reports />
					</PrivateRoute>
				),
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
				element: (
					<IsNotLogin>
						<Login />
					</IsNotLogin>
				),
			},
			{
				path: "/authentication/register",
				element: (
					<IsNotLogin>
						<Register />
					</IsNotLogin>
				),
			},
		],
	},
]);
