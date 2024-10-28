import { useContext } from "react";
import { AuthContext, AuthContextType } from "@/context/AuthContext";

export const useAuth = () => {
	const data: AuthContextType = useContext(AuthContext);

	return data;
};
