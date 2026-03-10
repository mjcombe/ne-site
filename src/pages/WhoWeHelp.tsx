import Layout from "@/components/layout/Layout";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import { tradeCategories } from "@/data/tradeCategories";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const WhoWeHelpPage = () => {
  return (
    <Layout>
      <SEOHead
        title="Industries We Work With | NE1 Digital"
        description="We build websites and local SEO for businesses of all kinds across North Tyneside, Teesside and the wider North East — from trades and beauty to hospitality and professional services."
        canonical="https://ne1webdesign.co.uk/who-we-help"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://ne1webdesign.co.uk/" },
          { name: "Who We Help", url: "https://ne1webdesign.co.uk/who-we-help" },
        ])}
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            Who We Help
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            We work with businesses across every industry
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            NE1 Digital helps businesses get found on Google. Whether you're a tradesperson, salon owner, restaurant, accountant or any local business — we build websites and SEO strategies that turn searches into customers.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-2">Industries We Work With</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            From tradespeople and beauty salons to restaurants and professional services — we help businesses across every sector get found online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tradeCategories.map((category) => {
              const trade = category.trades[0];
              return (
                <Link key={trade.href} to={trade.href} className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all group">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-icon-bg flex items-center justify-center">
                    <trade.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-1.5 group-hover:text-accent transition-colors">{trade.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{trade.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-2">Learn more <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why businesses choose NE1 Digital</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Generic web agencies don't understand your industry. We take the time to learn how your customers search, what makes them pick up the phone, and how to turn clicks into real business — no matter what sector you're in.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "We know the search terms your customers actually use",
                  "We understand what makes someone pick up the phone",
                  "We build websites designed for conversions, not awards",
                  "We track real results — calls, quote requests, booked jobs",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="cta" size="lg" asChild>
                <Link to="/get-started">Get Started <ArrowRight className="w-5 h-5" /></Link>
              </Button>
            </div>
            <div className="gradient-navy rounded-lg p-8 text-primary-foreground flex flex-col justify-center aspect-[4/3]">
              <span className="block text-4xl font-bold font-heading mb-2">100+</span>
              <span className="block text-lg font-heading mb-1">Websites Built</span>
              <span className="text-sm text-primary-foreground/70">Across the North East</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeHelpPage;
