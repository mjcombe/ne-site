import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.webp";

const Hero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="py-20 md:py-28 lg:py-36 max-w-4xl mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 mb-6 animate-fade-in">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">5.0</span>
            <span className="text-xs text-white/60">Based on 94 Google Reviews</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Smart website design and local SEO that works harder for your business
          </h1>

          <p className="text-lg md:text-xl text-white/75 leading-relaxed mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            We create websites that not only look stunning but also help you rank higher on Google, ensuring you attract more customers.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button size="xl" asChild className="bg-white text-foreground hover:bg-white/90 font-semibold">
              <Link to="/get-started">
                Book A Call
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
