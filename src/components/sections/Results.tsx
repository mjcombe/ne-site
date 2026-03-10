import { Phone, FileText, TrendingUp, Star } from "lucide-react";
import { reviews } from "@/data/reviews";

const stats = [
  {
    icon: Phone,
    value: "3x",
    label: "More phone calls",
    description: "Our clients typically see three times more inbound calls within the first three months.",
  },
  {
    icon: FileText,
    value: "200+",
    label: "Custom websites",
    description: "We've launched over 200 custom websites since opening the doors in 2018.",
  },
  {
    icon: TrendingUp,
    value: "Page 1",
    label: "Google rankings",
    description: "We get businesses ranking on page one of Google for their key local search terms.",
  },
  {
    icon: Star,
    value: "5★",
    label: "94 Google Reviews",
    description: "Consistent 5-star reviews from clients across all industries. Results, not excuses.",
  },
];

// Pick 3 real reviews deterministically (indices 0, 15, 30 for variety)
const pickedIndices = [0, 15, 30];
const realReviews = reviews.filter(r => r.text);
const testimonials = pickedIndices.map(i => {
  const r = realReviews[i % realReviews.length];
  return { quote: r.text, name: r.name, role: r.business || "Google Review" };
});

const Results = () => {
  return (
    <section className="section-padding gradient-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Getting you more leads for your business
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            With over 20 years of experience, we turn your ideas into responsive, functional websites that attract and convert more leads.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg overflow-hidden border border-border shadow-md"
            >
              <div className="p-5 text-center">
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <span className="block text-3xl md:text-4xl font-bold font-heading text-accent mb-1">
                  {stat.value}
                </span>
                <span className="block text-sm font-semibold mb-1">{stat.label}</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card text-card-foreground rounded-lg p-6 shadow-md border border-border"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
                ))}
              </div>
              <blockquote className="text-sm text-muted-foreground leading-relaxed mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <span className="block text-sm font-semibold text-foreground">{testimonial.name}</span>
                <span className="block text-xs text-muted-foreground">{testimonial.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
