import React, { useEffect } from "react";
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
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@radix-ui/react-dropdown-menu";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUserMutation } from "@/features/api/authApi";
import { toast } from "sonner";
import { useSelector } from "react-redux";


export const Navbar = () => {
  
  const {user} = useSelector(store=>(store.auth));
  const [logoutUser, {data, isSuccess}] = useLogoutUserMutation();
  const navigate = useNavigate();

  const logoutHandler = async() =>{
    await logoutUser();
  }

  useEffect(()=>{
    if(isSuccess){
      toast.success(data.message || "User is log out");
      navigate("/login");
    }
  },[isSuccess])

  return (
    <div className="h-16 dark:bg-[#0A0A0A] bg-white border-b dark:border-b-gray-800 border-b-gray-200 fixed top-0 left-0 right-0 duration-300 z-10">
      {/* desktop device */}
      <div className="max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full">
        <div className="flex items-center gap-2">
          <School size={"30"} />
          <Link>
            <h1 className="hidden md:block font-extrabold text-2xl">
              E-Learning
            </h1>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar>
                    <AvatarImage src={user?.photoUrl || "https://github.com/shadcn.png"} alt="Profile Picture" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem><Link to="my-learning">My Learning</Link></DropdownMenuItem>
                  <DropdownMenuItem><Link to="profile">Profile</Link></DropdownMenuItem>
                  <DropdownMenuItem onClick={logoutHandler}>Log out</DropdownMenuItem>
                </DropdownMenuGroup>
                {
                  user.role === "instructor" && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Dashboard</DropdownMenuItem>
                    </>
                  )
                }
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={()=>navigate("/login")}>Login</Button>
              <Button onClick={()=>navigate("/login")}>Signup</Button>
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
    const role = "instructor"
    return (
    <Sheet>
        <SheetTrigger asChild>
            <Button size='icon' className="rounded-full bg-gray-200 hover:bg-gray-200" variant="outline">
              <Menu/>
            </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            <SheetHeader className="flex flex-row items-center justify-between mt-4">
              <SheetTitle className="text-2xl font-extrabold">E-Learning</SheetTitle>
              <DarkMode/>
            </SheetHeader>
            <Separator className="mr-2"/>
            <nav className="flex flex-col space-y-4 ml-3">
              <li>My Learning</li>
              <li>Profile</li>
              <li>Log Out</li>
            </nav>
            {
              role === "instructor" && (
                <SheetFooter className="mt-1">
                  <SheetClose asChild>
                      <Button type="submit">Dashboard</Button>
                  </SheetClose>
                </SheetFooter>
              )
            }
        </SheetContent>
    </Sheet>
    )
}