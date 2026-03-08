import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-trades-premium.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-navy">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional tradesperson at work"
          className="w-full h-full object-cover opacity-20"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/90 to-navy/70" />
      </div>

      <div className="relative z-10 w-full">
        <div className="py-20 md:py-28 lg:py-36 text-center max-w-4xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-primary-foreground/80 font-medium">
              Specialist websites & SEO for trade businesses
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get more local enquiries for your trade business
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional websites and local SEO built specifically for electricians, plumbers, builders, and tradespeople across the North East. More phone calls. More quote requests. More booked jobs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-started">
                Get More Enquiries
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:07463687129">
                <Phone className="w-5 h-5" />
                Book a Free Call
              </a>
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-accent">100+</span>
              <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">Trade Websites</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-accent">5★</span>
              <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">Google Rating</span>
            </div>
            <div className="w-px h-10 bg-primary-foreground/20" />
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-accent">3x</span>
              <span className="text-xs text-primary-foreground/60 uppercase tracking-wide">More Enquiries</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
