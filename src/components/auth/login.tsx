import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SpinJSON from "@/assets/loading.json";
import { useLottie } from "lottie-react";
import { useAuth } from "@/hooks/useAuth";

export function UserAuthForm({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const data = useAuth();

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault();
		setIsLoading(true);

		// Access form elements through FormEvent target
		const form = event.target as HTMLFormElement;
		const emailInput = form.elements.namedItem("email") as HTMLInputElement;

		// email verify
		data?.EmailVerify(emailInput.value);
		setIsLoading(false);
	}

	const LottieOptions = {
		animationData: SpinJSON,
		loop: true,
	};

	const { View } = useLottie(LottieOptions);

	return (
		<div className={cn("grid gap-6", className)} {...props}>
			<form onSubmit={onSubmit}>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="email">
							Email
						</Label>
						<Input
							id="email"
							placeholder="name@example.com"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
							name="email"
						/>
					</div>

					<Button disabled={isLoading}>
						{isLoading && View}
						Sign In with Email
					</Button>
				</div>
			</form>
		</div>
	);
}
