"use client";
import { Bell, Search, User, Settings, LogOut } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useEffect, useState } from "react";
import { getUserByEmail, Userinfo } from "@/data/users";

export default function Header() {
  const [user, setUser] = useState<Userinfo | null>(null);

  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem("userEmail");

    if (loggedInUserEmail) {
      const currentUser = getUserByEmail(loggedInUserEmail);
      if (currentUser) {
        setUser(currentUser);
      }
    }
  }, []);

  return (
    <div className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">
          Welcome back, {" "}
          <span className="text-primary">
            {user?.firstName || "Guest"}!
          </span>
        </h1>
        <p className="text-gray-500">
          Experience Harbor Bank
          {/* {user
            ? `Balance: $${user.balance.toLocaleString()}`
            : "Let's experience Harborfront"} */}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  src={`/avatars/${user?.firstName.toLowerCase()}.jpg`}
                  alt={`${user?.firstName}'s profile`}
                  width={25}
                  height={25}
                />
                <AvatarFallback>
                  {user?.firstName ? user.firstName[0].toUpperCase() : "G"}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
