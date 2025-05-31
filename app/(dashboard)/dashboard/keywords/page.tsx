import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Plus, Download, Filter } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const keywordsList = [
  { 
    keyword: "seo tools", 
    volume: 8500, 
    difficulty: 82, 
    cpc: 4.25, 
    trafficPotential: 2800,
    position: 8,
    trend: "+2"
  },
  { 
    keyword: "keyword research", 
    volume: 12400, 
    difficulty: 76, 
    cpc: 3.18, 
    trafficPotential: 4200,
    position: 5,
    trend: "-1"
  },
  { 
    keyword: "backlink checker", 
    volume: 6200, 
    difficulty: 68, 
    cpc: 2.95, 
    trafficPotential: 2100,
    position: 3,
    trend: "+4"
  },
  { 
    keyword: "seo audit", 
    volume: 4100, 
    difficulty: 62, 
    cpc: 3.50, 
    trafficPotential: 1400,
    position: 4,
    trend: "0"
  },
  { 
    keyword: "rank tracker", 
    volume: 3800, 
    difficulty: 58, 
    cpc: 2.45, 
    trafficPotential: 1300,
    position: 2,
    trend: "+6"
  },
  { 
    keyword: "on page seo", 
    volume: 5600, 
    difficulty: 65, 
    cpc: 2.80, 
    trafficPotential: 1900,
    position: 9,
    trend: "-2"
  },
  { 
    keyword: "off page seo", 
    volume: 3200, 
    difficulty: 61, 
    cpc: 2.40, 
    trafficPotential: 1100,
    position: 7,
    trend: "+1"
  },
  { 
    keyword: "seo strategy 2025", 
    volume: 7800, 
    difficulty: 74, 
    cpc: 3.95, 
    trafficPotential: 2600,
    position: null,
    trend: null
  },
  { 
    keyword: "link building service", 
    volume: 4900, 
    difficulty: 79, 
    cpc: 5.10, 
    trafficPotential: 1650,
    position: null,
    trend: null
  },
  { 
    keyword: "content optimization", 
    volume: 3700, 
    difficulty: 60, 
    cpc: 2.15, 
    trafficPotential: 1250,
    position: 6,
    trend: "+3"
  },
];

export default function KeywordsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Keyword Explorer</h1>
          <p className="text-muted-foreground">
            Research keywords, analyze difficulty, and track rankings
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Keywords
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Keyword Research</CardTitle>
          <CardDescription>
            Find new keywords and analyze their performance potential
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for keywords or enter a URL..."
                className="pl-8"
              />
            </div>
            <Button variant="outline" className="md:w-auto">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="tracking">Tracking</TabsTrigger>
              <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
              <TabsTrigger value="competitors">Competitors</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[300px]">Keyword</TableHead>
                      <TableHead className="text-right">Volume</TableHead>
                      <TableHead className="text-right">Difficulty</TableHead>
                      <TableHead className="text-right">CPC ($)</TableHead>
                      <TableHead className="text-right">Traffic Potential</TableHead>
                      <TableHead className="text-right">Position</TableHead>
                      <TableHead className="text-right">Trend</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {keywordsList.map((keyword) => (
                      <TableRow key={keyword.keyword}>
                        <TableCell className="font-medium">
                          {keyword.keyword}
                        </TableCell>
                        <TableCell className="text-right">
                          {keyword.volume.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <div className="w-12 h-2 rounded-full bg-muted overflow-hidden">
                              <div 
                                className={`h-full ${getDifficultyColor(keyword.difficulty)}`}
                                style={{ width: `${keyword.difficulty}%` }}
                              ></div>
                            </div>
                            <span>{keyword.difficulty}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          {keyword.cpc.toFixed(2)}
                        </TableCell>
                        <TableCell className="text-right">
                          {keyword.trafficPotential.toLocaleString()}
                        </TableCell>
                        <TableCell className="text-right">
                          {keyword.position || "-"}
                        </TableCell>
                        <TableCell className="text-right">
                          {renderTrend(keyword.trend)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="tracking">
              <div className="rounded-md border p-8 text-center">
                <h3 className="text-lg font-medium mb-2">Track keyword performance</h3>
                <p className="text-muted-foreground mb-4">
                  Select keywords from the overview tab to start tracking their rankings over time
                </p>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Add Keywords to Track
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="suggestions">
              <div className="rounded-md border p-8 text-center">
                <h3 className="text-lg font-medium mb-2">AI-powered keyword suggestions</h3>
                <p className="text-muted-foreground mb-4">
                  Get intelligent keyword suggestions based on your content and competitors
                </p>
                <Button>
                  <Search className="h-4 w-4 mr-2" />
                  Generate Suggestions
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="competitors">
              <div className="rounded-md border p-8 text-center">
                <h3 className="text-lg font-medium mb-2">Competitor keyword analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Analyze competitor domains to discover their top-ranking keywords
                </p>
                <div className="flex justify-center">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Enter competitor domain..."
                      className="pl-8"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function getDifficultyColor(score: number): string {
  if (score >= 80) return "bg-red-500";
  if (score >= 60) return "bg-orange-500";
  if (score >= 40) return "bg-yellow-500";
  return "bg-green-500";
}

function renderTrend(trend: string | null) {
  if (!trend) return "-";
  
  const value = parseInt(trend);
  if (value > 0) {
    return <span className="text-green-500">+{value}</span>;
  } else if (value < 0) {
    return <span className="text-red-500">{value}</span>;
  } else {
    return <span className="text-muted-foreground">0</span>;
  }
}