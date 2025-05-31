import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Activity = {
  id: string;
  user: {
    name: string;
    email: string;
    imageUrl?: string;
  };
  type: 'added_keyword' | 'site_audit' | 'rank_improved' | 'backlink_found' | 'content_gap';
  target: string;
  timestamp: string;
  details?: string;
};

// Sample data
const recentActivities: Activity[] = [
  {
    id: "1",
    user: {
      name: "John Doe",
      email: "john@example.com"
    },
    type: "added_keyword",
    target: "seo tools comparison",
    timestamp: "2 hours ago",
    details: "Added to Project: Main Website"
  },
  {
    id: "2",
    user: {
      name: "Sarah Lee",
      email: "sarah@example.com"
    },
    type: "site_audit",
    target: "example.com",
    timestamp: "Yesterday",
    details: "Found 14 issues, 5 critical"
  },
  {
    id: "3",
    user: {
      name: "Alex Wong",
      email: "alex@example.com"
    },
    type: "rank_improved",
    target: "keyword research guide",
    timestamp: "2 days ago",
    details: "Moved from position #8 to #3"
  },
  {
    id: "4",
    user: {
      name: "Maria Garcia",
      email: "maria@example.com"
    },
    type: "backlink_found",
    target: "techcrunch.com",
    timestamp: "3 days ago",
    details: "DA: 94, Anchor: \"SEO tools\""
  },
  {
    id: "5",
    user: {
      name: "John Doe",
      email: "john@example.com"
    },
    type: "content_gap",
    target: "10 new keyword opportunities",
    timestamp: "1 week ago",
    details: "Compared against 3 competitors"
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>
          Latest actions and events across your organization
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivities.map((activity) => (
            <div className="flex items-start gap-4\" key={activity.id}>
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.imageUrl} />
                <AvatarFallback>{getInitials(activity.user.name)}</AvatarFallback>
              </Avatar>
              
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>
                  <span className="text-muted-foreground"> {getActivityDescription(activity)}</span>
                </p>
                <p className="text-sm text-muted-foreground">
                  {activity.details}
                </p>
                <p className="text-xs text-muted-foreground">
                  {activity.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Helper to get user initials
function getInitials(name: string): string {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase()
    .substring(0, 2);
}

// Helper to get activity description based on type
function getActivityDescription(activity: Activity): string {
  switch (activity.type) {
    case 'added_keyword':
      return `added keyword "${activity.target}"`;
    case 'site_audit':
      return `ran a site audit on ${activity.target}`;
    case 'rank_improved':
      return `saw ranking improvement for "${activity.target}"`;
    case 'backlink_found':
      return `discovered a new backlink from ${activity.target}`;
    case 'content_gap':
      return `identified ${activity.target}`;
    default:
      return `performed an action on ${activity.target}`;
  }
}