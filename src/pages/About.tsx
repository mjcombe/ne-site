import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import michaelJames from "@/assets/michaeljamesjpg";

const About = () => {
  return (
    <Layout>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            About
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Built by people who understand trades
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            NE1 Web Digital exists to help trade businesses get more work through professional websites and local SEO that actually delivers.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  NE1 Web Digital was founded with a simple observation: most web design agencies don't understand the trades industry. They build generic websites, use marketing jargon, and have no idea how a local customer actually finds and chooses a tradesperson.
                </p>
                <p>
                  We decided to change that. Based in the North East, we work exclusively with trade businesses — electricians, plumbers, builders, roofers, decorators, and every trade in between. We know how your customers search, what makes them pick up the phone, and what a genuinely useful lead looks like.
                </p>
                <p>
                  Our approach is simple: build a professional website, set up strong local SEO, and deliver measurable results. No jargon, no fluff, no vanity metrics. Just more phone calls, more quote requests, and more booked jobs.
                </p>
              </div>
            </div>
            <img src={michaelJames} alt="Michael James, founder of NE1 Digital" className="rounded-lg shadow-lg w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What we believe in</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Results over aesthetics", description: "A website should generate enquiries, not win design awards. Everything we build is designed to convert." },
              { title: "Straight talking", description: "No jargon, no upselling, no complicated reports. We tell you what's working, what's not, and what we're doing about it." },
              { title: "Trade specialists", description: "We only work with trade businesses. That focus means we're better at it than any generalist agency." },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to work with a team that gets trades?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Book a free call and find out how we can help your trade business grow.
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/get-started">Get Started <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
