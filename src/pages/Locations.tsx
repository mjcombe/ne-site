import { Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { locations } from "@/data/locations";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const Locations = () => {
  return (
    <Layout>
      <SEOHead
        title="Locations | Web Design Across the North East | NE1 Digital"
        description="We build websites and deliver SEO for businesses across the North East. North Tyneside, Teesside, Newcastle, Sunderland and beyond."
        canonical="https://ne1webdesign.co.uk/locations"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://ne1webdesign.co.uk/" },
          { name: "Locations", url: "https://ne1webdesign.co.uk/locations" },
        ])}
      />

      {/* Hero */}
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            Areas We Cover
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Web design and SEO across the North East
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            From Newcastle to Middlesbrough, Durham to Blyth — we help businesses across every corner of the North East get found online and win more local work.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>


      {/* Location Grid */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location) => (
              <Link
                key={location.slug}
                to={`/locations/${location.slug}`}
                className="group p-6 rounded-lg bg-card border border-border hover:border-accent/50 transition-all hover:shadow-md"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="font-heading font-bold text-lg text-foreground group-hover:text-accent transition-colors">
                      {location.name}
                    </h2>
                    <p className="text-xs text-muted-foreground">{location.county} · Pop. {location.population}</p>
                  </div>
                  <MapPin className="w-5 h-5 text-accent shrink-0 opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                  {location.heroSubheading}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Don't see your area?
          </h2>
          <p className="text-lg text-primary-foreground/75 leading-relaxed mb-8">
            We work with trade businesses across the UK. Our approach to local SEO works wherever you're based. Get in touch and we'll build a strategy for your area.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/get-started">
              Get Started
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
