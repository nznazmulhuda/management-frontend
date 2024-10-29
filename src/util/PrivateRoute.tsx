import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({ children }: { children: ReactNode }) {
	const data = useAuth();
	const { pathname } = useLocation();
	const { toast } = useToast();

	if (data?.user && data.user.role === "admin") {
		return children;
	}

	toast({
		title: "Login First!",
		description: "Session expired! Please login.",
		variant: "destructive",
	});

	return <Navigate to={"/authentication/login"} state={pathname} />;
}
