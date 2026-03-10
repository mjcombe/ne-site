import { useParams, Link, Navigate } from "react-router-dom";
import { MapPin, ArrowRight, Phone, CheckCircle2, Search, TrendingUp, Quote, Star } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";
import { reviews } from "@/data/reviews";
import SEOHead, { breadcrumbSchema, localBusinessSchema } from "@/components/SEOHead";

const Location = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = locations.find((l) => l.slug === slug);
  const locationIndex = locations.findIndex((l) => l.slug === slug);

  if (!location) return <Navigate to="/locations" replace />;

  // Pick a real review deterministically based on location index
  const realReviews = reviews.filter(r => r.text);
  const review = realReviews[locationIndex % realReviews.length];

  return (
    <Layout>
      <SEOHead
        title={location.metaTitle}
        description={location.metaDescription}
        canonical={`https://ne1webdesign.co.uk/locations/${location.slug}`}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ne1webdesign.co.uk/" },
            { name: "Locations", url: "https://ne1webdesign.co.uk/locations" },
            { name: location.name, url: `https://ne1webdesign.co.uk/locations/${location.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: `NE1 Digital – ${location.name}`,
            description: location.metaDescription,
            url: `https://ne1webdesign.co.uk/locations/${location.slug}`,
            telephone: "+441916941463",
            areaServed: {
              "@type": "City",
              name: location.name,
            },
            serviceType: [
              `Web Design for Tradespeople in ${location.name}`,
              `Local SEO in ${location.name}`,
              `Trade Websites ${location.name}`,
            ],
          },
        ]}
      />

      {/* Hero */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" />
              {location.name}, {location.county}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              {location.heroHeading}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-3xl mx-auto">
              {location.heroSubheading}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/get-started">
                  Get More Enquiries
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5" />
                  Book a Free Call
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            {location.introTitle}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            {location.introText.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Why Local SEO */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            {location.whyLocalSEOTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.whyLocalSEOPoints.map((point, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border">
                <div className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Terms */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                <Search className="w-4 h-4" />
                Search Terms We Target
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                The searches your {location.name} customers are making
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                These are real search terms people in {location.name} use every day. We optimise your website to rank for these — and hundreds more like them.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {location.searchTerms.map((term, i) => (
                <span
                  key={i}
                  className="inline-block px-4 py-2 rounded-md bg-secondary text-sm font-medium text-foreground border border-border"
                >
                  "{term}"
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="flex gap-1 justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
            ))}
          </div>
          <blockquote className="text-xl md:text-2xl font-heading font-semibold text-foreground leading-relaxed mb-6">
            "{review.text}"
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">{review.name}</p>
            {review.business && <p className="text-sm text-muted-foreground">{review.business}</p>}
          </div>
        </div>
      </section>

      {/* Area Coverage */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Areas we cover around {location.name}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {location.areaDescription}
              </p>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Nearby areas we also target</h3>
              <div className="grid grid-cols-2 gap-2">
                {location.nearbyAreas.map((area, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-md bg-secondary border border-border">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-sm font-medium text-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Links */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
            What we offer {location.name} tradespeople
          </h2>
          <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Everything your trade business needs to get found online and generate more local enquiries.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Websites for Trades", href: "/services/websites-for-trades", desc: "Professional websites that convert visitors into enquiries" },
              { label: "Local SEO", href: "/services/local-seo", desc: "Rank on Google for trade searches in your area" },
              { label: "Google Business Profile", href: "/services/google-business-profile", desc: "Optimise your listing for the local map pack" },
              { label: "Service Area Pages", href: "/services/service-area-pages", desc: "Target every town and village you cover" },
              { label: "Ongoing SEO Support", href: "/services/ongoing-seo", desc: "Monthly SEO to keep your rankings climbing" },
              { label: "AI & GEO", href: "/services/ai-seo", desc: "Prepare for AI-powered search results" },
            ].map((service, i) => (
              <Link
                key={i}
                to={service.href}
                className="p-5 rounded-lg bg-card border border-border hover:border-accent/50 transition-colors group"
              >
                <h3 className="font-heading font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                  {service.label}
                </h3>
                <p className="text-xs text-muted-foreground">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{location.ctaHeading}</h2>
          <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8">
            {location.ctaText}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-started">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Location;
