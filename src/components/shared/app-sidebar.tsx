import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
    SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import Image from "next/image"
import SidebarLink from "./sidebar-link"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader className="relative bg-gray-900/90 text-white border-b-2 border-b-cyan-600 shadow hover:shadow-cyan-500/20 transition duration-300 hover:shadow-xl">
                <Link href="/" className="flex items-center justify-center gap-2 p-2">
                    <div className="relative w-8 h-8">
                        <Image
                            src="/Abid_Shadat_Noor_log.png"
                            alt="asn"
                            fill
                            priority
                            sizes="32px"
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    < h2 className="font-medium text-lg hover:bg-gradient-to-b hover:from-orange-300 hover:to-orange-600 hover:bg-clip-text hover:text-transparent transition-colors duration-300">
                        Back to Home
                    </h2>
                </Link>
            </SidebarHeader>
            <SidebarContent className="bg-gray-900/90 text-white pt-6">
                <SidebarLink />
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}
