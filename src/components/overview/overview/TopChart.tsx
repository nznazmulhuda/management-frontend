"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "Total sell and Total Revenue";

const chartData = [
	{ date: "2024-04-01", sell: 222, revenue: 150 },
	{ date: "2024-04-02", sell: 97, revenue: 180 },
	{ date: "2024-04-03", sell: 167, revenue: 120 },
	{ date: "2024-04-04", sell: 242, revenue: 260 },
	{ date: "2024-04-05", sell: 373, revenue: 290 },
	{ date: "2024-04-06", sell: 301, revenue: 340 },
	{ date: "2024-04-07", sell: 245, revenue: 180 },
	{ date: "2024-04-08", sell: 409, revenue: 320 },
	{ date: "2024-04-09", sell: 59, revenue: 110 },
	{ date: "2024-04-10", sell: 261, revenue: 190 },
	{ date: "2024-04-11", sell: 327, revenue: 350 },
	{ date: "2024-04-12", sell: 292, revenue: 210 },
	{ date: "2024-04-13", sell: 342, revenue: 380 },
	{ date: "2024-04-14", sell: 137, revenue: 220 },
	{ date: "2024-04-15", sell: 120, revenue: 170 },
	{ date: "2024-04-16", sell: 138, revenue: 190 },
	{ date: "2024-04-17", sell: 446, revenue: 360 },
	{ date: "2024-04-18", sell: 364, revenue: 410 },
	{ date: "2024-04-19", sell: 243, revenue: 180 },
	{ date: "2024-04-20", sell: 89, revenue: 150 },
	{ date: "2024-04-21", sell: 137, revenue: 200 },
	{ date: "2024-04-22", sell: 224, revenue: 170 },
	{ date: "2024-04-23", sell: 138, revenue: 230 },
	{ date: "2024-04-24", sell: 387, revenue: 290 },
	{ date: "2024-04-25", sell: 215, revenue: 250 },
	{ date: "2024-04-26", sell: 75, revenue: 130 },
	{ date: "2024-04-27", sell: 383, revenue: 420 },
	{ date: "2024-04-28", sell: 122, revenue: 180 },
	{ date: "2024-04-29", sell: 315, revenue: 240 },
	{ date: "2024-04-30", sell: 454, revenue: 380 },
	{ date: "2024-05-01", sell: 165, revenue: 220 },
	{ date: "2024-05-02", sell: 293, revenue: 310 },
	{ date: "2024-05-03", sell: 247, revenue: 190 },
	{ date: "2024-05-04", sell: 385, revenue: 420 },
	{ date: "2024-05-05", sell: 481, revenue: 390 },
	{ date: "2024-05-06", sell: 498, revenue: 520 },
	{ date: "2024-05-07", sell: 388, revenue: 300 },
	{ date: "2024-05-08", sell: 149, revenue: 210 },
	{ date: "2024-05-09", sell: 227, revenue: 180 },
	{ date: "2024-05-10", sell: 293, revenue: 330 },
	{ date: "2024-05-11", sell: 335, revenue: 270 },
	{ date: "2024-05-12", sell: 197, revenue: 240 },
	{ date: "2024-05-13", sell: 197, revenue: 160 },
	{ date: "2024-05-14", sell: 448, revenue: 490 },
	{ date: "2024-05-15", sell: 473, revenue: 380 },
	{ date: "2024-05-16", sell: 338, revenue: 400 },
	{ date: "2024-05-17", sell: 499, revenue: 420 },
	{ date: "2024-05-18", sell: 315, revenue: 350 },
	{ date: "2024-05-19", sell: 235, revenue: 180 },
	{ date: "2024-05-20", sell: 177, revenue: 230 },
	{ date: "2024-05-21", sell: 82, revenue: 140 },
	{ date: "2024-05-22", sell: 81, revenue: 120 },
	{ date: "2024-05-23", sell: 252, revenue: 290 },
	{ date: "2024-05-24", sell: 294, revenue: 220 },
	{ date: "2024-05-25", sell: 201, revenue: 250 },
	{ date: "2024-05-26", sell: 213, revenue: 170 },
	{ date: "2024-05-27", sell: 420, revenue: 460 },
	{ date: "2024-05-28", sell: 233, revenue: 190 },
	{ date: "2024-05-29", sell: 78, revenue: 130 },
	{ date: "2024-05-30", sell: 340, revenue: 280 },
	{ date: "2024-05-31", sell: 178, revenue: 230 },
	{ date: "2024-06-01", sell: 178, revenue: 200 },
	{ date: "2024-06-02", sell: 470, revenue: 410 },
	{ date: "2024-06-03", sell: 103, revenue: 160 },
	{ date: "2024-06-04", sell: 439, revenue: 380 },
	{ date: "2024-06-05", sell: 88, revenue: 140 },
	{ date: "2024-06-06", sell: 294, revenue: 250 },
	{ date: "2024-06-07", sell: 323, revenue: 370 },
	{ date: "2024-06-08", sell: 385, revenue: 320 },
	{ date: "2024-06-09", sell: 438, revenue: 480 },
	{ date: "2024-06-10", sell: 155, revenue: 200 },
	{ date: "2024-06-11", sell: 92, revenue: 150 },
	{ date: "2024-06-12", sell: 492, revenue: 420 },
	{ date: "2024-06-13", sell: 81, revenue: 130 },
	{ date: "2024-06-14", sell: 426, revenue: 380 },
	{ date: "2024-06-15", sell: 307, revenue: 350 },
	{ date: "2024-06-16", sell: 371, revenue: 310 },
	{ date: "2024-06-17", sell: 475, revenue: 520 },
	{ date: "2024-06-18", sell: 107, revenue: 170 },
	{ date: "2024-06-19", sell: 341, revenue: 290 },
	{ date: "2024-06-20", sell: 408, revenue: 450 },
	{ date: "2024-06-21", sell: 169, revenue: 210 },
	{ date: "2024-06-22", sell: 317, revenue: 270 },
	{ date: "2024-06-23", sell: 480, revenue: 530 },
	{ date: "2024-06-24", sell: 132, revenue: 180 },
	{ date: "2024-06-25", sell: 141, revenue: 190 },
	{ date: "2024-06-26", sell: 434, revenue: 380 },
	{ date: "2024-06-27", sell: 448, revenue: 490 },
	{ date: "2024-06-28", sell: 149, revenue: 200 },
	{ date: "2024-06-29", sell: 103, revenue: 160 },
	{ date: "2024-06-30", sell: 446, revenue: 400 },
];

