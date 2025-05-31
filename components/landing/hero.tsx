import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, LineChart, Search, TrendingUp } from "lucide-react";

export function LandingHero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center justify-center gap-x-2 rounded-full border bg-background px-4 py-1.5 text-sm font-medium mb-6">
            <span className="text-primary">Introducing Keywordeep</span>
            <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-xs text-primary">
              New
            </span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            SEO intelligence for <br />
            <span className="text-primary">data-driven teams</span>
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Discover keywords that drive traffic, track your rankings, and outperform competitors with AI-powered SEO insights.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" asChild>
              <Link href="/register">
                Get started free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#features">
                See features
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature highlight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
              <Search className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Keyword Research</h3>
            <p className="text-muted-foreground">Discover high-value keywords with search volume and difficulty metrics.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
              <LineChart className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Rank Tracking</h3>
            <p className="text-muted-foreground">Monitor your SERP positions and visualize ranking changes over time.</p>
          </div>
          
          <div className="bg-card p-6 rounded-lg border shadow-sm">
            <div className="mb-4 bg-primary/10 p-3 rounded-full w-fit">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">AI Content Assistant</h3>
            <p className="text-muted-foreground">Generate SEO-optimized content outlines and recommendations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}