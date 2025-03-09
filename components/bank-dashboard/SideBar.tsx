"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  CreditCard,
  FileText,
  BarChart3,
  User,
  Bell,
  Settings,
  LogOut,
  Send,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import HarboLogo from "../logo/HarboLogo";
import { getUserByEmail, Userinfo } from "@/data/users";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const userEmail = localStorage.getItem("userEmail");
  const isAdmin = userEmail === "workyworky567@gmail.com";

  return (
    <div className="fixed left-0 top-0 h-screen w-64 flex flex-col border-r bg-white/95 backdrop-blur-sm">
      <div className="py-5 flex items-center border-b-2 justify-center font-bold">
      <Link href="/" >
        <HarboLogo />
      </Link>
      </div>

      <div className="flex-1 flex flex-col space-y-2 px-3 mt-3">
        <div className="space-y-1">
          <NavItem
            href="/dashboard"
            icon={<Home />}
            active={pathname === "/dashboard"}
          >
            Dashboard
          </NavItem>

          <NavItem
            href="/dashboard/userCards"
            icon={<CreditCard />}
            active={pathname === "/dashboard/userCards"}
          >
            Cards
          </NavItem>

          <NavItem
            href="/dashboard/userTransactions"
            icon={<FileText />}
            active={pathname === "/dashboard/userTransactions"}
          >
            Transactions
          </NavItem>

          <NavItem
            href="/dashboard/userAnalytics"
            icon={<BarChart3 />}
            active={pathname === "/dashboard/userAnalytics"}
          >
            Analytics
          </NavItem>

          <NavItem
            href="/dashboard/userAccount"
            icon={<User />}
            active={pathname === "/dashboard/userAccount"}
          >
            Account
          </NavItem>

          <NavItem
            href="/dashboard/sendMoney"
            icon={<Send />}
            active={pathname === "/dashboard/sendMoney"}
          >
            Send Money
          </NavItem>

          {/* {isAdmin && (
            <NavItem
              href="/dashboard/manageTransactions"
              icon={<FileText />}
              active={pathname === "/dashboard/manageTransactions"}
            >
              ADMIN
            </NavItem> */}
          {/* )} */}
        </div>
      </div>

      <UserProfile />
    </div>
  );
}

interface NavItemProps {
  href: string;
  icon: React.ReactElement;
  children: React.ReactNode;
  active?: boolean;
}

function NavItem({ href, icon, children, active = false }: NavItemProps) {
  return (
    <Link
      href={href}
      className={`flex items-center rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
        active
          ? "bg-primary text-white"
          : "text-gray-700 hover:bg-gray-100 hover:text-primary"
      }`}
    >
      {React.cloneElement(icon as React.ReactElement<any>, {
        className: `mr-3 h-4 w-4 ${active ? "text-white" : "text-gray-500"}`,
      })}
      {children}
    </Link>
  );
}

function UserProfile() {
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

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  const pathname = usePathname();

  return (
    <div>
      <div className="mt-auto space-y-1 px-3">
        <NavItem
          href="/dashboard/support"
          icon={<Bell />}
          active={pathname === "/dashboard/support"}
        >
          Support
        </NavItem>

        <NavItem
          href="/dashboard/settings"
          icon={<Settings />}
          active={pathname === "/dashboard/settings"}
        >
          Settings
        </NavItem>
      </div>

      <div className="border-t bg-gray-50/50 p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-primary">
            <AvatarImage
              src={user?.avatar || "/placeholder.svg"}
              alt={`${user?.firstName} ${user?.lastName}`}
            />
            <AvatarFallback>
              {user ? getInitials(user.firstName, user.lastName) : "U"}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">
              {user ? `${user.firstName} ${user.lastName}` : "Loading..."}
            </p>
            <p className="text-xs text-gray-500 truncate">
              {user?.email || "Loading..."}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-500 hover:text-primary"
            onClick={() => {
              localStorage.removeItem("userEmail");
              window.location.href = "/login";
            }}
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
