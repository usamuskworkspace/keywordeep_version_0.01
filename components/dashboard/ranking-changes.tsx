"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronUp, ChevronDown, Minus, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type RankChange = {
  keyword: string;
  position: number;
  change: number;
  url: string;
  volume: number;
};

// Sample data - in a real app, this would come from an API
const rankingChanges: RankChange[] = [
  {
    keyword: "seo keyword tool",
    position: 4,
    change: 12,
    url: "/blog/keyword-tools",
    volume: 1200
  },
  {
    keyword: "best backlink checker",
    position: 2,
    change: 3,
    url: "/features/backlinks",
    volume: 2900
  },
  {
    keyword: "how to improve seo",
    position: 7,
    change: -2,
    url: "/guides/improve-seo",
    volume: 8400
  },
  {
    keyword: "free rank tracker",
    position: 5,
    change: 0,
    url: "/features/rank-tracking",
    volume: 3700
  },
  {
    keyword: "keyword difficulty",
    position: 3,
    change: 4,
    url: "/blog/keyword-difficulty",
    volume: 2100
  }
];

export function RankingChanges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranking Changes</CardTitle>
        <CardDescription>
          Your top keyword position changes in the last 7 days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {rankingChanges.map((item) => (
            <div key={item.keyword} className="flex items-center gap-4">
              <div className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
                item.change > 0 ? "bg-green-500/20 text-green-600" :
                item.change < 0 ? "bg-red-500/20 text-red-600" :
                "bg-gray-200/50 text-gray-500"
              )}>
                {item.change > 0 ? (
                  <ChevronUp className="h-4 w-4" />
                ) : item.change < 0 ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <Minus className="h-4 w-4" />
                )}
              </div>
              
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">{item.keyword}</p>
                <div className="flex items-center text-xs text-muted-foreground">
                  <span>Pos. {item.position}</span>
                  <span className="mx-1">•</span>
                  <span>{formatNumber(item.volume)} searches/mo</span>
                </div>
              </div>
              
              <div className={cn(
                "text-sm font-medium tabular-nums",
                item.change > 0 ? "text-green-600" :
                item.change < 0 ? "text-red-600" :
                "text-muted-foreground"
              )}>
                {item.change > 0 ? `+${item.change}` : item.change}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4 pb-0">
        <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
          <a href="/dashboard/rank-tracker">
            <ExternalLink className="mr-2 h-4 w-4" />
            View all rankings
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

// Utility function to format numbers with comma separator and k/m for thousands/millions
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'm';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num.toString();
}

function cn(...classes: (string | undefined | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}