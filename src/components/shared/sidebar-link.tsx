"use client"

import { FileText, FolderGit2, History, Home, Layers, UserPen, Zap } from "lucide-react";
import Link from "next/link";
import {
    SidebarMenu
} from "@/components/ui/sidebar"
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button";
import { showError } from "@/utils/showError";

const SidebarLink = () => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });

            router.push("/login");
        } catch (err) {
            showError(err)
        }
    };

    return (
        <div className="flex flex-col h-full">
            <SidebarMenu className="space-y-2 flex-1 p-2">
                <Link
                    href="/dashboard"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <Home className="h-5 w-5" />
                    Dashboard Home
                </Link>

                <Link
                    href="/dashboard/blogs"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard/blogs"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <FileText className="h-5 w-5" />
                    Blogs
                </Link>

                <Link
                    href="/dashboard/projects"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard/projects"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <FolderGit2 className="h-5 w-5" />
                    Projects
                </Link>

                <Link
                    href="/dashboard/me"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard/me"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <UserPen className="h-5 w-5" />
                    About Me
                </Link>

                <Link
                    href="/dashboard/experiences"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard/experiences"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <History className="h-5 w-5" />
                    Experiences
                </Link>

                <Link
                    href="/dashboard/categories"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard/categories"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <Layers className="h-5 w-5" />
                    Skill Categories
                </Link>

                <Link
                    href="/dashboard/skills"
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors duration-200 ${pathname === "/dashboard/skills"
                        ? "bg-gray-100 text-black"
                        : "hover:bg-gray-100 hover:text-black"
                        }`}
                >
                    <Zap className="h-5 w-5" />
                    Skills
                </Link>
            </SidebarMenu>

            <div className="p-2">
                <Button
                    variant="destructive"
                    className="w-full justify-start gap-2 cursor-pointer"
                    onClick={handleLogout}
                >
                    <LogOut className="h-4 w-4" />
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default SidebarLink;