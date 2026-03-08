import { Link } from "react-router-dom";
import { tradeCategories } from "@/data/tradeCategories";

// Show a selection of trades across categories for the homepage
const featuredTrades = [
  ...tradeCategories[0].trades.slice(0, 4),
  ...tradeCategories[1].trades.slice(0, 1),
  ...tradeCategories[2].trades.slice(0, 1),
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
              Built for trades, beauty, and service businesses
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We work with local businesses across trades, beauty, and services. We know how your customers search, what makes them pick up the phone, and what a good lead looks like for your industry.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {featuredTrades.map((trade, index) => (
                <Link
                  key={index}
                  to={trade.href}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-md bg-icon-bg flex items-center justify-center shrink-0">
                    <trade.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-foreground group-hover:text-accent transition-colors">{trade.name}</span>
                    <span className="block text-xs text-muted-foreground">{trade.description}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to="/who-we-help"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent mt-6 hover:underline"
            >
              View all industries we work with →
            </Link>
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
                <span className="block text-3xl font-bold font-heading">28+</span>
                <span className="text-sm opacity-90">Industries Served</span>
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
