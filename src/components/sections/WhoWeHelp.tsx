import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { tradeCategories } from "@/data/tradeCategories";

const featuredTrades = tradeCategories[0].trades.slice(0, 8);

const WhoWeHelp = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
          Who We Help
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
          Built for tradespeople across the North East
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          We work with trade businesses across the North East. We know how your customers search, what makes them pick up the phone, and what a good lead looks like for your trade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {featuredTrades.map((trade, index) => (
            <Link
              key={index}
              to={trade.href}
              className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-icon-bg flex items-center justify-center shrink-0">
                <trade.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="min-w-0">
                <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors truncate">{trade.name}</span>
                <span className="block text-xs text-muted-foreground truncate">{trade.description}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/who-we-help"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          View all trades we work with <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default WhoWeHelp;
