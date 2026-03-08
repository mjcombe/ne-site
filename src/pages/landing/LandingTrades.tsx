import LandingPageTemplate from "@/components/LandingPageTemplate";

const LandingTrades = () => (
  <LandingPageTemplate
    config={{
      slug: "trades",
      heroGradient: "gradient-trades",
      ctaGradient: "gradient-trades",
      headerBg: "bg-[hsl(215,60%,14%)]",
      seoTitle: "Websites & SEO for Tradespeople | Electricians, Plumbers, Builders",
      seoDescription: "Professional websites and local SEO for electricians, plumbers, builders, roofers and tradespeople across the North East.",
      heroHeading: "Stop losing jobs to competitors with a better Google ranking",
      heroDescription: "We build websites and run local SEO specifically for electricians, plumbers, builders, roofers and tradespeople across the North East.",
      problemsHeading: "Sound familiar?",
      problems: [
        "Your phone's gone quiet and you're relying on word of mouth",
        "You're paying for leads on Checkatrade or MyBuilder that get shared with 5 others",
        "Your website looks outdated or doesn't show up on Google",
        "Competitors with worse work are getting more enquiries than you",
        "You've tried SEO companies before and got burned",
        "You know you need to be online but don't know where to start",
      ],
      solutionHeading: "Everything you need to dominate Google locally",
      solutionDescription: "We don't just build websites — we build lead generation machines for trade businesses.",
      ctaHeading: "Ready to fill your diary with trade work?",
      ctaDescription: "Book a free, no-obligation call. We'll look at your current online presence and show you exactly how we'd get you more enquiries.",
    }}
  />
);

export default LandingTrades;
