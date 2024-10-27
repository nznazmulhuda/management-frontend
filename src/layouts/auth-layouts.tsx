import { Outlet } from "react-router-dom";

function AuthLayout() {
	return (
		<main className="w-full overflow-hidden">
			{/* dynamic webpage */}
			<Outlet />
		</main>
	);
}

export default AuthLayout;
