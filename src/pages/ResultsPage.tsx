import Layout from "@/components/layout/Layout";
import ResultsSection from "@/components/sections/Results";
import FinalCTA from "@/components/sections/FinalCTA";
import SEOHead from "@/components/SEOHead";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";

const ResultsPage = () => {
  return (
    <Layout>
      <SEOHead
        title="Results | Websites That Generate Enquiries | NE1 Digital"
        description="Real results from real businesses. See how our websites and SEO generate more calls and enquiries."
        canonical="https://ne1webdesign.co.uk/results"
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            Results
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Results that matter to your business
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            We measure success by the things that matter to you — more phone calls, more quote requests, and more booked jobs.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            What our trade clients typically see
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { period: "Month 1-2", title: "Foundation", items: ["Website live and indexed", "Google Business Profile optimised", "Local citations built", "Initial keyword rankings established"] },
              { period: "Month 3-4", title: "Growth", items: ["Page 1 rankings for key terms", "Organic traffic increasing", "More enquiries coming in", "Review strategy in place"] },
              { period: "Month 5+", title: "Dominance", items: ["Multiple page 1 rankings", "Consistent weekly enquiries", "Strong local authority", "Competitors falling behind"] },
            ].map((phase, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border">
                <span className="inline-block text-xs font-semibold text-accent uppercase tracking-wider mb-2">{phase.period}</span>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <svg className="w-4 h-4 text-accent shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResultsSection />
      <FinalCTA />
    </Layout>
  );
};

export default ResultsPage;
