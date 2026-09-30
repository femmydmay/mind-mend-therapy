"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { Bell } from "lucide-react";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "./ui/sidebar";
import { signOut, useSession } from "next-auth/react";
const AdminHeader = () => {
  const pathname = usePathname();
  const { data, status } = useSession();
  // Check session status before accessing data
  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while session is being fetched
  }

  const userRole = data?.user?.user?.role ?? "Admin"; // Use 'data' instead of 'session'

  // Safely access session data
  // const user = data?.user?.user || {};
  const userEmail = data?.user?.user?.email || "N/A"; // Default to "N/A" if no email
  // const userNickname = data?.user?.user?.nickname || "User"; // Default to "User" if no nickname

  return (
    <main className="flex-1 overflow-y-auto border-b">
      <header className="bg-white shadow">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex">
            <SidebarTrigger />
            <h2 className="text-xl font-semibold text-gray-800">
              {pathname === "/admin/add-listing"
                ? "Add New Listing"
                : pathname === "/admin/manage-rooms-packages"
                ? "Manage Flats & Packages"
                : pathname === "/admin/bookings"
                ? "Manage Bookings"
                : pathname === "/admin/settings"
                ? "Settings"
                : pathname === "/admin/users"
                ? "Users"
                : "Dashboard"}
            </h2>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notifications</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-8 w-8 rounded-full"
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>
                      {data?.user.user &&
                        data?.user?.user.nickname[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none uppercase">
                      {/* {data?.user.user.role} */}
                      {userRole}
                    </p>
                    <p className="text-xs leading-none text-neutral-500 dark:text-neutral-400">
                      {/* {data?.user.user.email} */}
                      {userEmail}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                >
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </main>
  );
};

export default AdminHeader;
