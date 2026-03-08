import ServicePageLayout from "@/components/ServicePageLayout";

const AISEO = () => (
  <ServicePageLayout
    title="AI-powered SEO that keeps you ahead of the competition"
    subtitle="AI & Generative SEO"
    description="The future of search is changing. AI-driven search results, voice assistants, and generative engines are reshaping how customers find tradespeople. We make sure your business is optimised for both traditional and AI-powered search."
    whoIsItFor={[
      "Trade businesses that want to future-proof their online presence",
      "Tradespeople who want to appear in AI-generated search answers",
      "Businesses looking to get ahead of competitors who haven't adapted yet",
      "Any trade that wants to maximise visibility across all search platforms",
    ]}
    howItHelps={[
      "AI search engines like Google AI Overviews and ChatGPT pull answers from well-structured, authoritative content. We create content that gets cited in these results.",
      "We optimise your website with structured data, schema markup, and conversational content that AI systems can easily understand and recommend.",
      "Generative SEO content strategies produce high-quality, relevant pages at scale — targeting long-tail keywords and local variations that traditional SEO misses.",
      "Voice search optimisation ensures your business is found when customers ask Siri, Alexa, or Google Assistant for a local tradesperson.",
    ]}
    whatsIncluded={[
      "AI search landscape analysis",
      "Schema markup and structured data",
      "Conversational content creation",
      "AI Overview optimisation",
      "Voice search optimisation",
      "Long-tail keyword targeting at scale",
      "Generative content strategy",
      "Monthly AI visibility reporting",
    ]}
    expectedOutcomes={[
      "Your business cited in AI-generated search results and answer boxes.",
      "Increased visibility across Google AI Overviews, ChatGPT, and voice assistants.",
      "More long-tail traffic from conversational and question-based searches.",
      "A future-proof digital presence that adapts as search technology evolves.",
    ]}
    relatedServices={[
      { label: "SEO for Trades", href: "/services/seo" },
      { label: "Ongoing SEO Support", href: "/services/ongoing-seo" },
      { label: "Local SEO", href: "/services/local-seo" },
    ]}
  />
);

export default AISEO;
