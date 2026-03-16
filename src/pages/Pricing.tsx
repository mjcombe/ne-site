import { Link } from "react-router-dom";
import {
  ArrowRight, Check, Globe, TrendingUp, Phone, Shield, Zap,
  FileText, Camera, MessageSquare, BarChart3, Star, Layout as LayoutIcon,
  Pencil, Share2, BookOpen, Briefcase, Image, MousePointerClick,
  Mail, Award, Puzzle, Sparkles, Server, Lock, CloudUpload,
  Globe2, Settings, Search, MapPin, Users, Target, Wrench, BadgeCheck
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

const websiteFeatures = [
  { icon: Globe, label: "Fully custom website design and build" },
  { icon: FileText, label: "Unlimited pages (fair usage applies)" },
  { icon: Search, label: "SEO optimised structure ready for Google" },
  { icon: Pencil, label: "Professional copywriting tailored to your services" },
  { icon: Share2, label: "Social media integration" },
  { icon: BookOpen, label: "Blog section for future content and SEO growth" },
  { icon: Briefcase, label: "Case studies section to showcase your work" },
  { icon: Image, label: "Dynamic image gallery for projects and installations" },
  { icon: MousePointerClick, label: "Click to call functionality for mobile users" },
  { icon: Mail, label: "Dynamic enquiry and contact forms" },
  { icon: Star, label: "Google Reviews integration" },
  { icon: BarChart3, label: "Google Analytics setup and tracking" },
  { icon: MapPin, label: "Google Business Profile optimisation" },
  { icon: Award, label: "Industry accreditation badges and trust signals" },
  { icon: Puzzle, label: "Third party widget support including WhatsApp, TrueQuote, Calendly, Tradify, Jobber and ServiceM8" },
  { icon: Sparkles, label: "AI and Generative Engine Optimisation (GEO) to prepare your website for modern AI search" },
  { icon: Server, label: "Super fast hosting for performance and reliability" },
  { icon: Lock, label: "SSL security certificate" },
  { icon: CloudUpload, label: "Daily backups and ongoing security updates" },
  { icon: Globe2, label: "Domain name registration and management" },
  { icon: Settings, label: "Content management system so your website can grow with your business" },
];

const seoFeatures = [
  { icon: TrendingUp, label: "Ongoing search engine optimisation" },
  { icon: Pencil, label: "Regular content improvements and page updates" },
  { icon: MapPin, label: "Local SEO targeting your service areas" },
  { icon: Star, label: "Google Business Profile optimisation and updates" },
  { icon: BookOpen, label: "Blog content strategy to increase search visibility" },
  { icon: Target, label: "Competitor analysis and keyword expansion" },
  { icon: Wrench, label: "Technical SEO improvements" },
  { icon: BadgeCheck, label: "Authority and trust signals for stronger rankings" },
  { icon: Settings, label: "Unlimited website updates (fair usage applies)" },
];

const idealFor = [
  "Trades and local service businesses",
  "Companies wanting to generate more enquiries online",
  "Businesses that want a website that actually ranks on Google",
  "Companies that want ongoing support without hiring in-house staff",
];

const Pricing = () => {
  return (
    <Layout>
      <SEOHead
        title="Pricing | Websites from £99/month | NE1 Digital"
        description="Transparent pricing for websites and SEO. Business package from £99/month. Pro SEO from £395/month. No hidden fees."
        canonical="https://ne1webdesign.co.uk/pricing"
      />
      {/* Hero */}
      <section className="gradient-trades text-white py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto container-tight text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white/80 mb-4">
            Pricing
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Everything you need to get found online, win more work, and grow your business. No hidden fees, no surprises.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto container-tight text-center">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by businesses across the North East</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background dotted-bg relative">
        <div className="container mx-auto container-tight relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

            {/* Business Package */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[hsl(var(--icon-bg))] flex items-center justify-center">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Foundation
                  </span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Business Package
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  A complete, professionally designed website built to generate enquiries and position your business as the obvious choice in your local area. Fully search optimised from day one and designed to convert visitors into customers.
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-heading font-bold text-foreground">£997</span>
                  <span className="text-muted-foreground text-sm">website setup</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-3xl font-heading font-bold text-foreground">£99</span>
                  <span className="text-muted-foreground text-sm">per month</span>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Includes unlimited website updates and support (fair usage applies). Minimum term: 12 months.
                </p>
              </div>
              <div className="p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
                  What's included
                </h3>
                <ul className="flex flex-col gap-3">
                  {websiteFeatures.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="shrink-0 w-7 h-7 rounded-md bg-[hsl(var(--icon-bg))] flex items-center justify-center mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-snug">{label}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="cta" size="lg" asChild className="w-full mt-8">
                  <Link to="/get-started">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </div>

            {/* Pro SEO Package */}
            <div className="bg-card border-2 border-gold rounded-2xl overflow-hidden relative shadow-lg shadow-gold/10">
              <div className="absolute top-0 right-0 bg-gold text-foreground text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                Most Popular
              </div>
              <div className="p-8 border-b border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gold-light flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-gold-dark" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Growth
                  </span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-2">
                  Pro SEO Package
                </h2>
                <div className="rounded-lg bg-gold-light border border-gold/20 p-4 mb-4">
                  <p className="text-sm font-semibold text-foreground mb-1">
                    Website Build + Ongoing SEO — No Upfront Cost
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Your complete website is included in the monthly price. No separate setup fee — everything is rolled into one simple monthly payment.
                  </p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  The complete package. We build your website and then work on it every month — improving your Google rankings, adding content, and generating more local enquiries. Everything from the Business Package plus hands-on SEO every month.
                </p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl font-heading font-bold text-foreground">£395</span>
                  <span className="text-muted-foreground text-sm">per month</span>
                </div>
                <p className="text-sm font-semibold text-gold-dark">
                  £0 upfront — website build included
                </p>
                <p className="text-xs text-muted-foreground mt-3">
                  Includes full website build, hosting, support, and ongoing SEO. Minimum term: 12 months. Fair usage applies.
                </p>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    Everything in Business, plus ongoing SEO
                  </h3>
                </div>
                <ul className="flex flex-col gap-3">
                  {seoFeatures.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-start gap-3">
                      <div className="shrink-0 w-7 h-7 rounded-md bg-gold-light flex items-center justify-center mt-0.5">
                        <Icon className="w-3.5 h-3.5 text-gold-dark" />
                      </div>
                      <span className="text-sm text-muted-foreground leading-snug">{label}</span>
                    </li>
                  ))}
                </ul>
                <Button size="lg" asChild className="w-full mt-8 bg-gold hover:bg-gold-dark text-foreground font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  <Link to="/get-started">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8 text-foreground">
            Who This Is Ideal For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {idealFor.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-card rounded-xl p-4 border border-border text-left">
                <div className="shrink-0 w-8 h-8 rounded-full bg-[hsl(var(--icon-bg))] flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Book a free, no-obligation chat to find out which package is right for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="lg" asChild>
              <Link to="/get-started">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
