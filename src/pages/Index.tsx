import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import ServiceCards from "@/components/sections/ServiceCards";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import SEOHead, { localBusinessSchema, organizationSchema, websiteSchema } from "@/components/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Websites & Local SEO for Trade Businesses | NE Trades"
        description="Professional websites and local SEO for electricians, plumbers, builders and tradespeople in the North East. More enquiries, more booked jobs."
        canonical="https://netrades.co.uk/"
        jsonLd={[localBusinessSchema, organizationSchema, websiteSchema]}
      />
      <Hero />
      <Problems />
      <ServiceCards />
      <HowItWorks />
      <WhoWeHelp />
      <Results />
      <FAQ />
      <FinalCTA />
    </Layout>
  );
};

export default Index;
