import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function IsNotLogin({ children }: { children: ReactNode }) {
	const data = useAuth();

	if (data?.isLoading) {
		return <h1>Loading...</h1>;
	}

	if (data?.user) {
		return <Navigate to={"/"} />;
	}

	return children;
}
