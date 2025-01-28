"use client";

import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const ChoseStoresList = [
  { id: 1, name: "Chose stores", value: "Chose stores" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];
const FilterByCtegoryList = [
  { id: 1, name: "Chose Date Range", value: "Chose Date Range" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];

function OrderFilter() {
    const [show, setShow] = useState<string>("all"); // Default to "all"
    const [stores, setStores] = useState<string>("Chose stores"); // Default to "auctions"
    const [ctegorys, setCtegorys] = useState<string>("Chose Date Range"); // Default to "auctions"
  return (
    <div className="h-[68px] mt-[30px] p-[8px] bg-white w-full flex items-center justify-between rounded-[12px]">
      {/* Dropdown for "Show" */}
      <div className="flex gap-x-[28px]">
        <div className="h-full flex items-center gap-x-[9px] w-fit">
            <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Show
            </span>
            <PacificDropdownSelector
            list={showList}
            selectedValue={show}
            onValueChange={setShow}
            />
        </div>
        {/* Dropdown for "Categories" */}
        <div className="h-full flex items-center gap-2">
            <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Entries
            </span>
            <PacificDropdownSelector
            list={ChoseStoresList}
            selectedValue={stores}
            onValueChange={setStores}
            />
        </div>
        <div className="h-full flex items-center gap-2">
            
            <PacificDropdownSelector
            list={FilterByCtegoryList}
            selectedValue={ctegorys}
            onValueChange={setCtegorys}
            />
        </div>
      </div>
      <div>
        <button className="px-[20px] py-[9px] bg-primary text-[#F5F5F5] rounded-lg">Bulk Delete</button>
      </div>
    </div>
  )
}

export default OrderFilter