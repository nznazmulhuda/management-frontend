import { UserAuthForm } from "@/components/auth/login";
import { OTPForm } from "@/components/auth/OtpForm";
import PasswordForm from "@/components/auth/PasswordForm";
import { buttonVariants } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

function Login() {
	const data = useAuth();

	if (data?.isOtpVerify) {
		return (
			<div className="container relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				{/* register route */}
				<Link
					to="/authentication/register"
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8",
					)}
				>
					Register
				</Link>

				{/* Left side */}
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					{/* logo part */}
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<img src="/favicon.png" alt="orbit outfit" width={45} height={45} />
						Orbit Outfit
					</div>

					{/* footer part */}
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;Empower your style, where every stitch tell&apos;s your
								story.&rdquo;
							</p>
							<footer className="text-sm">Orbit Outfit.</footer>
						</blockquote>
					</div>
				</div>

				{/* right side */}
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">
								Enter Password
							</h1>
							<p className="text-sm text-muted-foreground">
								Enter Password to login your account
							</p>
						</div>

						{/* password form */}
						<div className="flex justify-center">
							<PasswordForm />
						</div>

						<p className="px-8 text-center text-sm text-muted-foreground">
							By clicking continue, you agree to our{" "}
							<Link
								to="/authentication/login"
								className="underline underline-offset-4 hover:text-primary"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								to="/authentication/login"
								className="underline underline-offset-4 hover:text-primary"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		);
	}

	if (data?.isEmailVerify) {
		return (
			<div className="container relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
				{/* register route */}
				<Link
					to="/authentication/register"
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"absolute right-4 top-4 md:right-8 md:top-8",
					)}
				>
					Register
				</Link>

				{/* Left side */}
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					{/* logo part */}
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<img src="/favicon.png" alt="orbit outfit" width={45} height={45} />
						Orbit Outfit
					</div>

					{/* footer part */}
					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;Empower your style, where every stitch tell&apos;s your
								story.&rdquo;
							</p>
							<footer className="text-sm">Orbit Outfit.</footer>
						</blockquote>
					</div>
				</div>

				{/* right side */}
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-center">
							<h1 className="text-2xl font-semibold tracking-tight">
								Enter OTP
							</h1>
							<p className="text-sm text-muted-foreground">
								Enter OTP to login your account
							</p>
						</div>

						{/* login form */}
						<div className="flex justify-center">
							<OTPForm />
						</div>
						<p className="px-8 text-center text-sm text-muted-foreground">
							By clicking continue, you agree to our{" "}
							<Link
								to="/authentication/login"
								className="underline underline-offset-4 hover:text-primary"
							>
								Terms of Service
							</Link>{" "}
							and{" "}
							<Link
								to="/authentication/login"
								className="underline underline-offset-4 hover:text-primary"
							>
								Privacy Policy
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="container relative h-screen flex flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
			{/* register route */}
			<Link
				to="/authentication/register"
				className={cn(
					buttonVariants({ variant: "ghost" }),
					"absolute right-4 top-4 md:right-8 md:top-8",
				)}
			>
				Register
			</Link>

			{/* Left side */}
			<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
				{/* logo part */}
				<div className="absolute inset-0 bg-zinc-900" />
				<div className="relative z-20 flex items-center text-lg font-medium">
					<img src="/favicon.png" alt="orbit outfit" width={45} height={45} />
					Orbit Outfit
				</div>

				{/* footer part */}
				<div className="relative z-20 mt-auto">
					<blockquote className="space-y-2">
						<p className="text-lg">
							&ldquo;Empower your style, where every stitch tell&apos;s your
							story.&rdquo;
						</p>
						<footer className="text-sm">Orbit Outfit.</footer>
					</blockquote>
				</div>
			</div>

			{/* right side */}
			<div className="lg:p-8">
				<div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
					<div className="flex flex-col space-y-2 text-center">
						<h1 className="text-2xl font-semibold tracking-tight">
							Login your account
						</h1>
						<p className="text-sm text-muted-foreground">
							Enter your email below to login your account
						</p>
					</div>

					{/* login form */}
					<UserAuthForm />

					<p className="px-8 text-center text-sm text-muted-foreground">
						By clicking continue, you agree to our{" "}
						<Link
							to="/authentication/login"
							className="underline underline-offset-4 hover:text-primary"
						>
							Terms of Service
						</Link>{" "}
						and{" "}
						<Link
							to="/authentication/login"
							className="underline underline-offset-4 hover:text-primary"
						>
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
