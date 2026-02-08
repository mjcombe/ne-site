import tradePlumber from "@/assets/trade-plumber.jpg";
import tradeRoofer from "@/assets/trade-roofer.jpg";
import tradeBuilder from "@/assets/trade-builder.jpg";
import { Wrench, Zap, Droplets, HardHat, PaintBucket, Hammer } from "lucide-react";

const trades = [
  { icon: Zap, name: "Electricians", description: "Domestic and commercial electrical contractors" },
  { icon: Droplets, name: "Plumbers", description: "Plumbing, heating and gas engineers" },
  { icon: HardHat, name: "Builders", description: "General builders and construction firms" },
  { icon: Wrench, name: "Roofers", description: "Roofing contractors and repair specialists" },
  { icon: PaintBucket, name: "Decorators", description: "Painters, decorators and plasterers" },
  { icon: Hammer, name: "Joiners", description: "Joiners, carpenters and cabinet makers" },
];

const WhoWeHelp = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              Who We Help
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for tradespeople, by people who understand trades
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We work exclusively with trade businesses. We know how your customers search, what makes them pick up the phone, and what a good lead looks like for your trade.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {trades.map((trade, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-accent/10 flex items-center justify-center shrink-0">
                    <trade.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{trade.name}</span>
                    <span className="block text-xs text-muted-foreground">{trade.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Images grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src={tradePlumber}
                alt="Professional plumber at work"
                className="w-full rounded-lg shadow-lg object-cover aspect-square"
                loading="lazy"
              />
              <div className="bg-accent rounded-lg p-5 text-accent-foreground">
                <span className="block text-3xl font-bold font-heading">100%</span>
                <span className="text-sm opacity-90">Trade Focused</span>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="gradient-navy rounded-lg p-5 text-primary-foreground">
                <span className="block text-3xl font-bold font-heading">Local</span>
                <span className="text-sm opacity-80">SEO Specialists</span>
              </div>
              <img
                src={tradeRoofer}
                alt="Professional roofer at work"
                className="w-full rounded-lg shadow-lg object-cover aspect-square"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
