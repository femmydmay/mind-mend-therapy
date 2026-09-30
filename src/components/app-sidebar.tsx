"use client";
import {
  Calendar,
  Home,
  // Inbox,
  NotebookPen,
  // Search,
  Settings,
  Speech,
  Users,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  // SidebarGroup,
  // SidebarGroupContent,
  // SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Clients",
    url: "#",
    icon: Users,
  },
  {
    title: "Schedule",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Comments",
    url: "#",
    icon: Speech,
  },
  {
    title: "Notes",
    url: "#",
    icon: NotebookPen,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { data, status } = useSession();

  // Check session status before accessing data
  if (status === "loading") {
    return <div>Loading...</div>; // Show loading state while session is being fetched
  }

  const userRole = data?.user?.user?.role ?? "Admin"; // Use 'data' instead of 'session'

  return (
    <Sidebar>
      <>
        <>
          <SidebarHeader>
            <h1 className="text-2xl font-bold text-white px-4 py-2">
              Dashboard
            </h1>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link
                      href={item.url}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-100 transition-all hover:text-gray-900",
                        pathname === item.url && "bg-gray-100 text-white"
                      )}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="">
            <Button variant={"primary"} className="uppercase text-white">
              {/* {data?.user.user.role?? "Guest";} */}
              {userRole}
            </Button>
          </SidebarFooter>
        </>
      </>
    </Sidebar>
  );
}
