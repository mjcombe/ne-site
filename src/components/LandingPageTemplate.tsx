import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, TrendingUp, Globe, Zap, Shield } from "lucide-react";
import { reviews } from "@/data/reviews";
import SEOHead from "@/components/SEOHead";
import logoImg from "@/assets/logo.png";

export interface LandingPageConfig {
  slug: string;
  heroGradient: string;
  ctaGradient: string;
  headerBg: string;
  heroHeading: string;
  heroDescription: string;
  seoTitle: string;
  seoDescription: string;
  problemsHeading: string;
  problems: string[];
  solutionHeading: string;
  solutionDescription: string;
  ctaHeading: string;
  ctaDescription: string;
}

const featuredReviews = reviews.filter(r => r.text).slice(0, 6);

const benefits = [
  { icon: Globe, title: "Custom Website", desc: "Professionally designed, mobile-first website built to convert visitors into paying customers." },
  { icon: TrendingUp, title: "Local SEO", desc: "Rank on page one of Google for the searches your customers are actually making." },
  { icon: Zap, title: "Fast Results", desc: "Most clients see a significant increase in enquiries within the first 3 months." },
  { icon: Shield, title: "No Risk", desc: "No long contracts, no hidden fees. Cancel anytime after 12 months." },
];

const LandingPageTemplate = ({ config }: { config: LandingPageConfig }) => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={config.seoTitle}
        description={config.seoDescription}
        canonical={`https://netrades.co.uk/go/${config.slug}`}
      />

      {/* Minimal Header */}
      <header className="bg-white py-4 px-4 shadow-sm">
        <div className="container mx-auto max-w-5xl flex items-center justify-between">
          <Link to="/">
            <img src={logoImg} alt="NE Trades" className="h-8" />
          </Link>
          <div className="flex items-center gap-4">
            <a
              href="tel:07463687129"
              className="hidden sm:inline-flex items-center gap-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" /> 07463 687129
            </a>
            <Button size="sm" variant="cta" asChild>
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={`${config.heroGradient} text-primary-foreground py-16 md:py-24 px-4`}>
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
              ))}
            </div>
            <span className="text-sm font-medium text-primary-foreground/70">Rated 5.0 from 96 Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
            {config.heroHeading}
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl mx-auto">
            {config.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button size="xl" asChild className="bg-white text-[#074054] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <Link to="/get-started">
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" asChild className="bg-white text-[#074054] hover:bg-white/90 font-normal shadow-lg">
              <a href="tel:07463687129">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-primary-foreground">100+</span>
              <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">Websites Built</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-primary-foreground">5★</span>
              <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">Google Rating</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-primary-foreground">3x</span>
              <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">More Enquiries</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {config.problemsHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {config.problems.map((problem, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-card border border-border">
                <span className="shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-bold mt-0.5">✕</span>
                <p className="text-sm text-foreground">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 md:py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {config.solutionHeading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {config.solutionDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border">
                <div className="shrink-0 w-12 h-12 rounded-lg bg-[hsl(var(--icon-bg))] flex items-center justify-center">
                  <b.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 md:py-20 px-4 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" loading="lazy" />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
                ))}
              </div>
              <span className="text-sm font-bold text-foreground">5.0</span>
              <span className="text-xs text-muted-foreground">(96 reviews)</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Don't take our word for it
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredReviews.map((review, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground leading-relaxed mb-3">
                  "{review.text}"
                </blockquote>
                <span className="text-sm font-semibold text-foreground">{review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-16 md:py-20 px-4 bg-secondary">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">
            Simple, affordable pricing
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            No massive upfront costs. Everything you need for one monthly payment.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Website</span>
              <div className="mt-2 mb-1">
                <span className="text-4xl font-heading font-bold text-foreground">£99</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <p className="text-xs text-muted-foreground">£997 setup • 12 month min</p>
            </div>
            <div className="bg-card border-2 border-gold rounded-xl p-6 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-foreground text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Website + SEO</span>
              <div className="mt-2 mb-1">
                <span className="text-4xl font-heading font-bold text-foreground">£395</span>
                <span className="text-muted-foreground text-sm">/mo</span>
              </div>
              <p className="text-xs font-medium text-gold-dark">£0 upfront • website included</p>
            </div>
          </div>
          <div className="mt-6">
            <Link to="/pricing" className="text-sm text-accent underline hover:text-accent/80">
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={`${config.ctaGradient} text-primary-foreground py-16 md:py-24 px-4`}>
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            {config.ctaHeading}
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            {config.ctaDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="xl" asChild className="bg-white text-[#074054] hover:bg-white/90 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
              <Link to="/get-started">
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button size="xl" asChild className="bg-white text-[#074054] hover:bg-white/90 font-normal shadow-lg">
              <a href="tel:07463687129">
                <Phone className="w-5 h-5" /> 07463 687129
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className={`${config.headerBg} text-primary-foreground/60 py-6 px-4`}>
        <div className="container mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <span>© {new Date().getFullYear()} NE1 Digital. All rights reserved.</span>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-primary-foreground transition-colors">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-primary-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageTemplate;
