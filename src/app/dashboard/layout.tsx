import { SidebarProvider} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import AdminHeader from "@/components/AdminHeader";
import { auth } from "@/lib/authOptions";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch the session on the server
  const session = await auth();
  // Redirect to login if not authenticated
  if (!session) {
    redirect("/");
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1">
        <AdminHeader />
        {children}
      </main>
    </SidebarProvider>
  );
}
