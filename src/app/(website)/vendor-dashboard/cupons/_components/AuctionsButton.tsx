
"use client"
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import EditeCupon from "./EditeCupon";



const AuctionsButton = ({ row }: any) => {
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
  const [isOpen, setIsOpen] = useState(false)
  console.log(row);



  const handleLogout = () => {
    setIsOpen(true); // Show the modal when "Log out" is clicked
  };
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
        >
          <DropdownMenuItem
            //   onClick={handleEdit}

            onClick={() => {
                {
                //   e.preventDefault(); // Prevent navigation for "Log out"
                  handleLogout(); // Handle logout logic
                }
              }}
           
            className="p-[8px] hover:bg-[#E6EEF6] cursor-pointer  focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          > 
            Edit

            {/* /////////////////////////// */}
        
   
          </DropdownMenuItem>
          

          <DropdownMenuItem
            //   onClick={handleDelete}s
            className="p-[8px] text-red-600 cursor-pointer hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {isOpen && (
        // <Modal><EditeCupon/></Modal>

        <section className="fixed  inset-0 w-full h-auto flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm z-50 ">
        <div className="relative w-[343px] md:w-[1250px] bg-white rounded-[16px] px-[25px] pb-[25px] border border-black">
          <div className="absolute inset-0 z-0 bg-[url('/assets/img/modalbg.png')] bg-no-repeat bg-cover rounded-[16px] opacity-50" />
          <div className="relative   z-10">
            <EditeCupon setIsOpen={setIsOpen}/>
          

            </div>
        </div>
      </section>
      )}



    </div>
  );
};

export default AuctionsButton;
