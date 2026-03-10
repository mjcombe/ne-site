import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="gradient-navy">
      <div className="w-full">
        <div className="py-20 md:py-28 lg:py-36 text-center max-w-4xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
              ))}
            </div>
            <span className="text-sm font-bold text-primary-foreground">5.0</span>
            <span className="text-xs text-primary-foreground/60">Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Get more local enquiries for your business
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Professional web design and local SEO for businesses across North Tyneside, Teesside and beyond. More phone calls. More enquiries. More customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/get-started">
                Get More Enquiries
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:01916941463">
                <Phone className="w-5 h-5" />
                0191 694 1463
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;