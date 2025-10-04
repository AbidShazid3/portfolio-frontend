"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import { Logs } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

// Navigation links array
const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about_me", label: "About Me", role: "PUBLIC" },
  { href: "/skills", label: "Skills", role: "PUBLIC" },
  { href: "/experience", label: "Experience", role: "PUBLIC" },
  { href: "/projects", label: "Projects", role: "PUBLIC" },
  { href: "/blogs", label: "Blogs", role: "PUBLIC" },
  { href: "/contact", label: "Contact", role: "PUBLIC" },
  { href: "/dashboard", label: "Dashboard", role: "PUBLIC" },
]

export default function Navbar() {
  const pathname = usePathname()
  const [userRole, setUserRole] = useState<string>("PUBLIC")

  useEffect(() => {
    // Example: Fetch role from localStorage or context
    const storedRole = localStorage.getItem("role") || "PUBLIC"
    setUserRole(storedRole)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 
  bg-gray-900/90 backdrop-blur-md border-b border-gray-700 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 ">
        {/* Left Side: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden text-white" variant="ghost" size="icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-full h-full">
              <SheetHeader>
                <SheetTitle>
                  <Logs />
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="flex flex-col items-center justify-center gap-4 text-lg font-medium h-full">
                {navigationLinks.map((link, index) => {
                  if (link.role === "PUBLIC" || link.role === userRole) {
                    const isActive = pathname === link.href
                    return (
                      <SheetClose asChild key={index}>
                        <Link
                          href={link.href}
                          className={`${isActive
                            ? "text-primary border-b-2 border-primary"
                            : "text-accent-foreground hover:text-primary"
                            }`}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    )
                  }
                  return null
                })}
              </nav>

              <SheetFooter>
                <SheetClose asChild>
                  <Button size="sm">Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="text-white">
            <Logs />
          </Link>
        </div>

        {/* Right Side: Desktop Navigation + Auth */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="md:gap-2 lg:gap-4">
              {navigationLinks.map((link, index) => {
                if (link.role === "PUBLIC" || link.role === userRole) {
                  const isActive = pathname === link.href
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        className={`py-1.5 font-medium transition-colors ${isActive
                          ? "text-gray-100 hover:text-gray-100 border-b-2 rounded-b-none"
                          : "text-gray-400 hover:text-gray-100"
                          } bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent focus:outline-none`}
                      >
                        <Link href={link.href}>{link.label}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                }
                return null
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Auth Button */}
          {/* <Button variant="outline" size="sm">
              Logout
            </Button> */}
          <Button asChild variant={"destructive"} size="sm">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
