"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Search,
  LineChart,
  Link as LinkIcon,
  FileText,
  Sparkles,
  Settings,
  AlertTriangle,
  BarChart3,
  Users
} from "lucide-react";

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-64 shrink-0 border-r md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Search className="h-6 w-6" />
            <span>Keywordeep</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-4 text-sm font-medium">
            <NavItem
              href="/dashboard"
              icon={LayoutDashboard}
              label="Dashboard"
              exactMatch
            />
            
            <div className="mt-6">
              <h4 className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                Research
              </h4>
              <NavItem
                href="/dashboard/keywords"
                icon={Search}
                label="Keyword Explorer"
              />
              <NavItem
                href="/dashboard/rank-tracker"
                icon={LineChart}
                label="Rank Tracker"
              />
              <NavItem
                href="/dashboard/backlinks"
                icon={LinkIcon}
                label="Backlink Analyzer"
              />
              <NavItem
                href="/dashboard/competitors"
                icon={BarChart3}
                label="Competitor Analysis"
              />
            </div>
            
            <div className="mt-6">
              <h4 className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                Content
              </h4>
              <NavItem
                href="/dashboard/content-gap"
                icon={FileText}
                label="Content Gap"
              />
              <NavItem
                href="/dashboard/ai-assistant"
                icon={Sparkles}
                label="AI Assistant"
              />
              <NavItem
                href="/dashboard/site-audit"
                icon={AlertTriangle}
                label="Site Audit"
              />
            </div>
            
            <div className="mt-6">
              <h4 className="px-2 py-1 text-xs font-semibold text-muted-foreground">
                Settings
              </h4>
              <NavItem
                href="/dashboard/team"
                icon={Users}
                label="Team Members"
              />
              <NavItem
                href="/dashboard/settings"
                icon={Settings}
                label="Settings"
              />
            </div>
          </nav>
        </div>
      </div>
    </aside>
  );
}

function NavItem({ 
  href, 
  icon: Icon, 
  label, 
  exactMatch
}: { 
  href: string; 
  icon: React.ElementType; 
  label: string;
  exactMatch?: boolean;
}) {
  const pathname = usePathname();
  const isActive = exactMatch 
    ? pathname === href
    : pathname.startsWith(href);
  
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-colors",
        isActive 
          ? "bg-accent text-accent-foreground" 
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
      )}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}