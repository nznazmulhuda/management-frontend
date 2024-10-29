import { AuthContext } from "@/context/AuthContext";
import { ReactNode, useState } from "react";

// auth value interface
export type AuthValue = {
	EmailVerify: (email: string) => void;
	OtpVerify: (otp: string) => void;
	Login: (password: string) => void;
	isEmailVerify: boolean;
	isOtpVerify: boolean | null;
	userEmail: string;
	user: UserInterface;
} | null;

// user interface
type UserInterface = {
	email: string;
	role: string;
} | null;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isEmailVerify, setIsEmailVerify] = useState<boolean>(false);
	const [isOtpVerify, setIsOtpVerify] = useState<boolean | null>(null);
	const [userEmail, setUserEmail] = useState<string>("");
	const [user, setUser] = useState<UserInterface>(null);

	// email verify
	const EmailVerify = (email: string) => {
		console.log(email);
		setUserEmail(email);
		return setIsEmailVerify(true);
	};

	// otp verify
	const OtpVerify = (otp: string) => {
		console.log(otp);
		if (otp === "123456") {
			return setIsOtpVerify(true);
		}

		return setIsOtpVerify(false);
	};

	// login function
	const Login = (password: string) => {
		const userData = {
			email: userEmail,
			password,
		};

		setUser({
			email: userEmail,
			role: "admin",
		});

		console.log(userData);
	};

	// all global auth value
	const AuthValue: AuthValue = {
		EmailVerify,
		OtpVerify,
		Login,
		isEmailVerify,
		isOtpVerify,
		userEmail,
		user,
	};

	return (
		<AuthContext.Provider value={AuthValue}>{children}</AuthContext.Provider>
	);
};
