import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardStats } from "@/components/dashboard/stats";
import { KeywordOverview } from "@/components/dashboard/keyword-overview";
import { RankingChanges } from "@/components/dashboard/ranking-changes";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { OrganizationSwitcher } from "@/components/dashboard/organization-switcher";
import { Plus } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your SEO performance and activities
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <OrganizationSwitcher />
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>
      </div>

      <DashboardStats />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <KeywordOverview className="lg:col-span-2" />
        <RankingChanges />
      </div>

      <RecentActivity />
    </div>
  );
}