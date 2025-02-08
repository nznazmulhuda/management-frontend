import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

import { Plus } from "lucide-react";
import { SidebarMenuButton } from "../ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddSingleSellData from "@/forms/AddSingleSellData";
import AddMultipleSellData from "@/forms/AddMultipleSellData";



function AddNewSell() {
	return (
		<Sheet>
			{/* dialog trigger button */}
			<SheetTrigger className="flex items-center gap-1 w-full">
				<SidebarMenuButton>
					<Plus /> Add new sell
				</SidebarMenuButton>
			</SheetTrigger>

			{/* dialog main content */}
			<SheetContent className="overflow-y-auto">
				<SheetHeader>
					<SheetTitle>Add new t-shirt sell data</SheetTitle>
					<SheetDescription>
						Once you add a new t-shirt data, it will be available in the t-shirt list.
					</SheetDescription>

					{/* tabs for add data */}
					<Tabs defaultValue="singleData" className="w-full">
						{/* tab lists */}
						<TabsList>
							<TabsTrigger value="singleData">Single Data</TabsTrigger>
							<TabsTrigger value="multipleData">Multiple Data</TabsTrigger>
						</TabsList>

						{/* tab content from add single data */}
						<TabsContent value="singleData">
							<AddSingleSellData />
						</TabsContent>
						<TabsContent value="multipleData">
							<AddMultipleSellData />	
						</TabsContent>
					</Tabs>



				</SheetHeader>
			</SheetContent>
		</Sheet>

	);
}

export default AddNewSell;
