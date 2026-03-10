import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Quote, ChevronDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { reviews } from "@/data/reviews";

const INITIAL_COUNT = 12;

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews.filter(r => r.text) : reviews.filter(r => r.text).slice(0, INITIAL_COUNT);
  const totalReviews = reviews.length;
  const filteredTotal = reviews.filter(r => r.text).length;

  return (
    <Layout>
      <SEOHead
        title="Customer Reviews | NE1 Digital"
        description="Read what our clients say about our web design and SEO services. 5.0 star rating from Google reviews."
        canonical="https://ne1webdesign.co.uk/reviews"
      />

      {/* Hero */}
      <section className="gradient-trades text-white py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto container-tight text-center">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-white/10 text-white/80 mb-4">
            Reviews
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white">
            What Our Clients Say
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-6">
            Don't just take our word for it. Here's what real businesses think about working with us.
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
              ))}
            </div>
            <span className="text-2xl font-heading font-bold">5.0</span>
            <span className="text-primary-foreground/60 text-sm">from {totalReviews} reviews</span>
          </div>
        </div>
      </section>

      {/* Google Badge */}
      <section className="py-6 bg-background border-b border-border">
        <div className="container mx-auto container-tight text-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-3 shadow-sm">
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="w-5 h-5"
              loading="lazy"
            />
            <span className="text-sm font-semibold text-foreground">Google Reviews</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">5.0</span>
            <span className="text-xs text-muted-foreground">({totalReviews})</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="section-padding bg-background">
        <div className="container mx-auto container-tight">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {displayedReviews.map((review, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow relative flex flex-col"
              >
                <Quote className="absolute top-4 right-4 w-6 h-6 text-muted/40" />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[hsl(38,92%,50%)] text-[hsl(38,92%,50%)]" />
                  ))}
                </div>
                <blockquote className="text-sm text-foreground leading-relaxed mb-4 flex-1">
                  "{review.text}"
                </blockquote>
                <div className="pt-3 border-t border-border">
                  <span className="block text-sm font-semibold text-foreground">{review.name}</span>
                  {review.business && (
                    <span className="block text-xs text-muted-foreground">{review.business}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {!showAll && filteredTotal > INITIAL_COUNT && (
            <div className="text-center mt-10">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(true)}
                className="gap-2"
              >
                Show All {filteredTotal} Reviews <ChevronDown className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy text-primary-foreground">
        <div className="container mx-auto container-tight text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
            Ready to Join Our Happy Clients?
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-6 max-w-xl mx-auto">
            Get a website and SEO strategy that actually brings in work. No long contracts, no jargon — just results.
          </p>
          <Button size="lg" asChild className="bg-white text-[#074054] hover:bg-white/90 font-normal">
            <Link to="/get-started">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
