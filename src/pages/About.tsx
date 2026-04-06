import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import GoogleRatingBadge from "@/components/GoogleRatingBadge";
import founderImage from "@/assets/michael-james-founder.jpg";

import SEOHead, { breadcrumbSchema } from "@/components/SEOHead";

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About NE1 Digital | Web Design & SEO Specialists"
        description="With over 20 years of experience in web design and development, NE1 Digital helps businesses grow online. Based in North Tyneside and Teesside."
        canonical="https://ne1webdesign.co.uk/about"
        jsonLd={breadcrumbSchema([
          { name: "Home", url: "https://ne1webdesign.co.uk/" },
          { name: "About", url: "https://ne1webdesign.co.uk/about" },
        ])}
      />
      <section className="gradient-trades text-white section-padding">
        <div className="container mx-auto max-w-3xl text-center">
          <span className="inline-block text-sm font-semibold text-white/80 uppercase tracking-wider mb-3">
            About Us
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Trusted by clients to deliver award-winning website design
          </h1>
          <p className="text-lg md:text-xl text-white/75 leading-relaxed">
            With over twenty years of experience in website design and development, we have the expertise to create websites that not only look great but help businesses grow.
          </p>
          <GoogleRatingBadge />
        </div>
      </section>

      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2018 by Michael James, NE1 Digital has worked with businesses of all sizes, from start-ups to well known national brands, helping them build a strong online presence and achieve their digital goals.
                </p>
                <p>
                  We believe that every business is unique, and so is every website we create. Whether you're looking for a brand-new website, an SEO strategy to improve visibility, or advice on taking your business online, we take the time to understand your needs and offer the best solutions.
                </p>
                <p>
                  Every project begins with a discovery call, where we listen to your business goals, understand your challenges, and offer expert advice on the best approach for your new website. From there, we develop a tailored strategy that ensures your website is designed for success.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden aspect-[3/4] shadow-xl">
              <img
                src={founderImage}
                alt="Michael James, Founder of NE1 Digital"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">Why clients partner with us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "200+ Custom Websites", description: "We've launched over 200 custom websites since 2018, collaborating with businesses across various industries." },
              { title: "Client Focused", description: "Our clients are at the heart of everything we do, guiding our approach to ensure their needs and expectations are exceeded." },
              { title: "Bespoke Design", description: "We focus on tailored solutions, ensuring a unique, user-friendly, and future-proof digital presence that aligns with your brand." },
              { title: "North Tyneside Based", description: "Our office is in the heart of North Tyneside. We're always happy to meet and discuss your online options in person." },
              { title: "Competitive Pricing", description: "Our pricing structure ensures the best value for money. Cost-effective bespoke solutions without compromising on quality." },
              { title: "Consistent 5-Star Reviews", description: "We receive 5-star reviews from our clients. By carefully listening to your needs, we consistently deliver outstanding results." },
            ].map((value, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border">
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-light bg-[hsl(var(--background))]">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Take the next step
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Why not book a thirty-minute free consultation call to see how we can help your business online?
          </p>
          <Button variant="cta" size="lg" asChild>
            <Link to="/get-started">Book A Call <ArrowRight className="w-5 h-5" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
