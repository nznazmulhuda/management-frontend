import { toast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export default function IsNotLogin({ children }: { children: ReactNode }) {
	const data = useAuth();

	if (data?.user && data.user.role === "admin") {
		toast({
			variant: "default",
			title: "You are already loged in!",
		});
		return <Navigate to={"/"} />;
	}

	return children;
}
