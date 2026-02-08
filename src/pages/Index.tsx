import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import Problems from "@/components/sections/Problems";
import ServiceCards from "@/components/sections/ServiceCards";
import HowItWorks from "@/components/sections/HowItWorks";
import WhoWeHelp from "@/components/sections/WhoWeHelp";
import Results from "@/components/sections/Results";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

const Index = () => {
  return (
    <Layout>
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
