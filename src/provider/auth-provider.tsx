import { AuthContext } from "@/context/AuthContext";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
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
	const EmailVerify = async (email: string): Promise<boolean> => {
		axios
			.get("/get_user_by_email", { headers: { email } })
			.then((res) => {
				if (res.data.success) {
					toast({
						variant: "default",
						title: "Check your mail and submit the OTP.",
					});
					setIsEmailVerify(true);
					setUserEmail(email);
					return true;
				}
			})
			.catch((err) => {
				toast({
					variant: "destructive",
					title: err.response.data.message,
				});
				return false;
			});

		return false;
	};

	// otp verify
	const OtpVerify = async (otp: string) => {
		if (otp === "123456") {
			return setIsOtpVerify(true);
		}

		return setIsOtpVerify(false);
	};

	// login function
	const Login = (password: string) => {
		// set data for send to backend by headers
		const userData = {
			email: userEmail,
			password,
		};

		axios
			.get("/login", { headers: userData })
			.then((res) => {
				// give him a toast
				toast({
					variant: "default",
					title: "Login successfully!",
				});

				// set user
				setUser({
					email: res.data.data.email,
					role: res.data.data.role,
				});

				// return void
				return;
			})
			.catch(() => {
				// give him a error message
				toast({
					variant: "destructive",
					title: "Wrong password! Try again.",
				});

				// return void
				return;
			});
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
