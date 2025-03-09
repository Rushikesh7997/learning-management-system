import React from "react";
import { Menu, School } from "lucide-react";
import { DarkMode } from "./DarkMode";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export const Navbar = () => {
  const user = false;
  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* desktop device */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <h1 className="hidden md:block font-extrabold text-2xl">
            E-Learning
          </h1>
        </div>
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem>My Learning</DropdownMenuItem>
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Dashboard</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline">Login</Button>
              <Button>Signup</Button>
            </div>
          )}
          <DarkMode/>
        </div>
      </div>
      {/* mobile device */}
      <div className="flex md:hidden items-center justify-between px-4 h-full ">
        <h1 className="font-extrabold text-2xl">E-Learning</h1>
        <MobileNavbar/>
      </div>
    </div>
  );
};


const MobileNavbar =()=>{
    return (
    <Sheet>
        <SheetTrigger asChild>
            <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline">
              <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent className="">
            <SheetHeader className="flex flex-row items-center justify-between mt-4">
              <SheetTitle>E-Learning</SheetTitle>
              <DarkMode/>
            </SheetHeader>
            
            <nav>
              <li>My Learning</li>
              <li>Profile</li>
              <li>Log Out</li>
            </nav>

            <SheetFooter>
              <SheetClose asChild>
                  <Button type="submit">Save changes</Button>
              </SheetClose>
            </SheetFooter>
        </SheetContent>
    </Sheet>
    )
}