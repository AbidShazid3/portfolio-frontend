import { getUser } from '@/actions/auth';
import { AppSidebar } from '@/components/shared/app-sidebar';
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Role } from '@/types';
import { redirect } from 'next/navigation';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
    const user = await getUser();
    if (!user || !user.data) {
        redirect("/login");
    } else if (user.data.role !== Role.ADMIN) {
        redirect("/login");
    }

    return (
        <SidebarProvider >
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 text-white shrink-0 items-center gap-2 px-4 bg-gray-900/90">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-10"
                    />
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 bg-[#04081A] text-white">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
};

export default DashboardLayout;