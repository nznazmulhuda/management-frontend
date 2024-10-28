import { useAuth } from "@/hooks/useAuth";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { SyntheticEvent } from "react";

function PasswordForm() {
	const data = useAuth();

	const handleSubmit = (e: SyntheticEvent) => {
		e.preventDefault();

		// Access form elements through FormEvent target
		const form = e.target as HTMLFormElement;
		const password = form.elements.namedItem("password") as HTMLInputElement;

		data?.Login(password.value);
	};

	return (
		<form onSubmit={handleSubmit} className="w-full">
			<Input
				placeholder="Enter password"
				name="password"
				type="password"
				required
			/>

			<Button variant={"ghost"} className="mt-2 mx-auto w-full">
				Login
			</Button>
		</form>
	);
}

export default PasswordForm;
