import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

function PrimaryLayout() {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="pl-2">
				<SidebarTrigger />
				<Outlet />
			</main>
		</SidebarProvider>
	);
}

export default PrimaryLayout;
