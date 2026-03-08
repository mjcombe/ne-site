import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Quote } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const reviews = [
  {
    name: "David Thompson",
    business: "Thompson Electrical, Newcastle",
    rating: 5,
    date: "2 months ago",
    text: "Since NE1 Web Digital built our new website and sorted our SEO, we've had to take on another electrician to handle the extra work. Best money we've ever spent.",
  },
  {
    name: "Mark Richardson",
    business: "Richardson Plumbing, Sunderland",
    rating: 5,
    date: "3 months ago",
    text: "I was sceptical about SEO but the results speak for themselves. We went from barely any online enquiries to getting calls every single day.",
  },
  {
    name: "Sarah Mitchell",
    business: "Mitchell Roofing, Durham",
    rating: 5,
    date: "1 month ago",
    text: "NE1 Web Digital actually understand how trade businesses work. They built us a proper website that our customers trust, and it shows in the enquiries.",
  },
  {
    name: "James Pearson",
    business: "Pearson Joinery, Gateshead",
    rating: 5,
    date: "4 months ago",
    text: "We were relying on word of mouth for years. Now we've got a professional website and we're showing up on Google for all the right searches. Couldn't recommend them enough.",
  },
  {
    name: "Lisa Carter",
    business: "Carter Landscaping, Northumberland",
    rating: 5,
    date: "2 months ago",
    text: "Brilliant service from start to finish. They took the time to understand our business and built a website that actually brings in work. The SEO has been a game changer.",
  },
  {
    name: "Paul Henderson",
    business: "Henderson Heating, North Shields",
    rating: 5,
    date: "5 months ago",
    text: "Our old website was embarrassing. NE1 Web Digital built us something we're genuinely proud of and the phone hasn't stopped ringing since. Worth every penny.",
  },
];

const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);

const Reviews = () => {
  return (
    <Layout>
      <SEOHead
        title="Customer Reviews | NE Trades"
        description="Read what our trade business clients say about our websites and SEO services. 5-star reviews from electricians, plumbers, builders and more across the North East."
        canonical="https://netrades.co.uk/reviews"
      />

      {/* Hero */}
      <section className="gradient-navy text-primary-foreground py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto container-tight text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary-foreground/10 text-primary-foreground/80 mb-4">
            Reviews
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4">
            What Our Clients Say
          </h1>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-6">
            Don't just take our word for it. Here's what trade businesses across the North East think about working with us.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
              ))}
            </div>
            <span className="text-2xl font-heading font-bold">{averageRating}</span>
            <span className="text-primary-foreground/60 text-sm">from {reviews.length} reviews</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-muted/60" />
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground leading-relaxed mb-4">
                  "{review.text}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="block text-sm font-semibold text-foreground">{review.name}</span>
                    <span className="block text-xs text-muted-foreground">{review.business}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Review Badge */}
      <section className="py-10 bg-secondary">
        <div className="container mx-auto container-tight text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 shadow-sm">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-6 h-6"
              loading="lazy"
            />
            <div className="text-left">
              <span className="block text-sm font-semibold text-foreground">Google Reviews</span>
              <div className="flex items-center gap-1">
                <span className="text-sm font-bold text-foreground">{averageRating}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({reviews.length} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3 text-foreground">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get a website and SEO strategy that actually brings in work. No long contracts, no jargon — just results.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/get-started">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
