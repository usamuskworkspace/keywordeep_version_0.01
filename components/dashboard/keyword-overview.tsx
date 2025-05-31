"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  TooltipProps,
} from "recharts";
import { useState } from "react";
import { cn } from "@/lib/utils";

const keywordData = [
  { date: "Jan", position: 12, traffic: 240, ctr: 1.2 },
  { date: "Feb", position: 8, traffic: 380, ctr: 1.8 },
  { date: "Mar", position: 10, traffic: 320, ctr: 1.4 },
  { date: "Apr", position: 6, traffic: 450, ctr: 2.2 },
  { date: "May", position: 5, traffic: 520, ctr: 2.4 },
  { date: "Jun", position: 4, traffic: 580, ctr: 2.8 },
  { date: "Jul", position: 3, traffic: 620, ctr: 3.2 },
];

const difficultyData = [
  { keyword: "seo tools", volume: 8500, difficulty: 82, position: 8 },
  { keyword: "keyword research", volume: 12400, difficulty: 76, position: 5 },
  { keyword: "backlink checker", volume: 6200, difficulty: 68, position: 3 },
  { keyword: "seo audit", volume: 4100, difficulty: 62, position: 4 },
  { keyword: "rank tracker", volume: 3800, difficulty: 58, position: 2 },
];

export function KeywordOverview({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState("rankings");
  
  return (
    <Card className={cn("col-span-2", className)}>
      <CardHeader>
        <CardTitle>Keyword Performance</CardTitle>
        <CardDescription>
          Overview of your website's keyword rankings and traffic
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList>
            <TabsTrigger value="rankings">Rankings</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="difficulty">Keyword Difficulty</TabsTrigger>
          </TabsList>
          
          <TabsContent value="rankings" className="space-y-4">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={keywordData}
                  margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="positionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    reversed={true} 
                    domain={[0, 'dataMax + 5']}
                    tickCount={6}
                    label={{ 
                      value: 'Position', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' },
                      dy: 50
                    }}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Date
                                </span>
                                <span className="font-bold text-xs">
                                  {label}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Position
                                </span>
                                <span className="font-bold text-xs">
                                  {payload[0].value}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="position"
                    stroke="hsl(var(--chart-1))"
                    strokeWidth={2}
                    dot={{
                      stroke: 'hsl(var(--chart-1))',
                      strokeWidth: 2,
                      r: 4,
                      fill: 'hsl(var(--background))'
                    }}
                    activeDot={{
                      r: 6,
                      fill: 'hsl(var(--chart-1))',
                      stroke: 'hsl(var(--background))'
                    }}
                    fillOpacity={1}
                    fill="url(#positionGradient)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="traffic" className="space-y-4">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={keywordData}
                  margin={{ top: 5, right: 10, left: 10, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                  <XAxis dataKey="date" stroke="hsl(var(--muted-foreground))" />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))" 
                    label={{ 
                      value: 'Visitors', 
                      angle: -90, 
                      position: 'insideLeft',
                      style: { textAnchor: 'middle', fill: 'hsl(var(--muted-foreground))' },
                      dy: 50
                    }}
                  />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Date
                                </span>
                                <span className="font-bold text-xs">
                                  {label}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Traffic
                                </span>
                                <span className="font-bold text-xs">
                                  {payload[0].value}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="traffic"
                    fill="hsl(var(--chart-2))"
                    radius={[4, 4, 0, 0]}
                    barSize={30}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="difficulty" className="space-y-4">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  layout="vertical"
                  data={difficultyData}
                  margin={{ top: 5, right: 30, left: 100, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" domain={[0, 100]} />
                  <YAxis 
                    dataKey="keyword" 
                    type="category" 
                    stroke="hsl(var(--muted-foreground))"
                    width={100}
                    tickLine={false}
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                  />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-1 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Keyword
                                </span>
                                <span className="font-bold text-xs">
                                  {label}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Difficulty
                                </span>
                                <span className="font-bold text-xs">
                                  {payload[0].value}/100
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Volume
                                </span>
                                <span className="font-bold text-xs">
                                  {(payload[1].payload as any).volume.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="difficulty"
                    fill="hsl(var(--chart-3))"
                    radius={[0, 4, 4, 0]}
                    barSize={18}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}