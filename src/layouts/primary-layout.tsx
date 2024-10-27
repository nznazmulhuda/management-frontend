import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function PrimaryLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="p-2">
				<div className="fixed bottom-2">
					<SidebarTrigger />
				</div>
				<Outlet />
			</main>
		</SidebarProvider>
	);
}

export default PrimaryLayout;
