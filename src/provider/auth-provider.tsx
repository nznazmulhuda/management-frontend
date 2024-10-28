import { AuthContext } from "@/context/AuthContext";
import { ReactNode } from "react";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const AuthValue: { test: string } = {
		test: "demo",
	};

	return (
		<AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
	);
};
