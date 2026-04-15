import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Globe, Search, MapPin, FileText, Shield, TrendingUp, BarChart3, Sparkles, LucideIcon, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  whoIsItFor: string[];
  howItHelps: string[];
  whatsIncluded: string[];
  expectedOutcomes: string[];
  relatedServices: { label: string; href: string }[];
}
const serviceIconMap: Record<string, LucideIcon> = {
  "/services/websites-for-trades": Globe,
  "/services/local-seo": Search,
  "/services/google-business-profile": MapPin,
  "/services/service-area-pages": FileText,
  "/services/hosting-and-care": Shield,
  "/services/ongoing-seo": TrendingUp,
  "/services/seo": BarChart3,
  "/services/ai-seo": Sparkles,
};

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  whoIsItFor,
  howItHelps,
  whatsIncluded,
  expectedOutcomes,
  relatedServices,
}: ServicePageLayoutProps) => {
  const location = useLocation();
  const slug = location.pathname.split("/").pop() || "";
  const pageTitle = `${subtitle} | NE1 Digital`;
  const metaDesc = description.slice(0, 155);
  const canonical = `https://ne1webdesign.co.uk${location.pathname}`;

  return (
    <Layout>
      <SEOHead
        title={pageTitle}
        description={metaDesc}
        canonical={canonical}
        jsonLd={[
          breadcrumbSchema([
            { name: "Home", url: "https://ne1webdesign.co.uk/" },
            { name: "Services", url: "https://ne1webdesign.co.uk/services" },
            { name: subtitle, url: canonical },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: subtitle,
            description: description,
            provider: { "@id": "https://ne1webdesign.co.uk/#business" },
            areaServed: { "@type": "AdministrativeArea", name: "North East England" },
          },
        ]}
      />
      {/* Hero */}
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-4xl">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-3xl mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/get-started">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link to="/contact">Book a Free Call</Link>
            </Button>
          </div>
          <GoogleRatingBadge />
        </div>
      </section>
      {/* Who it's for */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Who is this for?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whoIsItFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <span className="shrink-0 w-6 h-6 rounded-full bg-icon-bg flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">How it helps generate enquiries</h2>
          <div className="space-y-4">
            {howItHelps.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-lg bg-card border border-border">
                <span className="shrink-0 w-8 h-8 rounded-md gradient-navy flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">What's included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whatsIncluded.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <svg className="w-5 h-5 text-accent shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Snapshot */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-card border border-border rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-[hsl(var(--icon-bg))] flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Packages to suit your business</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Business websites from <span className="font-semibold text-foreground">£997</span> + <span className="font-semibold text-foreground">£99/month</span>. 
              Pro SEO packages from <span className="font-semibold text-foreground">£395/month</span> with website build included.
            </p>
            <Button variant="cta" size="lg" asChild>
              <Link to="/pricing">
                View Our Pricing <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Expected outcomes */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Expected outcomes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {expectedOutcomes.map((item, i) => (
              <div key={i} className="p-5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10">
                <p className="text-primary-foreground/90 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Related services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((service, i) => {
              const Icon = serviceIconMap[service.href];
              return (
                <Link
                  key={i}
                  to={service.href}
                  className="group p-5 rounded-lg bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all flex items-center gap-3"
                >
                  {Icon && (
                    <div className="w-9 h-9 rounded-md bg-icon-bg flex items-center justify-center shrink-0 group-hover:bg-icon-bg/8 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-accent" />
                    </div>
                  )}
                  <span className="text-sm font-medium text-foreground flex-1">{service.label}</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to get more enquiries?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Book a free call and let's talk about how we can help your trade business grow.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-started">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePageLayout;
