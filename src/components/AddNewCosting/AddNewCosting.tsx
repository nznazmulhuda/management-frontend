import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "@/components/ui/sheet"

import { Plus } from "lucide-react";
import { SidebarMenuButton } from "../ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AddSingleSellData from "@/forms/AddSingleSellData";
import AddMultipleSellData from "@/forms/AddMultipleSellData";



function AddNewCosting() {
  return (
    <Sheet>
      {/* dialog trigger button */}
      <SheetTrigger className="flex items-center gap-1 w-full">
        <SidebarMenuButton>
          <Plus /> Add new cost
        </SidebarMenuButton>
      </SheetTrigger>

      {/* dialog main content */}
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Add new cost data</SheetTitle>
          <SheetDescription>
            Once you add a new cost data, it will be available in the costing list.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>

  );
}

export default AddNewCosting;