const chartConfig = {
	sell: {
		label: "Sell",
		color: "#0077B8",
	},
	revenue: {
		label: "Revenue",
		color: "#007A33",
	},
} satisfies ChartConfig;

export default function Component() {
	const [activeChart, setActiveChart] =
		React.useState<keyof typeof chartConfig>("sell");

	const total = React.useMemo(
		() => ({
			sell: chartData.reduce((acc, curr) => acc + curr.sell, 0),
			revenue: chartData.reduce((acc, curr) => acc + curr.revenue, 0),
		}),
		[],
	);

	return (
		<Card>
			<CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row w-full">
				<div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
					<CardTitle>Total sell and Total revenue</CardTitle>

					<CardDescription>
						Showing total sell and total revenue for the last 3 months
					</CardDescription>
				</div>
				<div className="flex">
					{["sell", "revenue"].map((key) => {
						const chart = key as keyof typeof chartConfig;
						return (
							<button
								key={chart}
								data-active={activeChart === chart}
								className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
								onClick={() => setActiveChart(chart)}
							>
								<span className="text-xs text-muted-foreground">
									{chartConfig[chart].label}
								</span>
								<span className="text-lg font-bold leading-none sm:text-3xl">
									{total[key as keyof typeof total].toLocaleString()}
								</span>
							</button>
						);
					})}
				</div>
			</CardHeader>
			<CardContent className="px-2 sm:p-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<BarChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={2}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("en-US", {
									month: "short",
									day: "numeric",
								});
							}}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent
									className="w-[150px]"
									nameKey="views"
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("en-US", {
											month: "short",
											day: "numeric",
											year: "numeric",
										});
									}}
								/>
							}
						/>
						<Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
