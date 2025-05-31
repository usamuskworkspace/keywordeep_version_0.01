import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Search, TrendingUp, Layers, ExternalLink } from "lucide-react";

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatsCard 
        title="Tracked Keywords"
        value="128"
        description="32 improved rankings" 
        trend={{ value: "+12.5%", positive: true }}
        icon={Search}
      />
      <StatsCard 
        title="Organic Traffic"
        value="24.8K"
        description="Users this month" 
        trend={{ value: "+18.2%", positive: true }}
        icon={TrendingUp}
      />
      <StatsCard 
        title="Backlinks"
        value="1,483"
        description="94 new in last 30 days" 
        trend={{ value: "+6.4%", positive: true }}
        icon={ExternalLink}
      />
      <StatsCard 
        title="Content Gaps"
        value="36"
        description="High opportunity keywords" 
        trend={{ value: "-5.1%", positive: false }}
        icon={Layers}
      />
    </div>
  );
}

function StatsCard({ 
  title, 
  value, 
  description, 
  trend, 
  icon: Icon
}: { 
  title: string;
  value: string;
  description: string;
  trend: {
    value: string;
    positive: boolean;
  };
  icon: React.ElementType;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center space-x-2">
          <p className="text-xs text-muted-foreground">{description}</p>
          <div 
            className={`flex items-center text-xs ${
              trend.positive ? "text-green-500" : "text-red-500"
            }`}
          >
            {trend.positive ? (
              <ArrowUpRight className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDownRight className="h-3 w-3 mr-1" />
            )}
            <span>{trend.value}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}