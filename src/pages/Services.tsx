import Layout from "@/components/layout/Layout";
import ServiceCards from "@/components/sections/ServiceCards";
import FinalCTA from "@/components/sections/FinalCTA";

const Services = () => {
  return (
    <Layout>
      <section className="gradient-navy text-primary-foreground section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Digital services built for trades
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/75 leading-relaxed">
            From your first website to ongoing SEO, we have everything your trade business needs to get found online and win more local work.
          </p>
        </div>
      </section>
      <ServiceCards />
      <FinalCTA />
    </Layout>
  );
};

export default Services;
