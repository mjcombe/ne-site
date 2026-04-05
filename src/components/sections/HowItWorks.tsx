import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Palette, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Free discovery call",
    description: "We have a quick chat about your business, your goals, and what kind of results you want. No jargon, no pressure.",
  },
  {
    number: "02",
    icon: Palette,
    title: "We build your website & SEO",
    description: "We create a professional website tailored to your business and set up your local SEO so you start getting found on Google.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "You get more enquiries",
    description: "Your phone starts ringing. More enquiries come in. You win more customers. We keep optimising to grow your results.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Three simple steps to more enquiries
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No complicated process. No tech speak. Just a straightforward path to more customers for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-border" />
              )}

              <div className="relative z-10 mb-5">
                <div className="w-24 h-24 rounded-2xl bg-[hsl(var(--navy))] mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 md:right-[calc(50%-4rem)] w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-heading font-bold text-sm shadow">
                  {step.number}
                </span>
              </div>

              <h3 className="font-heading font-semibold text-xl text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="cta" size="lg" asChild>
            <Link to="/get-started">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
