"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Sparkles, Loader2, Copy, RotateCcw } from "lucide-react";

export default function AIAssistantPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPrompt, setSelectedPrompt] = useState("content-brief");
  const [userInput, setUserInput] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");
  
  const handleGenerate = () => {
    if (!userInput.trim()) return;
    
    setIsGenerating(true);
    setGeneratedContent("");
    
    // Simulate API response delay
    setTimeout(() => {
      const fakeResponses: Record<string, string> = {
        "content-brief": `# Content Brief: "${userInput}"\n\n## Target Audience\n- SEO professionals and content marketers\n- Small to medium business owners\n- Digital marketing specialists\n\n## Primary Keywords\n- ${userInput}\n- best practices for ${userInput}\n- how to optimize ${userInput}\n\n## Secondary Keywords\n- ${userInput} strategies\n- ${userInput} examples\n- improve ${userInput} performance\n\n## Content Structure\n1. **Introduction**\n   - Define ${userInput} and its importance\n   - Current state of ${userInput} in 2025\n   - Why businesses should care about this topic\n\n2. **Key Components of ${userInput}**\n   - Component 1: Strategy development\n   - Component 2: Implementation guide\n   - Component 3: Measurement and optimization\n\n3. **Best Practices**\n   - Latest industry standards\n   - Case studies and examples\n   - Tools and resources\n\n4. **Common Mistakes to Avoid**\n   - Pitfalls and challenges\n   - Solutions and workarounds\n\n5. **Conclusion**\n   - Summary of key takeaways\n   - Next steps for the reader\n\n## Competitor Content Analysis\nBased on top-ranking content for "${userInput}"\n- Avg. word count: 1,850 words\n- Content format: How-to guide with practical examples\n- Media usage: Include 4-6 images, infographics, or charts\n- Most engage with real-world examples and case studies\n\n## SEO Recommendations\n- Include a table comparing different approaches to ${userInput}\n- Create a step-by-step process visualization\n- Add a FAQ section addressing common questions about ${userInput}\n- Include expert quotes if possible\n- Optimize for featured snippet opportunity`,
        
        "keyword-clusters": `# Keyword Clusters for "${userInput}"\n\n## Cluster 1: Fundamentals\n- ${userInput} definition\n- ${userInput} importance\n- why ${userInput} matters\n- ${userInput} statistics 2025\n- ${userInput} basics\n\n## Cluster 2: Strategy & Planning\n- ${userInput} strategy\n- ${userInput} planning\n- ${userInput} roadmap\n- ${userInput} framework\n- how to develop ${userInput} plan\n\n## Cluster 3: Tools & Resources\n- best ${userInput} tools\n- free ${userInput} resources\n- ${userInput} software\n- ${userInput} platforms\n- ${userInput} tools comparison\n\n## Cluster 4: Implementation & Techniques\n- ${userInput} implementation\n- ${userInput} techniques\n- ${userInput} methods\n- ${userInput} best practices\n- ${userInput} step by step\n\n## Cluster 5: Measurement & Optimization\n- measure ${userInput} success\n- ${userInput} KPIs\n- ${userInput} metrics\n- optimize ${userInput} performance\n- ${userInput} analytics\n\n## Cluster 6: Examples & Case Studies\n- ${userInput} examples\n- ${userInput} case studies\n- successful ${userInput} stories\n- ${userInput} templates\n- ${userInput} portfolio\n\n## Cluster 7: Trends & Future\n- ${userInput} trends 2025\n- future of ${userInput}\n- ${userInput} innovations\n- emerging ${userInput} techniques\n- ${userInput} predictions\n\n## Cluster 8: Problems & Solutions\n- ${userInput} challenges\n- ${userInput} problems\n- troubleshooting ${userInput}\n- fixing ${userInput} issues\n- common ${userInput} mistakes\n\n## Search Intent Analysis\n- Informational: 65%\n- Commercial: 25%\n- Transactional: 10%\n\nRecommendation: Focus content strategy primarily on informational content, with supporting commercial content to capture buying intent.`,
        
        "seo-optimization": `# SEO Optimization Report: "${userInput}"\n\n## Current Performance\nBased on analysis of your content targeting "${userInput}"\n\n- Current ranking: Position #8-12 (estimated)\n- Content quality: Moderate\n- Keyword optimization: Basic\n- Content length: Below competitors' average\n\n## Improvement Opportunities\n\n### Title Tag Recommendations\nCurrent: [Your current title]\nRecommended: "${userInput}: Complete Guide with Examples and Best Practices [Current Year]"\n\n### Meta Description\nRecommended format:\n"Discover expert strategies for ${userInput} with our comprehensive guide. Learn proven techniques, avoid common mistakes, and implement best practices."\n\n### Content Structure Improvements\n- Add a table of contents with jump links\n- Break content into more scannable sections with H2, H3 headings\n- Include numbered lists for processes and bullet points for features/benefits\n- Add a FAQ section targeting related queries\n\n### Content Gaps to Address\n1. Definition and importance of ${userInput}\n2. Step-by-step implementation guide\n3. Tools and resources section\n4. Expert insights or quotes\n5. Recent industry data and statistics\n6. Case studies or examples\n7. Common mistakes to avoid\n\n### Technical Recommendations\n- Improve page loading speed\n- Optimize images with descriptive alt text\n- Add schema markup for better SERP features\n- Ensure mobile-friendly design\n- Improve internal linking structure\n\n### Content Enrichment Ideas\n- Add custom graphics or infographics\n- Include video explanation\n- Create downloadable checklist or template\n- Add expert contributor insights\n\n## Competitor Analysis\nTop-ranking content for "${userInput}" typically includes:\n- Comprehensive guides (2000+ words)\n- Visual content (diagrams, charts, screenshots)\n- Expert opinions\n- Current year statistics\n- Practical examples and case studies`,
      };
      
      setGeneratedContent(fakeResponses[selectedPrompt] || "Content could not be generated. Please try again with a different input.");
      setIsGenerating(false);
    }, 2000);
  };
  
  const handleReset = () => {
    setUserInput("");
    setGeneratedContent("");
  };
  
  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    // Would add a toast notification in a real app
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">AI SEO Assistant</h1>
          <p className="text-muted-foreground">
            Generate SEO-optimized content and insights with our AI assistant
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Generate SEO Content</CardTitle>
            <CardDescription>
              Select a template and enter your topic to generate AI-powered content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="template">Template</Label>
                <Tabs 
                  value={selectedPrompt} 
                  onValueChange={setSelectedPrompt}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="content-brief">Content Brief</TabsTrigger>
                    <TabsTrigger value="keyword-clusters">Keyword Clusters</TabsTrigger>
                    <TabsTrigger value="seo-optimization">SEO Optimization</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="topic">Your Topic or Keyword</Label>
                <Textarea
                  id="topic"
                  placeholder={
                    selectedPrompt === "content-brief" 
                      ? "e.g., on-page SEO techniques" 
                      : selectedPrompt === "keyword-clusters"
                      ? "e.g., content marketing"
                      : "e.g., https://example.com/blog/article-to-optimize"
                  }
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button onClick={handleGenerate} disabled={isGenerating || !userInput.trim()}>
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate
                </>
              )}
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader className="flex flex-row items-center">
            <div className="flex-1">
              <CardTitle>Generated Output</CardTitle>
              <CardDescription>
                AI-generated content based on your inputs
              </CardDescription>
            </div>
            {generatedContent && (
              <Button variant="ghost" size="icon" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
                <span className="sr-only">Copy to clipboard</span>
              </Button>
            )}
          </CardHeader>
          <CardContent>
            <div className="min-h-[500px] rounded-md border bg-muted/40 p-4">
              {isGenerating ? (
                <div className="flex h-full items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    <p className="text-sm text-muted-foreground">Generating content...</p>
                  </div>
                </div>
              ) : generatedContent ? (
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  <pre className="whitespace-pre-wrap font-sans">{generatedContent}</pre>
                </div>
              ) : (
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Your AI-generated content will appear here
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>AI Assistant Features</CardTitle>
          <CardDescription>
            Explore more AI-powered tools to enhance your SEO strategy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
              <div className="mb-2 bg-primary/10 p-2 rounded-full w-fit">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Content Gap Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Identify content opportunities your competitors are ranking for
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
              <div className="mb-2 bg-primary/10 p-2 rounded-full w-fit">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">Meta Tag Generator</h3>
              <p className="text-sm text-muted-foreground">
                Create optimized title tags and meta descriptions for your pages
              </p>
            </div>
            
            <div className="rounded-lg border bg-card p-4 transition-all hover:shadow-md">
              <div className="mb-2 bg-primary/10 p-2 rounded-full w-fit">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-1">SERP Analysis</h3>
              <p className="text-sm text-muted-foreground">
                Analyze search results for your target keywords to optimize content
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}