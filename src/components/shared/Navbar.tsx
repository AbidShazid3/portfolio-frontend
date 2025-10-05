"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
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
  SheetDescription,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "./logo"

// Navigation links array
const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about-me", label: "About Me" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
  { href: "/dashboard", label: "Dashboard" },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 
  bg-gray-900/90 backdrop-blur-md border-b border-gray-700 px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4 ">
        {/* Left Side: Logo + Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button className="md:hidden text-white" variant="ghost">
                <MenuIcon />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-full h-full">
              <SheetHeader>
                <SheetTitle>
                  {/* Logo */}
                  <Logo/>
                </SheetTitle>
                <SheetDescription className="sr-only">
                    Use this menu to navigate through the website
                </SheetDescription>
              </SheetHeader>

              {/* Mobile Navigation */}
              <nav className="flex flex-col items-center justify-center gap-4 text-lg font-medium h-full">
                {navigationLinks.map((link, index) => {
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
                  return null
                })}
              </nav>

              <SheetFooter>
                <SheetClose asChild>
                  <Button size="lg" variant={"destructive"}>Close</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Logo/>
        </div>

        {/* Right Side: Desktop Navigation + Auth */}
        <div className="flex items-center gap-4">
          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="md:gap-4 lg:gap-7 2xl:gap-10">
              {navigationLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <NavigationMenuItem key={index}>
                    <Link
                      href={link.href}
                      className={`py-1.5 font-medium transition-colors ${isActive
                        ? "text-gray-100 border-b-2 rounded-b-none"
                        : "text-gray-400 hover:text-gray-100"
                        } focus:outline-none`}
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuItem>

                )
                return null
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div>
            {/* Auth Button */}
            {/* <Button variant="outline" size="sm">
              Logout
            </Button> */}
            <Button asChild variant={"destructive"} size="sm">
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
