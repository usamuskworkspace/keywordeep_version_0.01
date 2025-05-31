"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function LandingPricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Pricing plans for teams of all sizes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. Start with our free tier and upgrade as you grow.
          </p>
          
          <div className="mt-8 flex items-center justify-center space-x-4">
            <Label htmlFor="billing-toggle" className={isAnnual ? "text-muted-foreground" : "font-medium"}>Monthly</Label>
            <Switch 
              id="billing-toggle" 
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
            />
            <Label htmlFor="billing-toggle" className={!isAnnual ? "text-muted-foreground" : "font-medium"}>
              Annually <span className="text-sm text-primary">Save 20%</span>
            </Label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard
            title="Starter"
            description="Perfect for individuals and small projects"
            price={isAnnual ? "Free" : "Free"}
            features={[
              "Up to 100 keyword searches/month",
              "Basic rank tracking (10 keywords)",
              "Limited backlink data",
              "1 project",
              "1 user"
            ]}
            limitations={[
              "No AI assistant",
              "No content gap analysis",
              "No site auditing",
              "Limited historical data (30 days)"
            ]}
            buttonText="Get started free"
            buttonVariant="outline"
          />
          
          <PricingCard
            title="Pro"
            description="For growing businesses and serious marketers"
            price={isAnnual ? "$49" : "$59"}
            period={isAnnual ? "/month, billed annually" : "/month"}
            features={[
              "Up to 1,000 keyword searches/month",
              "Advanced rank tracking (100 keywords)",
              "Full backlink data",
              "5 projects",
              "3 team members",
              "AI SEO assistant (limited)",
              "Content gap analysis",
              "Basic site auditing (100 pages)"
            ]}
            limitations={[
              "Limited historical data (90 days)"
            ]}
            buttonText="Start 14-day trial"
            buttonVariant="default"
            isPopular={true}
          />
          
          <PricingCard
            title="Agency"
            description="For agencies and enterprise teams"
            price={isAnnual ? "$149" : "$179"}
            period={isAnnual ? "/month, billed annually" : "/month"}
            features={[
              "Unlimited keyword searches",
              "Unlimited rank tracking",
              "Complete backlink analysis",
              "Unlimited projects",
              "10+ team members",
              "Full AI SEO assistant",
              "Advanced content gap analysis",
              "Complete site auditing",
              "White-label reports",
              "Priority support",
              "API access"
            ]}
            buttonText="Contact sales"
            buttonVariant="default"
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  description, 
  price, 
  period, 
  features, 
  limitations,
  buttonText, 
  buttonVariant,
  isPopular
}: { 
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  limitations?: string[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  isPopular?: boolean;
}) {
  return (
    <div className={`relative rounded-lg border ${isPopular ? 'border-primary shadow-lg' : ''} bg-card overflow-hidden`}>
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground text-xs font-medium py-1 px-3 rounded-bl-lg">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-1">{description}</p>
        
        <div className="mt-4 mb-6">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-muted-foreground ml-2">{period}</span>}
        </div>
        
        <Button variant={buttonVariant} className="w-full mb-6">
          {buttonText}
        </Button>
        
        <div>
          <p className="font-medium mb-2">Features included:</p>
          <ul className="space-y-2">
            {features.map((feature) => (
              <li key={feature} className="flex items-start">
                <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          
          {limitations && (
            <>
              <p className="font-medium mb-2 mt-4">Limitations:</p>
              <ul className="space-y-2">
                {limitations.map((limitation) => (
                  <li key={limitation} className="flex items-start">
                    <X className="h-5 w-5 text-red-500 mr-2 shrink-0" />
                    <span className="text-sm text-muted-foreground">{limitation}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}