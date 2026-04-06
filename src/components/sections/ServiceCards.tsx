import { Link } from "react-router-dom";
import { Globe, Search, MapPin, FileText, Shield, TrendingUp, ArrowRight, BarChart3, Sparkles } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design",
    description: "Beautiful, fast-loading websites built to convert. Whether you need a brochure site, e-commerce store, or a complete redesign, we create designs that drive enquiries.",
    href: "/services/websites-for-trades",
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Get found when local customers search for your services. We optimise your online presence so you rank higher on Google in your area.",
    href: "/services/local-seo",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Fully optimised Google Business Profile to dominate local search results and the map pack in your area.",
    href: "/services/google-business-profile",
  },
  {
    icon: FileText,
    title: "Service Area Pages",
    description: "Dedicated pages for every town and area you cover, so customers in each location can find you easily.",
    href: "/services/service-area-pages",
  },
  {
    icon: Shield,
    title: "Hosting & Care Plans",
    description: "Reliable hosting, security updates, backups, and ongoing maintenance so your website is always online and running at its best.",
    href: "/services/hosting-and-care",
  },
  {
    icon: TrendingUp,
    title: "Ongoing SEO",
    description: "Continuous SEO improvements, content updates, and performance tracking to keep your rankings climbing month after month.",
    href: "/services/ongoing-seo",
  },
  {
    icon: BarChart3,
    title: "SEO Services",
    description: "Full SEO services for businesses of all sizes. From keyword research to technical fixes, we get you ranking on Google.",
    href: "/services/seo",
  },
  {
    icon: Sparkles,
    title: "AI & Generative SEO",
    description: "Future-proof your visibility with AI-powered SEO. Get found in AI search results, voice assistants, and generative engines.",
    href: "/services/ai-seo",
  },
];

const ServiceCards = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            A snapshot of our services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From your first website to ongoing SEO, we handle it all so you can focus on running your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="group bg-card rounded-lg border border-border p-6 hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="w-12 h-12 rounded-lg bg-icon-bg flex items-center justify-center mb-4 group-hover:bg-icon-bg/80 transition-colors">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                Learn more <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
