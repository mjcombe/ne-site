import Layout from "@/components/layout/Layout";
import { Wrench, Zap, Droplets, HardHat, PaintBucket, Hammer, Home, Thermometer, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import tradeBuilder from "@/assets/trade-builder.jpg";

const trades = [
  { icon: Zap, name: "Electricians", href: "/trades/electricians", description: "Domestic rewires, new builds, commercial installations, emergency callouts — we help electricians rank for the searches that generate real work." },
  { icon: Droplets, name: "Plumbers", href: "/trades/plumbers", description: "Boiler installs, bathroom fits, emergency plumbing — we build websites and SEO strategies that bring plumbers consistent local enquiries." },
  { icon: HardHat, name: "Builders", href: "/trades/builders", description: "Extensions, renovations, new builds, groundworks — we help builders showcase their work and attract high-value projects." },
  { icon: Wrench, name: "Roofers", href: "/trades/roofers", description: "Roof repairs, flat roofing, new roofs, guttering — we make sure roofing businesses appear when homeowners need them most." },
  { icon: PaintBucket, name: "Decorators", href: "/trades/decorators", description: "Interior painting, exterior decorating, wallpapering, plastering — we help decorators build a strong local reputation online." },
  { icon: Hammer, name: "Joiners & Carpenters", href: "/trades/joiners", description: "Kitchens, staircases, bespoke joinery — we build online presences that help joiners attract quality work from local customers." },
  { icon: Home, name: "Landscapers", href: "/trades/landscapers", description: "Garden design, driveways, fencing, patios — we help landscapers get found by homeowners searching for outdoor improvements." },
  { icon: Thermometer, name: "Heating Engineers", href: "/trades/heating-engineers", description: "Boiler servicing, central heating, underfloor heating — we position heating businesses to capture high-intent local searches." },
];

const WhoWeHelpPage = () => {
  return (
    <Layout>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Who We Help
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            We only work with trade businesses
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            NE1 Web Digital is built specifically for tradespeople. We understand how your customers search, what they look for, and how to turn that into booked work for your business.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {trades.map((trade, i) => (
              <Link key={i} to={trade.href} className="flex gap-4 p-6 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all group">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-icon-bg flex items-center justify-center">
                  <trade.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg text-foreground mb-1.5 group-hover:text-accent transition-colors">{trade.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{trade.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-2">Learn more <ArrowRight className="w-4 h-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why trade businesses choose NE1 Web Digital
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Generic web agencies don't understand the trades industry. They build pretty websites that don't generate leads because they don't know how local customers actually search for and choose tradespeople.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "We know the search terms your customers actually use",
                  "We understand what makes someone pick up the phone to a tradesperson",
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
            <img src={tradeBuilder} alt="Professional builder at work" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeHelpPage;
