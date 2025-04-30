"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Image, 
  Calendar, 
  Search, 
  Bell, 
  Menu, 
  X,
  LogIn,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/logo";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Memes", href: "/memes", icon: Image },
  { name: "Events", href: "/events", icon: Calendar },
  { name: "Search", href: "/search", icon: Search },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // This is just for demo purposes, in a real app we would use proper auth
  const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0 sm:max-w-xs">
              <MobileNav pathname={pathname} isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
            </SheetContent>
          </Sheet>
        </div>
        
        <Link href="/" className="flex items-center">
          <Logo className="h-8 w-8 text-primary" />
          <span className="ml-2 font-bold text-xl hidden md:inline-block">VibeKenya</span>
        </Link>
      
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 mx-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center ml-auto">
          {isLoggedIn ? (
            <>
              <Button variant="ghost" size="icon" className="mr-2">
                <Bell className="h-5 w-5" />
              </Button>
              <Link href="/profile/user1">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Link>
            </>
          ) : (
            <Button onClick={toggleLogin} className="mr-2 bg-red-600 hover:bg-red-700">
              <LogIn className="h-4 w-4 mr-2" />
              Login
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

function MobileNav({ 
  pathname, 
  isLoggedIn, 
  toggleLogin 
}: { 
  pathname: string, 
  isLoggedIn: boolean, 
  toggleLogin: () => void 
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <Link href="/" className="flex items-center">
          <Logo className="h-6 w-6 text-primary" />
          <span className="ml-2 font-bold text-lg">VibeKenya</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </SheetTrigger>
        </Sheet>
      </div>
      
      <div className="px-6 py-2 flex-1">
        <nav className="flex flex-col space-y-6 mt-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center text-base font-medium transition-colors hover:text-primary",
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="mt-auto border-t px-6 py-4">
        {isLoggedIn ? (
          <Link 
            href="/profile/user1" 
            className="flex items-center py-2 font-medium text-muted-foreground hover:text-primary"
          >
            <User className="h-5 w-5 mr-3" />
            My Profile
          </Link>
        ) : (
          <Button onClick={toggleLogin} className="w-full bg-red-600 hover:bg-red-700">
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        )}
      </div>
    </div>
  );
}