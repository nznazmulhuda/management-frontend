import { Button } from "@/components/ui/button";
import { CalendarDateRangePicker } from "./components/date-range-picker";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Overview } from "./components/overview";
import { RecentSales } from "./components/recentSells";
import PageHeading from "@/components/PageHeading";

export default function DashboardPage() {
	return (
		<>
			<div className="flex-col md:flex aspect-auto">
				<div className="flex-1 space-y-4 p-8 pt-6 pb-0">
					{/* page title and some another elements */}
					<div className="flex items-center justify-between space-y-2 flex-col md:flex-row">
						{/* page heading */}
						<PageHeading title="Dashboard" />

						<div className="flex items-center space-x-2">
							{/* data picker */}
							<CalendarDateRangePicker />

							{/* Download button */}
							<Button onClick={() => console.log("Downloading...")}>
								Download
							</Button>
						</div>
					</div>

					{/* all cards are here */}
					<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
						{/* revenue card start here */}
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Revenue
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
								</svg>
							</CardHeader>

							<CardContent>
								<div className="text-2xl font-bold">$45,231.89</div>
								<p className="text-xs text-muted-foreground">
									+20.1% from last month
								</p>
							</CardContent>
						</Card>

						{/* investment card start here */}
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Investment
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
									<circle cx="9" cy="7" r="4" />
									<path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
								</svg>
							</CardHeader>
							<CardContent>
								<div className="text-2xl font-bold">+2350</div>
								<p className="text-xs text-muted-foreground">
									+180.1% from last month
								</p>
							</CardContent>
						</Card>

						{/* sells card start here */}
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Total Sell
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<rect width="20" height="14" x="2" y="5" rx="2" />
									<path d="M2 10h20" />
								</svg>
							</CardHeader>

							<CardContent>
								<div className="text-2xl font-bold">+12,234</div>
								<p className="text-xs text-muted-foreground">
									+19% from last month
								</p>
							</CardContent>
						</Card>

						{/* all active order */}
						<Card>
							<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
								<CardTitle className="text-sm font-medium">
									Active Now
								</CardTitle>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									className="h-4 w-4 text-muted-foreground"
								>
									<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
								</svg>
							</CardHeader>

							<CardContent>
								<div className="text-2xl font-bold">+573</div>
								<p className="text-xs text-muted-foreground">
									+201 since last hour
								</p>
							</CardContent>
						</Card>
					</div>

					{/* chart and recent sells data show */}
					<div className="md:grid md:grid-cols-2 lg:grid-cols-7 gap-4 space-y-4 md:space-y-0">
						<Card className="col-span-7 lg:col-span-4">
							<CardHeader>
								<CardTitle>Overview</CardTitle>
							</CardHeader>

							<CardContent className="px-2">
								<Overview />
							</CardContent>
						</Card>

						<Card className="col-span-7 lg:col-span-3">
							<CardHeader>
								<CardTitle>Recent Sales</CardTitle>
								<CardDescription>
									You made 265 sales this month.
								</CardDescription>
							</CardHeader>

							<CardContent>
								<RecentSales />
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</>
	);
}
