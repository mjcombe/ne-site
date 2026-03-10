import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import ServiceCards from "@/components/sections/ServiceCards";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import BlogCarousel from "@/components/sections/BlogCarousel";
import SEOHead, { localBusinessSchema, organizationSchema, websiteSchema } from "@/components/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Web Design & Local SEO for Businesses | NE1 Digital"
        description="Professional web design and local SEO for businesses across North Tyneside, Teesside and beyond. More enquiries, more customers."
        canonical="https://ne1webdesign.co.uk/"
        jsonLd={[localBusinessSchema, organizationSchema, websiteSchema]}
      />
      <Hero />
      <Problems />
      <ServiceCards />
      <HowItWorks />
      <WhoWeHelp />
      <Results />
      <FAQ />
      <BlogCarousel />
      <FinalCTA />
    </Layout>
  );
};

export default Index;