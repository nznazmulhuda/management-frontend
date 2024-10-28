import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";
import { AuthValue } from "@/provider/auth-provider";

export const useAuth = () => {
	const data: AuthValue = useContext(AuthContext);

	return data;
};
