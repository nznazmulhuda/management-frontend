import { createContext } from "react";
import { AuthValue } from "@/provider/auth-provider";

export const AuthContext = createContext<AuthValue>(null);
