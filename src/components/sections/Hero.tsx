import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-navy">
      <div className="w-full">
        <div className="py-20 md:py-28 lg:py-36 text-center max-w-4xl mx-auto px-4 md:px-6">
          <p className="text-sm text-primary-foreground/70 font-medium uppercase tracking-wider mb-6 animate-fade-in">
            Specialist websites & SEO for trade businesses
          </p>

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
