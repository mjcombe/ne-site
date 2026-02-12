import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

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
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-4xl">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            {subtitle}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed max-w-3xl mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/get-started">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="tel:07463687129">Book a Free Call</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Who is this for?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {whoIsItFor.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <span className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                </span>
                <span className="text-sm text-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it helps */}
      <section className="section-padding bg-secondary">
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
      <section className="section-padding bg-background">
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
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Related services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {relatedServices.map((service, i) => (
              <Link
                key={i}
                to={service.href}
                className="group p-5 rounded-lg bg-card border border-border hover:border-accent/40 hover:shadow-md transition-all flex items-center justify-between"
              >
                <span className="text-sm font-medium text-foreground">{service.label}</span>
                <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
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
