import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TradePageProps {
  trade: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  problemsTitle: string;
  problems: string[];
  servicesTitle: string;
  services: { title: string; description: string }[];
  searchTermsTitle: string;
  searchTerms: string[];
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaDescription: string;
  icon: LucideIcon;
}

const TradePageLayout = ({
  trade,
  heroTitle,
  heroDescription,
  heroImage,
  problemsTitle,
  problems,
  servicesTitle,
  services,
  searchTermsTitle,
  searchTerms,
  benefitsTitle,
  benefits,
  faqTitle,
  faqs,
  ctaTitle,
  ctaDescription,
  icon: Icon,
}: TradePageProps) => {
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent uppercase tracking-wider mb-3">
                <Icon className="w-4 h-4" />
                {trade}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">{heroTitle}</h1>
              <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8">
                {heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/get-started">
                    Get Started <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href="tel:01911234567">
                    <Phone className="w-4 h-4" /> Call 0191 123 4567
                  </a>
                </Button>
              </div>
            </div>
            <img
              src={heroImage}
              alt={`Professional ${trade.toLowerCase()} at work`}
              className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            {problemsTitle}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            If any of these sound familiar, you're not alone. Most {trade.toLowerCase()} face the same challenges online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-lg bg-card border border-border">
                <span className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-bold mt-0.5">✕</span>
                <p className="text-sm text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            {servicesTitle}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Everything your {trade.toLowerCase().replace(/s$/, '')} business needs to get found online and win more local work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-accent/30 hover:shadow-md transition-all">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Terms */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            {searchTermsTitle}
          </h2>
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            These are the real searches your potential customers are typing into Google right now.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {searchTerms.map((term, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground font-medium">
                "{term}"
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            {benefitsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            {faqTitle}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group p-5 rounded-lg bg-card border border-border">
                <summary className="cursor-pointer font-heading font-semibold text-foreground list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-accent group-open:rotate-45 transition-transform text-xl font-bold">+</span>
                </summary>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-lg text-primary-foreground/75 mb-8">{ctaDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-started">Get Started Today <ArrowRight className="w-5 h-5" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link to="/contact">Ask a Question</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TradePageLayout;
