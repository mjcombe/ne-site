import Layout from "@/components/layout/Layout";
import HowItWorksSection from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const HowItWorksPage = () => {
  return (
    <Layout>
      <SEOHead
        title="How It Works | Your Website in 3 Weeks | NE1 Digital"
        description="A simple, no-nonsense process to get your website live and ranking on Google. Discovery, design, build, launch."
        canonical="https://ne1webdesign.co.uk/how-it-works"
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            How It Works
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            A simple process, designed around your business
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            No complicated process. No tech speak. Just a straightforward approach that gets your business found by more local customers.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      <HowItWorksSection />

      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">What to expect along the way</h2>
          <div className="space-y-6">
            {[
              { title: "Week 1: Discovery and planning", desc: "We learn about your trade, your customers, and your goals. We audit your current online presence and create a clear plan." },
              { title: "Week 2: Design and content", desc: "We design your website and write all the copy. You review and approve before we build — simple." },
              { title: "Week 3: Build and optimise", desc: "We build your website, set up your SEO, and optimise your Google Business Profile. Everything is tested and ready to go." },
              { title: "Launch day", desc: "Your new website goes live. We set up tracking so you can see results from day one." },
              { title: "Ongoing", desc: "We monitor performance, make improvements, and keep your rankings climbing. Regular reports show you exactly what's happening." },
            ].map((step, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-lg bg-card border border-border">
                <span className="shrink-0 w-8 h-8 rounded-md gradient-navy flex items-center justify-center text-primary-foreground font-heading font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default HowItWorksPage;
