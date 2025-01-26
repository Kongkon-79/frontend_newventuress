"use client";

import { Button } from "@/components/ui/button";
import { DemoTableItemsType } from "@/data/VendorAllAuctionData";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Check, MoreHorizontal } from "lucide-react";
import Image from "next/image";





export const ActionColumn: ColumnDef<DemoTableItemsType>[] = [
  {
    header: "Product",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={row.original.image}
              height={142}
              width={110}
              alt="img"
              className="rounded-[8px]"
            />
          </div>
          <div>
            <h4 className="text-[18px] text-gradient font-semibold">{row.original.name}</h4>
            <div className="flex items-center w-[110px] h-[22px] text-[12px] mt-3 p-[10px] border border-[#9E9E9E] rounded-[24px] shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]">
              <Check className="w-[12px] h-[12px] text-[#6E6E6E] mr-2" /> 
              In stock 
              <span>({row.original.stock})</span>
            </div>
          </div>
        </div>
      );
    },
  },
  {
    header: "Starting Price",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">${row.original.price}</span>
        </div>
      );
    },
  },
  {
    header: "Start Date",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">{row.original.createdAt}</span>
        </div>
      );
    },
  },
  {
    header: "End Date",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">{row.original.createdAt}</span>
        </div>
      );
    },
  },
  {
    header: "Bid",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">{row.original.quantity}</span>
        </div>
      );
    },
  },
  {
    header: "Last Bid", 
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-[16px] text-[#444444] font-normal">{row.original.variant}</span>
          <div>
            <span className="text-[16px] text-[#444444] font-normal">${row.original.variantPrice}(Win)</span>
          </div>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]">
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">Edit</DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">Details</DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0" >Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
];