import AddNewSell from "@/components/AddNewSell/AddNewSell";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { useButton } from "@/hooks/useButton";
import { Outlet } from "react-router-dom";

function PrimaryLayout() {
	const data = useButton();
	return (
		<SidebarProvider>
			<AppSidebar />

			{/* main part is here */}
			<main className="w-full overflow-hidden">
				<div className="fixed bottom-2 pl-2">
					<SidebarTrigger />
				</div>

				{data?.isSellButton && <AddNewSell />}

				{/* dynamic webpage */}
				<Outlet />
			</main>
		</SidebarProvider>
	);
}

export default PrimaryLayout;
