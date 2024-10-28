import { createContext } from "react";

export type AuthContextType = {
	test: string;
} | null;

export const AuthContext = createContext<AuthContextType>(null);
