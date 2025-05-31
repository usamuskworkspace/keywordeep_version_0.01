"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Bell, 
  Settings, 
  Search as SearchIcon,
  Menu,
  X,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ModeToggle } from "@/components/theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function DashboardHeader() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // For demo purposes
  const userInitials = "JD";
  const userName = "John Doe";
  const userEmail = "john@example.com";
  
  return (
    <header className="sticky top-0 z-30 border-b bg-background">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Mobile menu trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <div className="flex h-16 items-center border-b px-6">
              <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
                <SearchIcon className="h-5 w-5" />
                <span>Keywordeep</span>
              </Link>
            </div>
            <nav className="grid gap-2 p-4">
              {/* Mobile nav items - these should match the sidebar */}
              <MobileNavItem href="/dashboard" icon={<SearchIcon className="h-5 w-5" />} label="Dashboard" />
              <MobileNavItem href="/dashboard/keywords" icon={<SearchIcon className="h-5 w-5" />} label="Keywords" />
              <MobileNavItem href="/dashboard/rank-tracker" icon={<SearchIcon className="h-5 w-5" />} label="Rank Tracker" />
              <MobileNavItem href="/dashboard/backlinks" icon={<SearchIcon className="h-5 w-5" />} label="Backlinks" />
              <MobileNavItem href="/dashboard/site-audit" icon={<SearchIcon className="h-5 w-5" />} label="Site Audit" />
              <MobileNavItem href="/dashboard/ai-assistant" icon={<SearchIcon className="h-5 w-5" />} label="AI Assistant" />
              <MobileNavItem href="/dashboard/settings" icon={<Settings className="h-5 w-5" />} label="Settings" />
            </nav>
          </SheetContent>
        </Sheet>
        
        {/* Search form */}
        <div className={`${isSearchOpen ? "flex" : "hidden md:flex"} flex-1 items-center md:gap-10 mx-4 md:mx-6`}>
          <form className="flex-1 md:max-w-sm">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="pl-8 md:w-[200px] lg:w-[300px] bg-muted/50"
              />
            </div>
          </form>
        </div>
        
        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {/* Mobile search button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            {isSearchOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <SearchIcon className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle search</span>
          </Button>
          
          <ModeToggle />
          
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full" size="icon">
                <Avatar className="h-9 w-9">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>{userInitials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{userName}</p>
                  <p className="text-xs text-muted-foreground">{userEmail}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/dashboard/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

function MobileNavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  return (
    <Link 
      href={href} 
      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
        isActive 
          ? "bg-accent text-accent-foreground" 
          : "hover:bg-accent hover:text-accent-foreground"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}