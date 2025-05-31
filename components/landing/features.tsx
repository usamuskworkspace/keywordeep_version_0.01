import Image from "next/image";
import { 
  Search, 
  BarChart3, 
  Link as LinkIcon, 
  Users, 
  Sparkles, 
  FileText,
  Layers, 
  LineChart 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function LandingFeatures() {
  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful SEO tools for every team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover, analyze, and optimize your content with our comprehensive suite of SEO tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Search className="h-6 w-6 text-primary" />}
            title="Keyword Explorer"
            description="Uncover high-value keywords with detailed metrics on search volume, difficulty, CPC, and trends."
          />
          <FeatureCard
            icon={<LineChart className="h-6 w-6 text-primary" />}
            title="Rank Tracker"
            description="Monitor your SERP positions for target keywords with daily updates and historical performance tracking."
          />
          <FeatureCard
            icon={<LinkIcon className="h-6 w-6 text-primary" />}
            title="Backlink Analyzer"
            description="Examine your backlink profile, discover new opportunities, and analyze your competitors' links."
          />
          <FeatureCard
            icon={<Layers className="h-6 w-6 text-primary" />}
            title="Content Gap Analysis"
            description="Identify keywords your competitors rank for that you're missing, and find content opportunities."
          />
          <FeatureCard
            icon={<Sparkles className="h-6 w-6 text-primary" />}
            title="AI SEO Assistant"
            description="Generate content briefs, keyword clusters, and SEO recommendations powered by advanced AI."
          />
          <FeatureCard
            icon={<FileText className="h-6 w-6 text-primary" />}
            title="Site Audit"
            description="Scan your website for technical SEO issues, broken links, missing meta tags, and more."
          />
        </div>

        {/* Dashboard Preview */}
        <div className="mt-24 relative">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Your SEO command center
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Intuitive dashboards and reports to keep your finger on the pulse of your SEO performance
            </p>
          </div>
          
          <div className="relative rounded-xl border bg-background shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-14 bg-muted/80 backdrop-blur-sm border-b flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-background/90 rounded-full px-4 py-1 text-xs">
                  keywordeep.com/dashboard
                </div>
              </div>
            </div>
            <div className="pt-14 p-2">
              <img 
                src="https://images.pexels.com/photos/5412270/pexels-photo-5412270.jpeg" 
                alt="Keywordeep Dashboard Preview" 
                className="rounded-lg shadow-md w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode, 
  title: string, 
  description: string 
}) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="mb-2 bg-primary/10 p-3 rounded-full w-fit">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}