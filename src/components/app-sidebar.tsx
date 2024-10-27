import {
	Bell,
	LayoutDashboard,
	ChartColumnIncreasing,
	MessageCircleWarning,
	Settings,
	ChevronsUpDown,
	BadgeCheck,
	LogOut,
	BellDot,
} from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// Menu items.
const items = [
	{
		title: "Dashboard",
		url: "/",
		icon: LayoutDashboard,
	},
	{
		title: "Analytics",
		url: "/analytics",
		icon: ChartColumnIncreasing,
	},
	{
		title: "Notifications",
		url: "/notifications",
		icon: Bell,
	},
	{
		title: "Reports",
		url: "/reports",
		icon: MessageCircleWarning,
	},
	{
		title: "Settings",
		url: "",
		icon: Settings,
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			{/* sidebar header */}
			<SidebarHeader>
				{/* sidebar header body */}
				<Button variant={"ghost"} className="flex justify-start p-0">
					<img src="/favicon.png" width={40} height={40} />
					Orbit Outfit
				</Button>
			</SidebarHeader>

			{/* sidebar main content */}
			<SidebarContent>
				{/* sidebar main content body part */}
				<SidebarGroup>
					{/* sidebar main content label */}
					<SidebarGroupLabel>All routes</SidebarGroupLabel>

					{/* all routes */}
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem key={item.title}>
									<SidebarMenuButton asChild>
										<NavLink to={item.url}>
											<item.icon />
											<span>{item.title}</span>

											{/* set all the count of notifaction */}
											{item.url === "/notifications" && (
												<SidebarMenuBadge>25</SidebarMenuBadge>
											)}

											{/* set all the reports of report */}
											{item.url === "/reports" && (
												<SidebarMenuBadge>2</SidebarMenuBadge>
											)}
										</NavLink>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>

			{/* sidebar footer */}
			<SidebarFooter>
				<SidebarMenu>
					<SidebarMenuItem>
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<SidebarMenuButton
									size="lg"
									className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
								>
									<Avatar className="h-8 w-8 rounded-lg">
										<AvatarImage src={"/favicon.png"} alt={"Nazmul Huda"} />
										<AvatarFallback className="rounded-lg">CN</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-semibold">Nazmul Huda</span>
										<span className="truncate text-xs">
											nznazmulhuda04@gmail.com
										</span>
									</div>
									<ChevronsUpDown className="ml-auto size-4" />
								</SidebarMenuButton>
							</DropdownMenuTrigger>

							<DropdownMenuContent
								className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
								side="bottom"
								align="end"
								sideOffset={4}
							>
								<DropdownMenuLabel className="p-0 font-normal">
									<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
										<Avatar className="h-8 w-8 rounded-lg">
											<AvatarImage src={"/favicon.png"} />
											<AvatarFallback className="rounded-lg">CN</AvatarFallback>
										</Avatar>
										<div className="grid flex-1 text-left text-sm leading-tight">
											<span className="truncate font-semibold">
												Nazmul Huda
											</span>
											<span className="truncate text-xs">
												nznazmulhuda04@gmail.com
											</span>
										</div>
									</div>
								</DropdownMenuLabel>

								<DropdownMenuSeparator />

								<DropdownMenuGroup>
									<DropdownMenuItem>
										<BadgeCheck />
										<Link to={"/"}>Account</Link>
									</DropdownMenuItem>
									<DropdownMenuItem>
										<BellDot />
										Notifications
									</DropdownMenuItem>
								</DropdownMenuGroup>
								<DropdownMenuSeparator />
								<DropdownMenuItem onClick={() => console.log("Logout...")}>
									<LogOut />
									Log out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarFooter>
		</Sidebar>
	);
}
