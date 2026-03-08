import { Phone, FileText, TrendingUp, Star } from "lucide-react";

const stats = [
  {
    icon: Phone,
    value: "3x",
    label: "More phone calls",
    description: "Our clients typically see three times more inbound calls within the first three months.",
  },
  {
    icon: FileText,
    value: "150%",
    label: "More quote requests",
    description: "Better websites and local SEO mean more customers filling in your contact forms.",
  },
  {
    icon: TrendingUp,
    value: "Page 1",
    label: "Google rankings",
    description: "We get trade businesses ranking on page one of Google for their key local search terms.",
  },
  {
    icon: Star,
    value: "5★",
    label: "Client satisfaction",
    description: "Our trade clients rate us five stars because we deliver results, not excuses.",
  },
];

const testimonials = [
  {
    quote: "Since NE1 Web Digital built our new website and sorted our SEO, we've had to take on another electrician to handle the extra work. Best money we've ever spent.",
    name: "David Thompson",
    role: "Thompson Electrical, Newcastle",
  },
  {
    quote: "I was sceptical about SEO but the results speak for themselves. We went from barely any online enquiries to getting calls every single day.",
    name: "Mark Richardson",
    role: "Richardson Plumbing, Sunderland",
  },
  {
    quote: "NE1 Web Digital actually understand how trade businesses work. They built us a proper website that our customers trust, and it shows in the enquiries.",
    name: "Sarah Mitchell",
    role: "Mitchell Roofing, Durham",
  },
];

const Results = () => {
  return (
    <section className="section-padding gradient-navy text-primary-foreground">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Results
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real results for real trade businesses
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed">
            We don't deal in vanity metrics. Here's what actually matters — more calls, more quotes, more booked jobs.
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
