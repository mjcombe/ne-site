import { Link } from "react-router-dom";
import { ArrowRight, Globe, Search, Zap } from "lucide-react";

const highlights = [
  {
    icon: Globe,
    title: "Website Solutions",
    description: "We work with local businesses to create beautiful websites. Easy to update and packed with functionality, our websites are built for performance and to generate enquiries.",
    href: "/services/websites-for-trades",
  },
  {
    icon: Search,
    title: "Search Solutions",
    description: "A well-structured SEO campaign is essential to any marketing plan. We help you move up the rankings on search engine results pages and get found by your customers.",
    href: "/services/local-seo",
  },
  {
    icon: Zap,
    title: "Lead Generation",
    description: "We help businesses generate quality leads through smart website optimisation and organic growth, ensuring your website attracts the right audience without relying on ads.",
    href: "/get-started",
  },
];

const WhoWeHelp = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto max-w-5xl">
        <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
          What We Do
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 max-w-lg">
          Built for businesses across the North East
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          We take the guesswork and stress out of website design and development by providing detailed quotations, clear deliverables, and seamless project management.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {highlights.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="group p-6 rounded-xl bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-icon-bg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>

        <Link
          to="/who-we-help"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
        >
          View all industries we work with <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default WhoWeHelp;
