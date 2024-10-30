import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
	const data = useAuth();
	const { pathname } = useLocation();

	if (data?.isLoading) {
		return <h1>Loading...</h1>;
	}

	if (data?.user && data.user.role === "admin") {
		return children;
	}

	return <Navigate to={"/authentication/login"} state={pathname} />;
}
